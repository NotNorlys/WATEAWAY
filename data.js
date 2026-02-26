const TRIP = { days: 9, datesLabel: "SEPTEMBER 5 — 13" };

const DESTINOS = {
  // ====== TUS DESTINOS (MIAMI vibe + lujo) ======
  santorini:{ id:"santorini", nombre:"Santorini 🇬🇷", category:"playa", tipo:"destino",
    imageFile:"santorini.jpg", hotel:"Canaves Ena — Small Luxury Hotels of the World", incluye:"Vuelo + hospedaje",
    total:10000, coords:[36.3932,25.4615],
    descripcion:"Casas blancas, caldera volcánica y atardeceres dorados sobre el Egeo.",
    actividades:["Atardecer en Oia","Catamarán por la caldera","Cata de vinos","Akrotiri","Playas volcánicas"]
  },
  ibiza:{ id:"ibiza", nombre:"Ibiza 🇪🇸", category:"playa", tipo:"destino",
    imageFile:"ibiza.jpg", hotel:"Bless Hotel Ibiza — Leading Hotels", incluye:"Solo hotel",
    total:5000, coords:[38.9067,1.4206],
    descripcion:"Mediterráneo chic: calas turquesa, beach clubs y energía elegante.",
    actividades:["Cala Comte","Dalt Vila","Formentera day trip","Beach clubs","Snorkel"]
  },
  rio:{ id:"rio", nombre:"Rio de Janeiro 🇧🇷", category:"ciudad", tipo:"destino",
    imageFile:"rio.jpg", hotel:"Hotel Nacional Rio de Janeiro", incluye:"Vuelo + hotel",
    total:2600, coords:[-22.9068,-43.1729],
    descripcion:"Vistas épicas, playas icónicas y una vibra cultural vibrante.",
    actividades:["Cristo Redentor","Pan de Azúcar","Ipanema","Copacabana","Miradores"]
  },
  hawaii:{ id:"hawaii", nombre:"Hawaii (Oahu) 🇺🇸", category:"playa", tipo:"destino",
    imageFile:"hawaii.jpg", hotel:"Alohilani Resort Waikiki Beach", incluye:"Vuelo + hotel",
    total:3500, coords:[21.3069,-157.8583],
    descripcion:"Surf, sunsets y energía de isla que reinicia la vida.",
    actividades:["Surf en Waikiki","Snorkel con tortugas","Diamond Head","Luau","Road trip costero"]
  },
  bali:{ id:"bali", nombre:"Bali 🇮🇩", category:"naturaleza", tipo:"destino",
    imageFile:"bali.jpg", hotel:"The Bandha Hotel & Suites", incluye:"Vuelo + hotel",
    total:3800, coords:[-8.3405,115.0920],
    descripcion:"Templos místicos, arrozales y lujo tropical con cultura.",
    actividades:["Ubud & arrozales","Uluwatu","Spa balinés","Mercados","Sunset beach"]
  },
  phuket:{ id:"phuket", nombre:"Phuket 🇹🇭", category:"playa", tipo:"destino",
    imageFile:"phuket.jpg", hotel:"Private Pool Villas by The Slate", incluye:"Vuelo + hospedaje",
    total:3300, coords:[7.8804,98.3923],
    descripcion:"Islas soñadas, villas privadas y mar turquesa.",
    actividades:["Phi Phi","James Bond Island","Mercados nocturnos","Cocina tailandesa","Snorkel"]
  },
  sulawesi:{ id:"sulawesi", nombre:"Sulawesi 🇮🇩", category:"naturaleza", tipo:"destino",
    imageFile:"sulawesi.jpg", hotel:"The Sentra Hotel Manado", incluye:"Hotel (vuelo aparte)",
    total:5200, coords:[1.4748,124.8421],
    descripcion:"Arrecifes, cultura local y rutas fuera de lo común.",
    actividades:["Buceo/snorkel","Playas vírgenes","Rutas naturales","Gastronomía local","Tours culturales"]
  },
  maldives:{ id:"maldives", nombre:"Maldives 🇲🇻", category:"playa", tipo:"destino",
    imageFile:"maldives.jpg", hotel:"Kurumba Maldives", incluye:"Pasaje separado (aprox.)",
    total:7000, coords:[3.2028,73.2207],
    descripcion:"Villas sobre el agua y lujo absoluto en el océano Índico.",
    actividades:["Overwater villa","Nadar con Tiburon Ballena","Cena privada","Delfines","Deportes acuáticos"]
  },

  // Crucero
  msc:{ id:"msc", nombre:"MSC World America 🚢", category:"crucero", tipo:"crucero",
    imageFile:"msc.jpg", hotel:"MSC World America", incluye:"Todo incluido",
    total:3300, coords:[25.7617,-80.1918],
    descripcion:"Resort flotante: gastronomía, shows, piscinas y días de mar.",
    itinerario:["Miami","Bahamas","Cozumel","Ocean Cay","Miami"],
    amenities:["Piscinas","Spa","Shows en vivo","Restaurantes internacionales","Zona VIP (Yacht Club)"]
  },

  // ====== MIXTO NUEVO (CIUDADES) ======
  dubai:{ id:"dubai", nombre:"Dubai 🇦🇪", category:"ciudad", tipo:"destino",
    imageFile:"dubai.jpg", hotel:"Luxury Marina Stay", incluye:"Vuelo + hotel",
    total:6200, coords:[25.2048,55.2708],
    descripcion:"Skyline, desierto, beach clubs y lujo futurista.",
    actividades:["Safari desierto","Burj Khalifa","Dubai Marina","Beach club","Souks"]
  },
  paris:{ id:"paris", nombre:"Paris 🇫🇷", category:"ciudad", tipo:"destino",
    imageFile:"paris.jpg", hotel:"Boutique Paris Stay", incluye:"Vuelo + hotel",
    total:5400, coords:[48.8566,2.3522],
    descripcion:"Cafés, arte, moda y atardeceres sobre el Sena.",
    actividades:["Torre Eiffel","Louvre","Montmartre","Sena cruise","Cafés"]
  },
  tokyo:{ id:"tokyo", nombre:"Tokyo 🇯🇵", category:"ciudad", tipo:"destino",
    imageFile:"tokyo.jpg", hotel:"Shinjuku Luxury Stay", incluye:"Vuelo + hotel",
    total:6800, coords:[35.6762,139.6503],
    descripcion:"Neón + tradición: comida increíble y barrios icónicos.",
    actividades:["Shibuya","Asakusa","TeamLab","Sushi night","Hakone day trip"]
  },
  nyc:{ id:"nyc", nombre:"New York 🇺🇸", category:"ciudad", tipo:"destino",
    imageFile:"nyc.jpg", hotel:"Manhattan Hotel", incluye:"Vuelo + hotel",
    total:5900, coords:[40.7128,-74.0060],
    descripcion:"Rooftops, Broadway y vibes de película.",
    actividades:["Central Park","Broadway","Museos","SoHo","Rooftops"]
  },
  singapore:{ id:"singapore", nombre:"Singapore 🇸🇬", category:"ciudad", tipo:"destino",
    imageFile:"singapore.jpg", hotel:"Marina Bay Stay", incluye:"Vuelo + hotel",
    total:6100, coords:[1.3521,103.8198],
    descripcion:"Ciudad jardín: skyline impecable y comida top.",
    actividades:["Gardens by the Bay","Marina Bay","Hawker food","Sentosa","Rooftop views"]
  },
  rome:{ id:"rome", nombre:"Rome 🇮🇹", category:"ciudad", tipo:"destino",
    imageFile:"rome.jpg", hotel:"Centro Storico Stay", incluye:"Vuelo + hotel",
    total:5200, coords:[41.9028,12.4964],
    descripcion:"Historia, gelato y noches románticas.",
    actividades:["Coliseo","Vaticano","Trastevere","Piazza Navona","Food tour"]
  },
  barcelona:{ id:"barcelona", nombre:"Barcelona 🇪🇸", category:"ciudad", tipo:"destino",
    imageFile:"barcelona.jpg", hotel:"Eixample Boutique", incluye:"Vuelo + hotel",
    total:4700, coords:[41.3851,2.1734],
    descripcion:"Arquitectura, playa urbana y vida nocturna elegante.",
    actividades:["Sagrada Familia","Gótico","Barceloneta","Park Güell","Tapas"]
  },
  lisbon:{ id:"lisbon", nombre:"Lisbon 🇵🇹", category:"ciudad", tipo:"destino",
    imageFile:"lisbon.jpg", hotel:"Alfama View Stay", incluye:"Vuelo + hotel",
    total:3900, coords:[38.7223,-9.1393],
    descripcion:"Azulejos, miradores y atardeceres suaves.",
    actividades:["Tram 28","Miradores","Belém","Sintra day trip","Pastéis"]
  },
  seoul:{ id:"seoul", nombre:"Seoul 🇰🇷", category:"ciudad", tipo:"destino",
    imageFile:"seoul.jpg", hotel:"Gangnam Luxury Stay", incluye:"Vuelo + hotel",
    total:5600, coords:[37.5665,126.9780],
    descripcion:"Estilo, skincare, mercados y palacios.",
    actividades:["Gyeongbokgung","Myeongdong","Han River","Cafés","K-food"]
  },
  london:{ id:"london", nombre:"London 🇬🇧", category:"ciudad", tipo:"destino",
    imageFile:"london.jpg", hotel:"Mayfair Stay", incluye:"Vuelo + hotel",
    total:6100, coords:[51.5072,-0.1276],
    descripcion:"Clásico moderno: museos, tea time y noches cool.",
    actividades:["Museos","Camden","West End","Notting Hill","Pubs"]
  },
  sydney:{ id:"sydney", nombre:"Sydney 🇦🇺", category:"ciudad", tipo:"destino",
    imageFile:"sydney.jpg", hotel:"Harbour View Hotel", incluye:"Vuelo + hotel",
    total:7400, coords:[-33.8688,151.2093],
    descripcion:"Bahía icónica, beaches cercanas y vibra premium.",
    actividades:["Opera House","Bondi","Ferry ride","Coastal walk","Rooftops"]
  },

  // ====== MIXTO NUEVO (PLAYAS) ======
  cancun:{ id:"cancun", nombre:"Cancún 🇲🇽", category:"playa", tipo:"destino",
    imageFile:"cancun.jpg", hotel:"All-inclusive Resort", incluye:"Vuelo + hotel",
    total:2800, coords:[21.1619,-86.8515],
    descripcion:"Mar turquesa, todo incluido y excursiones mayas.",
    actividades:["Isla Mujeres","Cenotes","Chichén Itzá","Catamarán","Beach day"]
  },
  tulum:{ id:"tulum", nombre:"Tulum 🇲🇽", category:"playa", tipo:"destino",
    imageFile:"tulum.jpg", hotel:"Beach Boutique", incluye:"Vuelo + hotel",
    total:3200, coords:[20.2110,-87.4654],
    descripcion:"Boho-lux: beach clubs y cenotes.",
    actividades:["Cenotes","Ruinas","Beach club","Bici","Sunset dinner"]
  },
  puntacana:{ id:"puntacana", nombre:"Punta Cana 🇩🇴", category:"playa", tipo:"destino",
    imageFile:"punta-cana.jpg", hotel:"All-inclusive Premium", incluye:"Vuelo + hotel",
    total:2600, coords:[18.5601,-68.3725],
    descripcion:"Arena blanca, palmeras y mood resort.",
    actividades:["Catamarán","Snorkel","Saona day trip","Spa day","Beach"]
  },
  borabora:{ id:"borabora", nombre:"Bora Bora 🇵🇫", category:"playa", tipo:"destino",
    imageFile:"borabora.jpg", hotel:"Overwater Bungalows", incluye:"Vuelo + hotel",
    total:9800, coords:[-16.5004,-151.7415],
    descripcion:"Laguna azul y lujo total sobre el agua.",
    actividades:["Lagoon tour","Snorkel","Spa","Cena privada","Boat day"]
  },
  mykonos:{ id:"mykonos", nombre:"Mykonos 🇬🇷", category:"playa", tipo:"destino",
    imageFile:"mykonos.jpg", hotel:"Aegean Luxury Stay", incluye:"Vuelo + hotel",
    total:8600, coords:[37.4467,25.3289],
    descripcion:"Grecia glam: playas y callecitas blancas.",
    actividades:["Little Venice","Beach clubs","Old Town","Boat day","Sunset"]
  },
  seychelles:{ id:"seychelles", nombre:"Seychelles 🇸🇨", category:"playa", tipo:"destino",
    imageFile:"seychelles.jpg", hotel:"Island Resort", incluye:"Vuelo + hotel",
    total:8200, coords:[-4.6796,55.4920],
    descripcion:"Playas cinematográficas y naturaleza tropical.",
    actividades:["Anse Lazio","Island hopping","Snorkel","Hike","Spa"]
  },
  zanzibar:{ id:"zanzibar", nombre:"Zanzibar 🇹🇿", category:"playa", tipo:"destino",
    imageFile:"zanzibar.jpg", hotel:"Oceanfront Stay", incluye:"Vuelo + hotel",
    total:4900, coords:[-6.1659,39.2026],
    descripcion:"Mar cálido, arena blanca y cultura swahili.",
    actividades:["Stone Town","Sandbank tour","Snorkel","Sunset dhow","Spice tour"]
  },

  // ====== MIXTO NUEVO (NATURALEZA) ======
  capetown:{ id:"capetown", nombre:"Cape Town 🇿🇦", category:"naturaleza", tipo:"destino",
    imageFile:"capetown.jpg", hotel:"Waterfront Hotel", incluye:"Vuelo + hotel",
    total:4100, coords:[-33.9249,18.4241],
    descripcion:"Montañas, mar y vinos: paisajes épicos.",
    actividades:["Table Mountain","Camps Bay","Winelands","Cape Point","Penguins beach"]
  },
  swissalps:{ id:"swissalps", nombre:"Swiss Alps 🇨🇭", category:"naturaleza", tipo:"destino",
    imageFile:"swissalps.jpg", hotel:"Alpine Luxury Lodge", incluye:"Vuelo + hotel",
    total:7400, coords:[46.8182,8.2275],
    descripcion:"Lujo silencioso: lagos, picos y trenes panorámicos.",
    actividades:["Tren panorámico","Miradores","Lagos","Spa alpino","Pueblos"]
  },
  iceland:{ id:"iceland", nombre:"Iceland 🇮🇸", category:"naturaleza", tipo:"destino",
    imageFile:"iceland.jpg", hotel:"Reykjavik + Road Trip", incluye:"Vuelo + hotel",
    total:6200, coords:[64.1466,-21.9426],
    descripcion:"Cascadas, auroras y paisajes de otro planeta.",
    actividades:["Golden Circle","Blue Lagoon","Cascadas","Glaciares","Auroras"]
  },
  banff:{ id:"banff", nombre:"Banff 🇨🇦", category:"naturaleza", tipo:"destino",
    imageFile:"banff.jpg", hotel:"Lakeview Lodge", incluye:"Vuelo + hotel",
    total:5200, coords:[51.1784,-115.5708],
    descripcion:"Lagos turquesa y montañas perfectas.",
    actividades:["Lake Louise","Moraine Lake","Hikes","Góndola","Hot springs"]
  },
  queenstown:{ id:"queenstown", nombre:"Queenstown 🇳🇿", category:"naturaleza", tipo:"destino",
    imageFile:"queenstown.jpg", hotel:"Lakeside Luxury", incluye:"Vuelo + hotel",
    total:7100, coords:[-45.0312,168.6626],
    descripcion:"Aventura premium entre lagos y montañas.",
    actividades:["Milford Sound","Scenic flight","Wine tasting","Hikes","Lake cruise"]
  }

};
