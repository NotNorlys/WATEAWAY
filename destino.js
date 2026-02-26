function money(n){ return "$" + Number(n).toLocaleString("en-US"); }
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

const params = new URLSearchParams(window.location.search);
const id = params.get("id");
const d = DESTINOS[id];

const hero = document.getElementById("destinoHero");
const title = document.getElementById("destinoTitle");
const subtitle = document.getElementById("destinoSubtitle");
const info = document.getElementById("destinoInfo");

if(!d){
  title.textContent = "Destino no encontrado";
  subtitle.textContent = "Revisa el link o vuelve al inicio.";
  info.innerHTML = `<section class="section"><h4>Error</h4><p>No existe este destino.</p></section>`;
}else{
  const porDia = calcPorDia(d.total);

  title.textContent = d.nombre;
  subtitle.textContent = `${money(d.total)} total • ${money(porDia)}/día • ${TRIP.days} días`;

  hero.style.backgroundImage = `url('${getImageUrl(d)}')`;

  let html = `
    <section class="section">
      <h4>Descripción</h4>
      <p>${d.descripcion}</p>
    </section>

    <section class="section">
      <h4>Detalles</h4>
      <p><strong>Incluye:</strong> ${d.incluye}</p>
      <p><strong>Hotel / Resort:</strong> ${d.hotel || "—"}</p>
      <p><strong>Categoría:</strong> ${d.tipo === "crucero" ? "Crucero" : (d.category || "—")}</p>
      <p><strong>Presupuesto:</strong> ${money(d.total)} (${money(porDia)}/día)</p>
    </section>
  `;

  if(d.tipo === "crucero"){
    const it = (d.itinerario || []).map(x=>`<span class="stop">${x}</span>`).join("");
    const am = (d.amenities || []).map(x=>`<li>${x}</li>`).join("");
    html += `
      <section class="section">
        <div class="cruise-badge">🚢 ALL INCLUSIVE EXPERIENCE</div>
        <h4>Itinerario</h4>
        <div class="timeline">${it || "<span class='stop'>Itinerario por definir</span>"}</div>
      </section>
      <section class="section">
        <h4>Amenities</h4>
        <ul>${am || "<li>Amenities por definir</li>"}</ul>
      </section>
    `;
  }else{
    const acts = (d.actividades || []).map(x=>`<li>${x}</li>`).join("");
    html += `
      <section class="section">
        <h4>Actividades</h4>
        <ul>${acts || "<li>Actividades por definir</li>"}</ul>
      </section>
    `;
  }

  info.innerHTML = html;

  if(window.L && d.coords){
    const map = L.map("mapDestino").setView(d.coords, 6);
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "© OpenStreetMap"
    }).addTo(map);

    L.marker(d.coords).addTo(map).bindPopup(d.nombre).openPopup();
  }
}