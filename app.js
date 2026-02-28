// Luxury Escape — Index (Cruceros + Países) — robusto
function money(n){ return "$" + Number(n || 0).toLocaleString("en-US"); }

function getImageUrl(p){
  const file = (p && p.imageFile && String(p.imageFile).trim() !== "")
    ? String(p.imageFile).trim()
    : `${p.id}.jpg`;
  return "images/" + file;
}

function setHeroTitle(){
  const titleEl = document.getElementById("heroTitle");
  if(!titleEl) return;
  const fav = getFav();
  const travelers = Number(state.travelers || 2);
  // Only change title when a favorite exists
  if(fav){
    titleEl.textContent = fav;
    titleEl.classList.add("hero-title-fav");
  }else{
    titleEl.textContent = "Luxury Escape";
    titleEl.classList.remove("hero-title-fav");
  }
}

function setHeroBackground(country){
  const hero = document.getElementById("hero");
  const video = document.getElementById("heroVideo");
  if(!hero) return;

  const fav = getFav();

  // If a favorite is selected, the HERO should reflect it (country or cruise)
  if(fav){
    // Favorite might be a country name (e.g., "Grecia") or a cruise name (e.g., "MSC World America")
    const pickFav =
      (PLACES.find(p=>p.country==="Crucero" && p.name===fav) ||
       PLACES.find(p=>p.country===fav && p.country!=="Crucero") ||
       null);

    if(pickFav){
      hero.style.setProperty('--hero-bg', `url('${getImageUrl(pickFav)}')`);
      hero.classList.add("hero-has-image");
      if(video){
        try{ video.pause(); }catch(e){}
        video.style.display = "none";
      }
      return;
    }
  }

  // Default: if no country filter (Todos), show video
  if(!country || country === "all"){
    hero.classList.remove("hero-has-image");
    hero.style.removeProperty("--hero-bg");
    hero.style.backgroundImage = "";
    if(video){
      video.style.display = "";
      try{ video.play(); }catch(e){}
    }
    return;
  }

  // Otherwise: show selected country/cruise representative image
  const pick = (country === "Crucero")
    ? (PLACES.find(p=>p.country==="Crucero") || null)
    : (PLACES.find(p=>p.country===country && p.country!=="Crucero") || null);

  if(pick){
    hero.style.setProperty('--hero-bg', `url('${getImageUrl(pick)}')`);
    hero.classList.add("hero-has-image");
    if(video){
      try{ video.pause(); }catch(e){}
      video.style.display = "none";
    }
  }else{
    hero.classList.remove("hero-has-image");
    hero.style.removeProperty("--hero-bg");
    hero.style.backgroundImage = "";
    if(video){
      video.style.display = "";
      try{ video.play(); }catch(e){}
    }
  }
}



function getFav(){ return localStorage.getItem("favSelection") || ""; }
function setFav(v){ localStorage.setItem("favSelection", v); }
function clearFav(){ localStorage.removeItem("favSelection"); }

const state = { search:"", country:"all", sort:"fav", travelers: 2 };

let __exploreInited = false;

// ---------- Native Explore Chart (no external libs) ----------
let __chartState = { rows: [], travelers: 2, hit: [] };

function renderExploreChart(rows, travelers){
  const canvas = document.getElementById("exploreChart");
  if(!canvas) return;
  const ctx = canvas.getContext("2d");
  if(!ctx) return;

  // Handle HiDPI
  const cssW = canvas.clientWidth || 1;
  const cssH = canvas.clientHeight || 260;
  const dpr = window.devicePixelRatio || 1;
  canvas.width = Math.floor(cssW * dpr);
  canvas.height = Math.floor(cssH * dpr);
  ctx.setTransform(dpr,0,0,dpr,0,0);

  __chartState.rows = rows || [];
  __chartState.travelers = travelers || 2;

  // Layout
  const pad = {l: 48, r: 70, t: 18, b: 36};
  const w = cssW, h = cssH;
  const plotW = w - pad.l - pad.r;
  const plotH = h - pad.t - pad.b;

  // Colors (match hero)
  const gold = "rgba(214,176,76,0.85)";
  const goldFill = "rgba(214,176,76,0.55)";
  const white = "rgba(255,255,255,0.88)";
  const muted = "rgba(255,255,255,0.55)";
  const grid = "rgba(255,255,255,0.08)";
  const bg = "rgba(11,11,16,0.35)";

  // Background
  ctx.clearRect(0,0,w,h);
  ctx.fillStyle = bg;
  roundRect(ctx, 0, 0, w, h, 18, true, false);

  const n = __chartState.rows.length;
  if(!n){
    ctx.fillStyle = muted;
    ctx.font = "14px system-ui, -apple-system, Segoe UI, Roboto";
    ctx.fillText("No hay datos para mostrar.", pad.l, pad.t + 20);
    __chartState.hit = [];
    return;
  }

  // Data
  const maxDest = Math.max(...rows.map(r=>r.count||0), 1);
  const maxUsd = Math.max(...rows.map(r=>Math.max(r.min||0, r.avg||0)), 1);

  // Grid lines (Dest axis)
  ctx.strokeStyle = grid;
  ctx.lineWidth = 1;
  for(let i=0;i<=maxDest;i++){
    const y = pad.t + plotH - (i/maxDest)*plotH;
    ctx.beginPath();
    ctx.moveTo(pad.l, y);
    ctx.lineTo(pad.l+plotW, y);
    ctx.stroke();
    ctx.fillStyle = muted;
    ctx.font = "12px system-ui, -apple-system, Segoe UI, Roboto";
    ctx.fillText(String(i), 16, y+4);
  }

  // Right axis ticks (USD) - 4 ticks
  for(let k=0;k<=4;k++){
    const v = (k/4)*maxUsd;
    const y = pad.t + plotH - (v/maxUsd)*plotH;
    ctx.fillStyle = muted;
    ctx.font = "12px system-ui, -apple-system, Segoe UI, Roboto";
    ctx.fillText("$"+Math.round(v).toLocaleString("en-US"), pad.l+plotW+10, y+4);
  }

  // Bars and line points
  const gap = Math.max(2, Math.floor(plotW/(n*5)));
  const barW = Math.max(6, Math.min(18, Math.floor((plotW - gap*(n-1))/n)));
  const step = barW + gap;

  const fav = getFav();
  __chartState.hit = [];

  // helper scales
  const xAt = (i)=> pad.l + i*step + barW/2;
  const yDest = (d)=> pad.t + plotH - (d/maxDest)*plotH;
  const yUsd = (u)=> pad.t + plotH - (u/maxUsd)*plotH;

  // Bars
  for(let i=0;i<n;i++){
    const r = rows[i];
    const x0 = pad.l + i*step;
    const y0 = yDest(r.count||0);
    const bh = pad.t + plotH - y0;
    ctx.fillStyle = (fav && r.country===fav) ? gold : goldFill;
    roundRect(ctx, x0, y0, barW, bh, 8, true, false);

    __chartState.hit.push({x:x0, y:pad.t, w:barW, h:plotH, row:r, index:i});
  }

  // Lines (min and avg)
  drawLine(rows.map((r,i)=>({x:xAt(i), y:yUsd(r.min||0)})), white, 2.2, true);
  drawLine(rows.map((r,i)=>({x:xAt(i), y:yUsd(r.avg||0)})), gold, 2.0, false, [6,4]);

  // Labels title
  ctx.fillStyle = "rgba(255,255,255,0.9)";
  ctx.font = "600 13px system-ui, -apple-system, Segoe UI, Roboto";
  ctx.fillText("Destinos (barras)  •  Precio desde (línea clara)  •  Precio promedio (línea dorada)", pad.l, 14);

  // X labels (sparse)
  ctx.fillStyle = muted;
  ctx.font = "12px system-ui, -apple-system, Segoe UI, Roboto";
  const maxLabels = 10;
  const every = Math.ceil(n/maxLabels);
  for(let i=0;i<n;i+=every){
    const label = rows[i].country;
    const x = pad.l + i*step;
    const y = pad.t + plotH + 22;
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(-Math.PI/6);
    ctx.fillText(label, 0, 0);
    ctx.restore();
  }
}

function roundRect(ctx,x,y,w,h,r,fill,stroke){
  const rr = Math.min(r, w/2, h/2);
  ctx.beginPath();
  ctx.moveTo(x+rr,y);
  ctx.arcTo(x+w,y,x+w,y+h,rr);
  ctx.arcTo(x+w,y+h,x,y+h,rr);
  ctx.arcTo(x,y+h,x,y,rr);
  ctx.arcTo(x,y,x+w,y,rr);
  ctx.closePath();
  if(fill) ctx.fill();
  if(stroke) ctx.stroke();
}

function drawLine(points, color, width, withPoints, dash){
  const canvas = document.getElementById("exploreChart");
  const ctx = canvas.getContext("2d");
  ctx.save();
  ctx.strokeStyle = color;
  ctx.lineWidth = width;
  if(dash) ctx.setLineDash(dash);
  ctx.beginPath();
  points.forEach((p,i)=>{ if(i===0) ctx.moveTo(p.x,p.y); else ctx.lineTo(p.x,p.y); });
  ctx.stroke();
  ctx.setLineDash([]);
  if(withPoints){
    ctx.fillStyle = color;
    points.forEach(p=>{ ctx.beginPath(); ctx.arc(p.x,p.y,3,0,Math.PI*2); ctx.fill(); });
  }
  ctx.restore();
}

function __chartHitTest(evt){
  const canvas = document.getElementById("exploreChart");
  const rect = canvas.getBoundingClientRect();
  const x = evt.clientX - rect.left;
  const y = evt.clientY - rect.top;
  return __chartState.hit.find(h => x>=h.x && x<=h.x+h.w && y>=h.y && y<=h.y+h.h) || null;
}

function __chartTooltip(evt, hit){
  let tip = document.getElementById("chartTooltip");
  if(!tip){
    tip = document.createElement("div");
    tip.id = "chartTooltip";
    tip.style.position = "fixed";
    tip.style.zIndex = "9999";
    tip.style.pointerEvents = "none";
    tip.style.background = "rgba(11,11,16,0.95)";
    tip.style.border = "1px solid rgba(214,176,76,0.55)";
    tip.style.borderRadius = "12px";
    tip.style.padding = "10px 12px";
    tip.style.color = "rgba(255,255,255,0.9)";
    tip.style.font = "12px system-ui, -apple-system, Segoe UI, Roboto";
    tip.style.boxShadow = "0 14px 35px rgba(0,0,0,.35)";
    document.body.appendChild(tip);
  }
  if(!hit){
    tip.style.display = "none";
    return;
  }
  const r = hit.row;
  const t = __chartState.travelers || 2;
  tip.innerHTML = `<div style="font-weight:700;margin-bottom:6px">${r.country}</div>
    <div>✨ Destinos: <b>${r.count}</b></div>
    <div>💸 Desde: <b>$${Number(r.min).toLocaleString("en-US")}</b> (x${t})</div>
    <div>📈 Prom: <b>$${Number(r.avg).toLocaleString("en-US")}</b> (x${t})</div>
    <div style="opacity:.7;margin-top:6px">Click para abrir</div>`;
  tip.style.left = (evt.clientX + 14) + "px";
  tip.style.top = (evt.clientY + 14) + "px";
  tip.style.display = "block";
}

function initExploreChartEvents(){
  const canvas = document.getElementById("exploreChart");
  if(!canvas) return;
  if(canvas.__bound) return;
  canvas.__bound = true;

  canvas.addEventListener("mousemove", (e)=>{
    const hit = __chartHitTest(e);
    canvas.style.cursor = hit ? "pointer" : "default";
    __chartTooltip(e, hit);
  });
  canvas.addEventListener("mouseleave", ()=>{
    const tip = document.getElementById("chartTooltip");
    if(tip) tip.style.display = "none";
  });
  canvas.addEventListener("click", (e)=>{
    const hit = __chartHitTest(e);
    if(!hit) return;
    window.location.href = "destino.html?country=" + encodeURIComponent(hit.row.country);
  });

  window.addEventListener("resize", ()=>{
    if(__chartState.rows && __chartState.rows.length){
      renderExploreChart(__chartState.rows, __chartState.travelers);
    }
  });
}

function initExplore(){
  if(__exploreInited) return;
  const searchEl = document.getElementById("exploreSearch");
  const countryEl = document.getElementById("exploreCountry");
  const sortEl = document.getElementById("exploreSort");
  const travelersEl = document.getElementById("exploreTravelers");
  const clearBtn = document.getElementById("exploreClear");

  initExploreChartEvents();
  if(!searchEl || !countryEl || !sortEl || !travelersEl) return;

  function syncAndRender(){
    state.search = (searchEl.value || "").trim();
    const c = countryEl.value || "Todos";
    state.country = (c === "Todos") ? "all" : c;

    const s = sortEl.value || "fav";
// map explore sort values to internal state.sort
if(s === "fav") state.sort = "fav";
else if(s === "az") state.sort = "az";
else if(s === "za") state.sort = "za";
else if(s === "minAsc") state.sort = "priceAsc";
else if(s === "minDesc") state.sort = "priceDesc";
else if(s === "avgAsc") state.sort = "avgAsc";
else if(s === "avgDesc") state.sort = "avgDesc";
else if(s === "destAsc") state.sort = "countAsc";
else if(s === "destDesc") state.sort = "countDesc";
else state.sort = "fav";

    state.travelers = Number(travelersEl.value || 2);

    // hide cruises when filtering/searching a country (as requested earlier)
    state.hideCruises = !!(state.search || state.country !== "all");
    renderAll();
  }

  searchEl.addEventListener("input", syncAndRender);
  countryEl.addEventListener("change", syncAndRender);
  sortEl.addEventListener("change", syncAndRender);
  travelersEl.addEventListener("change", syncAndRender);

  if(clearBtn){
    clearBtn.addEventListener("click", ()=>{
      searchEl.value = "";
      countryEl.value = "Todos";
      sortEl.value = "fav";
      travelersEl.value = "2";
      syncAndRender();
    });
  }

  __exploreInited = true;
}

let __map = null;
let __markers = null;
let __chart = null;

// -------- MUSIC (PRO) --------
function initMusic(){
  const music = document.getElementById("bgMusic");
  const btn = document.getElementById("musicBtn");
  if(!music || !btn) return;

  const TARGET_VOL = 0.6;
  const FADE_STEP = 0.05;
  const FADE_MS = 60;
  let fadeTimer = null;

  function stopFade(){
    if(fadeTimer){ clearInterval(fadeTimer); fadeTimer = null; }
  }
  function fadeTo(target, onDone){
    stopFade();
    fadeTimer = setInterval(()=>{
      const v = Math.round(music.volume*100)/100;
      if(Math.abs(v - target) <= FADE_STEP){
        music.volume = target;
        stopFade();
        if(onDone) onDone();
        return;
      }
      music.volume = v + (v < target ? FADE_STEP : -FADE_STEP);
    }, FADE_MS);
  }
  function setBtnPlaying(isPlaying){
    btn.textContent = isPlaying ? "🔊" : "🔇";
    btn.classList.toggle("playing", isPlaying);
  }

  const saved = localStorage.getItem("musicState");
  const wantOn = saved === "on";

  music.volume = 0.0;
  setBtnPlaying(false);

  let unlocked = false;

  async function tryUnlockAndPlay(){
    try{
      await music.play();
      unlocked = true;
      return true;
    }catch(e){
      return false;
    }
  }

  async function playWithFade(){
    stopFade();
    music.volume = 0.0;
    const ok = await tryUnlockAndPlay();
    if(!ok) return false;
    fadeTo(TARGET_VOL);
    setBtnPlaying(true);
    localStorage.setItem("musicState","on");
    return true;
  }

  function pauseWithFade(){
    stopFade();
    fadeTo(0.0, ()=>{
      music.pause();
      setBtnPlaying(false);
      localStorage.setItem("musicState","off");
    });
  }

  btn.addEventListener("click", async ()=>{
    if(music.paused){
      const ok = await playWithFade();
      if(!ok) alert("Tu navegador bloqueó el audio. Haz click otra vez.");
    }else{
      pauseWithFade();
    }
  });

  const unlockOnce = async ()=>{
    if(unlocked) return;
    const ok = await tryUnlockAndPlay();
    if(ok){
      if(wantOn){
        music.volume = 0.0;
        fadeTo(TARGET_VOL);
        setBtnPlaying(true);
      }else{
        music.pause();
        music.currentTime = 0;
        setBtnPlaying(false);
      }
    }
    window.removeEventListener("pointerdown", unlockOnce);
    window.removeEventListener("touchstart", unlockOnce);
    window.removeEventListener("keydown", unlockOnce);
  };
  window.addEventListener("pointerdown", unlockOnce, { once:true });
  window.addEventListener("touchstart", unlockOnce, { once:true });
  window.addEventListener("keydown", unlockOnce, { once:true });

  if(wantOn) setBtnPlaying(true);
}

// -------- DATA --------
function getPlaces(){
  try{ return PLACES; }catch(_){ return null; }
}

function buildCruises(places){
  return (places || [])
    .filter(p => p.country === "Crucero")
    .map(p => ({
      id: p.id,
      name: p.name,
      image: getImageUrl(p),
      priceFromUSD: p.priceFromUSD || 0,
      coords: p.coords || null
    }));
}

function buildCountries(places){
  const by = {};
  (places || []).forEach(p=>{
    if(p.country === "Crucero") return;
    (by[p.country] ||= []).push(p);
  });

  return Object.keys(by).map(country=>{
    const arr = by[country];
    const rep = arr.find(x=>String(x.id).endsWith("-escape")) || arr[0];
    return {
      country,
      flag: rep.flag || "🌍",
      image: getImageUrl(rep),
      coords: rep.coords || (arr.find(x=>x.coords)?.coords || null),
      count: arr.length,
      // Pricing info (estimated "desde")
      minPriceFromUSD: Math.min(...arr.map(x=>Number(x.priceFromUSD||0)).filter(n=>n>0)),
      avgPriceFromUSD: (arr.reduce((sum,x)=>sum+Number(x.priceFromUSD||0),0) / Math.max(arr.length,1)),
      priceFromUSD: Number(rep.priceFromUSD || 0)
    };
  });
}

// -------- FILTER/SORT --------
function applyCountryFilters(items){
  const s = (state.search || "").trim().toLowerCase();
  const c = state.country || "all";
  return items.filter(it=>{
    const okSearch = !s || it.country.toLowerCase().includes(s);
    const okCountry = (c === "all") || it.country === c;
    return okSearch && okCountry;
  });
}

function applySort(items){
  const fav = getFav();
  const out = [...items];

  const byNameAsc = (a,b)=> String(a.country||"").localeCompare(String(b.country||""));
  const byNameDesc = (a,b)=> String(b.country||"").localeCompare(String(a.country||""));

  const minOf = (x)=> Number(x.minPriceFromUSD ?? x.priceFromUSD ?? 0);
  const avgOf = (x)=> Number(x.avgPriceFromUSD ?? x.minPriceFromUSD ?? x.priceFromUSD ?? 0);
  const cntOf = (x)=> Number(x.count ?? 0);

  const byMinAsc = (a,b)=> (minOf(a)-minOf(b)) || byNameAsc(a,b);
  const byMinDesc = (a,b)=> (minOf(b)-minOf(a)) || byNameAsc(a,b);
  const byAvgAsc = (a,b)=> (avgOf(a)-avgOf(b)) || byNameAsc(a,b);
  const byAvgDesc = (a,b)=> (avgOf(b)-avgOf(a)) || byNameAsc(a,b);
  const byCntAsc = (a,b)=> (cntOf(a)-cntOf(b)) || byNameAsc(a,b);
  const byCntDesc = (a,b)=> (cntOf(b)-cntOf(a)) || byNameAsc(a,b);

  // main sort
  if(state.sort === "priceAsc") out.sort(byMinAsc);
  else if(state.sort === "priceDesc") out.sort(byMinDesc);
  else if(state.sort === "avgAsc") out.sort(byAvgAsc);
  else if(state.sort === "avgDesc") out.sort(byAvgDesc);
  else if(state.sort === "countAsc") out.sort(byCntAsc);
  else if(state.sort === "countDesc") out.sort(byCntDesc);
  else if(state.sort === "za") out.sort(byNameDesc);
  else out.sort(byNameAsc); // az / default

  // favorite pinning when selected
  if(state.sort === "fav" && fav){
    out.sort((a,b)=> (a.country===fav?-1:(b.country===fav?1:0)));
  }
  return out;
}



function toggleCruises(){
  const wrap = document.getElementById("cruiseCards")?.closest("section");
  if(!wrap) return;
  const hide = (state.search && state.search.trim().length>0)
    || (state.country && state.country !== "all")
    || (state.type && state.type !== "all");
  wrap.style.display = hide ? "none" : "";
}

// -------- RENDER --------


function renderChart(){ /* removed */ }




function renderMap(countries){
  const mapEl = document.getElementById("mapIndex");
  if(!mapEl || !window.L) return;

  if(!__map){
    __map = L.map("mapIndex").setView([20,0], 2);
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", { attribution: "© OpenStreetMap" }).addTo(__map);
    __markers = L.layerGroup().addTo(__map);
  }
  __markers.clearLayers();

  countries.forEach(it=>{
    if(!it.coords) return;
    const marker = L.marker(it.coords).addTo(__markers);
    marker.bindPopup(`<strong>${it.country} ${it.flag}</strong><br/><a href="destino.html?country=${encodeURIComponent(it.country)}">Ver ${it.count} destino${it.count !== 1 ? "s" : ""}</a>`);
  });
}



function renderAll(){
  setHeroBackground(state.country);
  setHeroTitle();
  toggleCruises();
  const places = getPlaces();
  if(!places || !Array.isArray(places) || places.length === 0){
    const cards = document.getElementById("cards");
    if(cards) cards.innerHTML = `<div style="padding:14px;border-radius:14px;background:#fff3cd;border:1px solid #ffe69c;color:#664d03;">No se pudo cargar data.js (PLACES). Asegúrate de abrir con Live Server.</div>`;
    return;
  }

  const tripDates = document.getElementById("tripDates");
  const daysText = document.getElementById("daysText");
  if(tripDates) tripDates.textContent = (window.TRIP && TRIP.datesLabel) ? TRIP.datesLabel : "SEPTEMBER 5 — 13";
  if(daysText) daysText.textContent = (window.TRIP && TRIP.days) ? String(TRIP.days) : "9";

  const fav = getFav();
  const travelers = Number(state.travelers || 2);

  // Cruises
  const cruiseEl = document.getElementById("cruiseCards");
  const cruises = buildCruises(places);
  if(cruiseEl){
    cruiseEl.innerHTML = cruises.map(c=>{
      const isFav = (fav && fav === c.name);
      return `
      <article class="card${isFav ? " top-pick-card" : ""}" style="background-image:url('${c.image}')">
        ${isFav ? `<div class="top-pick-badge">TOP PICK</div>` : ""}
        <div class="card-content">
          <h3>${c.name} 🚢</h3>
          <p>Resort flotante con entretenimiento, restaurantes, piscinas y spa.</p>
          <div class="meta-row">
            <span class="pill">💸 Desde ${money(c.priceFromUSD)}</span>
            <span class="pill">🌊 Caribe & más</span>
          </div>
          <div class="actions">
            <a class="btn btn-outline" href="destino.html?id=${encodeURIComponent(c.id)}">Ver detalles</a>
            <button class="btn btn-gold" type="button" onclick="toggleFav('${c.name}')">
              ${isFav ? "Quitar favorito" : "Elegir crucero"}
            </button>
          </div>
        </div>
      </article>
    `;
    }).join("");
  }

  // Countries
  const baseCountries = buildCountries(places);
  // populate dropdown once if empty
  const countrySelect = document.getElementById("countrySelect");
  if(countrySelect && countrySelect.options.length <= 1){
    baseCountries.map(x=>x.country).sort().forEach(c=>{
      const opt = document.createElement("option");
      opt.value = c;
      opt.textContent = c;
      countrySelect.appendChild(opt);
    });
  }

  const exploreCountry = document.getElementById("exploreCountry");
  if(exploreCountry && !exploreCountry.__filled){
    exploreCountry.innerHTML = `<option value="Todos">Todos</option>` + baseCountries.map(x=>x.country).sort((a,b)=>a.localeCompare(b)).map(c=>`<option value="${c}">${c}</option>`).join("");
    exploreCountry.__filled = true;
  }

  let countries = applyCountryFilters(baseCountries);
  countries = applySort(countries);

  const countText = document.getElementById("countText");
  if(countText) countText.textContent = String(countries.length);
  const exploreCount = document.getElementById("exploreCount");
  if(exploreCount) exploreCount.textContent = String(countries.length);

  const cards = document.getElementById("cards");
  // Explore chart (same view as cards)
  if(typeof renderExploreChart==='function'){
    const rows = countries.map(it=>({country: it.country, count: it.count, min: Math.round(it.minPriceFromUSD*travelers), avg: Math.round(it.avgPriceFromUSD*travelers)}));
    renderExploreChart(rows, travelers);
  }

  if(cards){
    const fav = getFav();
    cards.innerHTML = countries.map(it=>{
      const isFav = it.country === fav;
      return `
      <article class="card ${isFav ? "favorite" : ""}" style="background-image:url('${it.image}')">
        ${isFav ? `<div class="top-pick">TOP PICK</div>` : ``}
        <div class="card-content">
          <h3>${it.country} ${it.flag}</h3>
          <p>${it.count} destino${it.count !== 1 ? "s" : ""} recomendado${it.count !== 1 ? "s" : ""} dentro del país (ciudad, escape y naturaleza).</p>
                  <div class="meta-row">
            <span class="pill">💸 Desde ${money(Math.round(it.minPriceFromUSD * travelers))}</span>
            <span class="pill">📈 Prom ${money(Math.round(it.avgPriceFromUSD * travelers))}</span>
            <span class="pill">✨ Destinos: ${it.count}</span>
            <span class="pill">👥 ${travelers} viajero${travelers!==1?"s":""}</span>
          </div>
          <div class="actions">
            <a class="btn btn-outline" href="destino.html?country=${encodeURIComponent(it.country)}">Ver ${it.count} destino${it.count !== 1 ? "s" : ""}</a>
            <button class="btn btn-gold" type="button" onclick="toggleFav('${it.country}')">
              ${isFav ? "Quitar favorito" : "Elegir país"}
            </button>
          </div>
        </div>
      </article>`;
    }).join("");
  }
  renderMap(countries);

  const favBox = document.getElementById("favBox");
  if(favBox){
    const fav = getFav();
    favBox.innerHTML = fav
      ? `❤️ Selección favorita: <strong>${fav}</strong> <button class="clear-pill" type="button" onclick="clearFavAndRender()"><span class="clear-x">✕</span> Quitar</button>`
      : `❤️ Selección favorita: <strong>Ninguno</strong>`;
  }
}

// -------- CONTROLS --------
function initControls(){
  const searchInput = document.getElementById("searchInput");
  const countrySelect = document.getElementById("countrySelect");
  const sortSelect = document.getElementById("sortSelect");
  const clearBtn = document.getElementById("clearFiltersBtn");

  if(searchInput){
    searchInput.addEventListener("input", (e)=>{ state.search = e.target.value || ""; initExplore();
  renderAll();
});
  }
  if(countrySelect){
    countrySelect.addEventListener("change", (e)=>{ state.country = e.target.value || "all"; renderAll(); });
  }
  if(sortSelect){
    sortSelect.innerHTML = `
      <option value="fav">Favorito primero</option>
      <option value="priceAsc">Precio (menor → mayor)</option>
      <option value="priceDesc">Precio (mayor → menor)</option>
      <option value="countDesc">Más destinos</option>
      <option value="countAsc">Menos destinos</option>
      <option value="az">País (A→Z)</option>
      <option value="za">País (Z→A)</option>
    `;
    sortSelect.value = state.sort;
    sortSelect.addEventListener("change", (e)=>{
      const v = e.target.value;
      if(v === "priceAsc" || v === "priceDesc") state.sort = v;
      else state.sort = (v === "fav") ? "fav" : "az";
      renderAll();
    });
  }
  if(clearBtn){
    clearBtn.addEventListener("click", ()=>{
      state.search=""; state.country="all"; state.sort="priceAsc";
      if(searchInput) searchInput.value="";
      if(countrySelect) countrySelect.value="all";
      if(sortSelect) sortSelect.value="priceAsc";
      renderAll();
    });
  }

  // hide type filter (no longer used)
  const typeSelect = document.getElementById("typeSelect");
  if(typeSelect){
    const wrapper = typeSelect.closest(".field") || typeSelect.parentElement;
    if(wrapper) wrapper.style.display = "none";
  }
  // travelers filter not needed on index (used in destino); hide
  const travelersSelect = document.getElementById("travelersSelect");
  if(travelersSelect){
    const wrapper = travelersSelect.closest(".field") || travelersSelect.parentElement;
    if(wrapper) wrapper.style.display = "none";
  }
}

function toggleFav(value){
  const cur = getFav();
  if(cur === value) clearFav();
  else setFav(value);
  renderAll();
}
function clearFavAndRender(){ clearFav(); renderAll(); }
window.toggleFav = toggleFav;
window.clearFavAndRender = clearFavAndRender;

document.addEventListener("DOMContentLoaded", ()=>{
  initMusic();
  initControls();
  initExplore();
  renderAll();
});


