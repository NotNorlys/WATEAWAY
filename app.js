function money(n){ return "$" + Number(n).toLocaleString("en-US"); }
function getFavorito(){ return localStorage.getItem("fav") || ""; }
function setFavorito(id){ localStorage.setItem("fav", id); }
function clearFavorito(){ localStorage.removeItem("fav"); }
function calcPorDia(total){ return Math.round(Number(total) / TRIP.days); }

function placeholderImage(nombre){
  const title = encodeURIComponent(nombre.replace(/🇦-🇿/g,"").replace("🚢","").trim());
  const svg = `
  <svg xmlns="http://www.w3.org/2000/svg" width="1400" height="900">
    <defs>
      <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="#f6e27a"/>
        <stop offset="1" stop-color="#d4af37"/>
      </linearGradient>
    </defs>
    <rect width="100%" height="100%" fill="url(#g)"/>
    <rect x="80" y="80" width="1240" height="740" rx="60" fill="rgba(0,0,0,0.18)"/>
    <text x="120" y="470" font-family="Inter, Arial" font-size="78" fill="rgba(255,255,255,0.92)">${title}</text>
    <text x="120" y="545" font-family="Inter, Arial" font-size="26" fill="rgba(255,255,255,0.82)">Agrega una imagen en /images</text>
  </svg>`;
  return "data:image/svg+xml;charset=UTF-8," + encodeURIComponent(svg);
}
function getImageUrl(d){
  if(d.imageFile && d.imageFile.trim() !== "") return "images/" + d.imageFile.trim();
  return placeholderImage(d.nombre);
}

function fadeHero(doChange){
  const fade = document.querySelector(".hero-fade");
  if(!fade){ doChange(); return; }
  fade.style.opacity = "1";
  setTimeout(() => { doChange(); fade.style.opacity = "0"; }, 380);
}

/* ======= STATE (filters) ======= */
const state = {
  search: "",
  type: "all",
  sort: "fav"
};

/* ======= DOM ======= */
const $ = (id) => document.getElementById(id);

let __indexMap = null;
let __markersLayer = null;

function buildItems(){
  return Object.values(DESTINOS).map(d => ({
    ...d,
    porDia: calcPorDia(d.total),
    _img: getImageUrl(d),
    _name: (d.nombre || "").toLowerCase()
  }));
}

function applyFilters(items){
  const s = state.search.trim().toLowerCase();
  const t = state.type;

  return items.filter(d => {
    const okSearch = !s || d._name.includes(s);
    const okType = (t === "all") || (d.category === t) || (d.tipo === t);
    return okSearch && okType;
  });
}

function applySort(items){
  const fav = getFavorito();
  const sort = state.sort;

  const copy = [...items];

  if(sort === "fav"){
    if(fav) copy.sort((a,b)=> (a.id===fav?-1:(b.id===fav?1:0)));
    return copy;
  }
  if(sort === "dayAsc") return copy.sort((a,b)=>a.porDia-b.porDia);
  if(sort === "dayDesc") return copy.sort((a,b)=>b.porDia-a.porDia);
  if(sort === "totalAsc") return copy.sort((a,b)=>a.total-b.total);
  if(sort === "totalDesc") return copy.sort((a,b)=>b.total-a.total);
  if(sort === "name") return copy.sort((a,b)=>a.nombre.localeCompare(b.nombre));
  return copy;
}

/* ======= RENDER ======= */
function renderAll(){
  const tripDates = $("tripDates");
  if(tripDates) tripDates.textContent = TRIP.datesLabel;

  const fav = getFavorito();
  const hero = $("hero");
  const video = $("heroVideo");
  const heroTitle = $("heroTitle");

  // items
  const baseItems = buildItems();
  const filtered = applyFilters(baseItems);
  const finalItems = applySort(filtered);

  // count
  const countText = $("countText");
  if(countText) countText.textContent = String(finalItems.length);

  // hero dynamic
  const applyHero = () => {
    if(fav && DESTINOS[fav]){
      hero.style.backgroundImage = `url('${getImageUrl(DESTINOS[fav])}')`;
      hero.style.backgroundSize = "cover";
      hero.style.backgroundPosition = "center";
      if(video) video.style.display = "none";
      if(heroTitle) heroTitle.textContent = DESTINOS[fav].nombre;
    }else{
      hero.style.backgroundImage = "none";
      if(video) video.style.display = "block";
      if(heroTitle) heroTitle.textContent = "Luxury Escape";
    }
  };
  fadeHero(applyHero);

  // fav box
  const favBox = $("favBox");
  if(favBox){
    if(fav && DESTINOS[fav]){
      favBox.innerHTML = `
        ❤️ Favorito: <strong>${DESTINOS[fav].nombre}</strong>
        <button class="clear-pill" type="button" onclick="clearAndRender()">
          <span class="clear-x">✕</span> Quitar
        </button>
      `;
    }else{
      favBox.innerHTML = `❤️ Favorito: <strong>Ninguno</strong>`;
    }
  }

  // cards
  const cards = $("cards");
  if(cards){
    cards.innerHTML = finalItems.map(d=>{
      const isFav = d.id === fav;
      const topPick = isFav ? `<div class="top-pick">TOP PICK</div>` : "";
      const typeLabel = d.tipo === "crucero" ? "🚢 Crucero" :
        (d.category === "playa" ? "🌴 Playa" :
         d.category === "ciudad" ? "🌆 Ciudad" :
         d.category === "naturaleza" ? "🏔 Naturaleza" : "🌍 Destino");

      return `
        <article class="card ${isFav ? "favorite" : ""}" style="background-image:url('${d._img}')">
          ${topPick}
          <div class="card-content">
            <h3>${d.nombre}</h3>
            <p>${d.descripcion}</p>

            <div class="meta-row">
              <span class="pill">${typeLabel}</span>
              <span class="pill">💸 ${money(d.total)} total</span>
              <span class="pill">📆 ${money(d.porDia)}/día</span>
              <span class="pill">✅ ${d.incluye}</span>
            </div>

            <div class="actions">
              <a class="btn btn-outline" href="destino.html?id=${encodeURIComponent(d.id)}">Ver destino</a>
              <button class="btn btn-gold" type="button" onclick="toggleFav('${d.id}')">
                ${isFav ? "Quitar favorito" : "Elegir mi destino"}
              </button>
            </div>
          </div>
        </article>
      `;
    }).join("");
  }

  // chart + map
  renderChart(finalItems);
  renderIndexMap(finalItems);
}

function toggleFav(id){
  if(getFavorito() === id) clearFavorito();
  else setFavorito(id);
  renderAll();
}
function clearAndRender(){
  clearFavorito();
  renderAll();
}
window.toggleFav = toggleFav;
window.clearAndRender = clearAndRender;

/* ======= CHART ======= */
function renderChart(items){
  const canvas = $("priceChart");
  if(!canvas || !window.Chart) return;

  const labels = items.map(d => d.nombre.replace("🚢","").trim());
  const data = items.map(d => d.porDia);

  if(window.__chart) window.__chart.destroy();

  window.__chart = new Chart(canvas.getContext("2d"), {
    type: "bar",
    data: {
      labels,
      datasets: [{
        label: "Precio por día (USD)",
        data,
        borderRadius: 10,
        backgroundColor: "gold"
      }]
    },
    options: {
      responsive: true,
      plugins: { legend: { display: false } },
      scales: { y: { beginAtZero: true } }
    }
  });
}

/* ======= MAP (Leaflet) ======= */
function renderIndexMap(items){
  const mapEl = $("mapIndex");
  if(!mapEl || !window.L) return;

  // init once
  if(!__indexMap){
    __indexMap = L.map("mapIndex", { zoomControl: true }).setView([20, 0], 2);
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "© OpenStreetMap"
    }).addTo(__indexMap);

    __markersLayer = L.layerGroup().addTo(__indexMap);
  }

  __markersLayer.clearLayers();

  items.forEach(d=>{
    if(!d.coords) return;
    const marker = L.marker(d.coords);
    marker.bindPopup(`
      <strong>${d.nombre}</strong><br/>
      ${money(d.total)} total • ${money(d.porDia)}/día<br/>
      <a href="destino.html?id=${encodeURIComponent(d.id)}">Ver</a> •
      <a href="#" onclick="toggleFav('${d.id}'); return false;">Favorito</a>
    `);
    marker.addTo(__markersLayer);
  });
}

/* ======= MUSIC (index only) ======= */
function initMusic(){
  const music = $("bgMusic");
  const btn = $("musicBtn");
  if(!music || !btn) return;

  music.volume = 0.6;
  btn.textContent = "🔇";
  btn.classList.remove("playing");

  btn.addEventListener("click", async () => {
    if(music.paused){
      try{
        await music.play();
        btn.textContent = "🔊";
        btn.classList.add("playing");
        localStorage.setItem("music", "on");
      }catch(e){
        alert("Tu navegador bloqueó el audio. Intenta tocar el botón otra vez.");
      }
    }else{
      music.pause();
      btn.textContent = "🔇";
      btn.classList.remove("playing");
      localStorage.setItem("music", "off");
    }
  });

  // si estaba ON, se activará con el primer click en la página
  if(localStorage.getItem("music") === "on"){
    const one = async () => {
      try{
        await music.play();
        btn.textContent = "🔊";
        btn.classList.add("playing");
      }catch(_){}
      document.removeEventListener("click", one);
      document.removeEventListener("touchstart", one);
    };
    document.addEventListener("click", one);
    document.addEventListener("touchstart", one);
  }
}

/* ======= CONTROLS ======= */
function initControls(){
  const searchInput = $("searchInput");
  const typeSelect = $("typeSelect");
  const sortSelect = $("sortSelect");
  const clearBtn = $("clearFiltersBtn");

  if(searchInput){
    searchInput.addEventListener("input", (e)=>{
      state.search = e.target.value || "";
      renderAll();
    });
  }
  if(typeSelect){
    typeSelect.addEventListener("change", (e)=>{
      state.type = e.target.value;
      renderAll();
    });
  }
  if(sortSelect){
    sortSelect.addEventListener("change", (e)=>{
      state.sort = e.target.value;
      renderAll();
    });
  }
  if(clearBtn){
    clearBtn.addEventListener("click", ()=>{
      state.search = "";
      state.type = "all";
      state.sort = "fav";
      if(searchInput) searchInput.value = "";
      if(typeSelect) typeSelect.value = "all";
      if(sortSelect) sortSelect.value = "fav";
      renderAll();
    });
  }
}

/* ======= BOOT ======= */
document.addEventListener("DOMContentLoaded", () => {
  initMusic();
  initControls();
  renderAll();
});