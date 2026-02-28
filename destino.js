function money(n){ return "$" + Number(n).toLocaleString("en-US"); }
function calcPerDay(total, days){ return Math.round(Number(total) / Number(days)); }

function getImageUrl(p){
  const file = (p.imageFile && p.imageFile.trim() !== "") ? p.imageFile.trim() : `${p.id}.jpg`;
  return "images/" + file;
}
function computeTotalForTravelers(place, travelers){
  const base = Number(place.priceFromUSD || 0);
  const t = Math.max(1, Number(travelers || 1));
  if(place.priceModel === "per_person") return base * t;
  if(place.priceModel === "per_room_double"){
    if(t === 1) return Math.round(base * 0.85);
    if(t === 2) return base;
    return Math.round(base + base * 0.55 * (t - 2));
  }
  return base * t;
}

const params = new URLSearchParams(window.location.search);
const id = params.get("id");
const countryParam = params.get("country");

const hero = document.getElementById("destinoHero");
const title = document.getElementById("destinoTitle");
const subtitle = document.getElementById("destinoSubtitle");
const info = document.getElementById("destinoInfo");

const travelers = Number(localStorage.getItem("lastTravelers") || "2") || 2;
localStorage.setItem("lastTravelers", String(travelers));

function renderCountry(country){
  const list = PLACES.filter(p => p.country === country).slice(0,3);
  if(list.length === 0){
    title.textContent = "País no encontrado";
    subtitle.textContent = "Vuelve al inicio y elige otro país.";
    info.innerHTML = `<section class="section"><h4>Error</h4><p>No hay destinos para este país.</p></section>`;
    return;
  }

  // Hero uses the first destination image
  const cover = list[0];
  hero.style.backgroundImage = `url('${getImageUrl(cover)}')`;
  title.textContent = country;
  subtitle.textContent = (country === "Crucero")
    ? `Elige tu línea: MSC, Royal Caribbean o Norwegian • ${TRIP.days} días • ${travelers} viajero(s)`
    : `3 destinos recomendados • ${TRIP.days} días • ${travelers} viajero(s)`;

  const cards = list.map(p => {
    const total = computeTotalForTravelers(p, travelers);
    const perDay = calcPerDay(total, TRIP.days);
    return `
      <article class="section" style="padding:0; overflow:hidden">
        <div class="card mini" style="background-image:url('${getImageUrl(p)}')">
          <div class="card-content">
            <h3>${p.name} ${p.flag || ""}</h3>
            <p>${p.description}</p>
            <div class="meta-row">
              <span class="pill">💸 ${money(total)} total (desde)</span>
              <span class="pill">📆 ${money(perDay)}/día</span>
              <span class="pill">📍 ${p.recommendedPlace || "Zona recomendada"}</span>
            </div>
            <div class="actions">
              <a class="btn btn-outline" href="destino.html?id=${encodeURIComponent(p.id)}">Ver detalles</a>
              <a class="btn btn-outline" href="${(p.bookingLinks&&p.bookingLinks[0]?p.bookingLinks[0].url:"https://www.booking.com/")}" target="_blank" rel="noopener noreferrer">Hotel</a>
              <a class="btn btn-outline" href="${(p.bookingLinks&&p.bookingLinks[1]?p.bookingLinks[1].url:"https://www.google.com/travel/flights")}" target="_blank" rel="noopener noreferrer">Vuelos</a>
            </div>
          </div>
        </div>
      </article>
    `;
  }).join("");

  info.innerHTML = `
    <section class="section">
      <h4>${country === "Crucero" ? "Opciones de cruceros" : "Destinos en " + country}</h4>
      <p>${country === "Crucero" ? "Elige un crucero para ver detalles, itinerario y amenidades." : "Elige uno para ver su información completa."}</p>
    </section>
    ${cards}
  `;
// Map: show markers for the 3 destinations
  const coordsList = list.filter(p => p.coords);
  if(window.L && coordsList.length){
    const map = L.map("mapDestino").setView(coordsList[0].coords, 5);
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", { attribution: "© OpenStreetMap" }).addTo(map);
    coordsList.forEach(p=>{
      L.marker(p.coords).addTo(map).bindPopup(`<strong>${p.name}</strong><br/><a href="destino.html?id=${encodeURIComponent(p.id)}">Ver detalles</a>`);
    });
  }
}

function renderPlace(place){
  const total = computeTotalForTravelers(place, travelers);
  const perDay = calcPerDay(total, TRIP.days);

  title.textContent = `${place.name} ${place.flag || ""}`.trim();
  subtitle.textContent = `${money(total)} total (desde) • ${money(perDay)}/día • ${TRIP.days} días • ${travelers} viajero(s)`;
  hero.style.backgroundImage = `url('${getImageUrl(place)}')`;

  const links = (place.bookingLinks || []).map(l => `<a class="link-pill" href="${l.url}" target="_blank" rel="noopener noreferrer">🔗 ${l.label}</a>`).join("");

  const includes = Array.isArray(place.includes) ? place.includes : (place.includes ? [place.includes] : []);
  const includesHtml = includes.length ? `<ul>${includes.map(x=>`<li>${x}</li>`).join("")}</ul>` : "<p>—</p>";

  info.innerHTML = `
    <section class="section">
      <h4>Descripción</h4>
      <p>${place.description}</p>
      <p><strong>Highlights:</strong> ${(place.highlights || []).join(" • ")}</p>
    </section>

    <section class="section">
      <h4>Detalles</h4>
      <p><strong>País:</strong> ${place.country} ${place.flag || ""}</p>
      <p><strong>Lugar recomendado:</strong> ${place.recommendedPlace || "—"}</p>
      <p><strong>Hotel / Stay:</strong> ${place.hotel || "—"}</p>
      <p><strong>Presupuesto (desde):</strong> ${money(total)} (${money(perDay)}/día)</p>
      <div class="links">${links || "<span style='color:#8a8176'>Sin links todavía</span>"}</div>
    </section>

    <section class="section">
      <h4>Incluye</h4>
      ${includesHtml}
    </section>
  `;

  // Map
  if(window.L && place.coords){
    const map = L.map("mapDestino").setView(place.coords, 7);
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", { attribution: "© OpenStreetMap" }).addTo(map);
    L.marker(place.coords).addTo(map).bindPopup(`${place.name} ${place.flag || ""}`).openPopup();
  }

  // Netflix-style related (same country, other places)
  const sameCountry = PLACES.filter(p => p.country === place.country && p.id !== place.id);
  if(sameCountry.length > 0){
    const otherHtml = sameCountry.map(p => `
      <div class="related-slide" onclick="window.location.href='destino.html?id=${encodeURIComponent(p.id)}'">
        <img src="${getImageUrl(p)}" alt="${p.name}">
        <div class="related-overlay"><h5>${p.name} ${p.flag || ""}</h5></div>
      </div>
    `).join("");

    info.innerHTML += `
      <section class="section fade-in">
        <div class="related-header">
          <h4>Más lugares en ${place.country} ${place.flag || ""}</h4>
          <a class="btn btn-gold explore-btn" href="destino.html?country=${encodeURIComponent(place.country)}">Ver 3 destinos</a>
        </div>

        <div class="related-wrapper">
          <button class="scroll-btn left" type="button" onclick="scrollRelated(-1)">‹</button>
          <div class="related-container" id="relatedContainer">${otherHtml}</div>
          <button class="scroll-btn right" type="button" onclick="scrollRelated(1)">›</button>
        </div>
      </section>
    `;

    window.scrollRelated = function(direction){
      const container = document.getElementById("relatedContainer");
      if(!container) return;
      container.scrollBy({ left: direction * 320, behavior: "smooth" });
    };
  }
}

// Router
if(countryParam){
  renderCountry(countryParam);
}else if(id){
  const place = PLACES.find(p => p.id === id);
  if(!place){
    title.textContent = "Lugar no encontrado";
    subtitle.textContent = "Revisa el link o vuelve al inicio.";
    info.innerHTML = `<section class="section"><h4>Error</h4><p>No existe este lugar.</p></section>`;
  }else{
    renderPlace(place);
  }
}else{
  title.textContent = "Selecciona un país";
  subtitle.textContent = "Vuelve al inicio.";
  info.innerHTML = `<section class="section"><h4>Tip</h4><p>Vuelve al inicio y selecciona un país.</p></section>`;
}
