// Luxury Escape — Index (Cruceros + Países) — robusto
function money(n){ return "$" + Number(n || 0).toLocaleString("en-US"); }

function getImageUrl(p){
  const file = (p && p.imageFile && String(p.imageFile).trim() !== "")
    ? String(p.imageFile).trim()
    : `${p.id}.jpg`;
  return "images/" + file;
}

function getFav(){ return localStorage.getItem("favSelection") || ""; }
function setFav(v){ localStorage.setItem("favSelection", v); }
function clearFav(){ localStorage.removeItem("favSelection"); }

const state = { search:"", country:"all", sort:"fav", travelers: 2 };
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
  let out = [...items];

  if(state.sort === "priceAsc"){
    out.sort((a,b)=> Number(a.priceFromUSD||0) - Number(b.priceFromUSD||0));
  }else if(state.sort === "priceDesc"){
    out.sort((a,b)=> Number(b.priceFromUSD||0) - Number(a.priceFromUSD||0));
  }else{
    out.sort((a,b)=>a.country.localeCompare(b.country));
    if(state.sort === "fav" && fav){
      out.sort((a,b)=> (a.country===fav?-1:(b.country===fav?1:0)));
    }
  }
  return out;
}

// -------- RENDER --------
function renderChart(countries){
  const canvas = document.getElementById("priceChart");
  if(!canvas || !window.Chart) return;

  const labels = countries.map(x=>x.country);
  const counts = countries.map(x=>Number(x.count||0));
  const minPrices = countries.map(x=>{
    const v = Number(x.minPriceFromUSD || x.priceFromUSD || 0);
    return isFinite(v) ? Math.round(v) : 0;
  });

  if(__chart) __chart.destroy();

  __chart = new Chart(canvas.getContext("2d"), {
    data: {
      labels,
      datasets: [
        {
          type: "bar",
          label: "Destinos",
          data: counts,
          borderRadius: 10,
          yAxisID: "y"
        },
        {
          type: "line",
          label: "Precio desde (USD)",
          data: minPrices,
          tension: 0.35,
          pointRadius: 3,
          yAxisID: "y1"
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      interaction: { mode: "index", intersect: false },
      plugins: {
        legend: { display: true },
        tooltip: {
          callbacks: {
            label: (ctx) => {
              const label = ctx.dataset.label || "";
              const v = ctx.parsed.y;
              if(label.includes("Precio")){
                return `${label}: $${Number(v).toLocaleString("en-US")}`;
              }
              return `${label}: ${v}`;
            },
            afterBody: (items) => {
              const i = items?.[0]?.dataIndex ?? -1;
              if(i < 0) return "";
              const c = countries[i];
              const avg = Math.round(Number(c.avgPriceFromUSD || 0));
              const min = Math.round(Number(c.minPriceFromUSD || c.priceFromUSD || 0));
              return [
                `Desde: $${min.toLocaleString("en-US")}`,
                `Promedio: $${avg.toLocaleString("en-US")}`,
                "Click para abrir el país"
              ];
            }
          }
        }
      },
      scales: {
        x: {
          ticks: { maxRotation: 55, minRotation: 35 }
        },
        y: {
          beginAtZero: true,
          ticks: { stepSize: 1 },
          title: { display: true, text: "Destinos" }
        },
        y1: {
          beginAtZero: true,
          position: "right",
          grid: { drawOnChartArea: false },
          title: { display: true, text: "USD (desde)" }
        }
      },
      onClick: (evt, elements) => {
        if(!elements || !elements.length) return;
        const idx = elements[0].index;
        const country = countries[idx]?.country;
        if(country){
          window.location.href = `destino.html?country=${encodeURIComponent(country)}`;
        }
      }
    }
  });
}


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

  // Cruises
  const cruiseEl = document.getElementById("cruiseCards");
  const cruises = buildCruises(places);
  if(cruiseEl){
    cruiseEl.innerHTML = cruises.map(c=>`
      <article class="card" style="background-image:url('${c.image}')">
        <div class="card-content">
          <h3>${c.name} 🚢</h3>
          <p>Resort flotante con entretenimiento, restaurantes, piscinas y spa.</p>
          <div class="meta-row">
            <span class="pill">💸 Desde ${money(c.priceFromUSD)}</span>
            <span class="pill">🌊 Caribe & más</span>
          </div>
          <div class="actions">
            <a class="btn btn-outline" href="destino.html?id=${encodeURIComponent(c.id)}">Ver detalles</a>
            <button class="btn btn-gold" type="button" onclick="toggleFav('${c.name}')">Elegir crucero</button>
          </div>
        </div>
      </article>
    `).join("");
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

  let countries = applyCountryFilters(baseCountries);
  countries = applySort(countries);

  const countText = document.getElementById("countText");
  if(countText) countText.textContent = String(countries.length);

  const cards = document.getElementById("cards");
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
            <span class="pill">📍 ${it.country}</span>
            <span class="pill">✨ Destinos: ${it.count}</span>
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

  renderChart(countries);
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
    searchInput.addEventListener("input", (e)=>{ state.search = e.target.value || ""; renderAll(); });
  }
  if(countrySelect){
    countrySelect.addEventListener("change", (e)=>{ state.country = e.target.value || "all"; renderAll(); });
  }
  if(sortSelect){
    sortSelect.innerHTML = `
      <option value="priceAsc">Precio (menor → mayor)</option>
      <option value="priceDesc">Precio (mayor → menor)</option>
      <option value="fav">Favorito primero</option>
      <option value="az">País (A→Z)</option>
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
  renderAll();
});
