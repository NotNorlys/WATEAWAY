// data.js (final with missing countries restored)
const TRIP = { days: 9, datesLabel: "SEPTEMBER 5 — 13" };

const PLACES = [
  {
    "id": "msc",
    "name": "MSC Cruises",
    "country": "Crucero",
    "flag": "🚢",
    "category": "crucero",
    "type": "crucero",
    "priceFromUSD": 3300,
    "priceModel": "per_person",
    "coords": [
      25.7617,
      -80.1918
    ],
    "description": "MSC Cruises ofrece una experiencia de lujo en alta mar pensada para quienes quieren descansar, divertirse y descubrir varios destinos sin cambiar de hotel. A bordo encontrarás espectáculos tipo Broadway, restaurantes temáticos, piscinas, gimnasio y zonas de spa para desconectar con estilo.\\n\\nEl ambiente se siente como un resort flotante: puedes elegir cabinas premium con balcón, disfrutar de cenas especiales y reservar experiencias exclusivas en cada parada. Es ideal si quieres un viaje todo‑en‑uno con comodidad, servicio y entretenimiento de primer nivel.\\n\\nRecomendación: reserva una cabina con balcón en cubierta alta y añade al menos una experiencia premium (spa o cena de autor) para elevar el viaje al máximo.",
    "highlights": [
      "All‑inclusive vibe",
      "Shows",
      "Spa"
    ],
    "recommendedPlace": "Cabina con balcón (Deck alto)",
    "hotel": "Crucero (cabina premium)",
    "includes": [
      "Alojamiento en cabina",
      "Comidas principales a bordo",
      "Shows y entretenimiento",
      "Acceso a piscinas y gimnasio",
      "Itinerario con paradas icónicas"
    ],
    "itinerary": [
      "Miami",
      "Caribbean",
      "Private Island",
      "Miami"
    ],
    "amenities": [
      "Piscinas",
      "Spa",
      "Shows",
      "Restaurantes",
      "Gimnasio",
      "Kids club"
    ],
    "bookingLinks": [
      {
        "label": "Reservar crucero",
        "url": "https://www.msccruisesusa.com/"
      },
      {
        "label": "Ver itinerarios",
        "url": "https://www.cruisecritic.com/"
      },
      {
        "label": "Buscar vuelos",
        "url": "https://www.google.com/travel/flights"
      }
    ],
    "fullName": "MSC Cruises 🚢"
  },
  {
    "id": "royal-caribbean",
    "name": "Royal Caribbean",
    "country": "Crucero",
    "flag": "🚢",
    "category": "crucero",
    "type": "crucero",
    "priceFromUSD": 3700,
    "priceModel": "per_person",
    "coords": [
      25.7617,
      -80.1918
    ],
    "description": "Royal Caribbean ofrece una experiencia de lujo en alta mar pensada para quienes quieren descansar, divertirse y descubrir varios destinos sin cambiar de hotel. A bordo encontrarás espectáculos tipo Broadway, restaurantes temáticos, piscinas, gimnasio y zonas de spa para desconectar con estilo.\\n\\nEl ambiente se siente como un resort flotante: puedes elegir cabinas premium con balcón, disfrutar de cenas especiales y reservar experiencias exclusivas en cada parada. Es ideal si quieres un viaje todo‑en‑uno con comodidad, servicio y entretenimiento de primer nivel.\\n\\nRecomendación: reserva una cabina con balcón en cubierta alta y añade al menos una experiencia premium (spa o cena de autor) para elevar el viaje al máximo.",
    "highlights": [
      "All‑inclusive vibe",
      "Shows",
      "Spa"
    ],
    "recommendedPlace": "Cabina con balcón (Deck alto)",
    "hotel": "Crucero (cabina premium)",
    "includes": [
      "Alojamiento en cabina",
      "Comidas principales a bordo",
      "Shows y entretenimiento",
      "Acceso a piscinas y gimnasio",
      "Itinerario con paradas icónicas"
    ],
    "itinerary": [
      "Miami",
      "Caribbean",
      "Private Island",
      "Miami"
    ],
    "amenities": [
      "Piscinas",
      "Spa",
      "Shows",
      "Restaurantes",
      "Gimnasio",
      "Kids club"
    ],
    "bookingLinks": [
      {
        "label": "Reservar crucero",
        "url": "https://www.royalcaribbean.com/"
      },
      {
        "label": "Ver itinerarios",
        "url": "https://www.cruisecritic.com/"
      },
      {
        "label": "Buscar vuelos",
        "url": "https://www.google.com/travel/flights"
      }
    ],
    "fullName": "Royal Caribbean 🚢"
  },
  {
    "id": "norwegian",
    "name": "Norwegian Cruise Line",
    "country": "Crucero",
    "flag": "🚢",
    "category": "crucero",
    "type": "crucero",
    "priceFromUSD": 3500,
    "priceModel": "per_person",
    "coords": [
      25.7617,
      -80.1918
    ],
    "description": "Norwegian Cruise Line ofrece una experiencia de lujo en alta mar pensada para quienes quieren descansar, divertirse y descubrir varios destinos sin cambiar de hotel. A bordo encontrarás espectáculos tipo Broadway, restaurantes temáticos, piscinas, gimnasio y zonas de spa para desconectar con estilo.\\n\\nEl ambiente se siente como un resort flotante: puedes elegir cabinas premium con balcón, disfrutar de cenas especiales y reservar experiencias exclusivas en cada parada. Es ideal si quieres un viaje todo‑en‑uno con comodidad, servicio y entretenimiento de primer nivel.\\n\\nRecomendación: reserva una cabina con balcón en cubierta alta y añade al menos una experiencia premium (spa o cena de autor) para elevar el viaje al máximo.",
    "highlights": [
      "All‑inclusive vibe",
      "Shows",
      "Spa"
    ],
    "recommendedPlace": "Cabina con balcón (Deck alto)",
    "hotel": "Crucero (cabina premium)",
    "includes": [
      "Alojamiento en cabina",
      "Comidas principales a bordo",
      "Shows y entretenimiento",
      "Acceso a piscinas y gimnasio",
      "Itinerario con paradas icónicas"
    ],
    "itinerary": [
      "Miami",
      "Caribbean",
      "Private Island",
      "Miami"
    ],
    "amenities": [
      "Piscinas",
      "Spa",
      "Shows",
      "Restaurantes",
      "Gimnasio",
      "Kids club"
    ],
    "bookingLinks": [
      {
        "label": "Reservar crucero",
        "url": "https://www.ncl.com/"
      },
      {
        "label": "Ver itinerarios",
        "url": "https://www.cruisecritic.com/"
      },
      {
        "label": "Buscar vuelos",
        "url": "https://www.google.com/travel/flights"
      }
    ],
    "fullName": "Norwegian Cruise Line 🚢"
  },
  {
    "id": "santorini",
    "name": "Santorini",
    "country": "Grecia",
    "flag": "🇬🇷",
    "category": "playa",
    "type": "destino",
    "priceFromUSD": 7800,
    "priceModel": "per_person",
    "coords": [
      36.3932,
      25.4615
    ],
    "description": "Santorini, en Grecia, es una base perfecta para vivir el lado más sofisticado del destino: arquitectura icónica, barrios con personalidad, museos y una escena gastronómica que va desde cocina local auténtica hasta experiencias fine‑dining.\\n\\nEn un viaje estilo Luxury Escape, lo mejor es combinar recorridos privados por los puntos más emblemáticos con momentos de descanso en hoteles bien ubicados en zonas premium. Así puedes moverte fácil, comprar, probar restaurantes top y cerrar el día con rooftops o planes nocturnos.\\n\\nTip pro: camina temprano para ver la ciudad sin multitudes y reserva un tour privado al atardecer para fotos, vistas y una cena especial.",
    "highlights": [
      "Oia sunset",
      "Caldera views",
      "Wine tasting"
    ],
    "activities": [
      "Oia sunset",
      "Catamarán",
      "Cata de vinos"
    ],
    "bookingLinks": [
      {
        "label": "Reservar hotel",
        "url": "https://www.booking.com/"
      },
      {
        "label": "Buscar vuelos",
        "url": "https://www.google.com/travel/flights"
      },
      {
        "label": "Airbnb (opcional)",
        "url": "https://www.airbnb.com/"
      }
    ],
    "fullName": "Santorini 🇬🇷",
    "recommendedPlace": "Zona céntrica de Santorini",
    "includes": [
      "Vuelos ida y vuelta",
      "Hotel 4★ o 5★",
      "Traslados aeropuerto – hotel",
      "Desayunos incluidos",
      "Experiencia exclusiva local"
    ],
    "hotel": "Hotel recomendado en Santorini: Luxury Collection 5★"
  },
  {
    "id": "mykonos",
    "name": "Mykonos",
    "country": "Grecia",
    "flag": "🇬🇷",
    "category": "playa",
    "type": "destino",
    "priceFromUSD": 7200,
    "priceModel": "per_person",
    "coords": [
      37.4467,
      25.3289
    ],
    "description": "Mykonos, en Grecia, es una base perfecta para vivir el lado más sofisticado del destino: arquitectura icónica, barrios con personalidad, museos y una escena gastronómica que va desde cocina local auténtica hasta experiencias fine‑dining.\\n\\nEn un viaje estilo Luxury Escape, lo mejor es combinar recorridos privados por los puntos más emblemáticos con momentos de descanso en hoteles bien ubicados en zonas premium. Así puedes moverte fácil, comprar, probar restaurantes top y cerrar el día con rooftops o planes nocturnos.\\n\\nTip pro: camina temprano para ver la ciudad sin multitudes y reserva un tour privado al atardecer para fotos, vistas y una cena especial.",
    "highlights": [
      "Beach clubs",
      "Little Venice",
      "Old Town"
    ],
    "activities": [
      "Little Venice",
      "Beach clubs",
      "Boat day"
    ],
    "bookingLinks": [
      {
        "label": "Reservar hotel",
        "url": "https://www.booking.com/"
      },
      {
        "label": "Buscar vuelos",
        "url": "https://www.google.com/travel/flights"
      },
      {
        "label": "Airbnb (opcional)",
        "url": "https://www.airbnb.com/"
      }
    ],
    "fullName": "Mykonos 🇬🇷",
    "recommendedPlace": "Zona céntrica de Mykonos",
    "includes": [
      "Vuelos ida y vuelta",
      "Hotel 4★ o 5★",
      "Traslados aeropuerto – hotel",
      "Desayunos incluidos",
      "Experiencia exclusiva local"
    ],
    "hotel": "Hotel recomendado en Mykonos: Luxury Collection 5★"
  },
  {
    "id": "athens",
    "name": "Athens",
    "country": "Grecia",
    "flag": "🇬🇷",
    "category": "ciudad",
    "type": "destino",
    "priceFromUSD": 5200,
    "priceModel": "per_person",
    "coords": [
      37.9838,
      23.7275
    ],
    "description": "Athens, en Grecia, es una base perfecta para vivir el lado más sofisticado del destino: arquitectura icónica, barrios con personalidad, museos y una escena gastronómica que va desde cocina local auténtica hasta experiencias fine‑dining.\\n\\nEn un viaje estilo Luxury Escape, lo mejor es combinar recorridos privados por los puntos más emblemáticos con momentos de descanso en hoteles bien ubicados en zonas premium. Así puedes moverte fácil, comprar, probar restaurantes top y cerrar el día con rooftops o planes nocturnos.\\n\\nTip pro: camina temprano para ver la ciudad sin multitudes y reserva un tour privado al atardecer para fotos, vistas y una cena especial.",
    "highlights": [
      "Acrópolis",
      "Plaka",
      "Rooftops"
    ],
    "activities": [
      "Acrópolis",
      "Plaka walk",
      "Rooftop dinner"
    ],
    "bookingLinks": [
      {
        "label": "Reservar hotel",
        "url": "https://www.booking.com/"
      },
      {
        "label": "Buscar vuelos",
        "url": "https://www.google.com/travel/flights"
      },
      {
        "label": "Airbnb (opcional)",
        "url": "https://www.airbnb.com/"
      }
    ],
    "fullName": "Athens 🇬🇷",
    "recommendedPlace": "Zona céntrica de Athens",
    "includes": [
      "Vuelos ida y vuelta",
      "Hotel 4★ o 5★",
      "Traslados aeropuerto – hotel",
      "Desayunos incluidos",
      "Experiencia exclusiva local"
    ],
    "hotel": "Hotel recomendado en Athens: Luxury Collection 5★"
  },
  {
    "id": "ibiza",
    "name": "Ibiza",
    "country": "España",
    "flag": "🇪🇸",
    "category": "playa",
    "type": "destino",
    "priceFromUSD": 5200,
    "priceModel": "per_person",
    "coords": [
      38.9067,
      1.4206
    ],
    "description": "Ibiza, en España, es una base perfecta para vivir el lado más sofisticado del destino: arquitectura icónica, barrios con personalidad, museos y una escena gastronómica que va desde cocina local auténtica hasta experiencias fine‑dining.\\n\\nEn un viaje estilo Luxury Escape, lo mejor es combinar recorridos privados por los puntos más emblemáticos con momentos de descanso en hoteles bien ubicados en zonas premium. Así puedes moverte fácil, comprar, probar restaurantes top y cerrar el día con rooftops o planes nocturnos.\\n\\nTip pro: camina temprano para ver la ciudad sin multitudes y reserva un tour privado al atardecer para fotos, vistas y una cena especial.",
    "highlights": [
      "Calas",
      "Dalt Vila",
      "Formentera"
    ],
    "activities": [
      "Cala Comte",
      "Dalt Vila",
      "Formentera"
    ],
    "bookingLinks": [
      {
        "label": "Reservar hotel",
        "url": "https://www.booking.com/"
      },
      {
        "label": "Buscar vuelos",
        "url": "https://www.google.com/travel/flights"
      },
      {
        "label": "Airbnb (opcional)",
        "url": "https://www.airbnb.com/"
      }
    ],
    "fullName": "Ibiza 🇪🇸",
    "recommendedPlace": "Zona céntrica de Ibiza",
    "includes": [
      "Vuelos ida y vuelta",
      "Hotel 4★ o 5★",
      "Traslados aeropuerto – hotel",
      "Desayunos incluidos",
      "Experiencia exclusiva local"
    ],
    "hotel": "Hotel recomendado en Ibiza: Luxury Collection 5★"
  },
  {
    "id": "barcelona",
    "name": "Barcelona",
    "country": "España",
    "flag": "🇪🇸",
    "category": "ciudad",
    "type": "destino",
    "priceFromUSD": 4800,
    "priceModel": "per_person",
    "coords": [
      41.3851,
      2.1734
    ],
    "description": "Barcelona, en España, es una base perfecta para vivir el lado más sofisticado del destino: arquitectura icónica, barrios con personalidad, museos y una escena gastronómica que va desde cocina local auténtica hasta experiencias fine‑dining.\\n\\nEn un viaje estilo Luxury Escape, lo mejor es combinar recorridos privados por los puntos más emblemáticos con momentos de descanso en hoteles bien ubicados en zonas premium. Así puedes moverte fácil, comprar, probar restaurantes top y cerrar el día con rooftops o planes nocturnos.\\n\\nTip pro: camina temprano para ver la ciudad sin multitudes y reserva un tour privado al atardecer para fotos, vistas y una cena especial.",
    "highlights": [
      "Sagrada Familia",
      "Gótico",
      "Tapas"
    ],
    "activities": [
      "Sagrada Familia",
      "Gótico",
      "Tapas crawl"
    ],
    "bookingLinks": [
      {
        "label": "Reservar hotel",
        "url": "https://www.booking.com/"
      },
      {
        "label": "Buscar vuelos",
        "url": "https://www.google.com/travel/flights"
      },
      {
        "label": "Airbnb (opcional)",
        "url": "https://www.airbnb.com/"
      }
    ],
    "fullName": "Barcelona 🇪🇸",
    "recommendedPlace": "Zona céntrica de Barcelona",
    "includes": [
      "Vuelos ida y vuelta",
      "Hotel 4★ o 5★",
      "Traslados aeropuerto – hotel",
      "Desayunos incluidos",
      "Experiencia exclusiva local"
    ],
    "hotel": "Hotel recomendado en Barcelona: Luxury Collection 5★"
  },
  {
    "id": "madrid",
    "name": "Madrid",
    "country": "España",
    "flag": "🇪🇸",
    "category": "ciudad",
    "type": "destino",
    "priceFromUSD": 4700,
    "priceModel": "per_person",
    "coords": [
      40.4168,
      -3.7038
    ],
    "description": "Madrid, en España, es una base perfecta para vivir el lado más sofisticado del destino: arquitectura icónica, barrios con personalidad, museos y una escena gastronómica que va desde cocina local auténtica hasta experiencias fine‑dining.\\n\\nEn un viaje estilo Luxury Escape, lo mejor es combinar recorridos privados por los puntos más emblemáticos con momentos de descanso en hoteles bien ubicados en zonas premium. Así puedes moverte fácil, comprar, probar restaurantes top y cerrar el día con rooftops o planes nocturnos.\\n\\nTip pro: camina temprano para ver la ciudad sin multitudes y reserva un tour privado al atardecer para fotos, vistas y una cena especial.",
    "highlights": [
      "Prado",
      "Gran Vía",
      "Tapas"
    ],
    "activities": [
      "Museos",
      "Tapas",
      "Gran Vía"
    ],
    "bookingLinks": [
      {
        "label": "Reservar hotel",
        "url": "https://www.booking.com/"
      },
      {
        "label": "Buscar vuelos",
        "url": "https://www.google.com/travel/flights"
      },
      {
        "label": "Airbnb (opcional)",
        "url": "https://www.airbnb.com/"
      }
    ],
    "fullName": "Madrid 🇪🇸",
    "recommendedPlace": "Zona céntrica de Madrid",
    "includes": [
      "Vuelos ida y vuelta",
      "Hotel 4★ o 5★",
      "Traslados aeropuerto – hotel",
      "Desayunos incluidos",
      "Experiencia exclusiva local"
    ],
    "hotel": "Hotel recomendado en Madrid: Luxury Collection 5★"
  },
  {
    "id": "rio",
    "name": "Rio de Janeiro",
    "country": "Brasil",
    "flag": "🇧🇷",
    "category": "ciudad",
    "type": "destino",
    "priceFromUSD": 3600,
    "priceModel": "per_person",
    "coords": [
      -22.9068,
      -43.1729
    ],
    "description": "Rio de Janeiro, en Brasil, es una base perfecta para vivir el lado más sofisticado del destino: arquitectura icónica, barrios con personalidad, museos y una escena gastronómica que va desde cocina local auténtica hasta experiencias fine‑dining.\\n\\nEn un viaje estilo Luxury Escape, lo mejor es combinar recorridos privados por los puntos más emblemáticos con momentos de descanso en hoteles bien ubicados en zonas premium. Así puedes moverte fácil, comprar, probar restaurantes top y cerrar el día con rooftops o planes nocturnos.\\n\\nTip pro: camina temprano para ver la ciudad sin multitudes y reserva un tour privado al atardecer para fotos, vistas y una cena especial.",
    "highlights": [
      "Cristo",
      "Pan de Azúcar",
      "Ipanema"
    ],
    "activities": [
      "Cristo",
      "Pan de Azúcar",
      "Ipanema"
    ],
    "bookingLinks": [
      {
        "label": "Reservar hotel",
        "url": "https://www.booking.com/"
      },
      {
        "label": "Buscar vuelos",
        "url": "https://www.google.com/travel/flights"
      },
      {
        "label": "Airbnb (opcional)",
        "url": "https://www.airbnb.com/"
      }
    ],
    "fullName": "Rio de Janeiro 🇧🇷",
    "recommendedPlace": "Zona céntrica de Rio de Janeiro",
    "includes": [
      "Vuelos ida y vuelta",
      "Hotel 4★ o 5★",
      "Traslados aeropuerto – hotel",
      "Desayunos incluidos",
      "Experiencia exclusiva local"
    ],
    "hotel": "Hotel recomendado en Rio de Janeiro: Luxury Collection 5★"
  },
  {
    "id": "brasil-capital",
    "name": "Rio de Janeiro (Capital)",
    "country": "Brasil",
    "flag": "🌍",
    "category": "capital",
    "type": "destination",
    "priceFromUSD": 3600,
    "priceModel": "per_person",
    "coords": [
      -15.7939,
      -47.8828
    ],
    "description": "Rio de Janeiro (Capital), en Brasil, es una base perfecta para vivir el lado más sofisticado del destino: arquitectura icónica, barrios con personalidad, museos y una escena gastronómica que va desde cocina local auténtica hasta experiencias fine‑dining.\\n\\nEn un viaje estilo Luxury Escape, lo mejor es combinar recorridos privados por los puntos más emblemáticos con momentos de descanso en hoteles bien ubicados en zonas premium. Así puedes moverte fácil, comprar, probar restaurantes top y cerrar el día con rooftops o planes nocturnos.\\n\\nTip pro: camina temprano para ver la ciudad sin multitudes y reserva un tour privado al atardecer para fotos, vistas y una cena especial.",
    "highlights": [
      "Hoteles top",
      "Experiencias",
      "Gastronomía"
    ],
    "activities": [
      "City tour",
      "Restaurantes",
      "Experiencias locales"
    ],
    "bookingLinks": [
      {
        "label": "Reservar hotel",
        "url": "https://www.booking.com/"
      },
      {
        "label": "Buscar vuelos",
        "url": "https://www.google.com/travel/flights"
      },
      {
        "label": "Airbnb (opcional)",
        "url": "https://www.airbnb.com/"
      }
    ],
    "fullName": "Rio de Janeiro (Capital) 🌍",
    "recommendedPlace": "Zona recomendada en São Paulo",
    "includes": [
      "Vuelos ida y vuelta",
      "Hotel 4★ o 5★",
      "Traslados aeropuerto – hotel",
      "Desayunos incluidos",
      "Experiencia exclusiva local"
    ],
    "hotel": "Hotel recomendado en Capital & City Lights: Luxury Collection 5★"
  },
  {
    "id": "brasil-escape",
    "name": "São Paulo",
    "country": "Brasil",
    "flag": "🌍",
    "category": "escape",
    "type": "destination",
    "priceFromUSD": 4000,
    "priceModel": "per_person",
    "coords": [
      -14.9939,
      -46.9828
    ],
    "description": "São Paulo es la definición de escapada premium en Brasil: paisajes que parecen de película, ambiente relajado y opciones perfectas para desconectar sin renunciar al lujo.\\n\\nCombina días de descanso (piscina, spa, playa) con experiencias privadas: paseos en barco, snorkel/buceo, cenas frente al mar o recorridos panorámicos. El objetivo es que cada día se sienta exclusivo y sin estrés.\\n\\nRecomendación: elige un alojamiento con vista y añade una actividad VIP (boat tour privado o cena de autor) para que el destino se sienta “wow” desde el primer día.",
    "highlights": [
      "Hoteles top",
      "Experiencias",
      "Gastronomía"
    ],
    "activities": [
      "City tour",
      "Restaurantes",
      "Experiencias locales"
    ],
    "bookingLinks": [
      {
        "label": "Reservar hotel",
        "url": "https://www.booking.com/"
      },
      {
        "label": "Buscar vuelos",
        "url": "https://www.google.com/travel/flights"
      },
      {
        "label": "Airbnb (opcional)",
        "url": "https://www.airbnb.com/"
      }
    ],
    "fullName": "São Paulo 🌍",
    "recommendedPlace": "Zona recomendada en Fernando de Noronha",
    "includes": [
      "Vuelos ida y vuelta",
      "Hotel 4★ o 5★",
      "Traslados aeropuerto – hotel",
      "Desayunos incluidos",
      "Experiencia exclusiva local"
    ],
    "hotel": "Hotel recomendado en Luxury Escape: Luxury Collection 5★"
  },
  {
    "id": "hawaii",
    "name": "Hawaii (Oahu)",
    "country": "EEUU",
    "flag": "🇺🇸",
    "category": "playa",
    "type": "destino",
    "priceFromUSD": 5200,
    "priceModel": "per_person",
    "coords": [
      21.3069,
      -157.8583
    ],
    "description": "Hawaii (Oahu), en EEUU, es una base perfecta para vivir el lado más sofisticado del destino: arquitectura icónica, barrios con personalidad, museos y una escena gastronómica que va desde cocina local auténtica hasta experiencias fine‑dining.\\n\\nEn un viaje estilo Luxury Escape, lo mejor es combinar recorridos privados por los puntos más emblemáticos con momentos de descanso en hoteles bien ubicados en zonas premium. Así puedes moverte fácil, comprar, probar restaurantes top y cerrar el día con rooftops o planes nocturnos.\\n\\nTip pro: camina temprano para ver la ciudad sin multitudes y reserva un tour privado al atardecer para fotos, vistas y una cena especial.",
    "highlights": [
      "Waikiki",
      "Diamond Head",
      "Snorkel"
    ],
    "activities": [
      "Surf",
      "Snorkel",
      "Diamond Head"
    ],
    "bookingLinks": [
      {
        "label": "Reservar hotel",
        "url": "https://www.booking.com/"
      },
      {
        "label": "Buscar vuelos",
        "url": "https://www.google.com/travel/flights"
      },
      {
        "label": "Airbnb (opcional)",
        "url": "https://www.airbnb.com/"
      }
    ],
    "fullName": "Hawaii (Oahu) 🇺🇸",
    "recommendedPlace": "Zona céntrica de Hawaii (Oahu)",
    "includes": [
      "Vuelos ida y vuelta",
      "Hotel 4★ o 5★",
      "Traslados aeropuerto – hotel",
      "Desayunos incluidos",
      "Experiencia exclusiva local"
    ],
    "hotel": "Hotel recomendado en Hawaii (Oahu): Luxury Collection 5★"
  },
  {
    "id": "nyc",
    "name": "New York",
    "country": "EEUU",
    "flag": "🇺🇸",
    "category": "ciudad",
    "type": "destino",
    "priceFromUSD": 6200,
    "priceModel": "per_person",
    "coords": [
      40.7128,
      -74.006
    ],
    "description": "New York, en EEUU, es una base perfecta para vivir el lado más sofisticado del destino: arquitectura icónica, barrios con personalidad, museos y una escena gastronómica que va desde cocina local auténtica hasta experiencias fine‑dining.\\n\\nEn un viaje estilo Luxury Escape, lo mejor es combinar recorridos privados por los puntos más emblemáticos con momentos de descanso en hoteles bien ubicados en zonas premium. Así puedes moverte fácil, comprar, probar restaurantes top y cerrar el día con rooftops o planes nocturnos.\\n\\nTip pro: camina temprano para ver la ciudad sin multitudes y reserva un tour privado al atardecer para fotos, vistas y una cena especial.",
    "highlights": [
      "Broadway",
      "Central Park",
      "Museos"
    ],
    "activities": [
      "Broadway",
      "Central Park",
      "Museos"
    ],
    "bookingLinks": [
      {
        "label": "Reservar hotel",
        "url": "https://www.booking.com/"
      },
      {
        "label": "Buscar vuelos",
        "url": "https://www.google.com/travel/flights"
      },
      {
        "label": "Airbnb (opcional)",
        "url": "https://www.airbnb.com/"
      }
    ],
    "fullName": "New York 🇺🇸",
    "recommendedPlace": "Zona céntrica de New York",
    "includes": [
      "Vuelos ida y vuelta",
      "Hotel 4★ o 5★",
      "Traslados aeropuerto – hotel",
      "Desayunos incluidos",
      "Experiencia exclusiva local"
    ],
    "hotel": "Hotel recomendado en New York: Luxury Collection 5★"
  },
  {
    "id": "miami",
    "name": "Miami",
    "country": "EEUU",
    "flag": "🇺🇸",
    "category": "playa",
    "type": "destino",
    "priceFromUSD": 5200,
    "priceModel": "per_person",
    "coords": [
      25.7617,
      -80.1918
    ],
    "description": "Miami, en EEUU, es una base perfecta para vivir el lado más sofisticado del destino: arquitectura icónica, barrios con personalidad, museos y una escena gastronómica que va desde cocina local auténtica hasta experiencias fine‑dining.\\n\\nEn un viaje estilo Luxury Escape, lo mejor es combinar recorridos privados por los puntos más emblemáticos con momentos de descanso en hoteles bien ubicados en zonas premium. Así puedes moverte fácil, comprar, probar restaurantes top y cerrar el día con rooftops o planes nocturnos.\\n\\nTip pro: camina temprano para ver la ciudad sin multitudes y reserva un tour privado al atardecer para fotos, vistas y una cena especial.",
    "highlights": [
      "South Beach",
      "Wynwood",
      "Rooftops"
    ],
    "activities": [
      "South Beach",
      "Wynwood",
      "Boat"
    ],
    "bookingLinks": [
      {
        "label": "Reservar hotel",
        "url": "https://www.booking.com/"
      },
      {
        "label": "Buscar vuelos",
        "url": "https://www.google.com/travel/flights"
      },
      {
        "label": "Airbnb (opcional)",
        "url": "https://www.airbnb.com/"
      }
    ],
    "fullName": "Miami 🇺🇸",
    "recommendedPlace": "Zona céntrica de Miami",
    "includes": [
      "Vuelos ida y vuelta",
      "Hotel 4★ o 5★",
      "Traslados aeropuerto – hotel",
      "Desayunos incluidos",
      "Experiencia exclusiva local"
    ],
    "hotel": "Hotel recomendado en Miami: Luxury Collection 5★"
  },
  {
    "id": "phuket",
    "name": "Phuket",
    "country": "Tailandia",
    "flag": "🇹🇭",
    "category": "playa",
    "type": "destino",
    "priceFromUSD": 3900,
    "priceModel": "per_person",
    "coords": [
      7.8804,
      98.3923
    ],
    "description": "Phuket, en Tailandia, es una base perfecta para vivir el lado más sofisticado del destino: arquitectura icónica, barrios con personalidad, museos y una escena gastronómica que va desde cocina local auténtica hasta experiencias fine‑dining.\\n\\nEn un viaje estilo Luxury Escape, lo mejor es combinar recorridos privados por los puntos más emblemáticos con momentos de descanso en hoteles bien ubicados en zonas premium. Así puedes moverte fácil, comprar, probar restaurantes top y cerrar el día con rooftops o planes nocturnos.\\n\\nTip pro: camina temprano para ver la ciudad sin multitudes y reserva un tour privado al atardecer para fotos, vistas y una cena especial.",
    "highlights": [
      "Island hopping",
      "Markets",
      "Villas"
    ],
    "activities": [
      "Phi Phi",
      "Mercado nocturno",
      "Snorkel"
    ],
    "bookingLinks": [
      {
        "label": "Reservar hotel",
        "url": "https://www.booking.com/"
      },
      {
        "label": "Buscar vuelos",
        "url": "https://www.google.com/travel/flights"
      },
      {
        "label": "Airbnb (opcional)",
        "url": "https://www.airbnb.com/"
      }
    ],
    "fullName": "Phuket 🇹🇭",
    "recommendedPlace": "Zona céntrica de Phuket",
    "includes": [
      "Vuelos ida y vuelta",
      "Hotel 4★ o 5★",
      "Traslados aeropuerto – hotel",
      "Desayunos incluidos",
      "Experiencia exclusiva local"
    ],
    "hotel": "Hotel recomendado en Phuket: Luxury Collection 5★"
  },
  {
    "id": "bangkok",
    "name": "Bangkok",
    "country": "Tailandia",
    "flag": "🇹🇭",
    "category": "ciudad",
    "type": "destino",
    "priceFromUSD": 3600,
    "priceModel": "per_person",
    "coords": [
      13.7563,
      100.5018
    ],
    "description": "Bangkok, en Tailandia, es una base perfecta para vivir el lado más sofisticado del destino: arquitectura icónica, barrios con personalidad, museos y una escena gastronómica que va desde cocina local auténtica hasta experiencias fine‑dining.\\n\\nEn un viaje estilo Luxury Escape, lo mejor es combinar recorridos privados por los puntos más emblemáticos con momentos de descanso en hoteles bien ubicados en zonas premium. Así puedes moverte fácil, comprar, probar restaurantes top y cerrar el día con rooftops o planes nocturnos.\\n\\nTip pro: camina temprano para ver la ciudad sin multitudes y reserva un tour privado al atardecer para fotos, vistas y una cena especial.",
    "highlights": [
      "Wat Arun",
      "Markets",
      "Rooftops"
    ],
    "activities": [
      "Templos",
      "Mercados",
      "Rooftop"
    ],
    "bookingLinks": [
      {
        "label": "Reservar hotel",
        "url": "https://www.booking.com/"
      },
      {
        "label": "Buscar vuelos",
        "url": "https://www.google.com/travel/flights"
      },
      {
        "label": "Airbnb (opcional)",
        "url": "https://www.airbnb.com/"
      }
    ],
    "fullName": "Bangkok 🇹🇭",
    "recommendedPlace": "Zona céntrica de Bangkok",
    "includes": [
      "Vuelos ida y vuelta",
      "Hotel 4★ o 5★",
      "Traslados aeropuerto – hotel",
      "Desayunos incluidos",
      "Experiencia exclusiva local"
    ],
    "hotel": "Hotel recomendado en Bangkok: Luxury Collection 5★"
  },
  {
    "id": "krabi",
    "name": "Krabi",
    "country": "Tailandia",
    "flag": "🇹🇭",
    "category": "playa",
    "type": "destino",
    "priceFromUSD": 3900,
    "priceModel": "per_person",
    "coords": [
      8.0863,
      98.9063
    ],
    "description": "Krabi, en Tailandia, es una base perfecta para vivir el lado más sofisticado del destino: arquitectura icónica, barrios con personalidad, museos y una escena gastronómica que va desde cocina local auténtica hasta experiencias fine‑dining.\\n\\nEn un viaje estilo Luxury Escape, lo mejor es combinar recorridos privados por los puntos más emblemáticos con momentos de descanso en hoteles bien ubicados en zonas premium. Así puedes moverte fácil, comprar, probar restaurantes top y cerrar el día con rooftops o planes nocturnos.\\n\\nTip pro: camina temprano para ver la ciudad sin multitudes y reserva un tour privado al atardecer para fotos, vistas y una cena especial.",
    "highlights": [
      "Railay",
      "Islands",
      "Snorkel"
    ],
    "activities": [
      "Island hopping",
      "Railay",
      "Snorkel"
    ],
    "bookingLinks": [
      {
        "label": "Reservar hotel",
        "url": "https://www.booking.com/"
      },
      {
        "label": "Buscar vuelos",
        "url": "https://www.google.com/travel/flights"
      },
      {
        "label": "Airbnb (opcional)",
        "url": "https://www.airbnb.com/"
      }
    ],
    "fullName": "Krabi 🇹🇭",
    "recommendedPlace": "Zona céntrica de Krabi",
    "includes": [
      "Vuelos ida y vuelta",
      "Hotel 4★ o 5★",
      "Traslados aeropuerto – hotel",
      "Desayunos incluidos",
      "Experiencia exclusiva local"
    ],
    "hotel": "Hotel recomendado en Krabi: Luxury Collection 5★"
  },
  {
    "id": "dubai",
    "name": "Dubai",
    "country": "Emiratos Árabes Unidos",
    "flag": "🇦🇪",
    "category": "capital",
    "type": "destino",
    "priceFromUSD": 6500,
    "priceModel": "per_person",
    "coords": [
      25.2048,
      55.2708
    ],
    "description": "Dubai 1, en Emiratos Árabes Unidos, es una base perfecta para vivir el lado más sofisticado del destino: arquitectura icónica, barrios con personalidad, museos y una escena gastronómica que va desde cocina local auténtica hasta experiencias fine‑dining.\\n\\nEn un viaje estilo Luxury Escape, lo mejor es combinar recorridos privados por los puntos más emblemáticos con momentos de descanso en hoteles bien ubicados en zonas premium. Así puedes moverte fácil, comprar, probar restaurantes top y cerrar el día con rooftops o planes nocturnos.\\n\\nTip pro: camina temprano para ver la ciudad sin multitudes y reserva un tour privado al atardecer para fotos, vistas y una cena especial.",
    "highlights": [
      "Skyline",
      "Desert safari",
      "Beach clubs"
    ],
    "activities": [
      "Safari",
      "Burj Khalifa",
      "Marina"
    ],
    "bookingLinks": [
      {
        "label": "Reservar hotel",
        "url": "https://www.booking.com/"
      },
      {
        "label": "Buscar vuelos",
        "url": "https://www.google.com/travel/flights"
      },
      {
        "label": "Airbnb (opcional)",
        "url": "https://www.airbnb.com/"
      }
    ],
    "fullName": "Dubai 🇦🇪",
    "recommendedPlace": "Zona céntrica de Dubai",
    "includes": [
      "Vuelos ida y vuelta",
      "Hotel 4★ o 5★",
      "Traslados aeropuerto – hotel",
      "Desayunos incluidos",
      "Experiencia exclusiva local"
    ],
    "hotel": "Hotel recomendado en Dubai: Luxury Collection 5★"
  },
  {
    "id": "emiratos-arabes-unidos-capital",
    "name": "Ras Al Khaimah",
    "country": "Emiratos Árabes Unidos",
    "flag": "🌍",
    "category": "nature",
    "type": "destination",
    "priceFromUSD": 6500,
    "priceModel": "per_person",
    "coords": [
      24.4539,
      54.3773
    ],
    "description": "Dubai, en Emiratos Árabes Unidos, es una base perfecta para vivir el lado más sofisticado del destino: arquitectura icónica, barrios con personalidad, museos y una escena gastronómica que va desde cocina local auténtica hasta experiencias fine‑dining.\\n\\nEn un viaje estilo Luxury Escape, lo mejor es combinar recorridos privados por los puntos más emblemáticos con momentos de descanso en hoteles bien ubicados en zonas premium. Así puedes moverte fácil, comprar, probar restaurantes top y cerrar el día con rooftops o planes nocturnos.\\n\\nTip pro: camina temprano para ver la ciudad sin multitudes y reserva un tour privado al atardecer para fotos, vistas y una cena especial.",
    "highlights": [
      "Hoteles top",
      "Experiencias",
      "Gastronomía"
    ],
    "activities": [
      "City tour",
      "Restaurantes",
      "Experiencias locales"
    ],
    "bookingLinks": [
      {
        "label": "Reservar hotel",
        "url": "https://www.booking.com/"
      },
      {
        "label": "Buscar vuelos",
        "url": "https://www.google.com/travel/flights"
      },
      {
        "label": "Airbnb (opcional)",
        "url": "https://www.airbnb.com/"
      }
    ],
    "fullName": "Ras Al Khaimah 🌍",
    "recommendedPlace": "Centro de Dubai",
    "includes": [
      "Vuelos ida y vuelta",
      "Hotel 4★ o 5★",
      "Traslados aeropuerto – hotel",
      "Desayunos incluidos",
      "Experiencia exclusiva local"
    ],
    "hotel": "Hotel recomendado en Capital & City Lights: Luxury Collection 5★"
  },
  {
    "id": "emiratos-arabes-unidos-escape",
    "name": "Abu Dhabi",
    "country": "Emiratos Árabes Unidos",
    "flag": "🌍",
    "category": "escape",
    "type": "destination",
    "priceFromUSD": 6900,
    "priceModel": "per_person",
    "coords": [
      25.2539,
      55.2773
    ],
    "description": "Abu Dhabi es la definición de escapada premium en Emiratos Árabes Unidos: paisajes que parecen de película, ambiente relajado y opciones perfectas para desconectar sin renunciar al lujo.\\n\\nCombina días de descanso (piscina, spa, playa) con experiencias privadas: paseos en barco, snorkel/buceo, cenas frente al mar o recorridos panorámicos. El objetivo es que cada día se sienta exclusivo y sin estrés.\\n\\nRecomendación: elige un alojamiento con vista y añade una actividad VIP (boat tour privado o cena de autor) para que el destino se sienta “wow” desde el primer día.",
    "highlights": [
      "Hoteles top",
      "Experiencias",
      "Gastronomía"
    ],
    "activities": [
      "City tour",
      "Restaurantes",
      "Experiencias locales"
    ],
    "bookingLinks": [
      {
        "label": "Reservar hotel",
        "url": "https://www.booking.com/"
      },
      {
        "label": "Buscar vuelos",
        "url": "https://www.google.com/travel/flights"
      },
      {
        "label": "Airbnb (opcional)",
        "url": "https://www.airbnb.com/"
      }
    ],
    "fullName": "Abu Dhabi 🌍",
    "recommendedPlace": "Zona premium de Abu Dhabi",
    "includes": [
      "Vuelos ida y vuelta",
      "Hotel 4★ o 5★",
      "Traslados aeropuerto – hotel",
      "Desayunos incluidos",
      "Experiencia exclusiva local"
    ],
    "hotel": "Hotel recomendado en Luxury Escape: Luxury Collection 5★"
  },
  {
    "id": "paris",
    "name": "Paris",
    "country": "Francia",
    "flag": "🇫🇷",
    "category": "ciudad",
    "type": "destino",
    "priceFromUSD": 6700,
    "priceModel": "per_person",
    "coords": [
      48.8566,
      2.3522
    ],
    "description": "Paris, en Francia, es una base perfecta para vivir el lado más sofisticado del destino: arquitectura icónica, barrios con personalidad, museos y una escena gastronómica que va desde cocina local auténtica hasta experiencias fine‑dining.\\n\\nEn un viaje estilo Luxury Escape, lo mejor es combinar recorridos privados por los puntos más emblemáticos con momentos de descanso en hoteles bien ubicados en zonas premium. Así puedes moverte fácil, comprar, probar restaurantes top y cerrar el día con rooftops o planes nocturnos.\\n\\nTip pro: camina temprano para ver la ciudad sin multitudes y reserva un tour privado al atardecer para fotos, vistas y una cena especial.",
    "highlights": [
      "Eiffel",
      "Museos",
      "Cafés"
    ],
    "activities": [
      "Museo",
      "Paseo Sena",
      "Café tour"
    ],
    "bookingLinks": [
      {
        "label": "Reservar hotel",
        "url": "https://www.booking.com/"
      },
      {
        "label": "Buscar vuelos",
        "url": "https://www.google.com/travel/flights"
      },
      {
        "label": "Airbnb (opcional)",
        "url": "https://www.airbnb.com/"
      }
    ],
    "fullName": "Paris 🇫🇷",
    "recommendedPlace": "Zona céntrica de Paris",
    "includes": [
      "Vuelos ida y vuelta",
      "Hotel 4★ o 5★",
      "Traslados aeropuerto – hotel",
      "Desayunos incluidos",
      "Experiencia exclusiva local"
    ],
    "hotel": "Hotel recomendado en Paris: Luxury Collection 5★"
  },
  {
    "id": "nice",
    "name": "Nice",
    "country": "Francia",
    "flag": "🇫🇷",
    "category": "playa",
    "type": "destino",
    "priceFromUSD": 6900,
    "priceModel": "per_person",
    "coords": [
      43.7102,
      7.262
    ],
    "description": "Nice, en Francia, es una base perfecta para vivir el lado más sofisticado del destino: arquitectura icónica, barrios con personalidad, museos y una escena gastronómica que va desde cocina local auténtica hasta experiencias fine‑dining.\\n\\nEn un viaje estilo Luxury Escape, lo mejor es combinar recorridos privados por los puntos más emblemáticos con momentos de descanso en hoteles bien ubicados en zonas premium. Así puedes moverte fácil, comprar, probar restaurantes top y cerrar el día con rooftops o planes nocturnos.\\n\\nTip pro: camina temprano para ver la ciudad sin multitudes y reserva un tour privado al atardecer para fotos, vistas y una cena especial.",
    "highlights": [
      "Promenade",
      "Old Town",
      "Day trips"
    ],
    "activities": [
      "Promenade",
      "Old Town",
      "Monaco trip"
    ],
    "bookingLinks": [
      {
        "label": "Reservar hotel",
        "url": "https://www.booking.com/"
      },
      {
        "label": "Buscar vuelos",
        "url": "https://www.google.com/travel/flights"
      },
      {
        "label": "Airbnb (opcional)",
        "url": "https://www.airbnb.com/"
      }
    ],
    "fullName": "Nice 🇫🇷",
    "recommendedPlace": "Zona céntrica de Nice",
    "includes": [
      "Vuelos ida y vuelta",
      "Hotel 4★ o 5★",
      "Traslados aeropuerto – hotel",
      "Desayunos incluidos",
      "Experiencia exclusiva local"
    ],
    "hotel": "Hotel recomendado en Nice: Luxury Collection 5★"
  },
  {
    "id": "provence",
    "name": "Provence",
    "country": "Francia",
    "flag": "🇫🇷",
    "category": "naturaleza",
    "type": "destino",
    "priceFromUSD": 6600,
    "priceModel": "per_person",
    "coords": [
      43.9493,
      4.8055
    ],
    "description": "Provence, en Francia, es una base perfecta para vivir el lado más sofisticado del destino: arquitectura icónica, barrios con personalidad, museos y una escena gastronómica que va desde cocina local auténtica hasta experiencias fine‑dining.\\n\\nEn un viaje estilo Luxury Escape, lo mejor es combinar recorridos privados por los puntos más emblemáticos con momentos de descanso en hoteles bien ubicados en zonas premium. Así puedes moverte fácil, comprar, probar restaurantes top y cerrar el día con rooftops o planes nocturnos.\\n\\nTip pro: camina temprano para ver la ciudad sin multitudes y reserva un tour privado al atardecer para fotos, vistas y una cena especial.",
    "highlights": [
      "Villages",
      "Lavender",
      "Wine"
    ],
    "activities": [
      "Villages",
      "Wine tasting",
      "Markets"
    ],
    "bookingLinks": [
      {
        "label": "Reservar hotel",
        "url": "https://www.booking.com/"
      },
      {
        "label": "Buscar vuelos",
        "url": "https://www.google.com/travel/flights"
      },
      {
        "label": "Airbnb (opcional)",
        "url": "https://www.airbnb.com/"
      }
    ],
    "fullName": "Provence 🇫🇷",
    "recommendedPlace": "Zona céntrica de Provence",
    "includes": [
      "Vuelos ida y vuelta",
      "Hotel 4★ o 5★",
      "Traslados aeropuerto – hotel",
      "Desayunos incluidos",
      "Experiencia exclusiva local"
    ],
    "hotel": "Hotel recomendado en Provence: Luxury Collection 5★"
  },
  {
    "id": "tokyo",
    "name": "Tokyo",
    "country": "Japón",
    "flag": "🇯🇵",
    "category": "ciudad",
    "type": "destino",
    "priceFromUSD": 6900,
    "priceModel": "per_person",
    "coords": [
      35.6762,
      139.6503
    ],
    "description": "Tokyo, en Japón, es una base perfecta para vivir el lado más sofisticado del destino: arquitectura icónica, barrios con personalidad, museos y una escena gastronómica que va desde cocina local auténtica hasta experiencias fine‑dining.\\n\\nEn un viaje estilo Luxury Escape, lo mejor es combinar recorridos privados por los puntos más emblemáticos con momentos de descanso en hoteles bien ubicados en zonas premium. Así puedes moverte fácil, comprar, probar restaurantes top y cerrar el día con rooftops o planes nocturnos.\\n\\nTip pro: camina temprano para ver la ciudad sin multitudes y reserva un tour privado al atardecer para fotos, vistas y una cena especial.",
    "highlights": [
      "Shibuya",
      "Asakusa",
      "Food"
    ],
    "activities": [
      "Shibuya",
      "Templo",
      "Omakase"
    ],
    "bookingLinks": [
      {
        "label": "Reservar hotel",
        "url": "https://www.booking.com/"
      },
      {
        "label": "Buscar vuelos",
        "url": "https://www.google.com/travel/flights"
      },
      {
        "label": "Airbnb (opcional)",
        "url": "https://www.airbnb.com/"
      }
    ],
    "fullName": "Tokyo 🇯🇵",
    "recommendedPlace": "Zona céntrica de Tokyo",
    "includes": [
      "Vuelos ida y vuelta",
      "Hotel 4★ o 5★",
      "Traslados aeropuerto – hotel",
      "Desayunos incluidos",
      "Experiencia exclusiva local"
    ],
    "hotel": "Hotel recomendado en Tokyo: Luxury Collection 5★"
  },
  {
    "id": "kyoto",
    "name": "Kyoto",
    "country": "Japón",
    "flag": "🇯🇵",
    "category": "ciudad",
    "type": "destino",
    "priceFromUSD": 6400,
    "priceModel": "per_person",
    "coords": [
      35.0116,
      135.7681
    ],
    "description": "Kyoto, en Japón, es una base perfecta para vivir el lado más sofisticado del destino: arquitectura icónica, barrios con personalidad, museos y una escena gastronómica que va desde cocina local auténtica hasta experiencias fine‑dining.\\n\\nEn un viaje estilo Luxury Escape, lo mejor es combinar recorridos privados por los puntos más emblemáticos con momentos de descanso en hoteles bien ubicados en zonas premium. Así puedes moverte fácil, comprar, probar restaurantes top y cerrar el día con rooftops o planes nocturnos.\\n\\nTip pro: camina temprano para ver la ciudad sin multitudes y reserva un tour privado al atardecer para fotos, vistas y una cena especial.",
    "highlights": [
      "Fushimi Inari",
      "Gion",
      "Templos"
    ],
    "activities": [
      "Templos",
      "Gion",
      "Tea experience"
    ],
    "bookingLinks": [
      {
        "label": "Reservar hotel",
        "url": "https://www.booking.com/"
      },
      {
        "label": "Buscar vuelos",
        "url": "https://www.google.com/travel/flights"
      },
      {
        "label": "Airbnb (opcional)",
        "url": "https://www.airbnb.com/"
      }
    ],
    "fullName": "Kyoto 🇯🇵",
    "recommendedPlace": "Zona céntrica de Kyoto",
    "includes": [
      "Vuelos ida y vuelta",
      "Hotel 4★ o 5★",
      "Traslados aeropuerto – hotel",
      "Desayunos incluidos",
      "Experiencia exclusiva local"
    ],
    "hotel": "Hotel recomendado en Kyoto: Luxury Collection 5★"
  },
  {
    "id": "osaka",
    "name": "Osaka",
    "country": "Japón",
    "flag": "🇯🇵",
    "category": "ciudad",
    "type": "destino",
    "priceFromUSD": 6200,
    "priceModel": "per_person",
    "coords": [
      34.6937,
      135.5023
    ],
    "description": "Osaka, en Japón, es una base perfecta para vivir el lado más sofisticado del destino: arquitectura icónica, barrios con personalidad, museos y una escena gastronómica que va desde cocina local auténtica hasta experiencias fine‑dining.\\n\\nEn un viaje estilo Luxury Escape, lo mejor es combinar recorridos privados por los puntos más emblemáticos con momentos de descanso en hoteles bien ubicados en zonas premium. Así puedes moverte fácil, comprar, probar restaurantes top y cerrar el día con rooftops o planes nocturnos.\\n\\nTip pro: camina temprano para ver la ciudad sin multitudes y reserva un tour privado al atardecer para fotos, vistas y una cena especial.",
    "highlights": [
      "Dotonbori",
      "Street food",
      "Castillo"
    ],
    "activities": [
      "Dotonbori",
      "Street food",
      "Castle"
    ],
    "bookingLinks": [
      {
        "label": "Reservar hotel",
        "url": "https://www.booking.com/"
      },
      {
        "label": "Buscar vuelos",
        "url": "https://www.google.com/travel/flights"
      },
      {
        "label": "Airbnb (opcional)",
        "url": "https://www.airbnb.com/"
      }
    ],
    "fullName": "Osaka 🇯🇵",
    "recommendedPlace": "Zona céntrica de Osaka",
    "includes": [
      "Vuelos ida y vuelta",
      "Hotel 4★ o 5★",
      "Traslados aeropuerto – hotel",
      "Desayunos incluidos",
      "Experiencia exclusiva local"
    ],
    "hotel": "Hotel recomendado en Osaka: Luxury Collection 5★"
  },
  {
    "id": "cancun",
    "name": "Cancún",
    "country": "México",
    "flag": "🇲🇽",
    "category": "playa",
    "type": "destino",
    "priceFromUSD": 3200,
    "priceModel": "per_person",
    "coords": [
      21.1619,
      -86.8515
    ],
    "description": "Cancún, en México, es una base perfecta para vivir el lado más sofisticado del destino: arquitectura icónica, barrios con personalidad, museos y una escena gastronómica que va desde cocina local auténtica hasta experiencias fine‑dining.\\n\\nEn un viaje estilo Luxury Escape, lo mejor es combinar recorridos privados por los puntos más emblemáticos con momentos de descanso en hoteles bien ubicados en zonas premium. Así puedes moverte fácil, comprar, probar restaurantes top y cerrar el día con rooftops o planes nocturnos.\\n\\nTip pro: camina temprano para ver la ciudad sin multitudes y reserva un tour privado al atardecer para fotos, vistas y una cena especial.",
    "highlights": [
      "Caribbean",
      "All-inclusive",
      "Tours"
    ],
    "activities": [
      "Playa",
      "Isla Mujeres",
      "Cenotes"
    ],
    "bookingLinks": [
      {
        "label": "Reservar hotel",
        "url": "https://www.booking.com/"
      },
      {
        "label": "Buscar vuelos",
        "url": "https://www.google.com/travel/flights"
      },
      {
        "label": "Airbnb (opcional)",
        "url": "https://www.airbnb.com/"
      }
    ],
    "fullName": "Cancún 🇲🇽",
    "recommendedPlace": "Zona céntrica de Cancún",
    "includes": [
      "Vuelos ida y vuelta",
      "Hotel 4★ o 5★",
      "Traslados aeropuerto – hotel",
      "Desayunos incluidos",
      "Experiencia exclusiva local"
    ],
    "hotel": "Hotel recomendado en Cancún: Luxury Collection 5★"
  },
  {
    "id": "tulum",
    "name": "Tulum",
    "country": "México",
    "flag": "🇲🇽",
    "category": "playa",
    "type": "destino",
    "priceFromUSD": 3600,
    "priceModel": "per_person",
    "coords": [
      20.2114,
      -87.4654
    ],
    "description": "Tulum, en México, es una base perfecta para vivir el lado más sofisticado del destino: arquitectura icónica, barrios con personalidad, museos y una escena gastronómica que va desde cocina local auténtica hasta experiencias fine‑dining.\\n\\nEn un viaje estilo Luxury Escape, lo mejor es combinar recorridos privados por los puntos más emblemáticos con momentos de descanso en hoteles bien ubicados en zonas premium. Así puedes moverte fácil, comprar, probar restaurantes top y cerrar el día con rooftops o planes nocturnos.\\n\\nTip pro: camina temprano para ver la ciudad sin multitudes y reserva un tour privado al atardecer para fotos, vistas y una cena especial.",
    "highlights": [
      "Cenotes",
      "Ruinas",
      "Beach"
    ],
    "activities": [
      "Cenotes",
      "Ruinas",
      "Beach clubs"
    ],
    "bookingLinks": [
      {
        "label": "Reservar hotel",
        "url": "https://www.booking.com/"
      },
      {
        "label": "Buscar vuelos",
        "url": "https://www.google.com/travel/flights"
      },
      {
        "label": "Airbnb (opcional)",
        "url": "https://www.airbnb.com/"
      }
    ],
    "fullName": "Tulum 🇲🇽",
    "recommendedPlace": "Zona céntrica de Tulum",
    "includes": [
      "Vuelos ida y vuelta",
      "Hotel 4★ o 5★",
      "Traslados aeropuerto – hotel",
      "Desayunos incluidos",
      "Experiencia exclusiva local"
    ],
    "hotel": "Hotel recomendado en Tulum: Luxury Collection 5★"
  },
  {
    "id": "cdmx",
    "name": "Ciudad de México",
    "country": "México",
    "flag": "🇲🇽",
    "category": "ciudad",
    "type": "destino",
    "priceFromUSD": 3000,
    "priceModel": "per_person",
    "coords": [
      19.4326,
      -99.1332
    ],
    "description": "Ciudad de México, en México, es una base perfecta para vivir el lado más sofisticado del destino: arquitectura icónica, barrios con personalidad, museos y una escena gastronómica que va desde cocina local auténtica hasta experiencias fine‑dining.\\n\\nEn un viaje estilo Luxury Escape, lo mejor es combinar recorridos privados por los puntos más emblemáticos con momentos de descanso en hoteles bien ubicados en zonas premium. Así puedes moverte fácil, comprar, probar restaurantes top y cerrar el día con rooftops o planes nocturnos.\\n\\nTip pro: camina temprano para ver la ciudad sin multitudes y reserva un tour privado al atardecer para fotos, vistas y una cena especial.",
    "highlights": [
      "Roma/Condesa",
      "Museos",
      "Gastronomía"
    ],
    "activities": [
      "Food tour",
      "Museos",
      "Barrios"
    ],
    "bookingLinks": [
      {
        "label": "Reservar hotel",
        "url": "https://www.booking.com/"
      },
      {
        "label": "Buscar vuelos",
        "url": "https://www.google.com/travel/flights"
      },
      {
        "label": "Airbnb (opcional)",
        "url": "https://www.airbnb.com/"
      }
    ],
    "fullName": "Ciudad de México 🇲🇽",
    "recommendedPlace": "Zona céntrica de Ciudad de México",
    "includes": [
      "Vuelos ida y vuelta",
      "Hotel 4★ o 5★",
      "Traslados aeropuerto – hotel",
      "Desayunos incluidos",
      "Experiencia exclusiva local"
    ],
    "hotel": "Hotel recomendado en Ciudad de México: Luxury Collection 5★"
  },
  {
    "id": "punta-cana",
    "name": "Punta Cana",
    "country": "República Dominicana",
    "flag": "🇩🇴",
    "category": "escape",
    "type": "destino",
    "priceFromUSD": 2800,
    "priceModel": "per_person",
    "coords": [
      18.5601,
      -68.3725
    ],
    "description": "Santo Domingo, en República Dominicana, es una base perfecta para vivir el lado más sofisticado del destino: arquitectura icónica, barrios con personalidad, museos y una escena gastronómica que va desde cocina local auténtica hasta experiencias fine‑dining.\\n\\nEn un viaje estilo Luxury Escape, lo mejor es combinar recorridos privados por los puntos más emblemáticos con momentos de descanso en hoteles bien ubicados en zonas premium. Así puedes moverte fácil, comprar, probar restaurantes top y cerrar el día con rooftops o planes nocturnos.\\n\\nTip pro: camina temprano para ver la ciudad sin multitudes y reserva un tour privado al atardecer para fotos, vistas y una cena especial.",
    "highlights": [
      "Hoteles top",
      "Experiencias",
      "Gastronomía"
    ],
    "activities": [
      "City tour",
      "Restaurantes",
      "Experiencias locales"
    ],
    "bookingLinks": [
      {
        "label": "Reservar hotel",
        "url": "https://www.booking.com/"
      },
      {
        "label": "Buscar vuelos",
        "url": "https://www.google.com/travel/flights"
      },
      {
        "label": "Airbnb (opcional)",
        "url": "https://www.airbnb.com/"
      }
    ],
    "fullName": "Punta Cana 🇩🇴",
    "recommendedPlace": "Zona recomendada en Punta Cana Escape",
    "includes": [
      "Vuelos ida y vuelta",
      "Hotel 4★ o 5★",
      "Traslados aeropuerto – hotel",
      "Desayunos incluidos",
      "Experiencia exclusiva local"
    ],
    "hotel": "Hotel recomendado en Luxury Escape: Luxury Collection 5★",
    "amenities": null,
    "itinerary": null
  },
  {
    "id": "republica-dominicana-capital",
    "name": "Santo Domingo",
    "country": "República Dominicana",
    "flag": "🌍",
    "category": "capital",
    "type": "destination",
    "priceFromUSD": 3600,
    "priceModel": "per_person",
    "coords": [
      18.4861,
      -69.9312
    ],
    "description": "Punta Cana (Capital), en República Dominicana, es una base perfecta para vivir el lado más sofisticado del destino: arquitectura icónica, barrios con personalidad, museos y una escena gastronómica que va desde cocina local auténtica hasta experiencias fine‑dining.\\n\\nEn un viaje estilo Luxury Escape, lo mejor es combinar recorridos privados por los puntos más emblemáticos con momentos de descanso en hoteles bien ubicados en zonas premium. Así puedes moverte fácil, comprar, probar restaurantes top y cerrar el día con rooftops o planes nocturnos.\\n\\nTip pro: camina temprano para ver la ciudad sin multitudes y reserva un tour privado al atardecer para fotos, vistas y una cena especial.",
    "highlights": [
      "Hoteles top",
      "Experiencias",
      "Gastronomía"
    ],
    "activities": [
      "City tour",
      "Restaurantes",
      "Experiencias locales"
    ],
    "bookingLinks": [
      {
        "label": "Reservar hotel",
        "url": "https://www.booking.com/"
      },
      {
        "label": "Buscar vuelos",
        "url": "https://www.google.com/travel/flights"
      },
      {
        "label": "Airbnb (opcional)",
        "url": "https://www.airbnb.com/"
      }
    ],
    "fullName": "Santo Domingo 🌍",
    "recommendedPlace": "Zona recomendada en Santo Domingo",
    "includes": [
      "Vuelos ida y vuelta",
      "Hotel 4★ o 5★",
      "Traslados aeropuerto – hotel",
      "Desayunos incluidos",
      "Experiencia exclusiva local"
    ],
    "hotel": "Hotel recomendado en Capital & City Lights: Luxury Collection 5★"
  },
  {
    "id": "republica-dominicana-escape",
    "name": "Samaná",
    "country": "República Dominicana",
    "flag": "🌍",
    "category": "nature",
    "type": "destination",
    "priceFromUSD": 4000,
    "priceModel": "per_person",
    "coords": [
      19.2861,
      -69.0312
    ],
    "description": "Punta Cana es la definición de escapada premium en República Dominicana: paisajes que parecen de película, ambiente relajado y opciones perfectas para desconectar sin renunciar al lujo.\\n\\nCombina días de descanso (piscina, spa, playa) con experiencias privadas: paseos en barco, snorkel/buceo, cenas frente al mar o recorridos panorámicos. El objetivo es que cada día se sienta exclusivo y sin estrés.\\n\\nRecomendación: elige un alojamiento con vista y añade una actividad VIP (boat tour privado o cena de autor) para que el destino se sienta “wow” desde el primer día.",
    "highlights": [
      "All-inclusive",
      "Playa",
      "Tours"
    ],
    "activities": [
      "Playa",
      "Excursión",
      "Relax"
    ],
    "bookingLinks": [
      {
        "label": "Reservar hotel",
        "url": "https://www.booking.com/"
      },
      {
        "label": "Buscar vuelos",
        "url": "https://www.google.com/travel/flights"
      },
      {
        "label": "Airbnb (opcional)",
        "url": "https://www.airbnb.com/"
      }
    ],
    "fullName": "Samaná 🌍",
    "recommendedPlace": "Zona céntrica de Punta Cana",
    "includes": [
      "Vuelos ida y vuelta",
      "Hotel 4★ o 5★",
      "Traslados aeropuerto – hotel",
      "Desayunos incluidos",
      "Experiencia exclusiva local"
    ],
    "hotel": "Hotel recomendado en Punta Cana: Luxury Collection 5★",
    "amenities": null,
    "itinerary": null
  },
  {
    "id": "capetown",
    "name": "Cape Town",
    "country": "Sudáfrica",
    "flag": "🇿🇦",
    "category": "ciudad",
    "type": "destino",
    "priceFromUSD": 5200,
    "priceModel": "per_person",
    "coords": [
      -33.9249,
      18.4241
    ],
    "description": "Cape Town, en Sudáfrica, es una base perfecta para vivir el lado más sofisticado del destino: arquitectura icónica, barrios con personalidad, museos y una escena gastronómica que va desde cocina local auténtica hasta experiencias fine‑dining.\\n\\nEn un viaje estilo Luxury Escape, lo mejor es combinar recorridos privados por los puntos más emblemáticos con momentos de descanso en hoteles bien ubicados en zonas premium. Así puedes moverte fácil, comprar, probar restaurantes top y cerrar el día con rooftops o planes nocturnos.\\n\\nTip pro: camina temprano para ver la ciudad sin multitudes y reserva un tour privado al atardecer para fotos, vistas y una cena especial.",
    "highlights": [
      "Table Mountain",
      "Winelands",
      "Coast"
    ],
    "activities": [
      "Table Mountain",
      "Winelands",
      "Coast drive"
    ],
    "bookingLinks": [
      {
        "label": "Reservar hotel",
        "url": "https://www.booking.com/"
      },
      {
        "label": "Buscar vuelos",
        "url": "https://www.google.com/travel/flights"
      },
      {
        "label": "Airbnb (opcional)",
        "url": "https://www.airbnb.com/"
      }
    ],
    "fullName": "Cape Town 🇿🇦",
    "recommendedPlace": "Zona céntrica de Cape Town",
    "includes": [
      "Vuelos ida y vuelta",
      "Hotel 4★ o 5★",
      "Traslados aeropuerto – hotel",
      "Desayunos incluidos",
      "Experiencia exclusiva local"
    ],
    "hotel": "Hotel recomendado en Cape Town: Luxury Collection 5★"
  },
  {
    "id": "sudafrica-capital",
    "name": "Cape Town (Capital)",
    "country": "Sudáfrica",
    "flag": "🌍",
    "category": "capital",
    "type": "destination",
    "priceFromUSD": 5200,
    "priceModel": "per_person",
    "coords": [
      -25.7461,
      28.1881
    ],
    "description": "Cape Town (Capital), en Sudáfrica, es una base perfecta para vivir el lado más sofisticado del destino: arquitectura icónica, barrios con personalidad, museos y una escena gastronómica que va desde cocina local auténtica hasta experiencias fine‑dining.\\n\\nEn un viaje estilo Luxury Escape, lo mejor es combinar recorridos privados por los puntos más emblemáticos con momentos de descanso en hoteles bien ubicados en zonas premium. Así puedes moverte fácil, comprar, probar restaurantes top y cerrar el día con rooftops o planes nocturnos.\\n\\nTip pro: camina temprano para ver la ciudad sin multitudes y reserva un tour privado al atardecer para fotos, vistas y una cena especial.",
    "highlights": [
      "Hoteles top",
      "Experiencias",
      "Gastronomía"
    ],
    "activities": [
      "City tour",
      "Restaurantes",
      "Experiencias locales"
    ],
    "bookingLinks": [
      {
        "label": "Reservar hotel",
        "url": "https://www.booking.com/"
      },
      {
        "label": "Buscar vuelos",
        "url": "https://www.google.com/travel/flights"
      },
      {
        "label": "Airbnb (opcional)",
        "url": "https://www.airbnb.com/"
      }
    ],
    "fullName": "Cape Town (Capital) 🌍",
    "recommendedPlace": "Zona recomendada en Johannesburg",
    "includes": [
      "Vuelos ida y vuelta",
      "Hotel 4★ o 5★",
      "Traslados aeropuerto – hotel",
      "Desayunos incluidos",
      "Experiencia exclusiva local"
    ],
    "hotel": "Hotel recomendado en Capital & City Lights: Luxury Collection 5★"
  },
  {
    "id": "sudafrica-escape",
    "name": "Cape Winelands",
    "country": "Sudáfrica",
    "flag": "🌍",
    "category": "escape",
    "type": "destination",
    "priceFromUSD": 5600,
    "priceModel": "per_person",
    "coords": [
      -24.9461,
      29.0881
    ],
    "description": "Cape Winelands es la definición de escapada premium en Sudáfrica: paisajes que parecen de película, ambiente relajado y opciones perfectas para desconectar sin renunciar al lujo.\\n\\nCombina días de descanso (piscina, spa, playa) con experiencias privadas: paseos en barco, snorkel/buceo, cenas frente al mar o recorridos panorámicos. El objetivo es que cada día se sienta exclusivo y sin estrés.\\n\\nRecomendación: elige un alojamiento con vista y añade una actividad VIP (boat tour privado o cena de autor) para que el destino se sienta “wow” desde el primer día.",
    "highlights": [
      "Hoteles top",
      "Experiencias",
      "Gastronomía"
    ],
    "activities": [
      "City tour",
      "Restaurantes",
      "Experiencias locales"
    ],
    "bookingLinks": [
      {
        "label": "Reservar hotel",
        "url": "https://www.booking.com/"
      },
      {
        "label": "Buscar vuelos",
        "url": "https://www.google.com/travel/flights"
      },
      {
        "label": "Airbnb (opcional)",
        "url": "https://www.airbnb.com/"
      }
    ],
    "fullName": "Cape Winelands 🌍",
    "recommendedPlace": "Zona recomendada en Cape Winelands",
    "includes": [
      "Vuelos ida y vuelta",
      "Hotel 4★ o 5★",
      "Traslados aeropuerto – hotel",
      "Desayunos incluidos",
      "Experiencia exclusiva local"
    ],
    "hotel": "Hotel recomendado en Luxury Escape: Luxury Collection 5★"
  },
  {
    "id": "rome",
    "name": "Rome",
    "country": "Italia",
    "flag": "🇮🇹",
    "category": "capital",
    "type": "destino",
    "priceFromUSD": 6100,
    "priceModel": "per_person",
    "coords": [
      41.9028,
      12.4964
    ],
    "description": "Rome (Capital), en Italia, es una base perfecta para vivir el lado más sofisticado del destino: arquitectura icónica, barrios con personalidad, museos y una escena gastronómica que va desde cocina local auténtica hasta experiencias fine‑dining.\\n\\nEn un viaje estilo Luxury Escape, lo mejor es combinar recorridos privados por los puntos más emblemáticos con momentos de descanso en hoteles bien ubicados en zonas premium. Así puedes moverte fácil, comprar, probar restaurantes top y cerrar el día con rooftops o planes nocturnos.\\n\\nTip pro: camina temprano para ver la ciudad sin multitudes y reserva un tour privado al atardecer para fotos, vistas y una cena especial.",
    "highlights": [
      "Hoteles top",
      "Experiencias",
      "Gastronomía"
    ],
    "activities": [
      "City tour",
      "Restaurantes",
      "Experiencias locales"
    ],
    "bookingLinks": [
      {
        "label": "Reservar hotel",
        "url": "https://www.booking.com/"
      },
      {
        "label": "Buscar vuelos",
        "url": "https://www.google.com/travel/flights"
      },
      {
        "label": "Airbnb (opcional)",
        "url": "https://www.airbnb.com/"
      }
    ],
    "fullName": "Rome 🇮🇹",
    "recommendedPlace": "Zona recomendada en Rome City",
    "includes": [
      "Vuelos ida y vuelta",
      "Hotel 4★ o 5★",
      "Traslados aeropuerto – hotel",
      "Desayunos incluidos",
      "Experiencia exclusiva local"
    ],
    "hotel": "Hotel recomendado en Capital & City Lights: Luxury Collection 5★",
    "amenities": null,
    "itinerary": null
  },
  {
    "id": "italia-capital",
    "name": "Dolomites",
    "country": "Italia",
    "flag": "🌍",
    "category": "nature",
    "type": "destination",
    "priceFromUSD": 5200,
    "priceModel": "per_person",
    "coords": [
      41.9028,
      12.4964
    ],
    "description": "Rome, en Italia, es una base perfecta para vivir el lado más sofisticado del destino: arquitectura icónica, barrios con personalidad, museos y una escena gastronómica que va desde cocina local auténtica hasta experiencias fine‑dining.\\n\\nEn un viaje estilo Luxury Escape, lo mejor es combinar recorridos privados por los puntos más emblemáticos con momentos de descanso en hoteles bien ubicados en zonas premium. Así puedes moverte fácil, comprar, probar restaurantes top y cerrar el día con rooftops o planes nocturnos.\\n\\nTip pro: camina temprano para ver la ciudad sin multitudes y reserva un tour privado al atardecer para fotos, vistas y una cena especial.",
    "highlights": [
      "Coliseo",
      "Vaticano",
      "Gelato"
    ],
    "activities": [
      "Coliseo",
      "Vaticano",
      "Food tour"
    ],
    "bookingLinks": [
      {
        "label": "Reservar hotel",
        "url": "https://www.booking.com/"
      },
      {
        "label": "Buscar vuelos",
        "url": "https://www.google.com/travel/flights"
      },
      {
        "label": "Airbnb (opcional)",
        "url": "https://www.airbnb.com/"
      }
    ],
    "fullName": "Dolomites 🌍",
    "recommendedPlace": "Zona céntrica de Rome",
    "includes": [
      "Vuelos ida y vuelta",
      "Hotel 4★ o 5★",
      "Traslados aeropuerto – hotel",
      "Desayunos incluidos",
      "Experiencia exclusiva local"
    ],
    "hotel": "Hotel recomendado en Rome: Luxury Collection 5★",
    "amenities": null,
    "itinerary": null
  },
  {
    "id": "italia-escape",
    "name": "Amalfi Coast",
    "country": "Italia",
    "flag": "🌍",
    "category": "escape",
    "type": "destination",
    "priceFromUSD": 5600,
    "priceModel": "per_person",
    "coords": [
      42.7028,
      13.3964
    ],
    "description": "Amalfi Coast es la definición de escapada premium en Italia: paisajes que parecen de película, ambiente relajado y opciones perfectas para desconectar sin renunciar al lujo.\\n\\nCombina días de descanso (piscina, spa, playa) con experiencias privadas: paseos en barco, snorkel/buceo, cenas frente al mar o recorridos panorámicos. El objetivo es que cada día se sienta exclusivo y sin estrés.\\n\\nRecomendación: elige un alojamiento con vista y añade una actividad VIP (boat tour privado o cena de autor) para que el destino se sienta “wow” desde el primer día.",
    "highlights": [
      "Hoteles top",
      "Experiencias",
      "Gastronomía"
    ],
    "activities": [
      "City tour",
      "Restaurantes",
      "Experiencias locales"
    ],
    "bookingLinks": [
      {
        "label": "Reservar hotel",
        "url": "https://www.booking.com/"
      },
      {
        "label": "Buscar vuelos",
        "url": "https://www.google.com/travel/flights"
      },
      {
        "label": "Airbnb (opcional)",
        "url": "https://www.airbnb.com/"
      }
    ],
    "fullName": "Amalfi Coast 🌍",
    "recommendedPlace": "Zona recomendada en Amalfi Coast",
    "includes": [
      "Vuelos ida y vuelta",
      "Hotel 4★ o 5★",
      "Traslados aeropuerto – hotel",
      "Desayunos incluidos",
      "Experiencia exclusiva local"
    ],
    "hotel": "Hotel recomendado en Luxury Escape: Luxury Collection 5★"
  },
  {
    "id": "lisbon",
    "name": "Lisbon",
    "country": "Portugal",
    "flag": "🇵🇹",
    "category": "capital",
    "type": "destino",
    "priceFromUSD": 5200,
    "priceModel": "per_person",
    "coords": [
      38.7223,
      -9.1393
    ],
    "description": "Lisbon (Capital), en Portugal, es una base perfecta para vivir el lado más sofisticado del destino: arquitectura icónica, barrios con personalidad, museos y una escena gastronómica que va desde cocina local auténtica hasta experiencias fine‑dining.\\n\\nEn un viaje estilo Luxury Escape, lo mejor es combinar recorridos privados por los puntos más emblemáticos con momentos de descanso en hoteles bien ubicados en zonas premium. Así puedes moverte fácil, comprar, probar restaurantes top y cerrar el día con rooftops o planes nocturnos.\\n\\nTip pro: camina temprano para ver la ciudad sin multitudes y reserva un tour privado al atardecer para fotos, vistas y una cena especial.",
    "highlights": [
      "Hoteles top",
      "Experiencias",
      "Gastronomía"
    ],
    "activities": [
      "City tour",
      "Restaurantes",
      "Experiencias locales"
    ],
    "bookingLinks": [
      {
        "label": "Reservar hotel",
        "url": "https://www.booking.com/"
      },
      {
        "label": "Buscar vuelos",
        "url": "https://www.google.com/travel/flights"
      },
      {
        "label": "Airbnb (opcional)",
        "url": "https://www.airbnb.com/"
      }
    ],
    "fullName": "Lisbon 🇵🇹",
    "recommendedPlace": "Zona recomendada en Lisbon City",
    "includes": [
      "Vuelos ida y vuelta",
      "Hotel 4★ o 5★",
      "Traslados aeropuerto – hotel",
      "Desayunos incluidos",
      "Experiencia exclusiva local"
    ],
    "hotel": "Hotel recomendado en Capital & City Lights: Luxury Collection 5★",
    "amenities": null,
    "itinerary": null
  },
  {
    "id": "portugal-capital",
    "name": "Douro Valley",
    "country": "Portugal",
    "flag": "🌍",
    "category": "nature",
    "type": "destination",
    "priceFromUSD": 5200,
    "priceModel": "per_person",
    "coords": [
      38.7223,
      -9.1393
    ],
    "description": "Lisbon, en Portugal, es una base perfecta para vivir el lado más sofisticado del destino: arquitectura icónica, barrios con personalidad, museos y una escena gastronómica que va desde cocina local auténtica hasta experiencias fine‑dining.\\n\\nEn un viaje estilo Luxury Escape, lo mejor es combinar recorridos privados por los puntos más emblemáticos con momentos de descanso en hoteles bien ubicados en zonas premium. Así puedes moverte fácil, comprar, probar restaurantes top y cerrar el día con rooftops o planes nocturnos.\\n\\nTip pro: camina temprano para ver la ciudad sin multitudes y reserva un tour privado al atardecer para fotos, vistas y una cena especial.",
    "highlights": [
      "Miradores",
      "Tram 28",
      "Food"
    ],
    "activities": [
      "Miradores",
      "Tram 28",
      "Pastel de nata"
    ],
    "bookingLinks": [
      {
        "label": "Reservar hotel",
        "url": "https://www.booking.com/"
      },
      {
        "label": "Buscar vuelos",
        "url": "https://www.google.com/travel/flights"
      },
      {
        "label": "Airbnb (opcional)",
        "url": "https://www.airbnb.com/"
      }
    ],
    "fullName": "Douro Valley 🌍",
    "recommendedPlace": "Zona céntrica de Lisbon",
    "includes": [
      "Vuelos ida y vuelta",
      "Hotel 4★ o 5★",
      "Traslados aeropuerto – hotel",
      "Desayunos incluidos",
      "Experiencia exclusiva local"
    ],
    "hotel": "Hotel recomendado en Lisbon: Luxury Collection 5★",
    "amenities": null,
    "itinerary": null
  },
  {
    "id": "portugal-escape",
    "name": "Madeira",
    "country": "Portugal",
    "flag": "🌍",
    "category": "escape",
    "type": "destination",
    "priceFromUSD": 5600,
    "priceModel": "per_person",
    "coords": [
      39.5223,
      -8.2393
    ],
    "description": "Madeira es la definición de escapada premium en Portugal: paisajes que parecen de película, ambiente relajado y opciones perfectas para desconectar sin renunciar al lujo.\\n\\nCombina días de descanso (piscina, spa, playa) con experiencias privadas: paseos en barco, snorkel/buceo, cenas frente al mar o recorridos panorámicos. El objetivo es que cada día se sienta exclusivo y sin estrés.\\n\\nRecomendación: elige un alojamiento con vista y añade una actividad VIP (boat tour privado o cena de autor) para que el destino se sienta “wow” desde el primer día.",
    "highlights": [
      "Hoteles top",
      "Experiencias",
      "Gastronomía"
    ],
    "activities": [
      "City tour",
      "Restaurantes",
      "Experiencias locales"
    ],
    "bookingLinks": [
      {
        "label": "Reservar hotel",
        "url": "https://www.booking.com/"
      },
      {
        "label": "Buscar vuelos",
        "url": "https://www.google.com/travel/flights"
      },
      {
        "label": "Airbnb (opcional)",
        "url": "https://www.airbnb.com/"
      }
    ],
    "fullName": "Madeira 🌍",
    "recommendedPlace": "Zona recomendada en Madeira",
    "includes": [
      "Vuelos ida y vuelta",
      "Hotel 4★ o 5★",
      "Traslados aeropuerto – hotel",
      "Desayunos incluidos",
      "Experiencia exclusiva local"
    ],
    "hotel": "Hotel recomendado en Luxury Escape: Luxury Collection 5★"
  },
  {
    "id": "seoul",
    "name": "Seoul",
    "country": "Corea del Sur",
    "flag": "🇰🇷",
    "category": "capital",
    "type": "destino",
    "priceFromUSD": 6000,
    "priceModel": "per_person",
    "coords": [
      37.5665,
      126.978
    ],
    "description": "Seoul (Capital), en Corea del Sur, es una base perfecta para vivir el lado más sofisticado del destino: arquitectura icónica, barrios con personalidad, museos y una escena gastronómica que va desde cocina local auténtica hasta experiencias fine‑dining.\\n\\nEn un viaje estilo Luxury Escape, lo mejor es combinar recorridos privados por los puntos más emblemáticos con momentos de descanso en hoteles bien ubicados en zonas premium. Así puedes moverte fácil, comprar, probar restaurantes top y cerrar el día con rooftops o planes nocturnos.\\n\\nTip pro: camina temprano para ver la ciudad sin multitudes y reserva un tour privado al atardecer para fotos, vistas y una cena especial.",
    "highlights": [
      "Hoteles top",
      "Experiencias",
      "Gastronomía"
    ],
    "activities": [
      "City tour",
      "Restaurantes",
      "Experiencias locales"
    ],
    "bookingLinks": [
      {
        "label": "Reservar hotel",
        "url": "https://www.booking.com/"
      },
      {
        "label": "Buscar vuelos",
        "url": "https://www.google.com/travel/flights"
      },
      {
        "label": "Airbnb (opcional)",
        "url": "https://www.airbnb.com/"
      }
    ],
    "fullName": "Seoul 🇰🇷",
    "recommendedPlace": "Zona recomendada en Seoul City",
    "includes": [
      "Vuelos ida y vuelta",
      "Hotel 4★ o 5★",
      "Traslados aeropuerto – hotel",
      "Desayunos incluidos",
      "Experiencia exclusiva local"
    ],
    "hotel": "Hotel recomendado en Capital & City Lights: Luxury Collection 5★",
    "amenities": null,
    "itinerary": null
  },
  {
    "id": "corea-del-sur-capital",
    "name": "Jeju Island",
    "country": "Corea del Sur",
    "flag": "🌍",
    "category": "nature",
    "type": "destination",
    "priceFromUSD": 6200,
    "priceModel": "per_person",
    "coords": [
      37.5665,
      126.978
    ],
    "description": "Seoul, en Corea del Sur, es una base perfecta para vivir el lado más sofisticado del destino: arquitectura icónica, barrios con personalidad, museos y una escena gastronómica que va desde cocina local auténtica hasta experiencias fine‑dining.\\n\\nEn un viaje estilo Luxury Escape, lo mejor es combinar recorridos privados por los puntos más emblemáticos con momentos de descanso en hoteles bien ubicados en zonas premium. Así puedes moverte fácil, comprar, probar restaurantes top y cerrar el día con rooftops o planes nocturnos.\\n\\nTip pro: camina temprano para ver la ciudad sin multitudes y reserva un tour privado al atardecer para fotos, vistas y una cena especial.",
    "highlights": [
      "Hongdae",
      "Palaces",
      "Food"
    ],
    "activities": [
      "Palacio",
      "Mercado",
      "Night city"
    ],
    "bookingLinks": [
      {
        "label": "Reservar hotel",
        "url": "https://www.booking.com/"
      },
      {
        "label": "Buscar vuelos",
        "url": "https://www.google.com/travel/flights"
      },
      {
        "label": "Airbnb (opcional)",
        "url": "https://www.airbnb.com/"
      }
    ],
    "fullName": "Jeju Island 🌍",
    "recommendedPlace": "Zona céntrica de Seoul",
    "includes": [
      "Vuelos ida y vuelta",
      "Hotel 4★ o 5★",
      "Traslados aeropuerto – hotel",
      "Desayunos incluidos",
      "Experiencia exclusiva local"
    ],
    "hotel": "Hotel recomendado en Seoul: Luxury Collection 5★",
    "amenities": null,
    "itinerary": null
  },
  {
    "id": "corea-del-sur-escape",
    "name": "Busan",
    "country": "Corea del Sur",
    "flag": "🌍",
    "category": "escape",
    "type": "destination",
    "priceFromUSD": 6600,
    "priceModel": "per_person",
    "coords": [
      38.3665,
      127.878
    ],
    "description": "Busan es la definición de escapada premium en Corea del Sur: paisajes que parecen de película, ambiente relajado y opciones perfectas para desconectar sin renunciar al lujo.\\n\\nCombina días de descanso (piscina, spa, playa) con experiencias privadas: paseos en barco, snorkel/buceo, cenas frente al mar o recorridos panorámicos. El objetivo es que cada día se sienta exclusivo y sin estrés.\\n\\nRecomendación: elige un alojamiento con vista y añade una actividad VIP (boat tour privado o cena de autor) para que el destino se sienta “wow” desde el primer día.",
    "highlights": [
      "Hoteles top",
      "Experiencias",
      "Gastronomía"
    ],
    "activities": [
      "City tour",
      "Restaurantes",
      "Experiencias locales"
    ],
    "bookingLinks": [
      {
        "label": "Reservar hotel",
        "url": "https://www.booking.com/"
      },
      {
        "label": "Buscar vuelos",
        "url": "https://www.google.com/travel/flights"
      },
      {
        "label": "Airbnb (opcional)",
        "url": "https://www.airbnb.com/"
      }
    ],
    "fullName": "Busan 🌍",
    "recommendedPlace": "Zona recomendada en Busan",
    "includes": [
      "Vuelos ida y vuelta",
      "Hotel 4★ o 5★",
      "Traslados aeropuerto – hotel",
      "Desayunos incluidos",
      "Experiencia exclusiva local"
    ],
    "hotel": "Hotel recomendado en Luxury Escape: Luxury Collection 5★"
  },
  {
    "id": "london",
    "name": "London",
    "country": "Reino Unido",
    "flag": "🇬🇧",
    "category": "ciudad",
    "type": "destino",
    "priceFromUSD": 6600,
    "priceModel": "per_person",
    "coords": [
      51.5072,
      -0.1276
    ],
    "description": "London, en Reino Unido, es una base perfecta para vivir el lado más sofisticado del destino: arquitectura icónica, barrios con personalidad, museos y una escena gastronómica que va desde cocina local auténtica hasta experiencias fine‑dining.\\n\\nEn un viaje estilo Luxury Escape, lo mejor es combinar recorridos privados por los puntos más emblemáticos con momentos de descanso en hoteles bien ubicados en zonas premium. Así puedes moverte fácil, comprar, probar restaurantes top y cerrar el día con rooftops o planes nocturnos.\\n\\nTip pro: camina temprano para ver la ciudad sin multitudes y reserva un tour privado al atardecer para fotos, vistas y una cena especial.",
    "highlights": [
      "Museos",
      "West End",
      "Markets"
    ],
    "activities": [
      "Museo",
      "West End",
      "Markets"
    ],
    "bookingLinks": [
      {
        "label": "Reservar hotel",
        "url": "https://www.booking.com/"
      },
      {
        "label": "Buscar vuelos",
        "url": "https://www.google.com/travel/flights"
      },
      {
        "label": "Airbnb (opcional)",
        "url": "https://www.airbnb.com/"
      }
    ],
    "fullName": "London 🇬🇧",
    "recommendedPlace": "Zona céntrica de London",
    "includes": [
      "Vuelos ida y vuelta",
      "Hotel 4★ o 5★",
      "Traslados aeropuerto – hotel",
      "Desayunos incluidos",
      "Experiencia exclusiva local"
    ],
    "hotel": "Hotel recomendado en London: Luxury Collection 5★"
  },
  {
    "id": "reino-unido-capital",
    "name": "London (Capital)",
    "country": "Reino Unido",
    "flag": "🌍",
    "category": "capital",
    "type": "destination",
    "priceFromUSD": 6800,
    "priceModel": "per_person",
    "coords": [
      51.5072,
      -0.1276
    ],
    "description": "London (Capital), en Reino Unido, es una base perfecta para vivir el lado más sofisticado del destino: arquitectura icónica, barrios con personalidad, museos y una escena gastronómica que va desde cocina local auténtica hasta experiencias fine‑dining.\\n\\nEn un viaje estilo Luxury Escape, lo mejor es combinar recorridos privados por los puntos más emblemáticos con momentos de descanso en hoteles bien ubicados en zonas premium. Así puedes moverte fácil, comprar, probar restaurantes top y cerrar el día con rooftops o planes nocturnos.\\n\\nTip pro: camina temprano para ver la ciudad sin multitudes y reserva un tour privado al atardecer para fotos, vistas y una cena especial.",
    "highlights": [
      "Hoteles top",
      "Experiencias",
      "Gastronomía"
    ],
    "activities": [
      "City tour",
      "Restaurantes",
      "Experiencias locales"
    ],
    "bookingLinks": [
      {
        "label": "Reservar hotel",
        "url": "https://www.booking.com/"
      },
      {
        "label": "Buscar vuelos",
        "url": "https://www.google.com/travel/flights"
      },
      {
        "label": "Airbnb (opcional)",
        "url": "https://www.airbnb.com/"
      }
    ],
    "fullName": "London (Capital) 🌍",
    "recommendedPlace": "Zona recomendada en London City",
    "includes": [
      "Vuelos ida y vuelta",
      "Hotel 4★ o 5★",
      "Traslados aeropuerto – hotel",
      "Desayunos incluidos",
      "Experiencia exclusiva local"
    ],
    "hotel": "Hotel recomendado en Capital & City Lights: Luxury Collection 5★"
  },
  {
    "id": "reino-unido-escape",
    "name": "Edinburgh",
    "country": "Reino Unido",
    "flag": "🌍",
    "category": "escape",
    "type": "destination",
    "priceFromUSD": 7200,
    "priceModel": "per_person",
    "coords": [
      52.3072,
      0.7724
    ],
    "description": "Edinburgh es la definición de escapada premium en Reino Unido: paisajes que parecen de película, ambiente relajado y opciones perfectas para desconectar sin renunciar al lujo.\\n\\nCombina días de descanso (piscina, spa, playa) con experiencias privadas: paseos en barco, snorkel/buceo, cenas frente al mar o recorridos panorámicos. El objetivo es que cada día se sienta exclusivo y sin estrés.\\n\\nRecomendación: elige un alojamiento con vista y añade una actividad VIP (boat tour privado o cena de autor) para que el destino se sienta “wow” desde el primer día.",
    "highlights": [
      "Hoteles top",
      "Experiencias",
      "Gastronomía"
    ],
    "activities": [
      "City tour",
      "Restaurantes",
      "Experiencias locales"
    ],
    "bookingLinks": [
      {
        "label": "Reservar hotel",
        "url": "https://www.booking.com/"
      },
      {
        "label": "Buscar vuelos",
        "url": "https://www.google.com/travel/flights"
      },
      {
        "label": "Airbnb (opcional)",
        "url": "https://www.airbnb.com/"
      }
    ],
    "fullName": "Edinburgh 🌍",
    "recommendedPlace": "Zona recomendada en Edinburgh",
    "includes": [
      "Vuelos ida y vuelta",
      "Hotel 4★ o 5★",
      "Traslados aeropuerto – hotel",
      "Desayunos incluidos",
      "Experiencia exclusiva local"
    ],
    "hotel": "Hotel recomendado en Luxury Escape: Luxury Collection 5★"
  },
  {
    "id": "banff",
    "name": "Banff",
    "country": "Canadá",
    "flag": "🇨🇦",
    "category": "escape",
    "type": "destino",
    "priceFromUSD": 5600,
    "priceModel": "per_person",
    "coords": [
      51.1784,
      -115.5708
    ],
    "description": "Banff (Escape), en Canadá, es una base perfecta para vivir el lado más sofisticado del destino: arquitectura icónica, barrios con personalidad, museos y una escena gastronómica que va desde cocina local auténtica hasta experiencias fine‑dining.\\n\\nEn un viaje estilo Luxury Escape, lo mejor es combinar recorridos privados por los puntos más emblemáticos con momentos de descanso en hoteles bien ubicados en zonas premium. Así puedes moverte fácil, comprar, probar restaurantes top y cerrar el día con rooftops o planes nocturnos.\\n\\nTip pro: camina temprano para ver la ciudad sin multitudes y reserva un tour privado al atardecer para fotos, vistas y una cena especial.",
    "highlights": [
      "Hoteles top",
      "Experiencias",
      "Gastronomía"
    ],
    "activities": [
      "City tour",
      "Restaurantes",
      "Experiencias locales"
    ],
    "bookingLinks": [
      {
        "label": "Reservar hotel",
        "url": "https://www.booking.com/"
      },
      {
        "label": "Buscar vuelos",
        "url": "https://www.google.com/travel/flights"
      },
      {
        "label": "Airbnb (opcional)",
        "url": "https://www.airbnb.com/"
      }
    ],
    "fullName": "Banff 🇨🇦",
    "recommendedPlace": "Zona recomendada en Banff Escape",
    "includes": [
      "Vuelos ida y vuelta",
      "Hotel 4★ o 5★",
      "Traslados aeropuerto – hotel",
      "Desayunos incluidos",
      "Experiencia exclusiva local"
    ],
    "hotel": "Hotel recomendado en Luxury Escape: Luxury Collection 5★",
    "amenities": null,
    "itinerary": null
  },
  {
    "id": "canada-capital",
    "name": "Vancouver",
    "country": "Canadá",
    "flag": "🌍",
    "category": "capital",
    "type": "destination",
    "priceFromUSD": 5600,
    "priceModel": "per_person",
    "coords": [
      45.4215,
      -75.6972
    ],
    "description": "Vancouver, en Canadá, es una base perfecta para vivir el lado más sofisticado del destino: arquitectura icónica, barrios con personalidad, museos y una escena gastronómica que va desde cocina local auténtica hasta experiencias fine‑dining.\\n\\nEn un viaje estilo Luxury Escape, lo mejor es combinar recorridos privados por los puntos más emblemáticos con momentos de descanso en hoteles bien ubicados en zonas premium. Así puedes moverte fácil, comprar, probar restaurantes top y cerrar el día con rooftops o planes nocturnos.\\n\\nTip pro: camina temprano para ver la ciudad sin multitudes y reserva un tour privado al atardecer para fotos, vistas y una cena especial.",
    "highlights": [
      "Hoteles top",
      "Experiencias",
      "Gastronomía"
    ],
    "activities": [
      "City tour",
      "Restaurantes",
      "Experiencias locales"
    ],
    "bookingLinks": [
      {
        "label": "Reservar hotel",
        "url": "https://www.booking.com/"
      },
      {
        "label": "Buscar vuelos",
        "url": "https://www.google.com/travel/flights"
      },
      {
        "label": "Airbnb (opcional)",
        "url": "https://www.airbnb.com/"
      }
    ],
    "fullName": "Vancouver 🌍",
    "recommendedPlace": "Zona recomendada en Vancouver City",
    "includes": [
      "Vuelos ida y vuelta",
      "Hotel 4★ o 5★",
      "Traslados aeropuerto – hotel",
      "Desayunos incluidos",
      "Experiencia exclusiva local"
    ],
    "hotel": "Hotel recomendado en Capital & City Lights: Luxury Collection 5★"
  },
  {
    "id": "canada-escape",
    "name": "Jasper National Park",
    "country": "Canadá",
    "flag": "🌍",
    "category": "nature",
    "type": "destination",
    "priceFromUSD": 6000,
    "priceModel": "per_person",
    "coords": [
      46.2215,
      -74.7972
    ],
    "description": "Banff es la definición de escapada premium en Canadá: paisajes que parecen de película, ambiente relajado y opciones perfectas para desconectar sin renunciar al lujo.\\n\\nCombina días de descanso (piscina, spa, playa) con experiencias privadas: paseos en barco, snorkel/buceo, cenas frente al mar o recorridos panorámicos. El objetivo es que cada día se sienta exclusivo y sin estrés.\\n\\nRecomendación: elige un alojamiento con vista y añade una actividad VIP (boat tour privado o cena de autor) para que el destino se sienta “wow” desde el primer día.",
    "highlights": [
      "Lakes",
      "Mountains",
      "Hikes"
    ],
    "activities": [
      "Lake Louise",
      "Hikes",
      "Scenic drives"
    ],
    "bookingLinks": [
      {
        "label": "Reservar hotel",
        "url": "https://www.booking.com/"
      },
      {
        "label": "Buscar vuelos",
        "url": "https://www.google.com/travel/flights"
      },
      {
        "label": "Airbnb (opcional)",
        "url": "https://www.airbnb.com/"
      }
    ],
    "fullName": "Jasper National Park 🌍",
    "recommendedPlace": "Zona céntrica de Banff",
    "includes": [
      "Vuelos ida y vuelta",
      "Hotel 4★ o 5★",
      "Traslados aeropuerto – hotel",
      "Desayunos incluidos",
      "Experiencia exclusiva local"
    ],
    "hotel": "Hotel recomendado en Banff: Luxury Collection 5★",
    "amenities": null,
    "itinerary": null
  },
  {
    "id": "sydney",
    "name": "Australia City",
    "country": "Australia",
    "flag": "🇦🇺",
    "category": "ciudad",
    "type": "destino",
    "priceFromUSD": 7800,
    "priceModel": "per_person",
    "coords": [
      -33.8688,
      151.2093
    ],
    "description": "Australia City, en Australia, es una base perfecta para vivir el lado más sofisticado del destino: arquitectura icónica, barrios con personalidad, museos y una escena gastronómica que va desde cocina local auténtica hasta experiencias fine‑dining.\\n\\nEn un viaje estilo Luxury Escape, lo mejor es combinar recorridos privados por los puntos más emblemáticos con momentos de descanso en hoteles bien ubicados en zonas premium. Así puedes moverte fácil, comprar, probar restaurantes top y cerrar el día con rooftops o planes nocturnos.\\n\\nTip pro: camina temprano para ver la ciudad sin multitudes y reserva un tour privado al atardecer para fotos, vistas y una cena especial.",
    "highlights": [
      "Hoteles top",
      "Experiencias",
      "Gastronomía"
    ],
    "activities": [
      "City tour",
      "Restaurantes",
      "Experiencias locales"
    ],
    "bookingLinks": [
      {
        "label": "Reservar hotel",
        "url": "https://www.booking.com/"
      },
      {
        "label": "Buscar vuelos",
        "url": "https://www.google.com/travel/flights"
      },
      {
        "label": "Airbnb (opcional)",
        "url": "https://www.airbnb.com/"
      }
    ],
    "fullName": "Australia City 🌍",
    "recommendedPlace": "Zona recomendada en Sydney City",
    "includes": [
      "Vuelos ida y vuelta",
      "Hotel 4★ o 5★",
      "Traslados aeropuerto – hotel",
      "Desayunos incluidos",
      "Experiencia exclusiva local"
    ],
    "hotel": "Hotel recomendado en Capital & City Lights: Luxury Collection 5★",
    "amenities": null,
    "itinerary": null
  },
  {
    "id": "australia-capital",
    "name": "Sydney",
    "country": "Australia",
    "flag": "🌍",
    "category": "capital",
    "type": "destination",
    "priceFromUSD": 4800,
    "priceModel": "per_person",
    "coords": [
      -35.2809,
      149.13
    ],
    "description": "Sydney, en Australia, es una base perfecta para vivir el lado más sofisticado del destino: arquitectura icónica, barrios con personalidad, museos y una escena gastronómica que va desde cocina local auténtica hasta experiencias fine‑dining.\\n\\nEn un viaje estilo Luxury Escape, lo mejor es combinar recorridos privados por los puntos más emblemáticos con momentos de descanso en hoteles bien ubicados en zonas premium. Así puedes moverte fácil, comprar, probar restaurantes top y cerrar el día con rooftops o planes nocturnos.\\n\\nTip pro: camina temprano para ver la ciudad sin multitudes y reserva un tour privado al atardecer para fotos, vistas y una cena especial.",
    "highlights": [
      "Opera",
      "Harbour",
      "Beaches"
    ],
    "activities": [
      "Opera House",
      "Bondi",
      "Harbour walk"
    ],
    "bookingLinks": [
      {
        "label": "Reservar hotel",
        "url": "https://www.booking.com/"
      },
      {
        "label": "Buscar vuelos",
        "url": "https://www.google.com/travel/flights"
      },
      {
        "label": "Airbnb (opcional)",
        "url": "https://www.airbnb.com/"
      }
    ],
    "fullName": "Sydney 🇦🇺",
    "recommendedPlace": "Zona céntrica de Sydney",
    "includes": [
      "Vuelos ida y vuelta",
      "Hotel 4★ o 5★",
      "Traslados aeropuerto – hotel",
      "Desayunos incluidos",
      "Experiencia exclusiva local"
    ],
    "hotel": "Hotel recomendado en Sydney: Luxury Collection 5★",
    "amenities": null,
    "itinerary": null
  },
  {
    "id": "australia-escape",
    "name": "Australia Escape",
    "country": "Australia",
    "flag": "🌍",
    "category": "escape",
    "type": "destination",
    "priceFromUSD": 5200,
    "priceModel": "per_person",
    "coords": [
      -34.4809,
      150.03
    ],
    "description": "Australia Escape es la definición de escapada premium en Australia: paisajes que parecen de película, ambiente relajado y opciones perfectas para desconectar sin renunciar al lujo.\\n\\nCombina días de descanso (piscina, spa, playa) con experiencias privadas: paseos en barco, snorkel/buceo, cenas frente al mar o recorridos panorámicos. El objetivo es que cada día se sienta exclusivo y sin estrés.\\n\\nRecomendación: elige un alojamiento con vista y añade una actividad VIP (boat tour privado o cena de autor) para que el destino se sienta “wow” desde el primer día.",
    "highlights": [
      "Hoteles top",
      "Experiencias",
      "Gastronomía"
    ],
    "activities": [
      "City tour",
      "Restaurantes",
      "Experiencias locales"
    ],
    "bookingLinks": [
      {
        "label": "Reservar hotel",
        "url": "https://www.booking.com/"
      },
      {
        "label": "Buscar vuelos",
        "url": "https://www.google.com/travel/flights"
      },
      {
        "label": "Airbnb (opcional)",
        "url": "https://www.airbnb.com/"
      }
    ],
    "fullName": "Australia Escape 🌍",
    "recommendedPlace": "Zona recomendada en Gold Coast",
    "includes": [
      "Vuelos ida y vuelta",
      "Hotel 4★ o 5★",
      "Traslados aeropuerto – hotel",
      "Desayunos incluidos",
      "Experiencia exclusiva local"
    ],
    "hotel": "Hotel recomendado en Luxury Escape: Luxury Collection 5★"
  },
  {
    "id": "suecia-capital",
    "name": "Stockholm",
    "country": "Suecia",
    "flag": "🌍",
    "category": "capital",
    "type": "destination",
    "priceFromUSD": 6800,
    "priceModel": "per_person",
    "coords": [
      59.3293,
      18.0686
    ],
    "description": "Stockholm, en Suecia, es una base perfecta para vivir el lado más sofisticado del destino: arquitectura icónica, barrios con personalidad, museos y una escena gastronómica que va desde cocina local auténtica hasta experiencias fine‑dining.\\n\\nEn un viaje estilo Luxury Escape, lo mejor es combinar recorridos privados por los puntos más emblemáticos con momentos de descanso en hoteles bien ubicados en zonas premium. Así puedes moverte fácil, comprar, probar restaurantes top y cerrar el día con rooftops o planes nocturnos.\\n\\nTip pro: camina temprano para ver la ciudad sin multitudes y reserva un tour privado al atardecer para fotos, vistas y una cena especial.",
    "highlights": [
      "Hoteles top",
      "Experiencias",
      "Gastronomía"
    ],
    "activities": [
      "City tour",
      "Restaurantes",
      "Experiencias locales"
    ],
    "bookingLinks": [
      {
        "label": "Reservar hotel",
        "url": "https://www.booking.com/"
      },
      {
        "label": "Buscar vuelos",
        "url": "https://www.google.com/travel/flights"
      },
      {
        "label": "Airbnb (opcional)",
        "url": "https://www.airbnb.com/"
      }
    ],
    "fullName": "Stockholm 🌍",
    "recommendedPlace": "Zona recomendada en Stockholm",
    "includes": [
      "Vuelos ida y vuelta",
      "Hotel 4★ o 5★",
      "Traslados aeropuerto – hotel",
      "Desayunos incluidos",
      "Experiencia exclusiva local"
    ],
    "hotel": "Hotel recomendado en Capital & City Lights: Luxury Collection 5★"
  },
  {
    "id": "suecia-escape",
    "name": "Gothenburg",
    "country": "Suecia",
    "flag": "🌍",
    "category": "escape",
    "type": "destination",
    "priceFromUSD": 7200,
    "priceModel": "per_person",
    "coords": [
      60.1293,
      18.9686
    ],
    "description": "Gothenburg es la definición de escapada premium en Suecia: paisajes que parecen de película, ambiente relajado y opciones perfectas para desconectar sin renunciar al lujo.\\n\\nCombina días de descanso (piscina, spa, playa) con experiencias privadas: paseos en barco, snorkel/buceo, cenas frente al mar o recorridos panorámicos. El objetivo es que cada día se sienta exclusivo y sin estrés.\\n\\nRecomendación: elige un alojamiento con vista y añade una actividad VIP (boat tour privado o cena de autor) para que el destino se sienta “wow” desde el primer día.",
    "highlights": [
      "Hoteles top",
      "Experiencias",
      "Gastronomía"
    ],
    "activities": [
      "City tour",
      "Restaurantes",
      "Experiencias locales"
    ],
    "bookingLinks": [
      {
        "label": "Reservar hotel",
        "url": "https://www.booking.com/"
      },
      {
        "label": "Buscar vuelos",
        "url": "https://www.google.com/travel/flights"
      },
      {
        "label": "Airbnb (opcional)",
        "url": "https://www.airbnb.com/"
      }
    ],
    "fullName": "Gothenburg 🌍",
    "recommendedPlace": "Zona recomendada en Gothenburg",
    "includes": [
      "Vuelos ida y vuelta",
      "Hotel 4★ o 5★",
      "Traslados aeropuerto – hotel",
      "Desayunos incluidos",
      "Experiencia exclusiva local"
    ],
    "hotel": "Hotel recomendado en Luxury Escape: Luxury Collection 5★"
  },
  {
    "id": "suecia-nature",
    "name": "Lapland",
    "country": "Suecia",
    "flag": "🌍",
    "category": "nature",
    "type": "destination",
    "priceFromUSD": 7100,
    "priceModel": "per_person",
    "coords": [
      58.5293,
      17.1686
    ],
    "description": "Lapland es una elección espectacular para conectar con la naturaleza en Suecia sin perder confort. Aquí el lujo se vive distinto: paisajes inmensos, aire puro y experiencias tranquilas con alojamientos seleccionados.\\n\\nOrganiza actividades guiadas y privadas: miradores, rutas escénicas, excursiones en 4x4 o caminatas suaves con paradas fotográficas. Después, regresa a un lodge/hotel cómodo para cenar bien y descansar de verdad.\\n\\nTip: prioriza horarios temprano o al atardecer para la mejor luz y menos gente, y lleva ropa por capas para estar cómodo.",
    "highlights": [
      "Hoteles top",
      "Experiencias",
      "Gastronomía"
    ],
    "activities": [
      "City tour",
      "Restaurantes",
      "Experiencias locales"
    ],
    "bookingLinks": [
      {
        "label": "Reservar hotel",
        "url": "https://www.booking.com/"
      },
      {
        "label": "Buscar vuelos",
        "url": "https://www.google.com/travel/flights"
      },
      {
        "label": "Airbnb (opcional)",
        "url": "https://www.airbnb.com/"
      }
    ],
    "fullName": "Lapland 🌍",
    "recommendedPlace": "Zona recomendada en Lapland",
    "includes": [
      "Vuelos ida y vuelta",
      "Hotel 4★ o 5★",
      "Traslados aeropuerto – hotel",
      "Desayunos incluidos",
      "Experiencia exclusiva local"
    ],
    "hotel": "Hotel recomendado en Nature Retreat: Luxury Collection 5★"
  },
  {
    "id": "bulgaria-capital",
    "name": "Sofía",
    "country": "Bulgaria",
    "flag": "🌍",
    "category": "capital",
    "type": "destination",
    "priceFromUSD": 5200,
    "priceModel": "per_person",
    "coords": [
      42.6977,
      23.3219
    ],
    "description": "Sofía, en Bulgaria, es una base perfecta para vivir el lado más sofisticado del destino: arquitectura icónica, barrios con personalidad, museos y una escena gastronómica que va desde cocina local auténtica hasta experiencias fine‑dining.\\n\\nEn un viaje estilo Luxury Escape, lo mejor es combinar recorridos privados por los puntos más emblemáticos con momentos de descanso en hoteles bien ubicados en zonas premium. Así puedes moverte fácil, comprar, probar restaurantes top y cerrar el día con rooftops o planes nocturnos.\\n\\nTip pro: camina temprano para ver la ciudad sin multitudes y reserva un tour privado al atardecer para fotos, vistas y una cena especial.",
    "highlights": [
      "Hoteles top",
      "Experiencias",
      "Gastronomía"
    ],
    "activities": [
      "City tour",
      "Restaurantes",
      "Experiencias locales"
    ],
    "bookingLinks": [
      {
        "label": "Reservar hotel",
        "url": "https://www.booking.com/"
      },
      {
        "label": "Buscar vuelos",
        "url": "https://www.google.com/travel/flights"
      },
      {
        "label": "Airbnb (opcional)",
        "url": "https://www.airbnb.com/"
      }
    ],
    "fullName": "Sofía 🌍",
    "recommendedPlace": "Zona recomendada en Sofía",
    "includes": [
      "Vuelos ida y vuelta",
      "Hotel 4★ o 5★",
      "Traslados aeropuerto – hotel",
      "Desayunos incluidos",
      "Experiencia exclusiva local"
    ],
    "hotel": "Hotel recomendado en Capital & City Lights: Luxury Collection 5★"
  },
  {
    "id": "bulgaria-escape",
    "name": "Plovdiv",
    "country": "Bulgaria",
    "flag": "🌍",
    "category": "escape",
    "type": "destination",
    "priceFromUSD": 5600,
    "priceModel": "per_person",
    "coords": [
      43.4977,
      24.2219
    ],
    "description": "Plovdiv es la definición de escapada premium en Bulgaria: paisajes que parecen de película, ambiente relajado y opciones perfectas para desconectar sin renunciar al lujo.\\n\\nCombina días de descanso (piscina, spa, playa) con experiencias privadas: paseos en barco, snorkel/buceo, cenas frente al mar o recorridos panorámicos. El objetivo es que cada día se sienta exclusivo y sin estrés.\\n\\nRecomendación: elige un alojamiento con vista y añade una actividad VIP (boat tour privado o cena de autor) para que el destino se sienta “wow” desde el primer día.",
    "highlights": [
      "Hoteles top",
      "Experiencias",
      "Gastronomía"
    ],
    "activities": [
      "City tour",
      "Restaurantes",
      "Experiencias locales"
    ],
    "bookingLinks": [
      {
        "label": "Reservar hotel",
        "url": "https://www.booking.com/"
      },
      {
        "label": "Buscar vuelos",
        "url": "https://www.google.com/travel/flights"
      },
      {
        "label": "Airbnb (opcional)",
        "url": "https://www.airbnb.com/"
      }
    ],
    "fullName": "Plovdiv 🌍",
    "recommendedPlace": "Zona recomendada en Plovdiv",
    "includes": [
      "Vuelos ida y vuelta",
      "Hotel 4★ o 5★",
      "Traslados aeropuerto – hotel",
      "Desayunos incluidos",
      "Experiencia exclusiva local"
    ],
    "hotel": "Hotel recomendado en Luxury Escape: Luxury Collection 5★"
  },
  {
    "id": "bulgaria-nature",
    "name": "Rila Mountains",
    "country": "Bulgaria",
    "flag": "🌍",
    "category": "nature",
    "type": "destination",
    "priceFromUSD": 5500,
    "priceModel": "per_person",
    "coords": [
      41.8977,
      22.4219
    ],
    "description": "Rila Mountains es una elección espectacular para conectar con la naturaleza en Bulgaria sin perder confort. Aquí el lujo se vive distinto: paisajes inmensos, aire puro y experiencias tranquilas con alojamientos seleccionados.\\n\\nOrganiza actividades guiadas y privadas: miradores, rutas escénicas, excursiones en 4x4 o caminatas suaves con paradas fotográficas. Después, regresa a un lodge/hotel cómodo para cenar bien y descansar de verdad.\\n\\nTip: prioriza horarios temprano o al atardecer para la mejor luz y menos gente, y lleva ropa por capas para estar cómodo.",
    "highlights": [
      "Hoteles top",
      "Experiencias",
      "Gastronomía"
    ],
    "activities": [
      "City tour",
      "Restaurantes",
      "Experiencias locales"
    ],
    "bookingLinks": [
      {
        "label": "Reservar hotel",
        "url": "https://www.booking.com/"
      },
      {
        "label": "Buscar vuelos",
        "url": "https://www.google.com/travel/flights"
      },
      {
        "label": "Airbnb (opcional)",
        "url": "https://www.airbnb.com/"
      }
    ],
    "fullName": "Rila Mountains 🌍",
    "recommendedPlace": "Zona recomendada en Rila Mountains",
    "includes": [
      "Vuelos ida y vuelta",
      "Hotel 4★ o 5★",
      "Traslados aeropuerto – hotel",
      "Desayunos incluidos",
      "Experiencia exclusiva local"
    ],
    "hotel": "Hotel recomendado en Nature Retreat: Luxury Collection 5★"
  },
  {
    "id": "taiwan-capital",
    "name": "Taipei",
    "country": "Taiwan",
    "flag": "🌍",
    "category": "capital",
    "type": "destination",
    "priceFromUSD": 4800,
    "priceModel": "per_person",
    "coords": [
      25.033,
      121.5654
    ],
    "description": "Taipei, en Taiwan, es una base perfecta para vivir el lado más sofisticado del destino: arquitectura icónica, barrios con personalidad, museos y una escena gastronómica que va desde cocina local auténtica hasta experiencias fine‑dining.\\n\\nEn un viaje estilo Luxury Escape, lo mejor es combinar recorridos privados por los puntos más emblemáticos con momentos de descanso en hoteles bien ubicados en zonas premium. Así puedes moverte fácil, comprar, probar restaurantes top y cerrar el día con rooftops o planes nocturnos.\\n\\nTip pro: camina temprano para ver la ciudad sin multitudes y reserva un tour privado al atardecer para fotos, vistas y una cena especial.",
    "highlights": [
      "Hoteles top",
      "Experiencias",
      "Gastronomía"
    ],
    "activities": [
      "City tour",
      "Restaurantes",
      "Experiencias locales"
    ],
    "bookingLinks": [
      {
        "label": "Reservar hotel",
        "url": "https://www.booking.com/"
      },
      {
        "label": "Buscar vuelos",
        "url": "https://www.google.com/travel/flights"
      },
      {
        "label": "Airbnb (opcional)",
        "url": "https://www.airbnb.com/"
      }
    ],
    "fullName": "Taipei 🌍",
    "recommendedPlace": "Zona recomendada en Taipei",
    "includes": [
      "Vuelos ida y vuelta",
      "Hotel 4★ o 5★",
      "Traslados aeropuerto – hotel",
      "Desayunos incluidos",
      "Experiencia exclusiva local"
    ],
    "hotel": "Hotel recomendado en Capital & City Lights: Luxury Collection 5★"
  },
  {
    "id": "taiwan-escape",
    "name": "Sun Moon Lake",
    "country": "Taiwan",
    "flag": "🌍",
    "category": "escape",
    "type": "destination",
    "priceFromUSD": 5200,
    "priceModel": "per_person",
    "coords": [
      25.833,
      122.4654
    ],
    "description": "Sun Moon Lake es la definición de escapada premium en Taiwan: paisajes que parecen de película, ambiente relajado y opciones perfectas para desconectar sin renunciar al lujo.\\n\\nCombina días de descanso (piscina, spa, playa) con experiencias privadas: paseos en barco, snorkel/buceo, cenas frente al mar o recorridos panorámicos. El objetivo es que cada día se sienta exclusivo y sin estrés.\\n\\nRecomendación: elige un alojamiento con vista y añade una actividad VIP (boat tour privado o cena de autor) para que el destino se sienta “wow” desde el primer día.",
    "highlights": [
      "Hoteles top",
      "Experiencias",
      "Gastronomía"
    ],
    "activities": [
      "City tour",
      "Restaurantes",
      "Experiencias locales"
    ],
    "bookingLinks": [
      {
        "label": "Reservar hotel",
        "url": "https://www.booking.com/"
      },
      {
        "label": "Buscar vuelos",
        "url": "https://www.google.com/travel/flights"
      },
      {
        "label": "Airbnb (opcional)",
        "url": "https://www.airbnb.com/"
      }
    ],
    "fullName": "Sun Moon Lake 🌍",
    "recommendedPlace": "Zona recomendada en Sun Moon Lake",
    "includes": [
      "Vuelos ida y vuelta",
      "Hotel 4★ o 5★",
      "Traslados aeropuerto – hotel",
      "Desayunos incluidos",
      "Experiencia exclusiva local"
    ],
    "hotel": "Hotel recomendado en Luxury Escape: Luxury Collection 5★"
  },
  {
    "id": "taiwan-nature",
    "name": "Taroko Gorge",
    "country": "Taiwan",
    "flag": "🌍",
    "category": "nature",
    "type": "destination",
    "priceFromUSD": 5100,
    "priceModel": "per_person",
    "coords": [
      24.233,
      120.6654
    ],
    "description": "Taroko Gorge es una elección espectacular para conectar con la naturaleza en Taiwan sin perder confort. Aquí el lujo se vive distinto: paisajes inmensos, aire puro y experiencias tranquilas con alojamientos seleccionados.\\n\\nOrganiza actividades guiadas y privadas: miradores, rutas escénicas, excursiones en 4x4 o caminatas suaves con paradas fotográficas. Después, regresa a un lodge/hotel cómodo para cenar bien y descansar de verdad.\\n\\nTip: prioriza horarios temprano o al atardecer para la mejor luz y menos gente, y lleva ropa por capas para estar cómodo.",
    "highlights": [
      "Hoteles top",
      "Experiencias",
      "Gastronomía"
    ],
    "activities": [
      "City tour",
      "Restaurantes",
      "Experiencias locales"
    ],
    "bookingLinks": [
      {
        "label": "Reservar hotel",
        "url": "https://www.booking.com/"
      },
      {
        "label": "Buscar vuelos",
        "url": "https://www.google.com/travel/flights"
      },
      {
        "label": "Airbnb (opcional)",
        "url": "https://www.airbnb.com/"
      }
    ],
    "fullName": "Taroko Gorge 🌍",
    "recommendedPlace": "Zona recomendada en Taroko Gorge",
    "includes": [
      "Vuelos ida y vuelta",
      "Hotel 4★ o 5★",
      "Traslados aeropuerto – hotel",
      "Desayunos incluidos",
      "Experiencia exclusiva local"
    ],
    "hotel": "Hotel recomendado en Nature Retreat: Luxury Collection 5★"
  },
  {
    "id": "iran-capital",
    "name": "Irán City",
    "country": "Irán",
    "flag": "🌍",
    "category": "capital",
    "type": "destination",
    "priceFromUSD": 4800,
    "priceModel": "per_person",
    "coords": [
      35.6892,
      51.389
    ],
    "description": "Irán City, en Irán, es una base perfecta para vivir el lado más sofisticado del destino: arquitectura icónica, barrios con personalidad, museos y una escena gastronómica que va desde cocina local auténtica hasta experiencias fine‑dining.\\n\\nEn un viaje estilo Luxury Escape, lo mejor es combinar recorridos privados por los puntos más emblemáticos con momentos de descanso en hoteles bien ubicados en zonas premium. Así puedes moverte fácil, comprar, probar restaurantes top y cerrar el día con rooftops o planes nocturnos.\\n\\nTip pro: camina temprano para ver la ciudad sin multitudes y reserva un tour privado al atardecer para fotos, vistas y una cena especial.",
    "highlights": [
      "Hoteles top",
      "Experiencias",
      "Gastronomía"
    ],
    "activities": [
      "City tour",
      "Restaurantes",
      "Experiencias locales"
    ],
    "bookingLinks": [
      {
        "label": "Reservar hotel",
        "url": "https://www.booking.com/"
      },
      {
        "label": "Buscar vuelos",
        "url": "https://www.google.com/travel/flights"
      },
      {
        "label": "Airbnb (opcional)",
        "url": "https://www.airbnb.com/"
      }
    ],
    "fullName": "Irán City 🌍",
    "recommendedPlace": "Centro de Isfahan",
    "includes": [
      "Vuelos ida y vuelta",
      "Hotel 4★ o 5★",
      "Traslados aeropuerto – hotel",
      "Desayunos incluidos",
      "Experiencia exclusiva local"
    ],
    "hotel": "Hotel recomendado en Capital & City Lights: Luxury Collection 5★"
  },
  {
    "id": "iran-escape",
    "name": "Irán Escape",
    "country": "Irán",
    "flag": "🌍",
    "category": "escape",
    "type": "destination",
    "priceFromUSD": 5200,
    "priceModel": "per_person",
    "coords": [
      36.4892,
      52.289
    ],
    "description": "Irán Escape es la definición de escapada premium en Irán: paisajes que parecen de película, ambiente relajado y opciones perfectas para desconectar sin renunciar al lujo.\\n\\nCombina días de descanso (piscina, spa, playa) con experiencias privadas: paseos en barco, snorkel/buceo, cenas frente al mar o recorridos panorámicos. El objetivo es que cada día se sienta exclusivo y sin estrés.\\n\\nRecomendación: elige un alojamiento con vista y añade una actividad VIP (boat tour privado o cena de autor) para que el destino se sienta “wow” desde el primer día.",
    "highlights": [
      "Hoteles top",
      "Experiencias",
      "Gastronomía"
    ],
    "activities": [
      "City tour",
      "Restaurantes",
      "Experiencias locales"
    ],
    "bookingLinks": [
      {
        "label": "Reservar hotel",
        "url": "https://www.booking.com/"
      },
      {
        "label": "Buscar vuelos",
        "url": "https://www.google.com/travel/flights"
      },
      {
        "label": "Airbnb (opcional)",
        "url": "https://www.airbnb.com/"
      }
    ],
    "fullName": "Irán Escape 🌍",
    "recommendedPlace": "Zona premium de Shiraz",
    "includes": [
      "Vuelos ida y vuelta",
      "Hotel 4★ o 5★",
      "Traslados aeropuerto – hotel",
      "Desayunos incluidos",
      "Experiencia exclusiva local"
    ],
    "hotel": "Hotel recomendado en Luxury Escape: Luxury Collection 5★"
  },
  {
    "id": "iran-nature",
    "name": "Irán Nature",
    "country": "Irán",
    "flag": "🌍",
    "category": "nature",
    "type": "destination",
    "priceFromUSD": 5100,
    "priceModel": "per_person",
    "coords": [
      34.8892,
      50.489
    ],
    "description": "Irán Nature es una elección espectacular para conectar con la naturaleza en Irán sin perder confort. Aquí el lujo se vive distinto: paisajes inmensos, aire puro y experiencias tranquilas con alojamientos seleccionados.\\n\\nOrganiza actividades guiadas y privadas: miradores, rutas escénicas, excursiones en 4x4 o caminatas suaves con paradas fotográficas. Después, regresa a un lodge/hotel cómodo para cenar bien y descansar de verdad.\\n\\nTip: prioriza horarios temprano o al atardecer para la mejor luz y menos gente, y lleva ropa por capas para estar cómodo.",
    "highlights": [
      "Hoteles top",
      "Experiencias",
      "Gastronomía"
    ],
    "activities": [
      "City tour",
      "Restaurantes",
      "Experiencias locales"
    ],
    "bookingLinks": [
      {
        "label": "Reservar hotel",
        "url": "https://www.booking.com/"
      },
      {
        "label": "Buscar vuelos",
        "url": "https://www.google.com/travel/flights"
      },
      {
        "label": "Airbnb (opcional)",
        "url": "https://www.airbnb.com/"
      }
    ],
    "fullName": "Irán Nature 🌍",
    "recommendedPlace": "Miradores / naturaleza en Irán Nature",
    "includes": [
      "Vuelos ida y vuelta",
      "Hotel 4★ o 5★",
      "Traslados aeropuerto – hotel",
      "Desayunos incluidos",
      "Experiencia exclusiva local"
    ],
    "hotel": "Hotel recomendado en Nature Retreat: Luxury Collection 5★"
  },
  {
    "id": "camboya-capital",
    "name": "Phnom Penh",
    "country": "Camboya",
    "flag": "🌍",
    "category": "capital",
    "type": "destination",
    "priceFromUSD": 4800,
    "priceModel": "per_person",
    "coords": [
      11.5564,
      104.9282
    ],
    "description": "Phnom Penh, en Camboya, es una base perfecta para vivir el lado más sofisticado del destino: arquitectura icónica, barrios con personalidad, museos y una escena gastronómica que va desde cocina local auténtica hasta experiencias fine‑dining.\\n\\nEn un viaje estilo Luxury Escape, lo mejor es combinar recorridos privados por los puntos más emblemáticos con momentos de descanso en hoteles bien ubicados en zonas premium. Así puedes moverte fácil, comprar, probar restaurantes top y cerrar el día con rooftops o planes nocturnos.\\n\\nTip pro: camina temprano para ver la ciudad sin multitudes y reserva un tour privado al atardecer para fotos, vistas y una cena especial.",
    "highlights": [
      "Hoteles top",
      "Experiencias",
      "Gastronomía"
    ],
    "activities": [
      "City tour",
      "Restaurantes",
      "Experiencias locales"
    ],
    "bookingLinks": [
      {
        "label": "Reservar hotel",
        "url": "https://www.booking.com/"
      },
      {
        "label": "Buscar vuelos",
        "url": "https://www.google.com/travel/flights"
      },
      {
        "label": "Airbnb (opcional)",
        "url": "https://www.airbnb.com/"
      }
    ],
    "fullName": "Phnom Penh 🌍",
    "recommendedPlace": "Zona recomendada en Phnom Penh",
    "includes": [
      "Vuelos ida y vuelta",
      "Hotel 4★ o 5★",
      "Traslados aeropuerto – hotel",
      "Desayunos incluidos",
      "Experiencia exclusiva local"
    ],
    "hotel": "Hotel recomendado en Capital & City Lights: Luxury Collection 5★"
  },
  {
    "id": "camboya-escape",
    "name": "Siem Reap",
    "country": "Camboya",
    "flag": "🌍",
    "category": "escape",
    "type": "destination",
    "priceFromUSD": 5200,
    "priceModel": "per_person",
    "coords": [
      12.3564,
      105.8282
    ],
    "description": "Siem Reap es la definición de escapada premium en Camboya: paisajes que parecen de película, ambiente relajado y opciones perfectas para desconectar sin renunciar al lujo.\\n\\nCombina días de descanso (piscina, spa, playa) con experiencias privadas: paseos en barco, snorkel/buceo, cenas frente al mar o recorridos panorámicos. El objetivo es que cada día se sienta exclusivo y sin estrés.\\n\\nRecomendación: elige un alojamiento con vista y añade una actividad VIP (boat tour privado o cena de autor) para que el destino se sienta “wow” desde el primer día.",
    "highlights": [
      "Hoteles top",
      "Experiencias",
      "Gastronomía"
    ],
    "activities": [
      "City tour",
      "Restaurantes",
      "Experiencias locales"
    ],
    "bookingLinks": [
      {
        "label": "Reservar hotel",
        "url": "https://www.booking.com/"
      },
      {
        "label": "Buscar vuelos",
        "url": "https://www.google.com/travel/flights"
      },
      {
        "label": "Airbnb (opcional)",
        "url": "https://www.airbnb.com/"
      }
    ],
    "fullName": "Siem Reap 🌍",
    "recommendedPlace": "Zona recomendada en Siem Reap",
    "includes": [
      "Vuelos ida y vuelta",
      "Hotel 4★ o 5★",
      "Traslados aeropuerto – hotel",
      "Desayunos incluidos",
      "Experiencia exclusiva local"
    ],
    "hotel": "Hotel recomendado en Luxury Escape: Luxury Collection 5★"
  },
  {
    "id": "camboya-nature",
    "name": "Koh Rong",
    "country": "Camboya",
    "flag": "🌍",
    "category": "nature",
    "type": "destination",
    "priceFromUSD": 5100,
    "priceModel": "per_person",
    "coords": [
      10.7564,
      104.0282
    ],
    "description": "Koh Rong es una elección espectacular para conectar con la naturaleza en Camboya sin perder confort. Aquí el lujo se vive distinto: paisajes inmensos, aire puro y experiencias tranquilas con alojamientos seleccionados.\\n\\nOrganiza actividades guiadas y privadas: miradores, rutas escénicas, excursiones en 4x4 o caminatas suaves con paradas fotográficas. Después, regresa a un lodge/hotel cómodo para cenar bien y descansar de verdad.\\n\\nTip: prioriza horarios temprano o al atardecer para la mejor luz y menos gente, y lleva ropa por capas para estar cómodo.",
    "highlights": [
      "Hoteles top",
      "Experiencias",
      "Gastronomía"
    ],
    "activities": [
      "City tour",
      "Restaurantes",
      "Experiencias locales"
    ],
    "bookingLinks": [
      {
        "label": "Reservar hotel",
        "url": "https://www.booking.com/"
      },
      {
        "label": "Buscar vuelos",
        "url": "https://www.google.com/travel/flights"
      },
      {
        "label": "Airbnb (opcional)",
        "url": "https://www.airbnb.com/"
      }
    ],
    "fullName": "Koh Rong 🌍",
    "recommendedPlace": "Zona recomendada en Koh Rong",
    "includes": [
      "Vuelos ida y vuelta",
      "Hotel 4★ o 5★",
      "Traslados aeropuerto – hotel",
      "Desayunos incluidos",
      "Experiencia exclusiva local"
    ],
    "hotel": "Hotel recomendado en Nature Retreat: Luxury Collection 5★"
  },
  {
    "id": "barein-capital",
    "name": "Manama",
    "country": "Baréin",
    "flag": "🌍",
    "category": "capital",
    "type": "destination",
    "priceFromUSD": 6500,
    "priceModel": "per_person",
    "coords": [
      26.2235,
      50.5876
    ],
    "description": "Manama, en Baréin, es una base perfecta para vivir el lado más sofisticado del destino: arquitectura icónica, barrios con personalidad, museos y una escena gastronómica que va desde cocina local auténtica hasta experiencias fine‑dining.\\n\\nEn un viaje estilo Luxury Escape, lo mejor es combinar recorridos privados por los puntos más emblemáticos con momentos de descanso en hoteles bien ubicados en zonas premium. Así puedes moverte fácil, comprar, probar restaurantes top y cerrar el día con rooftops o planes nocturnos.\\n\\nTip pro: camina temprano para ver la ciudad sin multitudes y reserva un tour privado al atardecer para fotos, vistas y una cena especial.",
    "highlights": [
      "Hoteles top",
      "Experiencias",
      "Gastronomía"
    ],
    "activities": [
      "City tour",
      "Restaurantes",
      "Experiencias locales"
    ],
    "bookingLinks": [
      {
        "label": "Reservar hotel",
        "url": "https://www.booking.com/"
      },
      {
        "label": "Buscar vuelos",
        "url": "https://www.google.com/travel/flights"
      },
      {
        "label": "Airbnb (opcional)",
        "url": "https://www.airbnb.com/"
      }
    ],
    "fullName": "Manama 🌍",
    "recommendedPlace": "Zona recomendada en Manama",
    "includes": [
      "Vuelos ida y vuelta",
      "Hotel 4★ o 5★",
      "Traslados aeropuerto – hotel",
      "Desayunos incluidos",
      "Experiencia exclusiva local"
    ],
    "hotel": "Hotel recomendado en Capital & City Lights: Luxury Collection 5★"
  },
  {
    "id": "barein-escape",
    "name": "Amwaj Islands",
    "country": "Baréin",
    "flag": "🌍",
    "category": "escape",
    "type": "destination",
    "priceFromUSD": 6900,
    "priceModel": "per_person",
    "coords": [
      27.0235,
      51.4876
    ],
    "description": "Amwaj Islands es la definición de escapada premium en Baréin: paisajes que parecen de película, ambiente relajado y opciones perfectas para desconectar sin renunciar al lujo.\\n\\nCombina días de descanso (piscina, spa, playa) con experiencias privadas: paseos en barco, snorkel/buceo, cenas frente al mar o recorridos panorámicos. El objetivo es que cada día se sienta exclusivo y sin estrés.\\n\\nRecomendación: elige un alojamiento con vista y añade una actividad VIP (boat tour privado o cena de autor) para que el destino se sienta “wow” desde el primer día.",
    "highlights": [
      "Hoteles top",
      "Experiencias",
      "Gastronomía"
    ],
    "activities": [
      "City tour",
      "Restaurantes",
      "Experiencias locales"
    ],
    "bookingLinks": [
      {
        "label": "Reservar hotel",
        "url": "https://www.booking.com/"
      },
      {
        "label": "Buscar vuelos",
        "url": "https://www.google.com/travel/flights"
      },
      {
        "label": "Airbnb (opcional)",
        "url": "https://www.airbnb.com/"
      }
    ],
    "fullName": "Amwaj Islands 🌍",
    "recommendedPlace": "Zona recomendada en Amwaj Islands",
    "includes": [
      "Vuelos ida y vuelta",
      "Hotel 4★ o 5★",
      "Traslados aeropuerto – hotel",
      "Desayunos incluidos",
      "Experiencia exclusiva local"
    ],
    "hotel": "Hotel recomendado en Luxury Escape: Luxury Collection 5★"
  },
  {
    "id": "barein-nature",
    "name": "Sakhir Desert",
    "country": "Baréin",
    "flag": "🌍",
    "category": "nature",
    "type": "destination",
    "priceFromUSD": 6800,
    "priceModel": "per_person",
    "coords": [
      25.4235,
      49.6876
    ],
    "description": "Sakhir Desert es una elección espectacular para conectar con la naturaleza en Baréin sin perder confort. Aquí el lujo se vive distinto: paisajes inmensos, aire puro y experiencias tranquilas con alojamientos seleccionados.\\n\\nOrganiza actividades guiadas y privadas: miradores, rutas escénicas, excursiones en 4x4 o caminatas suaves con paradas fotográficas. Después, regresa a un lodge/hotel cómodo para cenar bien y descansar de verdad.\\n\\nTip: prioriza horarios temprano o al atardecer para la mejor luz y menos gente, y lleva ropa por capas para estar cómodo.",
    "highlights": [
      "Hoteles top",
      "Experiencias",
      "Gastronomía"
    ],
    "activities": [
      "City tour",
      "Restaurantes",
      "Experiencias locales"
    ],
    "bookingLinks": [
      {
        "label": "Reservar hotel",
        "url": "https://www.booking.com/"
      },
      {
        "label": "Buscar vuelos",
        "url": "https://www.google.com/travel/flights"
      },
      {
        "label": "Airbnb (opcional)",
        "url": "https://www.airbnb.com/"
      }
    ],
    "fullName": "Sakhir Desert 🌍",
    "recommendedPlace": "Zona recomendada en Desert Retreat",
    "includes": [
      "Vuelos ida y vuelta",
      "Hotel 4★ o 5★",
      "Traslados aeropuerto – hotel",
      "Desayunos incluidos",
      "Experiencia exclusiva local"
    ],
    "hotel": "Hotel recomendado en Nature Retreat: Luxury Collection 5★"
  },
  {
    "id": "argentina-capital",
    "name": "Buenos Aires",
    "country": "Argentina",
    "flag": "🌍",
    "category": "capital",
    "type": "destination",
    "priceFromUSD": 3600,
    "priceModel": "per_person",
    "coords": [
      -34.6037,
      -58.3816
    ],
    "description": "Buenos Aires, en Argentina, es una base perfecta para vivir el lado más sofisticado del destino: arquitectura icónica, barrios con personalidad, museos y una escena gastronómica que va desde cocina local auténtica hasta experiencias fine‑dining.\\n\\nEn un viaje estilo Luxury Escape, lo mejor es combinar recorridos privados por los puntos más emblemáticos con momentos de descanso en hoteles bien ubicados en zonas premium. Así puedes moverte fácil, comprar, probar restaurantes top y cerrar el día con rooftops o planes nocturnos.\\n\\nTip pro: camina temprano para ver la ciudad sin multitudes y reserva un tour privado al atardecer para fotos, vistas y una cena especial.",
    "highlights": [
      "Hoteles top",
      "Experiencias",
      "Gastronomía"
    ],
    "activities": [
      "City tour",
      "Restaurantes",
      "Experiencias locales"
    ],
    "bookingLinks": [
      {
        "label": "Reservar hotel",
        "url": "https://www.booking.com/"
      },
      {
        "label": "Buscar vuelos",
        "url": "https://www.google.com/travel/flights"
      },
      {
        "label": "Airbnb (opcional)",
        "url": "https://www.airbnb.com/"
      }
    ],
    "fullName": "Buenos Aires 🌍",
    "recommendedPlace": "Zona recomendada en Buenos Aires",
    "includes": [
      "Vuelos ida y vuelta",
      "Hotel 4★ o 5★",
      "Traslados aeropuerto – hotel",
      "Desayunos incluidos",
      "Experiencia exclusiva local"
    ],
    "hotel": "Hotel recomendado en Capital & City Lights: Luxury Collection 5★"
  },
  {
    "id": "argentina-escape",
    "name": "Mendoza",
    "country": "Argentina",
    "flag": "🌍",
    "category": "escape",
    "type": "destination",
    "priceFromUSD": 4000,
    "priceModel": "per_person",
    "coords": [
      -33.8037,
      -57.4816
    ],
    "description": "Mendoza es la definición de escapada premium en Argentina: paisajes que parecen de película, ambiente relajado y opciones perfectas para desconectar sin renunciar al lujo.\\n\\nCombina días de descanso (piscina, spa, playa) con experiencias privadas: paseos en barco, snorkel/buceo, cenas frente al mar o recorridos panorámicos. El objetivo es que cada día se sienta exclusivo y sin estrés.\\n\\nRecomendación: elige un alojamiento con vista y añade una actividad VIP (boat tour privado o cena de autor) para que el destino se sienta “wow” desde el primer día.",
    "highlights": [
      "Hoteles top",
      "Experiencias",
      "Gastronomía"
    ],
    "activities": [
      "City tour",
      "Restaurantes",
      "Experiencias locales"
    ],
    "bookingLinks": [
      {
        "label": "Reservar hotel",
        "url": "https://www.booking.com/"
      },
      {
        "label": "Buscar vuelos",
        "url": "https://www.google.com/travel/flights"
      },
      {
        "label": "Airbnb (opcional)",
        "url": "https://www.airbnb.com/"
      }
    ],
    "fullName": "Mendoza 🌍",
    "recommendedPlace": "Zona recomendada en Mendoza",
    "includes": [
      "Vuelos ida y vuelta",
      "Hotel 4★ o 5★",
      "Traslados aeropuerto – hotel",
      "Desayunos incluidos",
      "Experiencia exclusiva local"
    ],
    "hotel": "Hotel recomendado en Luxury Escape: Luxury Collection 5★"
  },
  {
    "id": "argentina-nature",
    "name": "Patagonia",
    "country": "Argentina",
    "flag": "🌍",
    "category": "nature",
    "type": "destination",
    "priceFromUSD": 3900,
    "priceModel": "per_person",
    "coords": [
      -35.4037,
      -59.2816
    ],
    "description": "Patagonia es una elección espectacular para conectar con la naturaleza en Argentina sin perder confort. Aquí el lujo se vive distinto: paisajes inmensos, aire puro y experiencias tranquilas con alojamientos seleccionados.\\n\\nOrganiza actividades guiadas y privadas: miradores, rutas escénicas, excursiones en 4x4 o caminatas suaves con paradas fotográficas. Después, regresa a un lodge/hotel cómodo para cenar bien y descansar de verdad.\\n\\nTip: prioriza horarios temprano o al atardecer para la mejor luz y menos gente, y lleva ropa por capas para estar cómodo.",
    "highlights": [
      "Hoteles top",
      "Experiencias",
      "Gastronomía"
    ],
    "activities": [
      "City tour",
      "Restaurantes",
      "Experiencias locales"
    ],
    "bookingLinks": [
      {
        "label": "Reservar hotel",
        "url": "https://www.booking.com/"
      },
      {
        "label": "Buscar vuelos",
        "url": "https://www.google.com/travel/flights"
      },
      {
        "label": "Airbnb (opcional)",
        "url": "https://www.airbnb.com/"
      }
    ],
    "fullName": "Patagonia 🌍",
    "recommendedPlace": "Zona recomendada en Patagonia",
    "includes": [
      "Vuelos ida y vuelta",
      "Hotel 4★ o 5★",
      "Traslados aeropuerto – hotel",
      "Desayunos incluidos",
      "Experiencia exclusiva local"
    ],
    "hotel": "Hotel recomendado en Nature Retreat: Luxury Collection 5★"
  },
  {
    "id": "irlanda-capital",
    "name": "Dublin",
    "country": "Irlanda",
    "flag": "🌍",
    "category": "capital",
    "type": "destination",
    "priceFromUSD": 6800,
    "priceModel": "per_person",
    "coords": [
      53.3498,
      -6.2603
    ],
    "description": "Dublin, en Irlanda, es una base perfecta para vivir el lado más sofisticado del destino: arquitectura icónica, barrios con personalidad, museos y una escena gastronómica que va desde cocina local auténtica hasta experiencias fine‑dining.\\n\\nEn un viaje estilo Luxury Escape, lo mejor es combinar recorridos privados por los puntos más emblemáticos con momentos de descanso en hoteles bien ubicados en zonas premium. Así puedes moverte fácil, comprar, probar restaurantes top y cerrar el día con rooftops o planes nocturnos.\\n\\nTip pro: camina temprano para ver la ciudad sin multitudes y reserva un tour privado al atardecer para fotos, vistas y una cena especial.",
    "highlights": [
      "Hoteles top",
      "Experiencias",
      "Gastronomía"
    ],
    "activities": [
      "City tour",
      "Restaurantes",
      "Experiencias locales"
    ],
    "bookingLinks": [
      {
        "label": "Reservar hotel",
        "url": "https://www.booking.com/"
      },
      {
        "label": "Buscar vuelos",
        "url": "https://www.google.com/travel/flights"
      },
      {
        "label": "Airbnb (opcional)",
        "url": "https://www.airbnb.com/"
      }
    ],
    "fullName": "Dublin 🌍",
    "recommendedPlace": "Zona recomendada en Dublin",
    "includes": [
      "Vuelos ida y vuelta",
      "Hotel 4★ o 5★",
      "Traslados aeropuerto – hotel",
      "Desayunos incluidos",
      "Experiencia exclusiva local"
    ],
    "hotel": "Hotel recomendado en Capital & City Lights: Luxury Collection 5★"
  },
  {
    "id": "irlanda-escape",
    "name": "Galway",
    "country": "Irlanda",
    "flag": "🌍",
    "category": "escape",
    "type": "destination",
    "priceFromUSD": 7200,
    "priceModel": "per_person",
    "coords": [
      54.1498,
      -5.3603
    ],
    "description": "Galway es la definición de escapada premium en Irlanda: paisajes que parecen de película, ambiente relajado y opciones perfectas para desconectar sin renunciar al lujo.\\n\\nCombina días de descanso (piscina, spa, playa) con experiencias privadas: paseos en barco, snorkel/buceo, cenas frente al mar o recorridos panorámicos. El objetivo es que cada día se sienta exclusivo y sin estrés.\\n\\nRecomendación: elige un alojamiento con vista y añade una actividad VIP (boat tour privado o cena de autor) para que el destino se sienta “wow” desde el primer día.",
    "highlights": [
      "Hoteles top",
      "Experiencias",
      "Gastronomía"
    ],
    "activities": [
      "City tour",
      "Restaurantes",
      "Experiencias locales"
    ],
    "bookingLinks": [
      {
        "label": "Reservar hotel",
        "url": "https://www.booking.com/"
      },
      {
        "label": "Buscar vuelos",
        "url": "https://www.google.com/travel/flights"
      },
      {
        "label": "Airbnb (opcional)",
        "url": "https://www.airbnb.com/"
      }
    ],
    "fullName": "Galway 🌍",
    "recommendedPlace": "Zona recomendada en Galway",
    "includes": [
      "Vuelos ida y vuelta",
      "Hotel 4★ o 5★",
      "Traslados aeropuerto – hotel",
      "Desayunos incluidos",
      "Experiencia exclusiva local"
    ],
    "hotel": "Hotel recomendado en Luxury Escape: Luxury Collection 5★"
  },
  {
    "id": "irlanda-nature",
    "name": "Cliffs of Moher",
    "country": "Irlanda",
    "flag": "🌍",
    "category": "nature",
    "type": "destination",
    "priceFromUSD": 7100,
    "priceModel": "per_person",
    "coords": [
      52.5498,
      -7.1603
    ],
    "description": "Cliffs of Moher es una elección espectacular para conectar con la naturaleza en Irlanda sin perder confort. Aquí el lujo se vive distinto: paisajes inmensos, aire puro y experiencias tranquilas con alojamientos seleccionados.\\n\\nOrganiza actividades guiadas y privadas: miradores, rutas escénicas, excursiones en 4x4 o caminatas suaves con paradas fotográficas. Después, regresa a un lodge/hotel cómodo para cenar bien y descansar de verdad.\\n\\nTip: prioriza horarios temprano o al atardecer para la mejor luz y menos gente, y lleva ropa por capas para estar cómodo.",
    "highlights": [
      "Hoteles top",
      "Experiencias",
      "Gastronomía"
    ],
    "activities": [
      "City tour",
      "Restaurantes",
      "Experiencias locales"
    ],
    "bookingLinks": [
      {
        "label": "Reservar hotel",
        "url": "https://www.booking.com/"
      },
      {
        "label": "Buscar vuelos",
        "url": "https://www.google.com/travel/flights"
      },
      {
        "label": "Airbnb (opcional)",
        "url": "https://www.airbnb.com/"
      }
    ],
    "fullName": "Cliffs of Moher 🌍",
    "recommendedPlace": "Zona recomendada en Cliffs of Moher",
    "includes": [
      "Vuelos ida y vuelta",
      "Hotel 4★ o 5★",
      "Traslados aeropuerto – hotel",
      "Desayunos incluidos",
      "Experiencia exclusiva local"
    ],
    "hotel": "Hotel recomendado en Nature Retreat: Luxury Collection 5★"
  },
  {
    "id": "colombia-capital",
    "name": "Bogotá",
    "country": "Colombia",
    "flag": "🌍",
    "category": "capital",
    "type": "destination",
    "priceFromUSD": 3600,
    "priceModel": "per_person",
    "coords": [
      4.711,
      -74.0721
    ],
    "description": "Bogotá, en Colombia, es una base perfecta para vivir el lado más sofisticado del destino: arquitectura icónica, barrios con personalidad, museos y una escena gastronómica que va desde cocina local auténtica hasta experiencias fine‑dining.\\n\\nEn un viaje estilo Luxury Escape, lo mejor es combinar recorridos privados por los puntos más emblemáticos con momentos de descanso en hoteles bien ubicados en zonas premium. Así puedes moverte fácil, comprar, probar restaurantes top y cerrar el día con rooftops o planes nocturnos.\\n\\nTip pro: camina temprano para ver la ciudad sin multitudes y reserva un tour privado al atardecer para fotos, vistas y una cena especial.",
    "highlights": [
      "Hoteles top",
      "Experiencias",
      "Gastronomía"
    ],
    "activities": [
      "City tour",
      "Restaurantes",
      "Experiencias locales"
    ],
    "bookingLinks": [
      {
        "label": "Reservar hotel",
        "url": "https://www.booking.com/"
      },
      {
        "label": "Buscar vuelos",
        "url": "https://www.google.com/travel/flights"
      },
      {
        "label": "Airbnb (opcional)",
        "url": "https://www.airbnb.com/"
      }
    ],
    "fullName": "Bogotá 🌍",
    "recommendedPlace": "Zona recomendada en Bogotá",
    "includes": [
      "Vuelos ida y vuelta",
      "Hotel 4★ o 5★",
      "Traslados aeropuerto – hotel",
      "Desayunos incluidos",
      "Experiencia exclusiva local"
    ],
    "hotel": "Hotel recomendado en Capital & City Lights: Luxury Collection 5★"
  },
  {
    "id": "colombia-escape",
    "name": "Cartagena",
    "country": "Colombia",
    "flag": "🌍",
    "category": "escape",
    "type": "destination",
    "priceFromUSD": 4000,
    "priceModel": "per_person",
    "coords": [
      5.511,
      -73.1721
    ],
    "description": "Cartagena es la definición de escapada premium en Colombia: paisajes que parecen de película, ambiente relajado y opciones perfectas para desconectar sin renunciar al lujo.\\n\\nCombina días de descanso (piscina, spa, playa) con experiencias privadas: paseos en barco, snorkel/buceo, cenas frente al mar o recorridos panorámicos. El objetivo es que cada día se sienta exclusivo y sin estrés.\\n\\nRecomendación: elige un alojamiento con vista y añade una actividad VIP (boat tour privado o cena de autor) para que el destino se sienta “wow” desde el primer día.",
    "highlights": [
      "Hoteles top",
      "Experiencias",
      "Gastronomía"
    ],
    "activities": [
      "City tour",
      "Restaurantes",
      "Experiencias locales"
    ],
    "bookingLinks": [
      {
        "label": "Reservar hotel",
        "url": "https://www.booking.com/"
      },
      {
        "label": "Buscar vuelos",
        "url": "https://www.google.com/travel/flights"
      },
      {
        "label": "Airbnb (opcional)",
        "url": "https://www.airbnb.com/"
      }
    ],
    "fullName": "Cartagena 🌍",
    "recommendedPlace": "Zona recomendada en Cartagena",
    "includes": [
      "Vuelos ida y vuelta",
      "Hotel 4★ o 5★",
      "Traslados aeropuerto – hotel",
      "Desayunos incluidos",
      "Experiencia exclusiva local"
    ],
    "hotel": "Hotel recomendado en Luxury Escape: Luxury Collection 5★"
  },
  {
    "id": "colombia-nature",
    "name": "Eje Cafetero",
    "country": "Colombia",
    "flag": "🌍",
    "category": "nature",
    "type": "destination",
    "priceFromUSD": 3900,
    "priceModel": "per_person",
    "coords": [
      3.911,
      -74.9721
    ],
    "description": "Eje Cafetero es una elección espectacular para conectar con la naturaleza en Colombia sin perder confort. Aquí el lujo se vive distinto: paisajes inmensos, aire puro y experiencias tranquilas con alojamientos seleccionados.\\n\\nOrganiza actividades guiadas y privadas: miradores, rutas escénicas, excursiones en 4x4 o caminatas suaves con paradas fotográficas. Después, regresa a un lodge/hotel cómodo para cenar bien y descansar de verdad.\\n\\nTip: prioriza horarios temprano o al atardecer para la mejor luz y menos gente, y lleva ropa por capas para estar cómodo.",
    "highlights": [
      "Hoteles top",
      "Experiencias",
      "Gastronomía"
    ],
    "activities": [
      "City tour",
      "Restaurantes",
      "Experiencias locales"
    ],
    "bookingLinks": [
      {
        "label": "Reservar hotel",
        "url": "https://www.booking.com/"
      },
      {
        "label": "Buscar vuelos",
        "url": "https://www.google.com/travel/flights"
      },
      {
        "label": "Airbnb (opcional)",
        "url": "https://www.airbnb.com/"
      }
    ],
    "fullName": "Eje Cafetero 🌍",
    "recommendedPlace": "Zona recomendada en Eje Cafetero",
    "includes": [
      "Vuelos ida y vuelta",
      "Hotel 4★ o 5★",
      "Traslados aeropuerto – hotel",
      "Desayunos incluidos",
      "Experiencia exclusiva local"
    ],
    "hotel": "Hotel recomendado en Nature Retreat: Luxury Collection 5★"
  },
  {
    "id": "filipinas-capital",
    "name": "Manila",
    "country": "Filipinas",
    "flag": "🌍",
    "category": "capital",
    "type": "destination",
    "priceFromUSD": 4800,
    "priceModel": "per_person",
    "coords": [
      14.5995,
      120.9842
    ],
    "description": "Manila, en Filipinas, es una base perfecta para vivir el lado más sofisticado del destino: arquitectura icónica, barrios con personalidad, museos y una escena gastronómica que va desde cocina local auténtica hasta experiencias fine‑dining.\\n\\nEn un viaje estilo Luxury Escape, lo mejor es combinar recorridos privados por los puntos más emblemáticos con momentos de descanso en hoteles bien ubicados en zonas premium. Así puedes moverte fácil, comprar, probar restaurantes top y cerrar el día con rooftops o planes nocturnos.\\n\\nTip pro: camina temprano para ver la ciudad sin multitudes y reserva un tour privado al atardecer para fotos, vistas y una cena especial.",
    "highlights": [
      "Hoteles top",
      "Experiencias",
      "Gastronomía"
    ],
    "activities": [
      "City tour",
      "Restaurantes",
      "Experiencias locales"
    ],
    "bookingLinks": [
      {
        "label": "Reservar hotel",
        "url": "https://www.booking.com/"
      },
      {
        "label": "Buscar vuelos",
        "url": "https://www.google.com/travel/flights"
      },
      {
        "label": "Airbnb (opcional)",
        "url": "https://www.airbnb.com/"
      }
    ],
    "fullName": "Manila 🌍",
    "recommendedPlace": "Zona recomendada en Manila",
    "includes": [
      "Vuelos ida y vuelta",
      "Hotel 4★ o 5★",
      "Traslados aeropuerto – hotel",
      "Desayunos incluidos",
      "Experiencia exclusiva local"
    ],
    "hotel": "Hotel recomendado en Capital & City Lights: Luxury Collection 5★"
  },
  {
    "id": "filipinas-escape",
    "name": "Boracay",
    "country": "Filipinas",
    "flag": "🌍",
    "category": "escape",
    "type": "destination",
    "priceFromUSD": 5200,
    "priceModel": "per_person",
    "coords": [
      15.3995,
      121.8842
    ],
    "description": "Boracay es la definición de escapada premium en Filipinas: paisajes que parecen de película, ambiente relajado y opciones perfectas para desconectar sin renunciar al lujo.\\n\\nCombina días de descanso (piscina, spa, playa) con experiencias privadas: paseos en barco, snorkel/buceo, cenas frente al mar o recorridos panorámicos. El objetivo es que cada día se sienta exclusivo y sin estrés.\\n\\nRecomendación: elige un alojamiento con vista y añade una actividad VIP (boat tour privado o cena de autor) para que el destino se sienta “wow” desde el primer día.",
    "highlights": [
      "Hoteles top",
      "Experiencias",
      "Gastronomía"
    ],
    "activities": [
      "City tour",
      "Restaurantes",
      "Experiencias locales"
    ],
    "bookingLinks": [
      {
        "label": "Reservar hotel",
        "url": "https://www.booking.com/"
      },
      {
        "label": "Buscar vuelos",
        "url": "https://www.google.com/travel/flights"
      },
      {
        "label": "Airbnb (opcional)",
        "url": "https://www.airbnb.com/"
      }
    ],
    "fullName": "Boracay 🌍",
    "recommendedPlace": "Zona recomendada en Boracay",
    "includes": [
      "Vuelos ida y vuelta",
      "Hotel 4★ o 5★",
      "Traslados aeropuerto – hotel",
      "Desayunos incluidos",
      "Experiencia exclusiva local"
    ],
    "hotel": "Hotel recomendado en Luxury Escape: Luxury Collection 5★"
  },
  {
    "id": "filipinas-nature",
    "name": "Palawan",
    "country": "Filipinas",
    "flag": "🌍",
    "category": "nature",
    "type": "destination",
    "priceFromUSD": 5100,
    "priceModel": "per_person",
    "coords": [
      13.7995,
      120.0842
    ],
    "description": "Palawan es una elección espectacular para conectar con la naturaleza en Filipinas sin perder confort. Aquí el lujo se vive distinto: paisajes inmensos, aire puro y experiencias tranquilas con alojamientos seleccionados.\\n\\nOrganiza actividades guiadas y privadas: miradores, rutas escénicas, excursiones en 4x4 o caminatas suaves con paradas fotográficas. Después, regresa a un lodge/hotel cómodo para cenar bien y descansar de verdad.\\n\\nTip: prioriza horarios temprano o al atardecer para la mejor luz y menos gente, y lleva ropa por capas para estar cómodo.",
    "highlights": [
      "Hoteles top",
      "Experiencias",
      "Gastronomía"
    ],
    "activities": [
      "City tour",
      "Restaurantes",
      "Experiencias locales"
    ],
    "bookingLinks": [
      {
        "label": "Reservar hotel",
        "url": "https://www.booking.com/"
      },
      {
        "label": "Buscar vuelos",
        "url": "https://www.google.com/travel/flights"
      },
      {
        "label": "Airbnb (opcional)",
        "url": "https://www.airbnb.com/"
      }
    ],
    "fullName": "Palawan 🌍",
    "recommendedPlace": "Zona recomendada en Palawan",
    "includes": [
      "Vuelos ida y vuelta",
      "Hotel 4★ o 5★",
      "Traslados aeropuerto – hotel",
      "Desayunos incluidos",
      "Experiencia exclusiva local"
    ],
    "hotel": "Hotel recomendado en Nature Retreat: Luxury Collection 5★"
  },
  {
    "id": "chile-capital",
    "name": "Santiago",
    "country": "Chile",
    "flag": "🌍",
    "category": "capital",
    "type": "destination",
    "priceFromUSD": 3600,
    "priceModel": "per_person",
    "coords": [
      -33.4489,
      -70.6693
    ],
    "description": "Santiago, en Chile, es una base perfecta para vivir el lado más sofisticado del destino: arquitectura icónica, barrios con personalidad, museos y una escena gastronómica que va desde cocina local auténtica hasta experiencias fine‑dining.\\n\\nEn un viaje estilo Luxury Escape, lo mejor es combinar recorridos privados por los puntos más emblemáticos con momentos de descanso en hoteles bien ubicados en zonas premium. Así puedes moverte fácil, comprar, probar restaurantes top y cerrar el día con rooftops o planes nocturnos.\\n\\nTip pro: camina temprano para ver la ciudad sin multitudes y reserva un tour privado al atardecer para fotos, vistas y una cena especial.",
    "highlights": [
      "Hoteles top",
      "Experiencias",
      "Gastronomía"
    ],
    "activities": [
      "City tour",
      "Restaurantes",
      "Experiencias locales"
    ],
    "bookingLinks": [
      {
        "label": "Reservar hotel",
        "url": "https://www.booking.com/"
      },
      {
        "label": "Buscar vuelos",
        "url": "https://www.google.com/travel/flights"
      },
      {
        "label": "Airbnb (opcional)",
        "url": "https://www.airbnb.com/"
      }
    ],
    "fullName": "Santiago 🌍",
    "recommendedPlace": "Zona recomendada en Santiago",
    "includes": [
      "Vuelos ida y vuelta",
      "Hotel 4★ o 5★",
      "Traslados aeropuerto – hotel",
      "Desayunos incluidos",
      "Experiencia exclusiva local"
    ],
    "hotel": "Hotel recomendado en Capital & City Lights: Luxury Collection 5★"
  },
  {
    "id": "chile-escape",
    "name": "Atacama",
    "country": "Chile",
    "flag": "🌍",
    "category": "escape",
    "type": "destination",
    "priceFromUSD": 4000,
    "priceModel": "per_person",
    "coords": [
      -32.6489,
      -69.7693
    ],
    "description": "Atacama es la definición de escapada premium en Chile: paisajes que parecen de película, ambiente relajado y opciones perfectas para desconectar sin renunciar al lujo.\\n\\nCombina días de descanso (piscina, spa, playa) con experiencias privadas: paseos en barco, snorkel/buceo, cenas frente al mar o recorridos panorámicos. El objetivo es que cada día se sienta exclusivo y sin estrés.\\n\\nRecomendación: elige un alojamiento con vista y añade una actividad VIP (boat tour privado o cena de autor) para que el destino se sienta “wow” desde el primer día.",
    "highlights": [
      "Hoteles top",
      "Experiencias",
      "Gastronomía"
    ],
    "activities": [
      "City tour",
      "Restaurantes",
      "Experiencias locales"
    ],
    "bookingLinks": [
      {
        "label": "Reservar hotel",
        "url": "https://www.booking.com/"
      },
      {
        "label": "Buscar vuelos",
        "url": "https://www.google.com/travel/flights"
      },
      {
        "label": "Airbnb (opcional)",
        "url": "https://www.airbnb.com/"
      }
    ],
    "fullName": "Atacama 🌍",
    "recommendedPlace": "Zona recomendada en Atacama",
    "includes": [
      "Vuelos ida y vuelta",
      "Hotel 4★ o 5★",
      "Traslados aeropuerto – hotel",
      "Desayunos incluidos",
      "Experiencia exclusiva local"
    ],
    "hotel": "Hotel recomendado en Luxury Escape: Luxury Collection 5★"
  },
  {
    "id": "chile-nature",
    "name": "Torres del Paine",
    "country": "Chile",
    "flag": "🌍",
    "category": "nature",
    "type": "destination",
    "priceFromUSD": 3900,
    "priceModel": "per_person",
    "coords": [
      -34.2489,
      -71.5693
    ],
    "description": "Torres del Paine es una elección espectacular para conectar con la naturaleza en Chile sin perder confort. Aquí el lujo se vive distinto: paisajes inmensos, aire puro y experiencias tranquilas con alojamientos seleccionados.\\n\\nOrganiza actividades guiadas y privadas: miradores, rutas escénicas, excursiones en 4x4 o caminatas suaves con paradas fotográficas. Después, regresa a un lodge/hotel cómodo para cenar bien y descansar de verdad.\\n\\nTip: prioriza horarios temprano o al atardecer para la mejor luz y menos gente, y lleva ropa por capas para estar cómodo.",
    "highlights": [
      "Hoteles top",
      "Experiencias",
      "Gastronomía"
    ],
    "activities": [
      "City tour",
      "Restaurantes",
      "Experiencias locales"
    ],
    "bookingLinks": [
      {
        "label": "Reservar hotel",
        "url": "https://www.booking.com/"
      },
      {
        "label": "Buscar vuelos",
        "url": "https://www.google.com/travel/flights"
      },
      {
        "label": "Airbnb (opcional)",
        "url": "https://www.airbnb.com/"
      }
    ],
    "fullName": "Torres del Paine 🌍",
    "recommendedPlace": "Zona recomendada en Torres del Paine",
    "includes": [
      "Vuelos ida y vuelta",
      "Hotel 4★ o 5★",
      "Traslados aeropuerto – hotel",
      "Desayunos incluidos",
      "Experiencia exclusiva local"
    ],
    "hotel": "Hotel recomendado en Nature Retreat: Luxury Collection 5★"
  },
  {
    "id": "jordania-capital",
    "name": "Amán",
    "country": "Jordania",
    "flag": "🌍",
    "category": "capital",
    "type": "destination",
    "priceFromUSD": 4800,
    "priceModel": "per_person",
    "coords": [
      31.9454,
      35.9284
    ],
    "description": "Amán, en Jordania, es una base perfecta para vivir el lado más sofisticado del destino: arquitectura icónica, barrios con personalidad, museos y una escena gastronómica que va desde cocina local auténtica hasta experiencias fine‑dining.\\n\\nEn un viaje estilo Luxury Escape, lo mejor es combinar recorridos privados por los puntos más emblemáticos con momentos de descanso en hoteles bien ubicados en zonas premium. Así puedes moverte fácil, comprar, probar restaurantes top y cerrar el día con rooftops o planes nocturnos.\\n\\nTip pro: camina temprano para ver la ciudad sin multitudes y reserva un tour privado al atardecer para fotos, vistas y una cena especial.",
    "highlights": [
      "Hoteles top",
      "Experiencias",
      "Gastronomía"
    ],
    "activities": [
      "City tour",
      "Restaurantes",
      "Experiencias locales"
    ],
    "bookingLinks": [
      {
        "label": "Reservar hotel",
        "url": "https://www.booking.com/"
      },
      {
        "label": "Buscar vuelos",
        "url": "https://www.google.com/travel/flights"
      },
      {
        "label": "Airbnb (opcional)",
        "url": "https://www.airbnb.com/"
      }
    ],
    "fullName": "Amán 🌍",
    "recommendedPlace": "Zona recomendada en Amán",
    "includes": [
      "Vuelos ida y vuelta",
      "Hotel 4★ o 5★",
      "Traslados aeropuerto – hotel",
      "Desayunos incluidos",
      "Experiencia exclusiva local"
    ],
    "hotel": "Hotel recomendado en Capital & City Lights: Luxury Collection 5★"
  },
  {
    "id": "jordania-escape",
    "name": "Petra",
    "country": "Jordania",
    "flag": "🌍",
    "category": "escape",
    "type": "destination",
    "priceFromUSD": 5200,
    "priceModel": "per_person",
    "coords": [
      32.7454,
      36.8284
    ],
    "description": "Petra es la definición de escapada premium en Jordania: paisajes que parecen de película, ambiente relajado y opciones perfectas para desconectar sin renunciar al lujo.\\n\\nCombina días de descanso (piscina, spa, playa) con experiencias privadas: paseos en barco, snorkel/buceo, cenas frente al mar o recorridos panorámicos. El objetivo es que cada día se sienta exclusivo y sin estrés.\\n\\nRecomendación: elige un alojamiento con vista y añade una actividad VIP (boat tour privado o cena de autor) para que el destino se sienta “wow” desde el primer día.",
    "highlights": [
      "Hoteles top",
      "Experiencias",
      "Gastronomía"
    ],
    "activities": [
      "City tour",
      "Restaurantes",
      "Experiencias locales"
    ],
    "bookingLinks": [
      {
        "label": "Reservar hotel",
        "url": "https://www.booking.com/"
      },
      {
        "label": "Buscar vuelos",
        "url": "https://www.google.com/travel/flights"
      },
      {
        "label": "Airbnb (opcional)",
        "url": "https://www.airbnb.com/"
      }
    ],
    "fullName": "Petra 🌍",
    "recommendedPlace": "Zona recomendada en Petra",
    "includes": [
      "Vuelos ida y vuelta",
      "Hotel 4★ o 5★",
      "Traslados aeropuerto – hotel",
      "Desayunos incluidos",
      "Experiencia exclusiva local"
    ],
    "hotel": "Hotel recomendado en Luxury Escape: Luxury Collection 5★"
  },
  {
    "id": "jordania-nature",
    "name": "Wadi Rum",
    "country": "Jordania",
    "flag": "🌍",
    "category": "nature",
    "type": "destination",
    "priceFromUSD": 5100,
    "priceModel": "per_person",
    "coords": [
      31.1454,
      35.0284
    ],
    "description": "Wadi Rum es una elección espectacular para conectar con la naturaleza en Jordania sin perder confort. Aquí el lujo se vive distinto: paisajes inmensos, aire puro y experiencias tranquilas con alojamientos seleccionados.\\n\\nOrganiza actividades guiadas y privadas: miradores, rutas escénicas, excursiones en 4x4 o caminatas suaves con paradas fotográficas. Después, regresa a un lodge/hotel cómodo para cenar bien y descansar de verdad.\\n\\nTip: prioriza horarios temprano o al atardecer para la mejor luz y menos gente, y lleva ropa por capas para estar cómodo.",
    "highlights": [
      "Hoteles top",
      "Experiencias",
      "Gastronomía"
    ],
    "activities": [
      "City tour",
      "Restaurantes",
      "Experiencias locales"
    ],
    "bookingLinks": [
      {
        "label": "Reservar hotel",
        "url": "https://www.booking.com/"
      },
      {
        "label": "Buscar vuelos",
        "url": "https://www.google.com/travel/flights"
      },
      {
        "label": "Airbnb (opcional)",
        "url": "https://www.airbnb.com/"
      }
    ],
    "fullName": "Wadi Rum 🌍",
    "recommendedPlace": "Zona recomendada en Wadi Rum",
    "includes": [
      "Vuelos ida y vuelta",
      "Hotel 4★ o 5★",
      "Traslados aeropuerto – hotel",
      "Desayunos incluidos",
      "Experiencia exclusiva local"
    ],
    "hotel": "Hotel recomendado en Nature Retreat: Luxury Collection 5★"
  },
  {
    "id": "georgia-capital",
    "name": "Tbilisi",
    "country": "Georgia",
    "flag": "🌍",
    "category": "capital",
    "type": "destination",
    "priceFromUSD": 4800,
    "priceModel": "per_person",
    "coords": [
      41.7151,
      44.8271
    ],
    "description": "Tbilisi, en Georgia, es una base perfecta para vivir el lado más sofisticado del destino: arquitectura icónica, barrios con personalidad, museos y una escena gastronómica que va desde cocina local auténtica hasta experiencias fine‑dining.\\n\\nEn un viaje estilo Luxury Escape, lo mejor es combinar recorridos privados por los puntos más emblemáticos con momentos de descanso en hoteles bien ubicados en zonas premium. Así puedes moverte fácil, comprar, probar restaurantes top y cerrar el día con rooftops o planes nocturnos.\\n\\nTip pro: camina temprano para ver la ciudad sin multitudes y reserva un tour privado al atardecer para fotos, vistas y una cena especial.",
    "highlights": [
      "Hoteles top",
      "Experiencias",
      "Gastronomía"
    ],
    "activities": [
      "City tour",
      "Restaurantes",
      "Experiencias locales"
    ],
    "bookingLinks": [
      {
        "label": "Reservar hotel",
        "url": "https://www.booking.com/"
      },
      {
        "label": "Buscar vuelos",
        "url": "https://www.google.com/travel/flights"
      },
      {
        "label": "Airbnb (opcional)",
        "url": "https://www.airbnb.com/"
      }
    ],
    "fullName": "Tbilisi 🌍",
    "recommendedPlace": "Zona recomendada en Tbilisi",
    "includes": [
      "Vuelos ida y vuelta",
      "Hotel 4★ o 5★",
      "Traslados aeropuerto – hotel",
      "Desayunos incluidos",
      "Experiencia exclusiva local"
    ],
    "hotel": "Hotel recomendado en Capital & City Lights: Luxury Collection 5★"
  },
  {
    "id": "georgia-escape",
    "name": "Kazbegi",
    "country": "Georgia",
    "flag": "🌍",
    "category": "escape",
    "type": "destination",
    "priceFromUSD": 5200,
    "priceModel": "per_person",
    "coords": [
      42.5151,
      45.7271
    ],
    "description": "Kazbegi es la definición de escapada premium en Georgia: paisajes que parecen de película, ambiente relajado y opciones perfectas para desconectar sin renunciar al lujo.\\n\\nCombina días de descanso (piscina, spa, playa) con experiencias privadas: paseos en barco, snorkel/buceo, cenas frente al mar o recorridos panorámicos. El objetivo es que cada día se sienta exclusivo y sin estrés.\\n\\nRecomendación: elige un alojamiento con vista y añade una actividad VIP (boat tour privado o cena de autor) para que el destino se sienta “wow” desde el primer día.",
    "highlights": [
      "Hoteles top",
      "Experiencias",
      "Gastronomía"
    ],
    "activities": [
      "City tour",
      "Restaurantes",
      "Experiencias locales"
    ],
    "bookingLinks": [
      {
        "label": "Reservar hotel",
        "url": "https://www.booking.com/"
      },
      {
        "label": "Buscar vuelos",
        "url": "https://www.google.com/travel/flights"
      },
      {
        "label": "Airbnb (opcional)",
        "url": "https://www.airbnb.com/"
      }
    ],
    "fullName": "Kazbegi 🌍",
    "recommendedPlace": "Zona recomendada en Kazbegi",
    "includes": [
      "Vuelos ida y vuelta",
      "Hotel 4★ o 5★",
      "Traslados aeropuerto – hotel",
      "Desayunos incluidos",
      "Experiencia exclusiva local"
    ],
    "hotel": "Hotel recomendado en Luxury Escape: Luxury Collection 5★"
  },
  {
    "id": "georgia-nature",
    "name": "Kakheti",
    "country": "Georgia",
    "flag": "🌍",
    "category": "nature",
    "type": "destination",
    "priceFromUSD": 5100,
    "priceModel": "per_person",
    "coords": [
      40.9151,
      43.9271
    ],
    "description": "Kakheti es una elección espectacular para conectar con la naturaleza en Georgia sin perder confort. Aquí el lujo se vive distinto: paisajes inmensos, aire puro y experiencias tranquilas con alojamientos seleccionados.\\n\\nOrganiza actividades guiadas y privadas: miradores, rutas escénicas, excursiones en 4x4 o caminatas suaves con paradas fotográficas. Después, regresa a un lodge/hotel cómodo para cenar bien y descansar de verdad.\\n\\nTip: prioriza horarios temprano o al atardecer para la mejor luz y menos gente, y lleva ropa por capas para estar cómodo.",
    "highlights": [
      "Hoteles top",
      "Experiencias",
      "Gastronomía"
    ],
    "activities": [
      "City tour",
      "Restaurantes",
      "Experiencias locales"
    ],
    "bookingLinks": [
      {
        "label": "Reservar hotel",
        "url": "https://www.booking.com/"
      },
      {
        "label": "Buscar vuelos",
        "url": "https://www.google.com/travel/flights"
      },
      {
        "label": "Airbnb (opcional)",
        "url": "https://www.airbnb.com/"
      }
    ],
    "fullName": "Kakheti 🌍",
    "recommendedPlace": "Zona recomendada en Kakheti",
    "includes": [
      "Vuelos ida y vuelta",
      "Hotel 4★ o 5★",
      "Traslados aeropuerto – hotel",
      "Desayunos incluidos",
      "Experiencia exclusiva local"
    ],
    "hotel": "Hotel recomendado en Nature Retreat: Luxury Collection 5★"
  },
  {
    "id": "catar-capital",
    "name": "Doha",
    "country": "Catar",
    "flag": "🌍",
    "category": "capital",
    "type": "destination",
    "priceFromUSD": 6500,
    "priceModel": "per_person",
    "coords": [
      25.2854,
      51.531
    ],
    "description": "Doha, en Catar, es una base perfecta para vivir el lado más sofisticado del destino: arquitectura icónica, barrios con personalidad, museos y una escena gastronómica que va desde cocina local auténtica hasta experiencias fine‑dining.\\n\\nEn un viaje estilo Luxury Escape, lo mejor es combinar recorridos privados por los puntos más emblemáticos con momentos de descanso en hoteles bien ubicados en zonas premium. Así puedes moverte fácil, comprar, probar restaurantes top y cerrar el día con rooftops o planes nocturnos.\\n\\nTip pro: camina temprano para ver la ciudad sin multitudes y reserva un tour privado al atardecer para fotos, vistas y una cena especial.",
    "highlights": [
      "Hoteles top",
      "Experiencias",
      "Gastronomía"
    ],
    "activities": [
      "City tour",
      "Restaurantes",
      "Experiencias locales"
    ],
    "bookingLinks": [
      {
        "label": "Reservar hotel",
        "url": "https://www.booking.com/"
      },
      {
        "label": "Buscar vuelos",
        "url": "https://www.google.com/travel/flights"
      },
      {
        "label": "Airbnb (opcional)",
        "url": "https://www.airbnb.com/"
      }
    ],
    "fullName": "Doha 🌍",
    "recommendedPlace": "Zona recomendada en Doha",
    "includes": [
      "Vuelos ida y vuelta",
      "Hotel 4★ o 5★",
      "Traslados aeropuerto – hotel",
      "Desayunos incluidos",
      "Experiencia exclusiva local"
    ],
    "hotel": "Hotel recomendado en Capital & City Lights: Luxury Collection 5★"
  },
  {
    "id": "catar-escape",
    "name": "The Pearl",
    "country": "Catar",
    "flag": "🌍",
    "category": "escape",
    "type": "destination",
    "priceFromUSD": 6900,
    "priceModel": "per_person",
    "coords": [
      26.0854,
      52.431
    ],
    "description": "The Pearl es la definición de escapada premium en Catar: paisajes que parecen de película, ambiente relajado y opciones perfectas para desconectar sin renunciar al lujo.\\n\\nCombina días de descanso (piscina, spa, playa) con experiencias privadas: paseos en barco, snorkel/buceo, cenas frente al mar o recorridos panorámicos. El objetivo es que cada día se sienta exclusivo y sin estrés.\\n\\nRecomendación: elige un alojamiento con vista y añade una actividad VIP (boat tour privado o cena de autor) para que el destino se sienta “wow” desde el primer día.",
    "highlights": [
      "Hoteles top",
      "Experiencias",
      "Gastronomía"
    ],
    "activities": [
      "City tour",
      "Restaurantes",
      "Experiencias locales"
    ],
    "bookingLinks": [
      {
        "label": "Reservar hotel",
        "url": "https://www.booking.com/"
      },
      {
        "label": "Buscar vuelos",
        "url": "https://www.google.com/travel/flights"
      },
      {
        "label": "Airbnb (opcional)",
        "url": "https://www.airbnb.com/"
      }
    ],
    "fullName": "The Pearl 🌍",
    "recommendedPlace": "Zona recomendada en The Pearl",
    "includes": [
      "Vuelos ida y vuelta",
      "Hotel 4★ o 5★",
      "Traslados aeropuerto – hotel",
      "Desayunos incluidos",
      "Experiencia exclusiva local"
    ],
    "hotel": "Hotel recomendado en Luxury Escape: Luxury Collection 5★"
  },
  {
    "id": "catar-nature",
    "name": "Inland Sea",
    "country": "Catar",
    "flag": "🌍",
    "category": "nature",
    "type": "destination",
    "priceFromUSD": 6800,
    "priceModel": "per_person",
    "coords": [
      24.4854,
      50.631
    ],
    "description": "Inland Sea es una elección espectacular para conectar con la naturaleza en Catar sin perder confort. Aquí el lujo se vive distinto: paisajes inmensos, aire puro y experiencias tranquilas con alojamientos seleccionados.\\n\\nOrganiza actividades guiadas y privadas: miradores, rutas escénicas, excursiones en 4x4 o caminatas suaves con paradas fotográficas. Después, regresa a un lodge/hotel cómodo para cenar bien y descansar de verdad.\\n\\nTip: prioriza horarios temprano o al atardecer para la mejor luz y menos gente, y lleva ropa por capas para estar cómodo.",
    "highlights": [
      "Hoteles top",
      "Experiencias",
      "Gastronomía"
    ],
    "activities": [
      "City tour",
      "Restaurantes",
      "Experiencias locales"
    ],
    "bookingLinks": [
      {
        "label": "Reservar hotel",
        "url": "https://www.booking.com/"
      },
      {
        "label": "Buscar vuelos",
        "url": "https://www.google.com/travel/flights"
      },
      {
        "label": "Airbnb (opcional)",
        "url": "https://www.airbnb.com/"
      }
    ],
    "fullName": "Inland Sea 🌍",
    "recommendedPlace": "Zona recomendada en Inland Sea",
    "includes": [
      "Vuelos ida y vuelta",
      "Hotel 4★ o 5★",
      "Traslados aeropuerto – hotel",
      "Desayunos incluidos",
      "Experiencia exclusiva local"
    ],
    "hotel": "Hotel recomendado en Nature Retreat: Luxury Collection 5★"
  },
  {
    "id": "puerto-rico-capital",
    "name": "San Juan",
    "country": "Puerto Rico",
    "flag": "🌍",
    "category": "capital",
    "type": "destination",
    "priceFromUSD": 3600,
    "priceModel": "per_person",
    "coords": [
      18.4655,
      -66.1057
    ],
    "description": "San Juan, en Puerto Rico, es una base perfecta para vivir el lado más sofisticado del destino: arquitectura icónica, barrios con personalidad, museos y una escena gastronómica que va desde cocina local auténtica hasta experiencias fine‑dining.\\n\\nEn un viaje estilo Luxury Escape, lo mejor es combinar recorridos privados por los puntos más emblemáticos con momentos de descanso en hoteles bien ubicados en zonas premium. Así puedes moverte fácil, comprar, probar restaurantes top y cerrar el día con rooftops o planes nocturnos.\\n\\nTip pro: camina temprano para ver la ciudad sin multitudes y reserva un tour privado al atardecer para fotos, vistas y una cena especial.",
    "highlights": [
      "Hoteles top",
      "Experiencias",
      "Gastronomía"
    ],
    "activities": [
      "City tour",
      "Restaurantes",
      "Experiencias locales"
    ],
    "bookingLinks": [
      {
        "label": "Reservar hotel",
        "url": "https://www.booking.com/"
      },
      {
        "label": "Buscar vuelos",
        "url": "https://www.google.com/travel/flights"
      },
      {
        "label": "Airbnb (opcional)",
        "url": "https://www.airbnb.com/"
      }
    ],
    "fullName": "San Juan 🌍",
    "recommendedPlace": "Zona recomendada en San Juan",
    "includes": [
      "Vuelos ida y vuelta",
      "Hotel 4★ o 5★",
      "Traslados aeropuerto – hotel",
      "Desayunos incluidos",
      "Experiencia exclusiva local"
    ],
    "hotel": "Hotel recomendado en Capital & City Lights: Luxury Collection 5★"
  },
  {
    "id": "puerto-rico-escape",
    "name": "Vieques",
    "country": "Puerto Rico",
    "flag": "🌍",
    "category": "escape",
    "type": "destination",
    "priceFromUSD": 4000,
    "priceModel": "per_person",
    "coords": [
      19.2655,
      -65.2057
    ],
    "description": "Vieques es la definición de escapada premium en Puerto Rico: paisajes que parecen de película, ambiente relajado y opciones perfectas para desconectar sin renunciar al lujo.\\n\\nCombina días de descanso (piscina, spa, playa) con experiencias privadas: paseos en barco, snorkel/buceo, cenas frente al mar o recorridos panorámicos. El objetivo es que cada día se sienta exclusivo y sin estrés.\\n\\nRecomendación: elige un alojamiento con vista y añade una actividad VIP (boat tour privado o cena de autor) para que el destino se sienta “wow” desde el primer día.",
    "highlights": [
      "Hoteles top",
      "Experiencias",
      "Gastronomía"
    ],
    "activities": [
      "City tour",
      "Restaurantes",
      "Experiencias locales"
    ],
    "bookingLinks": [
      {
        "label": "Reservar hotel",
        "url": "https://www.booking.com/"
      },
      {
        "label": "Buscar vuelos",
        "url": "https://www.google.com/travel/flights"
      },
      {
        "label": "Airbnb (opcional)",
        "url": "https://www.airbnb.com/"
      }
    ],
    "fullName": "Vieques 🌍",
    "recommendedPlace": "Zona recomendada en Vieques",
    "includes": [
      "Vuelos ida y vuelta",
      "Hotel 4★ o 5★",
      "Traslados aeropuerto – hotel",
      "Desayunos incluidos",
      "Experiencia exclusiva local"
    ],
    "hotel": "Hotel recomendado en Luxury Escape: Luxury Collection 5★"
  },
  {
    "id": "puerto-rico-nature",
    "name": "El Yunque",
    "country": "Puerto Rico",
    "flag": "🌍",
    "category": "nature",
    "type": "destination",
    "priceFromUSD": 3900,
    "priceModel": "per_person",
    "coords": [
      17.6655,
      -67.0057
    ],
    "description": "El Yunque es una elección espectacular para conectar con la naturaleza en Puerto Rico sin perder confort. Aquí el lujo se vive distinto: paisajes inmensos, aire puro y experiencias tranquilas con alojamientos seleccionados.\\n\\nOrganiza actividades guiadas y privadas: miradores, rutas escénicas, excursiones en 4x4 o caminatas suaves con paradas fotográficas. Después, regresa a un lodge/hotel cómodo para cenar bien y descansar de verdad.\\n\\nTip: prioriza horarios temprano o al atardecer para la mejor luz y menos gente, y lleva ropa por capas para estar cómodo.",
    "highlights": [
      "Hoteles top",
      "Experiencias",
      "Gastronomía"
    ],
    "activities": [
      "City tour",
      "Restaurantes",
      "Experiencias locales"
    ],
    "bookingLinks": [
      {
        "label": "Reservar hotel",
        "url": "https://www.booking.com/"
      },
      {
        "label": "Buscar vuelos",
        "url": "https://www.google.com/travel/flights"
      },
      {
        "label": "Airbnb (opcional)",
        "url": "https://www.airbnb.com/"
      }
    ],
    "fullName": "El Yunque 🌍",
    "recommendedPlace": "Zona recomendada en El Yunque",
    "includes": [
      "Vuelos ida y vuelta",
      "Hotel 4★ o 5★",
      "Traslados aeropuerto – hotel",
      "Desayunos incluidos",
      "Experiencia exclusiva local"
    ],
    "hotel": "Hotel recomendado en Nature Retreat: Luxury Collection 5★"
  },
  {
    "id": "andorra-capital",
    "name": "Andorra la Vella",
    "country": "Andorra",
    "flag": "🌍",
    "category": "capital",
    "type": "destination",
    "priceFromUSD": 5200,
    "priceModel": "per_person",
    "coords": [
      42.5063,
      1.5218
    ],
    "description": "Andorra la Vella, en Andorra, es una base perfecta para vivir el lado más sofisticado del destino: arquitectura icónica, barrios con personalidad, museos y una escena gastronómica que va desde cocina local auténtica hasta experiencias fine‑dining.\\n\\nEn un viaje estilo Luxury Escape, lo mejor es combinar recorridos privados por los puntos más emblemáticos con momentos de descanso en hoteles bien ubicados en zonas premium. Así puedes moverte fácil, comprar, probar restaurantes top y cerrar el día con rooftops o planes nocturnos.\\n\\nTip pro: camina temprano para ver la ciudad sin multitudes y reserva un tour privado al atardecer para fotos, vistas y una cena especial.",
    "highlights": [
      "Hoteles top",
      "Experiencias",
      "Gastronomía"
    ],
    "activities": [
      "City tour",
      "Restaurantes",
      "Experiencias locales"
    ],
    "bookingLinks": [
      {
        "label": "Reservar hotel",
        "url": "https://www.booking.com/"
      },
      {
        "label": "Buscar vuelos",
        "url": "https://www.google.com/travel/flights"
      },
      {
        "label": "Airbnb (opcional)",
        "url": "https://www.airbnb.com/"
      }
    ],
    "fullName": "Andorra la Vella 🌍",
    "recommendedPlace": "Zona recomendada en Andorra la Vella",
    "includes": [
      "Vuelos ida y vuelta",
      "Hotel 4★ o 5★",
      "Traslados aeropuerto – hotel",
      "Desayunos incluidos",
      "Experiencia exclusiva local"
    ],
    "hotel": "Hotel recomendado en Capital & City Lights: Luxury Collection 5★"
  },
  {
    "id": "andorra-escape",
    "name": "Grandvalira",
    "country": "Andorra",
    "flag": "🌍",
    "category": "escape",
    "type": "destination",
    "priceFromUSD": 5600,
    "priceModel": "per_person",
    "coords": [
      43.3063,
      2.4218
    ],
    "description": "Grandvalira es la definición de escapada premium en Andorra: paisajes que parecen de película, ambiente relajado y opciones perfectas para desconectar sin renunciar al lujo.\\n\\nCombina días de descanso (piscina, spa, playa) con experiencias privadas: paseos en barco, snorkel/buceo, cenas frente al mar o recorridos panorámicos. El objetivo es que cada día se sienta exclusivo y sin estrés.\\n\\nRecomendación: elige un alojamiento con vista y añade una actividad VIP (boat tour privado o cena de autor) para que el destino se sienta “wow” desde el primer día.",
    "highlights": [
      "Hoteles top",
      "Experiencias",
      "Gastronomía"
    ],
    "activities": [
      "City tour",
      "Restaurantes",
      "Experiencias locales"
    ],
    "bookingLinks": [
      {
        "label": "Reservar hotel",
        "url": "https://www.booking.com/"
      },
      {
        "label": "Buscar vuelos",
        "url": "https://www.google.com/travel/flights"
      },
      {
        "label": "Airbnb (opcional)",
        "url": "https://www.airbnb.com/"
      }
    ],
    "fullName": "Grandvalira 🌍",
    "recommendedPlace": "Zona recomendada en Grandvalira",
    "includes": [
      "Vuelos ida y vuelta",
      "Hotel 4★ o 5★",
      "Traslados aeropuerto – hotel",
      "Desayunos incluidos",
      "Experiencia exclusiva local"
    ],
    "hotel": "Hotel recomendado en Luxury Escape: Luxury Collection 5★"
  },
  {
    "id": "andorra-nature",
    "name": "Vallnord",
    "country": "Andorra",
    "flag": "🌍",
    "category": "nature",
    "type": "destination",
    "priceFromUSD": 5500,
    "priceModel": "per_person",
    "coords": [
      41.7063,
      0.6218
    ],
    "description": "Vallnord es una elección espectacular para conectar con la naturaleza en Andorra sin perder confort. Aquí el lujo se vive distinto: paisajes inmensos, aire puro y experiencias tranquilas con alojamientos seleccionados.\\n\\nOrganiza actividades guiadas y privadas: miradores, rutas escénicas, excursiones en 4x4 o caminatas suaves con paradas fotográficas. Después, regresa a un lodge/hotel cómodo para cenar bien y descansar de verdad.\\n\\nTip: prioriza horarios temprano o al atardecer para la mejor luz y menos gente, y lleva ropa por capas para estar cómodo.",
    "highlights": [
      "Hoteles top",
      "Experiencias",
      "Gastronomía"
    ],
    "activities": [
      "City tour",
      "Restaurantes",
      "Experiencias locales"
    ],
    "bookingLinks": [
      {
        "label": "Reservar hotel",
        "url": "https://www.booking.com/"
      },
      {
        "label": "Buscar vuelos",
        "url": "https://www.google.com/travel/flights"
      },
      {
        "label": "Airbnb (opcional)",
        "url": "https://www.airbnb.com/"
      }
    ],
    "fullName": "Vallnord 🌍",
    "recommendedPlace": "Zona recomendada en Vallnord",
    "includes": [
      "Vuelos ida y vuelta",
      "Hotel 4★ o 5★",
      "Traslados aeropuerto – hotel",
      "Desayunos incluidos",
      "Experiencia exclusiva local"
    ],
    "hotel": "Hotel recomendado en Nature Retreat: Luxury Collection 5★"
  },
  {
    "id": "chipre-capital",
    "name": "Nicosia",
    "country": "Chipre",
    "flag": "🌍",
    "category": "capital",
    "type": "destination",
    "priceFromUSD": 5200,
    "priceModel": "per_person",
    "coords": [
      35.1856,
      33.3823
    ],
    "description": "Nicosia, en Chipre, es una base perfecta para vivir el lado más sofisticado del destino: arquitectura icónica, barrios con personalidad, museos y una escena gastronómica que va desde cocina local auténtica hasta experiencias fine‑dining.\\n\\nEn un viaje estilo Luxury Escape, lo mejor es combinar recorridos privados por los puntos más emblemáticos con momentos de descanso en hoteles bien ubicados en zonas premium. Así puedes moverte fácil, comprar, probar restaurantes top y cerrar el día con rooftops o planes nocturnos.\\n\\nTip pro: camina temprano para ver la ciudad sin multitudes y reserva un tour privado al atardecer para fotos, vistas y una cena especial.",
    "highlights": [
      "Hoteles top",
      "Experiencias",
      "Gastronomía"
    ],
    "activities": [
      "City tour",
      "Restaurantes",
      "Experiencias locales"
    ],
    "bookingLinks": [
      {
        "label": "Reservar hotel",
        "url": "https://www.booking.com/"
      },
      {
        "label": "Buscar vuelos",
        "url": "https://www.google.com/travel/flights"
      },
      {
        "label": "Airbnb (opcional)",
        "url": "https://www.airbnb.com/"
      }
    ],
    "fullName": "Nicosia 🌍",
    "recommendedPlace": "Zona recomendada en Nicosia",
    "includes": [
      "Vuelos ida y vuelta",
      "Hotel 4★ o 5★",
      "Traslados aeropuerto – hotel",
      "Desayunos incluidos",
      "Experiencia exclusiva local"
    ],
    "hotel": "Hotel recomendado en Capital & City Lights: Luxury Collection 5★"
  },
  {
    "id": "chipre-escape",
    "name": "Ayia Napa",
    "country": "Chipre",
    "flag": "🌍",
    "category": "escape",
    "type": "destination",
    "priceFromUSD": 5600,
    "priceModel": "per_person",
    "coords": [
      35.9856,
      34.2823
    ],
    "description": "Ayia Napa es la definición de escapada premium en Chipre: paisajes que parecen de película, ambiente relajado y opciones perfectas para desconectar sin renunciar al lujo.\\n\\nCombina días de descanso (piscina, spa, playa) con experiencias privadas: paseos en barco, snorkel/buceo, cenas frente al mar o recorridos panorámicos. El objetivo es que cada día se sienta exclusivo y sin estrés.\\n\\nRecomendación: elige un alojamiento con vista y añade una actividad VIP (boat tour privado o cena de autor) para que el destino se sienta “wow” desde el primer día.",
    "highlights": [
      "Hoteles top",
      "Experiencias",
      "Gastronomía"
    ],
    "activities": [
      "City tour",
      "Restaurantes",
      "Experiencias locales"
    ],
    "bookingLinks": [
      {
        "label": "Reservar hotel",
        "url": "https://www.booking.com/"
      },
      {
        "label": "Buscar vuelos",
        "url": "https://www.google.com/travel/flights"
      },
      {
        "label": "Airbnb (opcional)",
        "url": "https://www.airbnb.com/"
      }
    ],
    "fullName": "Ayia Napa 🌍",
    "recommendedPlace": "Zona recomendada en Ayia Napa",
    "includes": [
      "Vuelos ida y vuelta",
      "Hotel 4★ o 5★",
      "Traslados aeropuerto – hotel",
      "Desayunos incluidos",
      "Experiencia exclusiva local"
    ],
    "hotel": "Hotel recomendado en Luxury Escape: Luxury Collection 5★"
  },
  {
    "id": "chipre-nature",
    "name": "Troodos Mountains",
    "country": "Chipre",
    "flag": "🌍",
    "category": "nature",
    "type": "destination",
    "priceFromUSD": 5500,
    "priceModel": "per_person",
    "coords": [
      34.3856,
      32.4823
    ],
    "description": "Troodos Mountains es una elección espectacular para conectar con la naturaleza en Chipre sin perder confort. Aquí el lujo se vive distinto: paisajes inmensos, aire puro y experiencias tranquilas con alojamientos seleccionados.\\n\\nOrganiza actividades guiadas y privadas: miradores, rutas escénicas, excursiones en 4x4 o caminatas suaves con paradas fotográficas. Después, regresa a un lodge/hotel cómodo para cenar bien y descansar de verdad.\\n\\nTip: prioriza horarios temprano o al atardecer para la mejor luz y menos gente, y lleva ropa por capas para estar cómodo.",
    "highlights": [
      "Hoteles top",
      "Experiencias",
      "Gastronomía"
    ],
    "activities": [
      "City tour",
      "Restaurantes",
      "Experiencias locales"
    ],
    "bookingLinks": [
      {
        "label": "Reservar hotel",
        "url": "https://www.booking.com/"
      },
      {
        "label": "Buscar vuelos",
        "url": "https://www.google.com/travel/flights"
      },
      {
        "label": "Airbnb (opcional)",
        "url": "https://www.airbnb.com/"
      }
    ],
    "fullName": "Troodos Mountains 🌍",
    "recommendedPlace": "Zona recomendada en Troodos Mountains",
    "includes": [
      "Vuelos ida y vuelta",
      "Hotel 4★ o 5★",
      "Traslados aeropuerto – hotel",
      "Desayunos incluidos",
      "Experiencia exclusiva local"
    ],
    "hotel": "Hotel recomendado en Nature Retreat: Luxury Collection 5★"
  },
  {
    "id": "turquia-capital",
    "name": "Istanbul",
    "country": "Turquía",
    "flag": "🌍",
    "category": "capital",
    "type": "destination",
    "priceFromUSD": 4800,
    "priceModel": "per_person",
    "coords": [
      39.9334,
      32.8597
    ],
    "description": "Istanbul, en Turquía, es una base perfecta para vivir el lado más sofisticado del destino: arquitectura icónica, barrios con personalidad, museos y una escena gastronómica que va desde cocina local auténtica hasta experiencias fine‑dining.\\n\\nEn un viaje estilo Luxury Escape, lo mejor es combinar recorridos privados por los puntos más emblemáticos con momentos de descanso en hoteles bien ubicados en zonas premium. Así puedes moverte fácil, comprar, probar restaurantes top y cerrar el día con rooftops o planes nocturnos.\\n\\nTip pro: camina temprano para ver la ciudad sin multitudes y reserva un tour privado al atardecer para fotos, vistas y una cena especial.",
    "highlights": [
      "Hoteles top",
      "Experiencias",
      "Gastronomía"
    ],
    "activities": [
      "City tour",
      "Restaurantes",
      "Experiencias locales"
    ],
    "bookingLinks": [
      {
        "label": "Reservar hotel",
        "url": "https://www.booking.com/"
      },
      {
        "label": "Buscar vuelos",
        "url": "https://www.google.com/travel/flights"
      },
      {
        "label": "Airbnb (opcional)",
        "url": "https://www.airbnb.com/"
      }
    ],
    "fullName": "Istanbul 🌍",
    "recommendedPlace": "Zona recomendada en Istanbul",
    "includes": [
      "Vuelos ida y vuelta",
      "Hotel 4★ o 5★",
      "Traslados aeropuerto – hotel",
      "Desayunos incluidos",
      "Experiencia exclusiva local"
    ],
    "hotel": "Hotel recomendado en Capital & City Lights: Luxury Collection 5★"
  },
  {
    "id": "turquia-escape",
    "name": "Cappadocia",
    "country": "Turquía",
    "flag": "🌍",
    "category": "escape",
    "type": "destination",
    "priceFromUSD": 5200,
    "priceModel": "per_person",
    "coords": [
      40.7334,
      33.7597
    ],
    "description": "Cappadocia es la definición de escapada premium en Turquía: paisajes que parecen de película, ambiente relajado y opciones perfectas para desconectar sin renunciar al lujo.\\n\\nCombina días de descanso (piscina, spa, playa) con experiencias privadas: paseos en barco, snorkel/buceo, cenas frente al mar o recorridos panorámicos. El objetivo es que cada día se sienta exclusivo y sin estrés.\\n\\nRecomendación: elige un alojamiento con vista y añade una actividad VIP (boat tour privado o cena de autor) para que el destino se sienta “wow” desde el primer día.",
    "highlights": [
      "Hoteles top",
      "Experiencias",
      "Gastronomía"
    ],
    "activities": [
      "City tour",
      "Restaurantes",
      "Experiencias locales"
    ],
    "bookingLinks": [
      {
        "label": "Reservar hotel",
        "url": "https://www.booking.com/"
      },
      {
        "label": "Buscar vuelos",
        "url": "https://www.google.com/travel/flights"
      },
      {
        "label": "Airbnb (opcional)",
        "url": "https://www.airbnb.com/"
      }
    ],
    "fullName": "Cappadocia 🌍",
    "recommendedPlace": "Zona recomendada en Cappadocia",
    "includes": [
      "Vuelos ida y vuelta",
      "Hotel 4★ o 5★",
      "Traslados aeropuerto – hotel",
      "Desayunos incluidos",
      "Experiencia exclusiva local"
    ],
    "hotel": "Hotel recomendado en Luxury Escape: Luxury Collection 5★"
  },
  {
    "id": "turquia-nature",
    "name": "Pamukkale",
    "country": "Turquía",
    "flag": "🌍",
    "category": "nature",
    "type": "destination",
    "priceFromUSD": 5100,
    "priceModel": "per_person",
    "coords": [
      39.1334,
      31.9597
    ],
    "description": "Pamukkale es una elección espectacular para conectar con la naturaleza en Turquía sin perder confort. Aquí el lujo se vive distinto: paisajes inmensos, aire puro y experiencias tranquilas con alojamientos seleccionados.\\n\\nOrganiza actividades guiadas y privadas: miradores, rutas escénicas, excursiones en 4x4 o caminatas suaves con paradas fotográficas. Después, regresa a un lodge/hotel cómodo para cenar bien y descansar de verdad.\\n\\nTip: prioriza horarios temprano o al atardecer para la mejor luz y menos gente, y lleva ropa por capas para estar cómodo.",
    "highlights": [
      "Hoteles top",
      "Experiencias",
      "Gastronomía"
    ],
    "activities": [
      "City tour",
      "Restaurantes",
      "Experiencias locales"
    ],
    "bookingLinks": [
      {
        "label": "Reservar hotel",
        "url": "https://www.booking.com/"
      },
      {
        "label": "Buscar vuelos",
        "url": "https://www.google.com/travel/flights"
      },
      {
        "label": "Airbnb (opcional)",
        "url": "https://www.airbnb.com/"
      }
    ],
    "fullName": "Pamukkale 🌍",
    "recommendedPlace": "Zona recomendada en Pamukkale",
    "includes": [
      "Vuelos ida y vuelta",
      "Hotel 4★ o 5★",
      "Traslados aeropuerto – hotel",
      "Desayunos incluidos",
      "Experiencia exclusiva local"
    ],
    "hotel": "Hotel recomendado en Nature Retreat: Luxury Collection 5★"
  },
  {
    "id": "alemania-capital",
    "name": "Alemania City",
    "country": "Alemania",
    "flag": "🌍",
    "category": "capital",
    "type": "destination",
    "priceFromUSD": 5200,
    "priceModel": "per_person",
    "coords": [
      52.52,
      13.405
    ],
    "description": "Alemania City, en Alemania, es una base perfecta para vivir el lado más sofisticado del destino: arquitectura icónica, barrios con personalidad, museos y una escena gastronómica que va desde cocina local auténtica hasta experiencias fine‑dining.\\n\\nEn un viaje estilo Luxury Escape, lo mejor es combinar recorridos privados por los puntos más emblemáticos con momentos de descanso en hoteles bien ubicados en zonas premium. Así puedes moverte fácil, comprar, probar restaurantes top y cerrar el día con rooftops o planes nocturnos.\\n\\nTip pro: camina temprano para ver la ciudad sin multitudes y reserva un tour privado al atardecer para fotos, vistas y una cena especial.",
    "highlights": [
      "Hoteles top",
      "Experiencias",
      "Gastronomía"
    ],
    "activities": [
      "City tour",
      "Restaurantes",
      "Experiencias locales"
    ],
    "bookingLinks": [
      {
        "label": "Reservar hotel",
        "url": "https://www.booking.com/"
      },
      {
        "label": "Buscar vuelos",
        "url": "https://www.google.com/travel/flights"
      },
      {
        "label": "Airbnb (opcional)",
        "url": "https://www.airbnb.com/"
      }
    ],
    "fullName": "Alemania City 🌍",
    "recommendedPlace": "Zona recomendada en Berlin",
    "includes": [
      "Vuelos ida y vuelta",
      "Hotel 4★ o 5★",
      "Traslados aeropuerto – hotel",
      "Desayunos incluidos",
      "Experiencia exclusiva local"
    ],
    "hotel": "Hotel recomendado en Capital & City Lights: Luxury Collection 5★"
  },
  {
    "id": "alemania-escape",
    "name": "Alemania Escape",
    "country": "Alemania",
    "flag": "🌍",
    "category": "escape",
    "type": "destination",
    "priceFromUSD": 5600,
    "priceModel": "per_person",
    "coords": [
      53.32,
      14.305
    ],
    "description": "Alemania Escape es la definición de escapada premium en Alemania: paisajes que parecen de película, ambiente relajado y opciones perfectas para desconectar sin renunciar al lujo.\\n\\nCombina días de descanso (piscina, spa, playa) con experiencias privadas: paseos en barco, snorkel/buceo, cenas frente al mar o recorridos panorámicos. El objetivo es que cada día se sienta exclusivo y sin estrés.\\n\\nRecomendación: elige un alojamiento con vista y añade una actividad VIP (boat tour privado o cena de autor) para que el destino se sienta “wow” desde el primer día.",
    "highlights": [
      "Hoteles top",
      "Experiencias",
      "Gastronomía"
    ],
    "activities": [
      "City tour",
      "Restaurantes",
      "Experiencias locales"
    ],
    "bookingLinks": [
      {
        "label": "Reservar hotel",
        "url": "https://www.booking.com/"
      },
      {
        "label": "Buscar vuelos",
        "url": "https://www.google.com/travel/flights"
      },
      {
        "label": "Airbnb (opcional)",
        "url": "https://www.airbnb.com/"
      }
    ],
    "fullName": "Alemania Escape 🌍",
    "recommendedPlace": "Zona recomendada en Munich",
    "includes": [
      "Vuelos ida y vuelta",
      "Hotel 4★ o 5★",
      "Traslados aeropuerto – hotel",
      "Desayunos incluidos",
      "Experiencia exclusiva local"
    ],
    "hotel": "Hotel recomendado en Luxury Escape: Luxury Collection 5★"
  },
  {
    "id": "alemania-nature",
    "name": "Alemania Nature",
    "country": "Alemania",
    "flag": "🌍",
    "category": "nature",
    "type": "destination",
    "priceFromUSD": 5500,
    "priceModel": "per_person",
    "coords": [
      51.72,
      12.505
    ],
    "description": "Alemania Nature es una elección espectacular para conectar con la naturaleza en Alemania sin perder confort. Aquí el lujo se vive distinto: paisajes inmensos, aire puro y experiencias tranquilas con alojamientos seleccionados.\\n\\nOrganiza actividades guiadas y privadas: miradores, rutas escénicas, excursiones en 4x4 o caminatas suaves con paradas fotográficas. Después, regresa a un lodge/hotel cómodo para cenar bien y descansar de verdad.\\n\\nTip: prioriza horarios temprano o al atardecer para la mejor luz y menos gente, y lleva ropa por capas para estar cómodo.",
    "highlights": [
      "Hoteles top",
      "Experiencias",
      "Gastronomía"
    ],
    "activities": [
      "City tour",
      "Restaurantes",
      "Experiencias locales"
    ],
    "bookingLinks": [
      {
        "label": "Reservar hotel",
        "url": "https://www.booking.com/"
      },
      {
        "label": "Buscar vuelos",
        "url": "https://www.google.com/travel/flights"
      },
      {
        "label": "Airbnb (opcional)",
        "url": "https://www.airbnb.com/"
      }
    ],
    "fullName": "Alemania Nature 🌍",
    "recommendedPlace": "Zona recomendada en Bavarian Alps",
    "includes": [
      "Vuelos ida y vuelta",
      "Hotel 4★ o 5★",
      "Traslados aeropuerto – hotel",
      "Desayunos incluidos",
      "Experiencia exclusiva local"
    ],
    "hotel": "Hotel recomendado en Nature Retreat: Luxury Collection 5★"
  },
  {
    "id": "austria-capital",
    "name": "Vienna",
    "country": "Austria",
    "flag": "🌍",
    "category": "capital",
    "type": "destination",
    "priceFromUSD": 6800,
    "priceModel": "per_person",
    "coords": [
      48.2082,
      16.3738
    ],
    "description": "Vienna, en Austria, es una base perfecta para vivir el lado más sofisticado del destino: arquitectura icónica, barrios con personalidad, museos y una escena gastronómica que va desde cocina local auténtica hasta experiencias fine‑dining.\\n\\nEn un viaje estilo Luxury Escape, lo mejor es combinar recorridos privados por los puntos más emblemáticos con momentos de descanso en hoteles bien ubicados en zonas premium. Así puedes moverte fácil, comprar, probar restaurantes top y cerrar el día con rooftops o planes nocturnos.\\n\\nTip pro: camina temprano para ver la ciudad sin multitudes y reserva un tour privado al atardecer para fotos, vistas y una cena especial.",
    "highlights": [
      "Hoteles top",
      "Experiencias",
      "Gastronomía"
    ],
    "activities": [
      "City tour",
      "Restaurantes",
      "Experiencias locales"
    ],
    "bookingLinks": [
      {
        "label": "Reservar hotel",
        "url": "https://www.booking.com/"
      },
      {
        "label": "Buscar vuelos",
        "url": "https://www.google.com/travel/flights"
      },
      {
        "label": "Airbnb (opcional)",
        "url": "https://www.airbnb.com/"
      }
    ],
    "fullName": "Vienna 🌍",
    "recommendedPlace": "Zona recomendada en Vienna",
    "includes": [
      "Vuelos ida y vuelta",
      "Hotel 4★ o 5★",
      "Traslados aeropuerto – hotel",
      "Desayunos incluidos",
      "Experiencia exclusiva local"
    ],
    "hotel": "Hotel recomendado en Capital & City Lights: Luxury Collection 5★"
  },
  {
    "id": "austria-escape",
    "name": "Salzburg",
    "country": "Austria",
    "flag": "🌍",
    "category": "escape",
    "type": "destination",
    "priceFromUSD": 7200,
    "priceModel": "per_person",
    "coords": [
      49.0082,
      17.2738
    ],
    "description": "Salzburg es la definición de escapada premium en Austria: paisajes que parecen de película, ambiente relajado y opciones perfectas para desconectar sin renunciar al lujo.\\n\\nCombina días de descanso (piscina, spa, playa) con experiencias privadas: paseos en barco, snorkel/buceo, cenas frente al mar o recorridos panorámicos. El objetivo es que cada día se sienta exclusivo y sin estrés.\\n\\nRecomendación: elige un alojamiento con vista y añade una actividad VIP (boat tour privado o cena de autor) para que el destino se sienta “wow” desde el primer día.",
    "highlights": [
      "Hoteles top",
      "Experiencias",
      "Gastronomía"
    ],
    "activities": [
      "City tour",
      "Restaurantes",
      "Experiencias locales"
    ],
    "bookingLinks": [
      {
        "label": "Reservar hotel",
        "url": "https://www.booking.com/"
      },
      {
        "label": "Buscar vuelos",
        "url": "https://www.google.com/travel/flights"
      },
      {
        "label": "Airbnb (opcional)",
        "url": "https://www.airbnb.com/"
      }
    ],
    "fullName": "Salzburg 🌍",
    "recommendedPlace": "Zona recomendada en Salzburg",
    "includes": [
      "Vuelos ida y vuelta",
      "Hotel 4★ o 5★",
      "Traslados aeropuerto – hotel",
      "Desayunos incluidos",
      "Experiencia exclusiva local"
    ],
    "hotel": "Hotel recomendado en Luxury Escape: Luxury Collection 5★"
  },
  {
    "id": "austria-nature",
    "name": "Hallstatt",
    "country": "Austria",
    "flag": "🌍",
    "category": "nature",
    "type": "destination",
    "priceFromUSD": 7100,
    "priceModel": "per_person",
    "coords": [
      47.4082,
      15.4738
    ],
    "description": "Hallstatt es una elección espectacular para conectar con la naturaleza en Austria sin perder confort. Aquí el lujo se vive distinto: paisajes inmensos, aire puro y experiencias tranquilas con alojamientos seleccionados.\\n\\nOrganiza actividades guiadas y privadas: miradores, rutas escénicas, excursiones en 4x4 o caminatas suaves con paradas fotográficas. Después, regresa a un lodge/hotel cómodo para cenar bien y descansar de verdad.\\n\\nTip: prioriza horarios temprano o al atardecer para la mejor luz y menos gente, y lleva ropa por capas para estar cómodo.",
    "highlights": [
      "Hoteles top",
      "Experiencias",
      "Gastronomía"
    ],
    "activities": [
      "City tour",
      "Restaurantes",
      "Experiencias locales"
    ],
    "bookingLinks": [
      {
        "label": "Reservar hotel",
        "url": "https://www.booking.com/"
      },
      {
        "label": "Buscar vuelos",
        "url": "https://www.google.com/travel/flights"
      },
      {
        "label": "Airbnb (opcional)",
        "url": "https://www.airbnb.com/"
      }
    ],
    "fullName": "Hallstatt 🌍",
    "recommendedPlace": "Zona recomendada en Hallstatt",
    "includes": [
      "Vuelos ida y vuelta",
      "Hotel 4★ o 5★",
      "Traslados aeropuerto – hotel",
      "Desayunos incluidos",
      "Experiencia exclusiva local"
    ],
    "hotel": "Hotel recomendado en Nature Retreat: Luxury Collection 5★"
  },
  {
    "id": "arabia-saudi-capital",
    "name": "Riyadh",
    "country": "Arabia Saudí",
    "flag": "🌍",
    "category": "capital",
    "type": "destination",
    "priceFromUSD": 6500,
    "priceModel": "per_person",
    "coords": [
      24.7136,
      46.6753
    ],
    "description": "Riyadh, en Arabia Saudí, es una base perfecta para vivir el lado más sofisticado del destino: arquitectura icónica, barrios con personalidad, museos y una escena gastronómica que va desde cocina local auténtica hasta experiencias fine‑dining.\\n\\nEn un viaje estilo Luxury Escape, lo mejor es combinar recorridos privados por los puntos más emblemáticos con momentos de descanso en hoteles bien ubicados en zonas premium. Así puedes moverte fácil, comprar, probar restaurantes top y cerrar el día con rooftops o planes nocturnos.\\n\\nTip pro: camina temprano para ver la ciudad sin multitudes y reserva un tour privado al atardecer para fotos, vistas y una cena especial.",
    "highlights": [
      "Hoteles top",
      "Experiencias",
      "Gastronomía"
    ],
    "activities": [
      "City tour",
      "Restaurantes",
      "Experiencias locales"
    ],
    "bookingLinks": [
      {
        "label": "Reservar hotel",
        "url": "https://www.booking.com/"
      },
      {
        "label": "Buscar vuelos",
        "url": "https://www.google.com/travel/flights"
      },
      {
        "label": "Airbnb (opcional)",
        "url": "https://www.airbnb.com/"
      }
    ],
    "fullName": "Riyadh 🌍",
    "recommendedPlace": "Zona recomendada en Riyadh",
    "includes": [
      "Vuelos ida y vuelta",
      "Hotel 4★ o 5★",
      "Traslados aeropuerto – hotel",
      "Desayunos incluidos",
      "Experiencia exclusiva local"
    ],
    "hotel": "Hotel recomendado en Capital & City Lights: Luxury Collection 5★"
  },
  {
    "id": "arabia-saudi-escape",
    "name": "AlUla",
    "country": "Arabia Saudí",
    "flag": "🌍",
    "category": "escape",
    "type": "destination",
    "priceFromUSD": 6900,
    "priceModel": "per_person",
    "coords": [
      25.5136,
      47.5753
    ],
    "description": "AlUla es la definición de escapada premium en Arabia Saudí: paisajes que parecen de película, ambiente relajado y opciones perfectas para desconectar sin renunciar al lujo.\\n\\nCombina días de descanso (piscina, spa, playa) con experiencias privadas: paseos en barco, snorkel/buceo, cenas frente al mar o recorridos panorámicos. El objetivo es que cada día se sienta exclusivo y sin estrés.\\n\\nRecomendación: elige un alojamiento con vista y añade una actividad VIP (boat tour privado o cena de autor) para que el destino se sienta “wow” desde el primer día.",
    "highlights": [
      "Hoteles top",
      "Experiencias",
      "Gastronomía"
    ],
    "activities": [
      "City tour",
      "Restaurantes",
      "Experiencias locales"
    ],
    "bookingLinks": [
      {
        "label": "Reservar hotel",
        "url": "https://www.booking.com/"
      },
      {
        "label": "Buscar vuelos",
        "url": "https://www.google.com/travel/flights"
      },
      {
        "label": "Airbnb (opcional)",
        "url": "https://www.airbnb.com/"
      }
    ],
    "fullName": "AlUla 🌍",
    "recommendedPlace": "Zona recomendada en AlUla",
    "includes": [
      "Vuelos ida y vuelta",
      "Hotel 4★ o 5★",
      "Traslados aeropuerto – hotel",
      "Desayunos incluidos",
      "Experiencia exclusiva local"
    ],
    "hotel": "Hotel recomendado en Luxury Escape: Luxury Collection 5★"
  },
  {
    "id": "arabia-saudi-nature",
    "name": "Red Sea Coast",
    "country": "Arabia Saudí",
    "flag": "🌍",
    "category": "nature",
    "type": "destination",
    "priceFromUSD": 6800,
    "priceModel": "per_person",
    "coords": [
      23.9136,
      45.7753
    ],
    "description": "Red Sea Coast es una elección espectacular para conectar con la naturaleza en Arabia Saudí sin perder confort. Aquí el lujo se vive distinto: paisajes inmensos, aire puro y experiencias tranquilas con alojamientos seleccionados.\\n\\nOrganiza actividades guiadas y privadas: miradores, rutas escénicas, excursiones en 4x4 o caminatas suaves con paradas fotográficas. Después, regresa a un lodge/hotel cómodo para cenar bien y descansar de verdad.\\n\\nTip: prioriza horarios temprano o al atardecer para la mejor luz y menos gente, y lleva ropa por capas para estar cómodo.",
    "highlights": [
      "Hoteles top",
      "Experiencias",
      "Gastronomía"
    ],
    "activities": [
      "City tour",
      "Restaurantes",
      "Experiencias locales"
    ],
    "bookingLinks": [
      {
        "label": "Reservar hotel",
        "url": "https://www.booking.com/"
      },
      {
        "label": "Buscar vuelos",
        "url": "https://www.google.com/travel/flights"
      },
      {
        "label": "Airbnb (opcional)",
        "url": "https://www.airbnb.com/"
      }
    ],
    "fullName": "Red Sea Coast 🌍",
    "recommendedPlace": "Zona recomendada en Red Sea Coast",
    "includes": [
      "Vuelos ida y vuelta",
      "Hotel 4★ o 5★",
      "Traslados aeropuerto – hotel",
      "Desayunos incluidos",
      "Experiencia exclusiva local"
    ],
    "hotel": "Hotel recomendado en Nature Retreat: Luxury Collection 5★"
  },
  {
    "id": "malasia-capital",
    "name": "Kuala Lumpur",
    "country": "Malasia",
    "flag": "🌍",
    "category": "capital",
    "type": "destination",
    "priceFromUSD": 4800,
    "priceModel": "per_person",
    "coords": [
      3.139,
      101.6869
    ],
    "description": "Kuala Lumpur, en Malasia, es una base perfecta para vivir el lado más sofisticado del destino: arquitectura icónica, barrios con personalidad, museos y una escena gastronómica que va desde cocina local auténtica hasta experiencias fine‑dining.\\n\\nEn un viaje estilo Luxury Escape, lo mejor es combinar recorridos privados por los puntos más emblemáticos con momentos de descanso en hoteles bien ubicados en zonas premium. Así puedes moverte fácil, comprar, probar restaurantes top y cerrar el día con rooftops o planes nocturnos.\\n\\nTip pro: camina temprano para ver la ciudad sin multitudes y reserva un tour privado al atardecer para fotos, vistas y una cena especial.",
    "highlights": [
      "Hoteles top",
      "Experiencias",
      "Gastronomía"
    ],
    "activities": [
      "City tour",
      "Restaurantes",
      "Experiencias locales"
    ],
    "bookingLinks": [
      {
        "label": "Reservar hotel",
        "url": "https://www.booking.com/"
      },
      {
        "label": "Buscar vuelos",
        "url": "https://www.google.com/travel/flights"
      },
      {
        "label": "Airbnb (opcional)",
        "url": "https://www.airbnb.com/"
      }
    ],
    "fullName": "Kuala Lumpur 🌍",
    "recommendedPlace": "Centro de Kuala Lumpur",
    "includes": [
      "Vuelos ida y vuelta",
      "Hotel 4★ o 5★",
      "Traslados aeropuerto – hotel",
      "Desayunos incluidos",
      "Experiencia exclusiva local"
    ],
    "hotel": "Hotel recomendado en Capital & City Lights: Luxury Collection 5★"
  },
  {
    "id": "malasia-escape",
    "name": "Langkawi",
    "country": "Malasia",
    "flag": "🌍",
    "category": "escape",
    "type": "destination",
    "priceFromUSD": 5200,
    "priceModel": "per_person",
    "coords": [
      3.939,
      102.5869
    ],
    "description": "Langkawi es la definición de escapada premium en Malasia: paisajes que parecen de película, ambiente relajado y opciones perfectas para desconectar sin renunciar al lujo.\\n\\nCombina días de descanso (piscina, spa, playa) con experiencias privadas: paseos en barco, snorkel/buceo, cenas frente al mar o recorridos panorámicos. El objetivo es que cada día se sienta exclusivo y sin estrés.\\n\\nRecomendación: elige un alojamiento con vista y añade una actividad VIP (boat tour privado o cena de autor) para que el destino se sienta “wow” desde el primer día.",
    "highlights": [
      "Hoteles top",
      "Experiencias",
      "Gastronomía"
    ],
    "activities": [
      "City tour",
      "Restaurantes",
      "Experiencias locales"
    ],
    "bookingLinks": [
      {
        "label": "Reservar hotel",
        "url": "https://www.booking.com/"
      },
      {
        "label": "Buscar vuelos",
        "url": "https://www.google.com/travel/flights"
      },
      {
        "label": "Airbnb (opcional)",
        "url": "https://www.airbnb.com/"
      }
    ],
    "fullName": "Langkawi 🌍",
    "recommendedPlace": "Zona premium de Langkawi",
    "includes": [
      "Vuelos ida y vuelta",
      "Hotel 4★ o 5★",
      "Traslados aeropuerto – hotel",
      "Desayunos incluidos",
      "Experiencia exclusiva local"
    ],
    "hotel": "Hotel recomendado en Luxury Escape: Luxury Collection 5★"
  },
  {
    "id": "malasia-nature",
    "name": "Penang",
    "country": "Malasia",
    "flag": "🌍",
    "category": "nature",
    "type": "destination",
    "priceFromUSD": 5100,
    "priceModel": "per_person",
    "coords": [
      2.339,
      100.7869
    ],
    "description": "Penang es una elección espectacular para conectar con la naturaleza en Malasia sin perder confort. Aquí el lujo se vive distinto: paisajes inmensos, aire puro y experiencias tranquilas con alojamientos seleccionados.\\n\\nOrganiza actividades guiadas y privadas: miradores, rutas escénicas, excursiones en 4x4 o caminatas suaves con paradas fotográficas. Después, regresa a un lodge/hotel cómodo para cenar bien y descansar de verdad.\\n\\nTip: prioriza horarios temprano o al atardecer para la mejor luz y menos gente, y lleva ropa por capas para estar cómodo.",
    "highlights": [
      "Hoteles top",
      "Experiencias",
      "Gastronomía"
    ],
    "activities": [
      "City tour",
      "Restaurantes",
      "Experiencias locales"
    ],
    "bookingLinks": [
      {
        "label": "Reservar hotel",
        "url": "https://www.booking.com/"
      },
      {
        "label": "Buscar vuelos",
        "url": "https://www.google.com/travel/flights"
      },
      {
        "label": "Airbnb (opcional)",
        "url": "https://www.airbnb.com/"
      }
    ],
    "fullName": "Penang 🌍",
    "recommendedPlace": "Miradores / naturaleza en Malasia Nature",
    "includes": [
      "Vuelos ida y vuelta",
      "Hotel 4★ o 5★",
      "Traslados aeropuerto – hotel",
      "Desayunos incluidos",
      "Experiencia exclusiva local"
    ],
    "hotel": "Hotel recomendado en Nature Retreat: Luxury Collection 5★"
  },
  {
    "id": "hong-kong-capital",
    "name": "Central",
    "country": "Hong Kong (China)",
    "flag": "🌍",
    "category": "capital",
    "type": "destination",
    "priceFromUSD": 6200,
    "priceModel": "per_person",
    "coords": [
      22.3193,
      114.1694
    ],
    "description": "Central, en Hong Kong (China), es una base perfecta para vivir el lado más sofisticado del destino: arquitectura icónica, barrios con personalidad, museos y una escena gastronómica que va desde cocina local auténtica hasta experiencias fine‑dining.\\n\\nEn un viaje estilo Luxury Escape, lo mejor es combinar recorridos privados por los puntos más emblemáticos con momentos de descanso en hoteles bien ubicados en zonas premium. Así puedes moverte fácil, comprar, probar restaurantes top y cerrar el día con rooftops o planes nocturnos.\\n\\nTip pro: camina temprano para ver la ciudad sin multitudes y reserva un tour privado al atardecer para fotos, vistas y una cena especial.",
    "highlights": [
      "Hoteles top",
      "Experiencias",
      "Gastronomía"
    ],
    "activities": [
      "City tour",
      "Restaurantes",
      "Experiencias locales"
    ],
    "bookingLinks": [
      {
        "label": "Reservar hotel",
        "url": "https://www.booking.com/"
      },
      {
        "label": "Buscar vuelos",
        "url": "https://www.google.com/travel/flights"
      },
      {
        "label": "Airbnb (opcional)",
        "url": "https://www.airbnb.com/"
      }
    ],
    "fullName": "Central 🌍",
    "recommendedPlace": "Zona recomendada en Central",
    "includes": [
      "Vuelos ida y vuelta",
      "Hotel 4★ o 5★",
      "Traslados aeropuerto – hotel",
      "Desayunos incluidos",
      "Experiencia exclusiva local"
    ],
    "hotel": "Hotel recomendado en Capital & City Lights: Luxury Collection 5★"
  },
  {
    "id": "hong-kong-escape",
    "name": "Lantau Island",
    "country": "Hong Kong (China)",
    "flag": "🌍",
    "category": "escape",
    "type": "destination",
    "priceFromUSD": 6600,
    "priceModel": "per_person",
    "coords": [
      23.1193,
      115.0694
    ],
    "description": "Lantau Island es la definición de escapada premium en Hong Kong (China): paisajes que parecen de película, ambiente relajado y opciones perfectas para desconectar sin renunciar al lujo.\\n\\nCombina días de descanso (piscina, spa, playa) con experiencias privadas: paseos en barco, snorkel/buceo, cenas frente al mar o recorridos panorámicos. El objetivo es que cada día se sienta exclusivo y sin estrés.\\n\\nRecomendación: elige un alojamiento con vista y añade una actividad VIP (boat tour privado o cena de autor) para que el destino se sienta “wow” desde el primer día.",
    "highlights": [
      "Hoteles top",
      "Experiencias",
      "Gastronomía"
    ],
    "activities": [
      "City tour",
      "Restaurantes",
      "Experiencias locales"
    ],
    "bookingLinks": [
      {
        "label": "Reservar hotel",
        "url": "https://www.booking.com/"
      },
      {
        "label": "Buscar vuelos",
        "url": "https://www.google.com/travel/flights"
      },
      {
        "label": "Airbnb (opcional)",
        "url": "https://www.airbnb.com/"
      }
    ],
    "fullName": "Lantau Island 🌍",
    "recommendedPlace": "Zona recomendada en Lantau Island",
    "includes": [
      "Vuelos ida y vuelta",
      "Hotel 4★ o 5★",
      "Traslados aeropuerto – hotel",
      "Desayunos incluidos",
      "Experiencia exclusiva local"
    ],
    "hotel": "Hotel recomendado en Luxury Escape: Luxury Collection 5★"
  },
  {
    "id": "hong-kong-nature",
    "name": "Repulse Bay",
    "country": "Hong Kong (China)",
    "flag": "🌍",
    "category": "nature",
    "type": "destination",
    "priceFromUSD": 6500,
    "priceModel": "per_person",
    "coords": [
      21.5193,
      113.2694
    ],
    "description": "Repulse Bay es una elección espectacular para conectar con la naturaleza en Hong Kong (China) sin perder confort. Aquí el lujo se vive distinto: paisajes inmensos, aire puro y experiencias tranquilas con alojamientos seleccionados.\\n\\nOrganiza actividades guiadas y privadas: miradores, rutas escénicas, excursiones en 4x4 o caminatas suaves con paradas fotográficas. Después, regresa a un lodge/hotel cómodo para cenar bien y descansar de verdad.\\n\\nTip: prioriza horarios temprano o al atardecer para la mejor luz y menos gente, y lleva ropa por capas para estar cómodo.",
    "highlights": [
      "Hoteles top",
      "Experiencias",
      "Gastronomía"
    ],
    "activities": [
      "City tour",
      "Restaurantes",
      "Experiencias locales"
    ],
    "bookingLinks": [
      {
        "label": "Reservar hotel",
        "url": "https://www.booking.com/"
      },
      {
        "label": "Buscar vuelos",
        "url": "https://www.google.com/travel/flights"
      },
      {
        "label": "Airbnb (opcional)",
        "url": "https://www.airbnb.com/"
      }
    ],
    "fullName": "Repulse Bay 🌍",
    "recommendedPlace": "Zona recomendada en Repulse Bay",
    "includes": [
      "Vuelos ida y vuelta",
      "Hotel 4★ o 5★",
      "Traslados aeropuerto – hotel",
      "Desayunos incluidos",
      "Experiencia exclusiva local"
    ],
    "hotel": "Hotel recomendado en Nature Retreat: Luxury Collection 5★"
  },
  {
    "id": "paises-bajos-capital",
    "name": "Amsterdam",
    "country": "Países Bajos",
    "flag": "🌍",
    "category": "capital",
    "type": "destination",
    "priceFromUSD": 6800,
    "priceModel": "per_person",
    "coords": [
      52.3676,
      4.9041
    ],
    "description": "Amsterdam, en Países Bajos, es una base perfecta para vivir el lado más sofisticado del destino: arquitectura icónica, barrios con personalidad, museos y una escena gastronómica que va desde cocina local auténtica hasta experiencias fine‑dining.\\n\\nEn un viaje estilo Luxury Escape, lo mejor es combinar recorridos privados por los puntos más emblemáticos con momentos de descanso en hoteles bien ubicados en zonas premium. Así puedes moverte fácil, comprar, probar restaurantes top y cerrar el día con rooftops o planes nocturnos.\\n\\nTip pro: camina temprano para ver la ciudad sin multitudes y reserva un tour privado al atardecer para fotos, vistas y una cena especial.",
    "highlights": [
      "Hoteles top",
      "Experiencias",
      "Gastronomía"
    ],
    "activities": [
      "City tour",
      "Restaurantes",
      "Experiencias locales"
    ],
    "bookingLinks": [
      {
        "label": "Reservar hotel",
        "url": "https://www.booking.com/"
      },
      {
        "label": "Buscar vuelos",
        "url": "https://www.google.com/travel/flights"
      },
      {
        "label": "Airbnb (opcional)",
        "url": "https://www.airbnb.com/"
      }
    ],
    "fullName": "Amsterdam 🌍",
    "recommendedPlace": "Zona recomendada en Amsterdam",
    "includes": [
      "Vuelos ida y vuelta",
      "Hotel 4★ o 5★",
      "Traslados aeropuerto – hotel",
      "Desayunos incluidos",
      "Experiencia exclusiva local"
    ],
    "hotel": "Hotel recomendado en Capital & City Lights: Luxury Collection 5★"
  },
  {
    "id": "paises-bajos-escape",
    "name": "Giethoorn",
    "country": "Países Bajos",
    "flag": "🌍",
    "category": "escape",
    "type": "destination",
    "priceFromUSD": 7200,
    "priceModel": "per_person",
    "coords": [
      53.1676,
      5.8041
    ],
    "description": "Giethoorn es la definición de escapada premium en Países Bajos: paisajes que parecen de película, ambiente relajado y opciones perfectas para desconectar sin renunciar al lujo.\\n\\nCombina días de descanso (piscina, spa, playa) con experiencias privadas: paseos en barco, snorkel/buceo, cenas frente al mar o recorridos panorámicos. El objetivo es que cada día se sienta exclusivo y sin estrés.\\n\\nRecomendación: elige un alojamiento con vista y añade una actividad VIP (boat tour privado o cena de autor) para que el destino se sienta “wow” desde el primer día.",
    "highlights": [
      "Hoteles top",
      "Experiencias",
      "Gastronomía"
    ],
    "activities": [
      "City tour",
      "Restaurantes",
      "Experiencias locales"
    ],
    "bookingLinks": [
      {
        "label": "Reservar hotel",
        "url": "https://www.booking.com/"
      },
      {
        "label": "Buscar vuelos",
        "url": "https://www.google.com/travel/flights"
      },
      {
        "label": "Airbnb (opcional)",
        "url": "https://www.airbnb.com/"
      }
    ],
    "fullName": "Giethoorn 🌍",
    "recommendedPlace": "Zona recomendada en Giethoorn",
    "includes": [
      "Vuelos ida y vuelta",
      "Hotel 4★ o 5★",
      "Traslados aeropuerto – hotel",
      "Desayunos incluidos",
      "Experiencia exclusiva local"
    ],
    "hotel": "Hotel recomendado en Luxury Escape: Luxury Collection 5★"
  },
  {
    "id": "paises-bajos-nature",
    "name": "Keukenhof",
    "country": "Países Bajos",
    "flag": "🌍",
    "category": "nature",
    "type": "destination",
    "priceFromUSD": 7100,
    "priceModel": "per_person",
    "coords": [
      51.5676,
      4.0041
    ],
    "description": "Keukenhof es una elección espectacular para conectar con la naturaleza en Países Bajos sin perder confort. Aquí el lujo se vive distinto: paisajes inmensos, aire puro y experiencias tranquilas con alojamientos seleccionados.\\n\\nOrganiza actividades guiadas y privadas: miradores, rutas escénicas, excursiones en 4x4 o caminatas suaves con paradas fotográficas. Después, regresa a un lodge/hotel cómodo para cenar bien y descansar de verdad.\\n\\nTip: prioriza horarios temprano o al atardecer para la mejor luz y menos gente, y lleva ropa por capas para estar cómodo.",
    "highlights": [
      "Hoteles top",
      "Experiencias",
      "Gastronomía"
    ],
    "activities": [
      "City tour",
      "Restaurantes",
      "Experiencias locales"
    ],
    "bookingLinks": [
      {
        "label": "Reservar hotel",
        "url": "https://www.booking.com/"
      },
      {
        "label": "Buscar vuelos",
        "url": "https://www.google.com/travel/flights"
      },
      {
        "label": "Airbnb (opcional)",
        "url": "https://www.airbnb.com/"
      }
    ],
    "fullName": "Keukenhof 🌍",
    "recommendedPlace": "Zona recomendada en Keukenhof",
    "includes": [
      "Vuelos ida y vuelta",
      "Hotel 4★ o 5★",
      "Traslados aeropuerto – hotel",
      "Desayunos incluidos",
      "Experiencia exclusiva local"
    ],
    "hotel": "Hotel recomendado en Nature Retreat: Luxury Collection 5★"
  },
  {
    "id": "polonia-capital",
    "name": "Kraków",
    "country": "Polonia",
    "flag": "🌍",
    "category": "capital",
    "type": "destination",
    "priceFromUSD": 5200,
    "priceModel": "per_person",
    "coords": [
      52.2297,
      21.0122
    ],
    "description": "Kraków, en Polonia, es una base perfecta para vivir el lado más sofisticado del destino: arquitectura icónica, barrios con personalidad, museos y una escena gastronómica que va desde cocina local auténtica hasta experiencias fine‑dining.\\n\\nEn un viaje estilo Luxury Escape, lo mejor es combinar recorridos privados por los puntos más emblemáticos con momentos de descanso en hoteles bien ubicados en zonas premium. Así puedes moverte fácil, comprar, probar restaurantes top y cerrar el día con rooftops o planes nocturnos.\\n\\nTip pro: camina temprano para ver la ciudad sin multitudes y reserva un tour privado al atardecer para fotos, vistas y una cena especial.",
    "highlights": [
      "Hoteles top",
      "Experiencias",
      "Gastronomía"
    ],
    "activities": [
      "City tour",
      "Restaurantes",
      "Experiencias locales"
    ],
    "bookingLinks": [
      {
        "label": "Reservar hotel",
        "url": "https://www.booking.com/"
      },
      {
        "label": "Buscar vuelos",
        "url": "https://www.google.com/travel/flights"
      },
      {
        "label": "Airbnb (opcional)",
        "url": "https://www.airbnb.com/"
      }
    ],
    "fullName": "Kraków 🌍",
    "recommendedPlace": "Zona recomendada en Kraków",
    "includes": [
      "Vuelos ida y vuelta",
      "Hotel 4★ o 5★",
      "Traslados aeropuerto – hotel",
      "Desayunos incluidos",
      "Experiencia exclusiva local"
    ],
    "hotel": "Hotel recomendado en Capital & City Lights: Luxury Collection 5★"
  },
  {
    "id": "polonia-escape",
    "name": "Gdańsk",
    "country": "Polonia",
    "flag": "🌍",
    "category": "escape",
    "type": "destination",
    "priceFromUSD": 5600,
    "priceModel": "per_person",
    "coords": [
      53.0297,
      21.9122
    ],
    "description": "Gdańsk es la definición de escapada premium en Polonia: paisajes que parecen de película, ambiente relajado y opciones perfectas para desconectar sin renunciar al lujo.\\n\\nCombina días de descanso (piscina, spa, playa) con experiencias privadas: paseos en barco, snorkel/buceo, cenas frente al mar o recorridos panorámicos. El objetivo es que cada día se sienta exclusivo y sin estrés.\\n\\nRecomendación: elige un alojamiento con vista y añade una actividad VIP (boat tour privado o cena de autor) para que el destino se sienta “wow” desde el primer día.",
    "highlights": [
      "Hoteles top",
      "Experiencias",
      "Gastronomía"
    ],
    "activities": [
      "City tour",
      "Restaurantes",
      "Experiencias locales"
    ],
    "bookingLinks": [
      {
        "label": "Reservar hotel",
        "url": "https://www.booking.com/"
      },
      {
        "label": "Buscar vuelos",
        "url": "https://www.google.com/travel/flights"
      },
      {
        "label": "Airbnb (opcional)",
        "url": "https://www.airbnb.com/"
      }
    ],
    "fullName": "Gdańsk 🌍",
    "recommendedPlace": "Zona recomendada en Gdańsk",
    "includes": [
      "Vuelos ida y vuelta",
      "Hotel 4★ o 5★",
      "Traslados aeropuerto – hotel",
      "Desayunos incluidos",
      "Experiencia exclusiva local"
    ],
    "hotel": "Hotel recomendado en Luxury Escape: Luxury Collection 5★"
  },
  {
    "id": "polonia-nature",
    "name": "Zakopane",
    "country": "Polonia",
    "flag": "🌍",
    "category": "nature",
    "type": "destination",
    "priceFromUSD": 5500,
    "priceModel": "per_person",
    "coords": [
      51.4297,
      20.1122
    ],
    "description": "Zakopane es una elección espectacular para conectar con la naturaleza en Polonia sin perder confort. Aquí el lujo se vive distinto: paisajes inmensos, aire puro y experiencias tranquilas con alojamientos seleccionados.\\n\\nOrganiza actividades guiadas y privadas: miradores, rutas escénicas, excursiones en 4x4 o caminatas suaves con paradas fotográficas. Después, regresa a un lodge/hotel cómodo para cenar bien y descansar de verdad.\\n\\nTip: prioriza horarios temprano o al atardecer para la mejor luz y menos gente, y lleva ropa por capas para estar cómodo.",
    "highlights": [
      "Hoteles top",
      "Experiencias",
      "Gastronomía"
    ],
    "activities": [
      "City tour",
      "Restaurantes",
      "Experiencias locales"
    ],
    "bookingLinks": [
      {
        "label": "Reservar hotel",
        "url": "https://www.booking.com/"
      },
      {
        "label": "Buscar vuelos",
        "url": "https://www.google.com/travel/flights"
      },
      {
        "label": "Airbnb (opcional)",
        "url": "https://www.airbnb.com/"
      }
    ],
    "fullName": "Zakopane 🌍",
    "recommendedPlace": "Zona recomendada en Zakopane",
    "includes": [
      "Vuelos ida y vuelta",
      "Hotel 4★ o 5★",
      "Traslados aeropuerto – hotel",
      "Desayunos incluidos",
      "Experiencia exclusiva local"
    ],
    "hotel": "Hotel recomendado en Nature Retreat: Luxury Collection 5★"
  },
  {
    "id": "vietnam-capital",
    "name": "Hanoi",
    "country": "Vietnam",
    "flag": "🌍",
    "category": "capital",
    "type": "destination",
    "priceFromUSD": 4800,
    "priceModel": "per_person",
    "coords": [
      21.0278,
      105.8342
    ],
    "description": "Hanoi, en Vietnam, es una base perfecta para vivir el lado más sofisticado del destino: arquitectura icónica, barrios con personalidad, museos y una escena gastronómica que va desde cocina local auténtica hasta experiencias fine‑dining.\\n\\nEn un viaje estilo Luxury Escape, lo mejor es combinar recorridos privados por los puntos más emblemáticos con momentos de descanso en hoteles bien ubicados en zonas premium. Así puedes moverte fácil, comprar, probar restaurantes top y cerrar el día con rooftops o planes nocturnos.\\n\\nTip pro: camina temprano para ver la ciudad sin multitudes y reserva un tour privado al atardecer para fotos, vistas y una cena especial.",
    "highlights": [
      "Hoteles top",
      "Experiencias",
      "Gastronomía"
    ],
    "activities": [
      "City tour",
      "Restaurantes",
      "Experiencias locales"
    ],
    "bookingLinks": [
      {
        "label": "Reservar hotel",
        "url": "https://www.booking.com/"
      },
      {
        "label": "Buscar vuelos",
        "url": "https://www.google.com/travel/flights"
      },
      {
        "label": "Airbnb (opcional)",
        "url": "https://www.airbnb.com/"
      }
    ],
    "fullName": "Hanoi 🌍",
    "recommendedPlace": "Zona recomendada en Hanoi",
    "includes": [
      "Vuelos ida y vuelta",
      "Hotel 4★ o 5★",
      "Traslados aeropuerto – hotel",
      "Desayunos incluidos",
      "Experiencia exclusiva local"
    ],
    "hotel": "Hotel recomendado en Capital & City Lights: Luxury Collection 5★"
  },
  {
    "id": "vietnam-escape",
    "name": "Ha Long Bay",
    "country": "Vietnam",
    "flag": "🌍",
    "category": "escape",
    "type": "destination",
    "priceFromUSD": 5200,
    "priceModel": "per_person",
    "coords": [
      21.8278,
      106.7342
    ],
    "description": "Ha Long Bay es la definición de escapada premium en Vietnam: paisajes que parecen de película, ambiente relajado y opciones perfectas para desconectar sin renunciar al lujo.\\n\\nCombina días de descanso (piscina, spa, playa) con experiencias privadas: paseos en barco, snorkel/buceo, cenas frente al mar o recorridos panorámicos. El objetivo es que cada día se sienta exclusivo y sin estrés.\\n\\nRecomendación: elige un alojamiento con vista y añade una actividad VIP (boat tour privado o cena de autor) para que el destino se sienta “wow” desde el primer día.",
    "highlights": [
      "Hoteles top",
      "Experiencias",
      "Gastronomía"
    ],
    "activities": [
      "City tour",
      "Restaurantes",
      "Experiencias locales"
    ],
    "bookingLinks": [
      {
        "label": "Reservar hotel",
        "url": "https://www.booking.com/"
      },
      {
        "label": "Buscar vuelos",
        "url": "https://www.google.com/travel/flights"
      },
      {
        "label": "Airbnb (opcional)",
        "url": "https://www.airbnb.com/"
      }
    ],
    "fullName": "Ha Long Bay 🌍",
    "recommendedPlace": "Zona recomendada en Ha Long Bay",
    "includes": [
      "Vuelos ida y vuelta",
      "Hotel 4★ o 5★",
      "Traslados aeropuerto – hotel",
      "Desayunos incluidos",
      "Experiencia exclusiva local"
    ],
    "hotel": "Hotel recomendado en Luxury Escape: Luxury Collection 5★"
  },
  {
    "id": "vietnam-nature",
    "name": "Da Nang",
    "country": "Vietnam",
    "flag": "🌍",
    "category": "nature",
    "type": "destination",
    "priceFromUSD": 5100,
    "priceModel": "per_person",
    "coords": [
      20.2278,
      104.9342
    ],
    "description": "Da Nang es una elección espectacular para conectar con la naturaleza en Vietnam sin perder confort. Aquí el lujo se vive distinto: paisajes inmensos, aire puro y experiencias tranquilas con alojamientos seleccionados.\\n\\nOrganiza actividades guiadas y privadas: miradores, rutas escénicas, excursiones en 4x4 o caminatas suaves con paradas fotográficas. Después, regresa a un lodge/hotel cómodo para cenar bien y descansar de verdad.\\n\\nTip: prioriza horarios temprano o al atardecer para la mejor luz y menos gente, y lleva ropa por capas para estar cómodo.",
    "highlights": [
      "Hoteles top",
      "Experiencias",
      "Gastronomía"
    ],
    "activities": [
      "City tour",
      "Restaurantes",
      "Experiencias locales"
    ],
    "bookingLinks": [
      {
        "label": "Reservar hotel",
        "url": "https://www.booking.com/"
      },
      {
        "label": "Buscar vuelos",
        "url": "https://www.google.com/travel/flights"
      },
      {
        "label": "Airbnb (opcional)",
        "url": "https://www.airbnb.com/"
      }
    ],
    "fullName": "Da Nang 🌍",
    "recommendedPlace": "Zona recomendada en Da Nang",
    "includes": [
      "Vuelos ida y vuelta",
      "Hotel 4★ o 5★",
      "Traslados aeropuerto – hotel",
      "Desayunos incluidos",
      "Experiencia exclusiva local"
    ],
    "hotel": "Hotel recomendado en Nature Retreat: Luxury Collection 5★"
  },
  {
    "id": "marruecos-capital",
    "name": "Marrakech",
    "country": "Marruecos",
    "flag": "🌍",
    "category": "capital",
    "type": "destination",
    "priceFromUSD": 4800,
    "priceModel": "per_person",
    "coords": [
      34.0209,
      -6.8416
    ],
    "description": "Marrakech, en Marruecos, es una base perfecta para vivir el lado más sofisticado del destino: arquitectura icónica, barrios con personalidad, museos y una escena gastronómica que va desde cocina local auténtica hasta experiencias fine‑dining.\\n\\nEn un viaje estilo Luxury Escape, lo mejor es combinar recorridos privados por los puntos más emblemáticos con momentos de descanso en hoteles bien ubicados en zonas premium. Así puedes moverte fácil, comprar, probar restaurantes top y cerrar el día con rooftops o planes nocturnos.\\n\\nTip pro: camina temprano para ver la ciudad sin multitudes y reserva un tour privado al atardecer para fotos, vistas y una cena especial.",
    "highlights": [
      "Hoteles top",
      "Experiencias",
      "Gastronomía"
    ],
    "activities": [
      "City tour",
      "Restaurantes",
      "Experiencias locales"
    ],
    "bookingLinks": [
      {
        "label": "Reservar hotel",
        "url": "https://www.booking.com/"
      },
      {
        "label": "Buscar vuelos",
        "url": "https://www.google.com/travel/flights"
      },
      {
        "label": "Airbnb (opcional)",
        "url": "https://www.airbnb.com/"
      }
    ],
    "fullName": "Marrakech 🌍",
    "recommendedPlace": "Zona recomendada en Marrakech",
    "includes": [
      "Vuelos ida y vuelta",
      "Hotel 4★ o 5★",
      "Traslados aeropuerto – hotel",
      "Desayunos incluidos",
      "Experiencia exclusiva local"
    ],
    "hotel": "Hotel recomendado en Capital & City Lights: Luxury Collection 5★"
  },
  {
    "id": "marruecos-escape",
    "name": "Essaouira",
    "country": "Marruecos",
    "flag": "🌍",
    "category": "escape",
    "type": "destination",
    "priceFromUSD": 5200,
    "priceModel": "per_person",
    "coords": [
      34.8209,
      -5.9416
    ],
    "description": "Essaouira es la definición de escapada premium en Marruecos: paisajes que parecen de película, ambiente relajado y opciones perfectas para desconectar sin renunciar al lujo.\\n\\nCombina días de descanso (piscina, spa, playa) con experiencias privadas: paseos en barco, snorkel/buceo, cenas frente al mar o recorridos panorámicos. El objetivo es que cada día se sienta exclusivo y sin estrés.\\n\\nRecomendación: elige un alojamiento con vista y añade una actividad VIP (boat tour privado o cena de autor) para que el destino se sienta “wow” desde el primer día.",
    "highlights": [
      "Hoteles top",
      "Experiencias",
      "Gastronomía"
    ],
    "activities": [
      "City tour",
      "Restaurantes",
      "Experiencias locales"
    ],
    "bookingLinks": [
      {
        "label": "Reservar hotel",
        "url": "https://www.booking.com/"
      },
      {
        "label": "Buscar vuelos",
        "url": "https://www.google.com/travel/flights"
      },
      {
        "label": "Airbnb (opcional)",
        "url": "https://www.airbnb.com/"
      }
    ],
    "fullName": "Essaouira 🌍",
    "recommendedPlace": "Zona recomendada en Essaouira",
    "includes": [
      "Vuelos ida y vuelta",
      "Hotel 4★ o 5★",
      "Traslados aeropuerto – hotel",
      "Desayunos incluidos",
      "Experiencia exclusiva local"
    ],
    "hotel": "Hotel recomendado en Luxury Escape: Luxury Collection 5★"
  },
  {
    "id": "marruecos-nature",
    "name": "Atlas Mountains",
    "country": "Marruecos",
    "flag": "🌍",
    "category": "nature",
    "type": "destination",
    "priceFromUSD": 5100,
    "priceModel": "per_person",
    "coords": [
      33.2209,
      -7.7416
    ],
    "description": "Atlas Mountains es una elección espectacular para conectar con la naturaleza en Marruecos sin perder confort. Aquí el lujo se vive distinto: paisajes inmensos, aire puro y experiencias tranquilas con alojamientos seleccionados.\\n\\nOrganiza actividades guiadas y privadas: miradores, rutas escénicas, excursiones en 4x4 o caminatas suaves con paradas fotográficas. Después, regresa a un lodge/hotel cómodo para cenar bien y descansar de verdad.\\n\\nTip: prioriza horarios temprano o al atardecer para la mejor luz y menos gente, y lleva ropa por capas para estar cómodo.",
    "highlights": [
      "Hoteles top",
      "Experiencias",
      "Gastronomía"
    ],
    "activities": [
      "City tour",
      "Restaurantes",
      "Experiencias locales"
    ],
    "bookingLinks": [
      {
        "label": "Reservar hotel",
        "url": "https://www.booking.com/"
      },
      {
        "label": "Buscar vuelos",
        "url": "https://www.google.com/travel/flights"
      },
      {
        "label": "Airbnb (opcional)",
        "url": "https://www.airbnb.com/"
      }
    ],
    "fullName": "Atlas Mountains 🌍",
    "recommendedPlace": "Zona recomendada en Atlas Mountains",
    "includes": [
      "Vuelos ida y vuelta",
      "Hotel 4★ o 5★",
      "Traslados aeropuerto – hotel",
      "Desayunos incluidos",
      "Experiencia exclusiva local"
    ],
    "hotel": "Hotel recomendado en Nature Retreat: Luxury Collection 5★"
  },
  {
    "id": "macao-capital",
    "name": "Macau Peninsula",
    "country": "Macao (China)",
    "flag": "🌍",
    "category": "capital",
    "type": "destination",
    "priceFromUSD": 6200,
    "priceModel": "per_person",
    "coords": [
      22.1987,
      113.5439
    ],
    "description": "Macau Peninsula, en Macao (China), es una base perfecta para vivir el lado más sofisticado del destino: arquitectura icónica, barrios con personalidad, museos y una escena gastronómica que va desde cocina local auténtica hasta experiencias fine‑dining.\\n\\nEn un viaje estilo Luxury Escape, lo mejor es combinar recorridos privados por los puntos más emblemáticos con momentos de descanso en hoteles bien ubicados en zonas premium. Así puedes moverte fácil, comprar, probar restaurantes top y cerrar el día con rooftops o planes nocturnos.\\n\\nTip pro: camina temprano para ver la ciudad sin multitudes y reserva un tour privado al atardecer para fotos, vistas y una cena especial.",
    "highlights": [
      "Hoteles top",
      "Experiencias",
      "Gastronomía"
    ],
    "activities": [
      "City tour",
      "Restaurantes",
      "Experiencias locales"
    ],
    "bookingLinks": [
      {
        "label": "Reservar hotel",
        "url": "https://www.booking.com/"
      },
      {
        "label": "Buscar vuelos",
        "url": "https://www.google.com/travel/flights"
      },
      {
        "label": "Airbnb (opcional)",
        "url": "https://www.airbnb.com/"
      }
    ],
    "fullName": "Macau Peninsula 🌍",
    "recommendedPlace": "Zona recomendada en Macau Peninsula",
    "includes": [
      "Vuelos ida y vuelta",
      "Hotel 4★ o 5★",
      "Traslados aeropuerto – hotel",
      "Desayunos incluidos",
      "Experiencia exclusiva local"
    ],
    "hotel": "Hotel recomendado en Capital & City Lights: Luxury Collection 5★"
  },
  {
    "id": "macao-escape",
    "name": "Taipa",
    "country": "Macao (China)",
    "flag": "🌍",
    "category": "escape",
    "type": "destination",
    "priceFromUSD": 6600,
    "priceModel": "per_person",
    "coords": [
      22.9987,
      114.4439
    ],
    "description": "Taipa es la definición de escapada premium en Macao (China): paisajes que parecen de película, ambiente relajado y opciones perfectas para desconectar sin renunciar al lujo.\\n\\nCombina días de descanso (piscina, spa, playa) con experiencias privadas: paseos en barco, snorkel/buceo, cenas frente al mar o recorridos panorámicos. El objetivo es que cada día se sienta exclusivo y sin estrés.\\n\\nRecomendación: elige un alojamiento con vista y añade una actividad VIP (boat tour privado o cena de autor) para que el destino se sienta “wow” desde el primer día.",
    "highlights": [
      "Hoteles top",
      "Experiencias",
      "Gastronomía"
    ],
    "activities": [
      "City tour",
      "Restaurantes",
      "Experiencias locales"
    ],
    "bookingLinks": [
      {
        "label": "Reservar hotel",
        "url": "https://www.booking.com/"
      },
      {
        "label": "Buscar vuelos",
        "url": "https://www.google.com/travel/flights"
      },
      {
        "label": "Airbnb (opcional)",
        "url": "https://www.airbnb.com/"
      }
    ],
    "fullName": "Taipa 🌍",
    "recommendedPlace": "Zona recomendada en Taipa",
    "includes": [
      "Vuelos ida y vuelta",
      "Hotel 4★ o 5★",
      "Traslados aeropuerto – hotel",
      "Desayunos incluidos",
      "Experiencia exclusiva local"
    ],
    "hotel": "Hotel recomendado en Luxury Escape: Luxury Collection 5★"
  },
  {
    "id": "macao-nature",
    "name": "Cotai Strip",
    "country": "Macao (China)",
    "flag": "🌍",
    "category": "nature",
    "type": "destination",
    "priceFromUSD": 6500,
    "priceModel": "per_person",
    "coords": [
      21.3987,
      112.6439
    ],
    "description": "Cotai Strip es una elección espectacular para conectar con la naturaleza en Macao (China) sin perder confort. Aquí el lujo se vive distinto: paisajes inmensos, aire puro y experiencias tranquilas con alojamientos seleccionados.\\n\\nOrganiza actividades guiadas y privadas: miradores, rutas escénicas, excursiones en 4x4 o caminatas suaves con paradas fotográficas. Después, regresa a un lodge/hotel cómodo para cenar bien y descansar de verdad.\\n\\nTip: prioriza horarios temprano o al atardecer para la mejor luz y menos gente, y lleva ropa por capas para estar cómodo.",
    "highlights": [
      "Hoteles top",
      "Experiencias",
      "Gastronomía"
    ],
    "activities": [
      "City tour",
      "Restaurantes",
      "Experiencias locales"
    ],
    "bookingLinks": [
      {
        "label": "Reservar hotel",
        "url": "https://www.booking.com/"
      },
      {
        "label": "Buscar vuelos",
        "url": "https://www.google.com/travel/flights"
      },
      {
        "label": "Airbnb (opcional)",
        "url": "https://www.airbnb.com/"
      }
    ],
    "fullName": "Cotai Strip 🌍",
    "recommendedPlace": "Zona recomendada en Cotai Strip",
    "includes": [
      "Vuelos ida y vuelta",
      "Hotel 4★ o 5★",
      "Traslados aeropuerto – hotel",
      "Desayunos incluidos",
      "Experiencia exclusiva local"
    ],
    "hotel": "Hotel recomendado en Nature Retreat: Luxury Collection 5★"
  },
  {
    "id": "egipto-capital",
    "name": "Cairo",
    "country": "Egipto",
    "flag": "🌍",
    "category": "capital",
    "type": "destination",
    "priceFromUSD": 4800,
    "priceModel": "per_person",
    "coords": [
      30.0444,
      31.2357
    ],
    "description": "Cairo, en Egipto, es una base perfecta para vivir el lado más sofisticado del destino: arquitectura icónica, barrios con personalidad, museos y una escena gastronómica que va desde cocina local auténtica hasta experiencias fine‑dining.\\n\\nEn un viaje estilo Luxury Escape, lo mejor es combinar recorridos privados por los puntos más emblemáticos con momentos de descanso en hoteles bien ubicados en zonas premium. Así puedes moverte fácil, comprar, probar restaurantes top y cerrar el día con rooftops o planes nocturnos.\\n\\nTip pro: camina temprano para ver la ciudad sin multitudes y reserva un tour privado al atardecer para fotos, vistas y una cena especial.",
    "highlights": [
      "Hoteles top",
      "Experiencias",
      "Gastronomía"
    ],
    "activities": [
      "City tour",
      "Restaurantes",
      "Experiencias locales"
    ],
    "bookingLinks": [
      {
        "label": "Reservar hotel",
        "url": "https://www.booking.com/"
      },
      {
        "label": "Buscar vuelos",
        "url": "https://www.google.com/travel/flights"
      },
      {
        "label": "Airbnb (opcional)",
        "url": "https://www.airbnb.com/"
      }
    ],
    "fullName": "Cairo 🌍",
    "recommendedPlace": "Zona recomendada en Cairo",
    "includes": [
      "Vuelos ida y vuelta",
      "Hotel 4★ o 5★",
      "Traslados aeropuerto – hotel",
      "Desayunos incluidos",
      "Experiencia exclusiva local"
    ],
    "hotel": "Hotel recomendado en Capital & City Lights: Luxury Collection 5★"
  },
  {
    "id": "egipto-escape",
    "name": "Luxor",
    "country": "Egipto",
    "flag": "🌍",
    "category": "escape",
    "type": "destination",
    "priceFromUSD": 5200,
    "priceModel": "per_person",
    "coords": [
      30.8444,
      32.1357
    ],
    "description": "Luxor es la definición de escapada premium en Egipto: paisajes que parecen de película, ambiente relajado y opciones perfectas para desconectar sin renunciar al lujo.\\n\\nCombina días de descanso (piscina, spa, playa) con experiencias privadas: paseos en barco, snorkel/buceo, cenas frente al mar o recorridos panorámicos. El objetivo es que cada día se sienta exclusivo y sin estrés.\\n\\nRecomendación: elige un alojamiento con vista y añade una actividad VIP (boat tour privado o cena de autor) para que el destino se sienta “wow” desde el primer día.",
    "highlights": [
      "Hoteles top",
      "Experiencias",
      "Gastronomía"
    ],
    "activities": [
      "City tour",
      "Restaurantes",
      "Experiencias locales"
    ],
    "bookingLinks": [
      {
        "label": "Reservar hotel",
        "url": "https://www.booking.com/"
      },
      {
        "label": "Buscar vuelos",
        "url": "https://www.google.com/travel/flights"
      },
      {
        "label": "Airbnb (opcional)",
        "url": "https://www.airbnb.com/"
      }
    ],
    "fullName": "Luxor 🌍",
    "recommendedPlace": "Zona recomendada en Luxor",
    "includes": [
      "Vuelos ida y vuelta",
      "Hotel 4★ o 5★",
      "Traslados aeropuerto – hotel",
      "Desayunos incluidos",
      "Experiencia exclusiva local"
    ],
    "hotel": "Hotel recomendado en Luxury Escape: Luxury Collection 5★"
  },
  {
    "id": "egipto-nature",
    "name": "Red Sea",
    "country": "Egipto",
    "flag": "🌍",
    "category": "nature",
    "type": "destination",
    "priceFromUSD": 5100,
    "priceModel": "per_person",
    "coords": [
      29.2444,
      30.3357
    ],
    "description": "Red Sea es una elección espectacular para conectar con la naturaleza en Egipto sin perder confort. Aquí el lujo se vive distinto: paisajes inmensos, aire puro y experiencias tranquilas con alojamientos seleccionados.\\n\\nOrganiza actividades guiadas y privadas: miradores, rutas escénicas, excursiones en 4x4 o caminatas suaves con paradas fotográficas. Después, regresa a un lodge/hotel cómodo para cenar bien y descansar de verdad.\\n\\nTip: prioriza horarios temprano o al atardecer para la mejor luz y menos gente, y lleva ropa por capas para estar cómodo.",
    "highlights": [
      "Hoteles top",
      "Experiencias",
      "Gastronomía"
    ],
    "activities": [
      "City tour",
      "Restaurantes",
      "Experiencias locales"
    ],
    "bookingLinks": [
      {
        "label": "Reservar hotel",
        "url": "https://www.booking.com/"
      },
      {
        "label": "Buscar vuelos",
        "url": "https://www.google.com/travel/flights"
      },
      {
        "label": "Airbnb (opcional)",
        "url": "https://www.airbnb.com/"
      }
    ],
    "fullName": "Red Sea 🌍",
    "recommendedPlace": "Zona recomendada en Red Sea",
    "includes": [
      "Vuelos ida y vuelta",
      "Hotel 4★ o 5★",
      "Traslados aeropuerto – hotel",
      "Desayunos incluidos",
      "Experiencia exclusiva local"
    ],
    "hotel": "Hotel recomendado en Nature Retreat: Luxury Collection 5★"
  },
  {
    "id": "hungria-capital",
    "name": "Budapest",
    "country": "Hungría",
    "flag": "🌍",
    "category": "capital",
    "type": "destination",
    "priceFromUSD": 5200,
    "priceModel": "per_person",
    "coords": [
      47.4979,
      19.0402
    ],
    "description": "Budapest, en Hungría, es una base perfecta para vivir el lado más sofisticado del destino: arquitectura icónica, barrios con personalidad, museos y una escena gastronómica que va desde cocina local auténtica hasta experiencias fine‑dining.\\n\\nEn un viaje estilo Luxury Escape, lo mejor es combinar recorridos privados por los puntos más emblemáticos con momentos de descanso en hoteles bien ubicados en zonas premium. Así puedes moverte fácil, comprar, probar restaurantes top y cerrar el día con rooftops o planes nocturnos.\\n\\nTip pro: camina temprano para ver la ciudad sin multitudes y reserva un tour privado al atardecer para fotos, vistas y una cena especial.",
    "highlights": [
      "Hoteles top",
      "Experiencias",
      "Gastronomía"
    ],
    "activities": [
      "City tour",
      "Restaurantes",
      "Experiencias locales"
    ],
    "bookingLinks": [
      {
        "label": "Reservar hotel",
        "url": "https://www.booking.com/"
      },
      {
        "label": "Buscar vuelos",
        "url": "https://www.google.com/travel/flights"
      },
      {
        "label": "Airbnb (opcional)",
        "url": "https://www.airbnb.com/"
      }
    ],
    "fullName": "Budapest 🌍",
    "recommendedPlace": "Zona recomendada en Budapest",
    "includes": [
      "Vuelos ida y vuelta",
      "Hotel 4★ o 5★",
      "Traslados aeropuerto – hotel",
      "Desayunos incluidos",
      "Experiencia exclusiva local"
    ],
    "hotel": "Hotel recomendado en Capital & City Lights: Luxury Collection 5★"
  },
  {
    "id": "hungria-escape",
    "name": "Lake Balaton",
    "country": "Hungría",
    "flag": "🌍",
    "category": "escape",
    "type": "destination",
    "priceFromUSD": 5600,
    "priceModel": "per_person",
    "coords": [
      48.2979,
      19.9402
    ],
    "description": "Lake Balaton es la definición de escapada premium en Hungría: paisajes que parecen de película, ambiente relajado y opciones perfectas para desconectar sin renunciar al lujo.\\n\\nCombina días de descanso (piscina, spa, playa) con experiencias privadas: paseos en barco, snorkel/buceo, cenas frente al mar o recorridos panorámicos. El objetivo es que cada día se sienta exclusivo y sin estrés.\\n\\nRecomendación: elige un alojamiento con vista y añade una actividad VIP (boat tour privado o cena de autor) para que el destino se sienta “wow” desde el primer día.",
    "highlights": [
      "Hoteles top",
      "Experiencias",
      "Gastronomía"
    ],
    "activities": [
      "City tour",
      "Restaurantes",
      "Experiencias locales"
    ],
    "bookingLinks": [
      {
        "label": "Reservar hotel",
        "url": "https://www.booking.com/"
      },
      {
        "label": "Buscar vuelos",
        "url": "https://www.google.com/travel/flights"
      },
      {
        "label": "Airbnb (opcional)",
        "url": "https://www.airbnb.com/"
      }
    ],
    "fullName": "Lake Balaton 🌍",
    "recommendedPlace": "Zona recomendada en Lake Balaton",
    "includes": [
      "Vuelos ida y vuelta",
      "Hotel 4★ o 5★",
      "Traslados aeropuerto – hotel",
      "Desayunos incluidos",
      "Experiencia exclusiva local"
    ],
    "hotel": "Hotel recomendado en Luxury Escape: Luxury Collection 5★"
  },
  {
    "id": "hungria-nature",
    "name": "Eger Wine Region",
    "country": "Hungría",
    "flag": "🌍",
    "category": "nature",
    "type": "destination",
    "priceFromUSD": 5500,
    "priceModel": "per_person",
    "coords": [
      46.6979,
      18.1402
    ],
    "description": "Eger Wine Region es una elección espectacular para conectar con la naturaleza en Hungría sin perder confort. Aquí el lujo se vive distinto: paisajes inmensos, aire puro y experiencias tranquilas con alojamientos seleccionados.\\n\\nOrganiza actividades guiadas y privadas: miradores, rutas escénicas, excursiones en 4x4 o caminatas suaves con paradas fotográficas. Después, regresa a un lodge/hotel cómodo para cenar bien y descansar de verdad.\\n\\nTip: prioriza horarios temprano o al atardecer para la mejor luz y menos gente, y lleva ropa por capas para estar cómodo.",
    "highlights": [
      "Hoteles top",
      "Experiencias",
      "Gastronomía"
    ],
    "activities": [
      "City tour",
      "Restaurantes",
      "Experiencias locales"
    ],
    "bookingLinks": [
      {
        "label": "Reservar hotel",
        "url": "https://www.booking.com/"
      },
      {
        "label": "Buscar vuelos",
        "url": "https://www.google.com/travel/flights"
      },
      {
        "label": "Airbnb (opcional)",
        "url": "https://www.airbnb.com/"
      }
    ],
    "fullName": "Eger Wine Region 🌍",
    "recommendedPlace": "Zona recomendada en Eger Wine Region",
    "includes": [
      "Vuelos ida y vuelta",
      "Hotel 4★ o 5★",
      "Traslados aeropuerto – hotel",
      "Desayunos incluidos",
      "Experiencia exclusiva local"
    ],
    "hotel": "Hotel recomendado en Nature Retreat: Luxury Collection 5★"
  },
  {
    "id": "albania-capital",
    "name": "Tirana",
    "country": "Albania",
    "flag": "🌍",
    "category": "capital",
    "type": "destination",
    "priceFromUSD": 5200,
    "priceModel": "per_person",
    "coords": [
      41.3275,
      19.8187
    ],
    "description": "Tirana, en Albania, es una base perfecta para vivir el lado más sofisticado del destino: arquitectura icónica, barrios con personalidad, museos y una escena gastronómica que va desde cocina local auténtica hasta experiencias fine‑dining.\\n\\nEn un viaje estilo Luxury Escape, lo mejor es combinar recorridos privados por los puntos más emblemáticos con momentos de descanso en hoteles bien ubicados en zonas premium. Así puedes moverte fácil, comprar, probar restaurantes top y cerrar el día con rooftops o planes nocturnos.\\n\\nTip pro: camina temprano para ver la ciudad sin multitudes y reserva un tour privado al atardecer para fotos, vistas y una cena especial.",
    "highlights": [
      "Hoteles top",
      "Experiencias",
      "Gastronomía"
    ],
    "activities": [
      "City tour",
      "Restaurantes",
      "Experiencias locales"
    ],
    "bookingLinks": [
      {
        "label": "Reservar hotel",
        "url": "https://www.booking.com/"
      },
      {
        "label": "Buscar vuelos",
        "url": "https://www.google.com/travel/flights"
      },
      {
        "label": "Airbnb (opcional)",
        "url": "https://www.airbnb.com/"
      }
    ],
    "fullName": "Tirana 🌍",
    "recommendedPlace": "Zona recomendada en Tirana",
    "includes": [
      "Vuelos ida y vuelta",
      "Hotel 4★ o 5★",
      "Traslados aeropuerto – hotel",
      "Desayunos incluidos",
      "Experiencia exclusiva local"
    ],
    "hotel": "Hotel recomendado en Capital & City Lights: Luxury Collection 5★"
  },
  {
    "id": "albania-escape",
    "name": "Ksamil",
    "country": "Albania",
    "flag": "🌍",
    "category": "escape",
    "type": "destination",
    "priceFromUSD": 5600,
    "priceModel": "per_person",
    "coords": [
      42.1275,
      20.7187
    ],
    "description": "Ksamil es la definición de escapada premium en Albania: paisajes que parecen de película, ambiente relajado y opciones perfectas para desconectar sin renunciar al lujo.\\n\\nCombina días de descanso (piscina, spa, playa) con experiencias privadas: paseos en barco, snorkel/buceo, cenas frente al mar o recorridos panorámicos. El objetivo es que cada día se sienta exclusivo y sin estrés.\\n\\nRecomendación: elige un alojamiento con vista y añade una actividad VIP (boat tour privado o cena de autor) para que el destino se sienta “wow” desde el primer día.",
    "highlights": [
      "Hoteles top",
      "Experiencias",
      "Gastronomía"
    ],
    "activities": [
      "City tour",
      "Restaurantes",
      "Experiencias locales"
    ],
    "bookingLinks": [
      {
        "label": "Reservar hotel",
        "url": "https://www.booking.com/"
      },
      {
        "label": "Buscar vuelos",
        "url": "https://www.google.com/travel/flights"
      },
      {
        "label": "Airbnb (opcional)",
        "url": "https://www.airbnb.com/"
      }
    ],
    "fullName": "Ksamil 🌍",
    "recommendedPlace": "Zona recomendada en Ksamil",
    "includes": [
      "Vuelos ida y vuelta",
      "Hotel 4★ o 5★",
      "Traslados aeropuerto – hotel",
      "Desayunos incluidos",
      "Experiencia exclusiva local"
    ],
    "hotel": "Hotel recomendado en Luxury Escape: Luxury Collection 5★"
  },
  {
    "id": "albania-nature",
    "name": "Albanian Riviera",
    "country": "Albania",
    "flag": "🌍",
    "category": "nature",
    "type": "destination",
    "priceFromUSD": 5500,
    "priceModel": "per_person",
    "coords": [
      40.5275,
      18.9187
    ],
    "description": "Albanian Riviera es una elección espectacular para conectar con la naturaleza en Albania sin perder confort. Aquí el lujo se vive distinto: paisajes inmensos, aire puro y experiencias tranquilas con alojamientos seleccionados.\\n\\nOrganiza actividades guiadas y privadas: miradores, rutas escénicas, excursiones en 4x4 o caminatas suaves con paradas fotográficas. Después, regresa a un lodge/hotel cómodo para cenar bien y descansar de verdad.\\n\\nTip: prioriza horarios temprano o al atardecer para la mejor luz y menos gente, y lleva ropa por capas para estar cómodo.",
    "highlights": [
      "Hoteles top",
      "Experiencias",
      "Gastronomía"
    ],
    "activities": [
      "City tour",
      "Restaurantes",
      "Experiencias locales"
    ],
    "bookingLinks": [
      {
        "label": "Reservar hotel",
        "url": "https://www.booking.com/"
      },
      {
        "label": "Buscar vuelos",
        "url": "https://www.google.com/travel/flights"
      },
      {
        "label": "Airbnb (opcional)",
        "url": "https://www.airbnb.com/"
      }
    ],
    "fullName": "Albanian Riviera 🌍",
    "recommendedPlace": "Zona recomendada en Albanian Riviera",
    "includes": [
      "Vuelos ida y vuelta",
      "Hotel 4★ o 5★",
      "Traslados aeropuerto – hotel",
      "Desayunos incluidos",
      "Experiencia exclusiva local"
    ],
    "hotel": "Hotel recomendado en Nature Retreat: Luxury Collection 5★"
  },
  {
    "id": "tunez-capital",
    "name": "Tunis",
    "country": "Túnez",
    "flag": "🌍",
    "category": "capital",
    "type": "destination",
    "priceFromUSD": 4800,
    "priceModel": "per_person",
    "coords": [
      36.8065,
      10.1815
    ],
    "description": "Tunis, en Túnez, es una base perfecta para vivir el lado más sofisticado del destino: arquitectura icónica, barrios con personalidad, museos y una escena gastronómica que va desde cocina local auténtica hasta experiencias fine‑dining.\\n\\nEn un viaje estilo Luxury Escape, lo mejor es combinar recorridos privados por los puntos más emblemáticos con momentos de descanso en hoteles bien ubicados en zonas premium. Así puedes moverte fácil, comprar, probar restaurantes top y cerrar el día con rooftops o planes nocturnos.\\n\\nTip pro: camina temprano para ver la ciudad sin multitudes y reserva un tour privado al atardecer para fotos, vistas y una cena especial.",
    "highlights": [
      "Hoteles top",
      "Experiencias",
      "Gastronomía"
    ],
    "activities": [
      "City tour",
      "Restaurantes",
      "Experiencias locales"
    ],
    "bookingLinks": [
      {
        "label": "Reservar hotel",
        "url": "https://www.booking.com/"
      },
      {
        "label": "Buscar vuelos",
        "url": "https://www.google.com/travel/flights"
      },
      {
        "label": "Airbnb (opcional)",
        "url": "https://www.airbnb.com/"
      }
    ],
    "fullName": "Tunis 🌍",
    "recommendedPlace": "Zona recomendada en Tunis",
    "includes": [
      "Vuelos ida y vuelta",
      "Hotel 4★ o 5★",
      "Traslados aeropuerto – hotel",
      "Desayunos incluidos",
      "Experiencia exclusiva local"
    ],
    "hotel": "Hotel recomendado en Capital & City Lights: Luxury Collection 5★"
  },
  {
    "id": "tunez-escape",
    "name": "Djerba",
    "country": "Túnez",
    "flag": "🌍",
    "category": "escape",
    "type": "destination",
    "priceFromUSD": 5200,
    "priceModel": "per_person",
    "coords": [
      37.6065,
      11.0815
    ],
    "description": "Djerba es la definición de escapada premium en Túnez: paisajes que parecen de película, ambiente relajado y opciones perfectas para desconectar sin renunciar al lujo.\\n\\nCombina días de descanso (piscina, spa, playa) con experiencias privadas: paseos en barco, snorkel/buceo, cenas frente al mar o recorridos panorámicos. El objetivo es que cada día se sienta exclusivo y sin estrés.\\n\\nRecomendación: elige un alojamiento con vista y añade una actividad VIP (boat tour privado o cena de autor) para que el destino se sienta “wow” desde el primer día.",
    "highlights": [
      "Hoteles top",
      "Experiencias",
      "Gastronomía"
    ],
    "activities": [
      "City tour",
      "Restaurantes",
      "Experiencias locales"
    ],
    "bookingLinks": [
      {
        "label": "Reservar hotel",
        "url": "https://www.booking.com/"
      },
      {
        "label": "Buscar vuelos",
        "url": "https://www.google.com/travel/flights"
      },
      {
        "label": "Airbnb (opcional)",
        "url": "https://www.airbnb.com/"
      }
    ],
    "fullName": "Djerba 🌍",
    "recommendedPlace": "Zona recomendada en Djerba",
    "includes": [
      "Vuelos ida y vuelta",
      "Hotel 4★ o 5★",
      "Traslados aeropuerto – hotel",
      "Desayunos incluidos",
      "Experiencia exclusiva local"
    ],
    "hotel": "Hotel recomendado en Luxury Escape: Luxury Collection 5★"
  },
  {
    "id": "tunez-nature",
    "name": "Sahara Gateway",
    "country": "Túnez",
    "flag": "🌍",
    "category": "nature",
    "type": "destination",
    "priceFromUSD": 5100,
    "priceModel": "per_person",
    "coords": [
      36.0065,
      9.2815
    ],
    "description": "Sahara Gateway es una elección espectacular para conectar con la naturaleza en Túnez sin perder confort. Aquí el lujo se vive distinto: paisajes inmensos, aire puro y experiencias tranquilas con alojamientos seleccionados.\\n\\nOrganiza actividades guiadas y privadas: miradores, rutas escénicas, excursiones en 4x4 o caminatas suaves con paradas fotográficas. Después, regresa a un lodge/hotel cómodo para cenar bien y descansar de verdad.\\n\\nTip: prioriza horarios temprano o al atardecer para la mejor luz y menos gente, y lleva ropa por capas para estar cómodo.",
    "highlights": [
      "Hoteles top",
      "Experiencias",
      "Gastronomía"
    ],
    "activities": [
      "City tour",
      "Restaurantes",
      "Experiencias locales"
    ],
    "bookingLinks": [
      {
        "label": "Reservar hotel",
        "url": "https://www.booking.com/"
      },
      {
        "label": "Buscar vuelos",
        "url": "https://www.google.com/travel/flights"
      },
      {
        "label": "Airbnb (opcional)",
        "url": "https://www.airbnb.com/"
      }
    ],
    "fullName": "Sahara Gateway 🌍",
    "recommendedPlace": "Zona recomendada en Sahara Gateway",
    "includes": [
      "Vuelos ida y vuelta",
      "Hotel 4★ o 5★",
      "Traslados aeropuerto – hotel",
      "Desayunos incluidos",
      "Experiencia exclusiva local"
    ],
    "hotel": "Hotel recomendado en Nature Retreat: Luxury Collection 5★"
  },
  {
    "id": "uzbekistan-capital",
    "name": "Tashkent",
    "country": "Uzbekistán",
    "flag": "🌍",
    "category": "capital",
    "type": "destination",
    "priceFromUSD": 4800,
    "priceModel": "per_person",
    "coords": [
      41.2995,
      69.2401
    ],
    "description": "Tashkent, en Uzbekistán, es una base perfecta para vivir el lado más sofisticado del destino: arquitectura icónica, barrios con personalidad, museos y una escena gastronómica que va desde cocina local auténtica hasta experiencias fine‑dining.\\n\\nEn un viaje estilo Luxury Escape, lo mejor es combinar recorridos privados por los puntos más emblemáticos con momentos de descanso en hoteles bien ubicados en zonas premium. Así puedes moverte fácil, comprar, probar restaurantes top y cerrar el día con rooftops o planes nocturnos.\\n\\nTip pro: camina temprano para ver la ciudad sin multitudes y reserva un tour privado al atardecer para fotos, vistas y una cena especial.",
    "highlights": [
      "Hoteles top",
      "Experiencias",
      "Gastronomía"
    ],
    "activities": [
      "City tour",
      "Restaurantes",
      "Experiencias locales"
    ],
    "bookingLinks": [
      {
        "label": "Reservar hotel",
        "url": "https://www.booking.com/"
      },
      {
        "label": "Buscar vuelos",
        "url": "https://www.google.com/travel/flights"
      },
      {
        "label": "Airbnb (opcional)",
        "url": "https://www.airbnb.com/"
      }
    ],
    "fullName": "Tashkent 🌍",
    "recommendedPlace": "Zona recomendada en Tashkent",
    "includes": [
      "Vuelos ida y vuelta",
      "Hotel 4★ o 5★",
      "Traslados aeropuerto – hotel",
      "Desayunos incluidos",
      "Experiencia exclusiva local"
    ],
    "hotel": "Hotel recomendado en Capital & City Lights: Luxury Collection 5★"
  },
  {
    "id": "uzbekistan-escape",
    "name": "Samarkand",
    "country": "Uzbekistán",
    "flag": "🌍",
    "category": "escape",
    "type": "destination",
    "priceFromUSD": 5200,
    "priceModel": "per_person",
    "coords": [
      42.0995,
      70.1401
    ],
    "description": "Samarkand es la definición de escapada premium en Uzbekistán: paisajes que parecen de película, ambiente relajado y opciones perfectas para desconectar sin renunciar al lujo.\\n\\nCombina días de descanso (piscina, spa, playa) con experiencias privadas: paseos en barco, snorkel/buceo, cenas frente al mar o recorridos panorámicos. El objetivo es que cada día se sienta exclusivo y sin estrés.\\n\\nRecomendación: elige un alojamiento con vista y añade una actividad VIP (boat tour privado o cena de autor) para que el destino se sienta “wow” desde el primer día.",
    "highlights": [
      "Hoteles top",
      "Experiencias",
      "Gastronomía"
    ],
    "activities": [
      "City tour",
      "Restaurantes",
      "Experiencias locales"
    ],
    "bookingLinks": [
      {
        "label": "Reservar hotel",
        "url": "https://www.booking.com/"
      },
      {
        "label": "Buscar vuelos",
        "url": "https://www.google.com/travel/flights"
      },
      {
        "label": "Airbnb (opcional)",
        "url": "https://www.airbnb.com/"
      }
    ],
    "fullName": "Samarkand 🌍",
    "recommendedPlace": "Zona recomendada en Samarkand",
    "includes": [
      "Vuelos ida y vuelta",
      "Hotel 4★ o 5★",
      "Traslados aeropuerto – hotel",
      "Desayunos incluidos",
      "Experiencia exclusiva local"
    ],
    "hotel": "Hotel recomendado en Luxury Escape: Luxury Collection 5★"
  },
  {
    "id": "uzbekistan-nature",
    "name": "Bukhara",
    "country": "Uzbekistán",
    "flag": "🌍",
    "category": "nature",
    "type": "destination",
    "priceFromUSD": 5100,
    "priceModel": "per_person",
    "coords": [
      40.4995,
      68.3401
    ],
    "description": "Bukhara es una elección espectacular para conectar con la naturaleza en Uzbekistán sin perder confort. Aquí el lujo se vive distinto: paisajes inmensos, aire puro y experiencias tranquilas con alojamientos seleccionados.\\n\\nOrganiza actividades guiadas y privadas: miradores, rutas escénicas, excursiones en 4x4 o caminatas suaves con paradas fotográficas. Después, regresa a un lodge/hotel cómodo para cenar bien y descansar de verdad.\\n\\nTip: prioriza horarios temprano o al atardecer para la mejor luz y menos gente, y lleva ropa por capas para estar cómodo.",
    "highlights": [
      "Hoteles top",
      "Experiencias",
      "Gastronomía"
    ],
    "activities": [
      "City tour",
      "Restaurantes",
      "Experiencias locales"
    ],
    "bookingLinks": [
      {
        "label": "Reservar hotel",
        "url": "https://www.booking.com/"
      },
      {
        "label": "Buscar vuelos",
        "url": "https://www.google.com/travel/flights"
      },
      {
        "label": "Airbnb (opcional)",
        "url": "https://www.airbnb.com/"
      }
    ],
    "fullName": "Bukhara 🌍",
    "recommendedPlace": "Zona recomendada en Bukhara",
    "includes": [
      "Vuelos ida y vuelta",
      "Hotel 4★ o 5★",
      "Traslados aeropuerto – hotel",
      "Desayunos incluidos",
      "Experiencia exclusiva local"
    ],
    "hotel": "Hotel recomendado en Nature Retreat: Luxury Collection 5★"
  },
  {
    "id": "bali",
    "name": "Bali",
    "country": "Indonesia",
    "flag": "🇮🇩",
    "category": "escape",
    "type": "destino",
    "priceFromUSD": 4100,
    "priceModel": "per_person",
    "coords": [
      -8.4095,
      115.1889
    ],
    "description": "Bali es el escape tropical que mezcla playas, cultura y lujo de forma natural. Puedes pasar de un beach club elegante al atardecer a templos antiguos y arrozales verdes en cuestión de minutos.\\n\\nPara un plan estilo Luxury Escape, lo ideal es quedarte en una villa con piscina privada y combinar días de relax con excursiones selectas: amanecer en miradores, spa y cenas con vista.\\n\\nTip: reparte tu viaje entre Uluwatu (playas y sunsets) y Ubud (naturaleza y cultura) para sentir dos Balís en uno.",
    "highlights": [
      "Villas",
      "Beach clubs",
      "Templos"
    ],
    "activities": [
      "Playa",
      "Relax",
      "Excursión"
    ],
    "bookingLinks": [
      {
        "label": "Reservar hotel",
        "url": "https://www.booking.com/"
      },
      {
        "label": "Buscar vuelos",
        "url": "https://www.google.com/travel/flights"
      },
      {
        "label": "Airbnb (opcional)",
        "url": "https://www.airbnb.com/"
      }
    ],
    "fullName": "Bali 🇮🇩",
    "recommendedPlace": "Uluwatu al atardecer",
    "includes": [
      "Vuelos ida y vuelta",
      "Hotel 4★ o 5★",
      "Traslados aeropuerto – hotel",
      "Desayunos incluidos",
      "Experiencia exclusiva local"
    ],
    "hotel": "Hotel recomendado en Bali: Villa 5★ con piscina"
  },
  {
    "id": "sulawesi",
    "name": "Sulawesi",
    "country": "Indonesia",
    "flag": "🇮🇩",
    "category": "nature",
    "type": "destino",
    "priceFromUSD": 3600,
    "priceModel": "per_person",
    "coords": [
      -3.6688,
      119.974
    ],
    "description": "Sulawesi es Indonesia en modo naturaleza: paisajes dramáticos, aguas cristalinas y una vibra mucho más tranquila que los destinos más masivos.\\n\\nAquí el lujo se siente más exclusivo: resorts boutique, tours privados en islas cercanas y snorkel en zonas súper limpias.\\n\\nTip: reserva una excursión en lancha a primera hora para ver la luz perfecta sobre el mar y evitar multitudes.",
    "highlights": [
      "Islas",
      "Snorkel",
      "Exclusivo"
    ],
    "activities": [
      "Naturaleza",
      "Miradores",
      "Aventura suave"
    ],
    "bookingLinks": [
      {
        "label": "Reservar hotel",
        "url": "https://www.booking.com/"
      },
      {
        "label": "Buscar vuelos",
        "url": "https://www.google.com/travel/flights"
      },
      {
        "label": "Airbnb (opcional)",
        "url": "https://www.airbnb.com/"
      }
    ],
    "fullName": "Sulawesi 🇮🇩",
    "recommendedPlace": "Tour privado en islas cercanas",
    "includes": [
      "Vuelos ida y vuelta",
      "Hotel 4★ o 5★",
      "Traslados aeropuerto – hotel",
      "Desayunos incluidos",
      "Experiencia exclusiva local"
    ],
    "hotel": "Hotel recomendado en Sulawesi: Resort boutique 5★"
  },
  {
    "id": "iceland",
    "name": "Iceland",
    "country": "Islandia",
    "flag": "🇮🇸",
    "category": "nature",
    "type": "destino",
    "priceFromUSD": 5200,
    "priceModel": "per_person",
    "coords": [
      64.9631,
      -19.0208
    ],
    "description": "Islandia es un destino cinematográfico: cascadas enormes, campos de lava, glaciares y aguas termales en medio de paisajes que parecen de otro planeta.\\n\\nEn modo Luxury Escape, lo mejor es hacerlo con road‑trip premium (conductor o auto 4x4 cómodo), hoteles boutique y paradas bien seleccionadas: lagunas termales, miradores y cenas en lugares top.\\n\\nTip: incluye al menos una noche lejos de la ciudad para ver auroras cuando es temporada.",
    "highlights": [
      "Cascadas",
      "Lagunas",
      "Paisajes"
    ],
    "activities": [
      "Naturaleza",
      "Miradores",
      "Aventura suave"
    ],
    "bookingLinks": [
      {
        "label": "Reservar hotel",
        "url": "https://www.booking.com/"
      },
      {
        "label": "Buscar vuelos",
        "url": "https://www.google.com/travel/flights"
      },
      {
        "label": "Airbnb (opcional)",
        "url": "https://www.airbnb.com/"
      }
    ],
    "fullName": "Iceland 🇮🇸",
    "recommendedPlace": "Laguna termal + miradores",
    "includes": [
      "Vuelos ida y vuelta",
      "Hotel 4★ o 5★",
      "Traslados aeropuerto – hotel",
      "Desayunos incluidos",
      "Experiencia exclusiva local"
    ],
    "hotel": "Hotel recomendado en Islandia: Lodge boutique 4★/5★"
  },
  {
    "id": "maldives",
    "name": "Maldives",
    "country": "Maldivas",
    "flag": "🇲🇻",
    "category": "escape",
    "type": "destino",
    "priceFromUSD": 7800,
    "priceModel": "per_person",
    "coords": [
      3.2028,
      73.2207
    ],
    "description": "Maldivas es el lujo puro en el agua: villas sobre el mar, arena blanca, privacidad y un ritmo lento perfecto para desconectar.\\n\\nLa experiencia se eleva con extras simples: desayuno flotante, masaje frente al océano y una cena privada al atardecer.\\n\\nTip: elige una villa con acceso directo al mar y reserva una excursión de snorkel en arrecife temprano.",
    "highlights": [
      "Overwater villas",
      "Privacidad",
      "Snorkel"
    ],
    "activities": [
      "Playa",
      "Relax",
      "Excursión"
    ],
    "bookingLinks": [
      {
        "label": "Reservar hotel",
        "url": "https://www.booking.com/"
      },
      {
        "label": "Buscar vuelos",
        "url": "https://www.google.com/travel/flights"
      },
      {
        "label": "Airbnb (opcional)",
        "url": "https://www.airbnb.com/"
      }
    ],
    "fullName": "Maldives 🇲🇻",
    "recommendedPlace": "Villa overwater al atardecer",
    "includes": [
      "Vuelos ida y vuelta",
      "Hotel 4★ o 5★",
      "Traslados aeropuerto – hotel",
      "Desayunos incluidos",
      "Experiencia exclusiva local"
    ],
    "hotel": "Hotel recomendado en Maldivas: Resort 5★ overwater"
  },
  {
    "id": "queenstown",
    "name": "Queenstown",
    "country": "Nueva Zelanda",
    "flag": "🇳🇿",
    "category": "escape",
    "type": "destino",
    "priceFromUSD": 5900,
    "priceModel": "per_person",
    "coords": [
      -45.0312,
      168.6626
    ],
    "description": "Queenstown es aventura con estilo: montañas, lagos y actividades premium, pero con una vibra elegante y relajada.\\n\\nPuedes combinar paseos panorámicos, wine tasting, y experiencias icónicas (teleférico, miradores, cruceros por el lago) sin sentirlo agotador.\\n\\nTip: reserva un lodge con vista al lago para que el destino se sienta de lujo desde que abres la ventana.",
    "highlights": [
      "Lago",
      "Montañas",
      "Wine"
    ],
    "activities": [
      "Playa",
      "Relax",
      "Excursión"
    ],
    "bookingLinks": [
      {
        "label": "Reservar hotel",
        "url": "https://www.booking.com/"
      },
      {
        "label": "Buscar vuelos",
        "url": "https://www.google.com/travel/flights"
      },
      {
        "label": "Airbnb (opcional)",
        "url": "https://www.airbnb.com/"
      }
    ],
    "fullName": "Queenstown 🇳🇿",
    "recommendedPlace": "Lodge con vista al lago",
    "includes": [
      "Vuelos ida y vuelta",
      "Hotel 4★ o 5★",
      "Traslados aeropuerto – hotel",
      "Desayunos incluidos",
      "Experiencia exclusiva local"
    ],
    "hotel": "Hotel recomendado en Queenstown: Lodge 5★"
  },
  {
    "id": "borabora",
    "name": "Bora Bora",
    "country": "Polinesia Francesa",
    "flag": "🇵🇫",
    "category": "escape",
    "type": "destino",
    "priceFromUSD": 8500,
    "priceModel": "per_person",
    "coords": [
      -16.5004,
      -151.7415
    ],
    "description": "Bora Bora es el clásico del lujo tropical: laguna turquesa, bungalows sobre el agua y una sensación de “isla perfecta”.\\n\\nLa clave está en el equilibrio: mañanas tranquilas, snorkel privado en la laguna y noches con cena frente al mar.\\n\\nTip: paga por una villa con vista al Monte Otemanu — cambia completamente la experiencia.",
    "highlights": [
      "Laguna",
      "Bungalows",
      "Romántico"
    ],
    "activities": [
      "Playa",
      "Relax",
      "Excursión"
    ],
    "bookingLinks": [
      {
        "label": "Reservar hotel",
        "url": "https://www.booking.com/"
      },
      {
        "label": "Buscar vuelos",
        "url": "https://www.google.com/travel/flights"
      },
      {
        "label": "Airbnb (opcional)",
        "url": "https://www.airbnb.com/"
      }
    ],
    "fullName": "Bora Bora 🇵🇫",
    "recommendedPlace": "Snorkel privado en la laguna",
    "includes": [
      "Vuelos ida y vuelta",
      "Hotel 4★ o 5★",
      "Traslados aeropuerto – hotel",
      "Desayunos incluidos",
      "Experiencia exclusiva local"
    ],
    "hotel": "Hotel recomendado en Bora Bora: Overwater bungalow 5★"
  },
  {
    "id": "seychelles",
    "name": "Seychelles",
    "country": "Seychelles",
    "flag": "🇸🇨",
    "category": "escape",
    "type": "destino",
    "priceFromUSD": 7600,
    "priceModel": "per_person",
    "coords": [
      -4.6796,
      55.492
    ],
    "description": "Seychelles combina playas súper fotogénicas con un ambiente exclusivo y más ‘secreto’ que otros destinos tropicales.\\n\\nEn un viaje premium, lo ideal es elegir una isla base con hotel 5★ y hacer day‑trips en barco a calas y miradores.\\n\\nTip: reserva una excursión en catamarán para explorar varias islas en un solo día.",
    "highlights": [
      "Playas",
      "Islas",
      "Exclusivo"
    ],
    "activities": [
      "Playa",
      "Relax",
      "Excursión"
    ],
    "bookingLinks": [
      {
        "label": "Reservar hotel",
        "url": "https://www.booking.com/"
      },
      {
        "label": "Buscar vuelos",
        "url": "https://www.google.com/travel/flights"
      },
      {
        "label": "Airbnb (opcional)",
        "url": "https://www.airbnb.com/"
      }
    ],
    "fullName": "Seychelles 🇸🇨",
    "recommendedPlace": "Catamarán a calas escondidas",
    "includes": [
      "Vuelos ida y vuelta",
      "Hotel 4★ o 5★",
      "Traslados aeropuerto – hotel",
      "Desayunos incluidos",
      "Experiencia exclusiva local"
    ],
    "hotel": "Hotel recomendado en Seychelles: Resort 5★ frente al mar"
  },
  {
    "id": "singapore",
    "name": "Singapore",
    "country": "Singapur",
    "flag": "🇸🇬",
    "category": "ciudad",
    "type": "destino",
    "priceFromUSD": 4800,
    "priceModel": "per_person",
    "coords": [
      1.3521,
      103.8198
    ],
    "description": "Singapur es una ciudad ultra moderna y segura, perfecta para un viaje elegante: skyline, shopping, rooftops y gastronomía de nivel mundial.\\n\\nLo mejor es quedarte en zona central, recorrer Gardens by the Bay, Marina Bay y cerrar con un rooftop o un restaurante top.\\n\\nTip: ve al atardecer a Marina Bay para fotos y una cena con vistas.",
    "highlights": [
      "Skyline",
      "Gastronomía",
      "Rooftops"
    ],
    "activities": [
      "Tour guiado",
      "Gastronomía",
      "Experiencia local"
    ],
    "bookingLinks": [
      {
        "label": "Reservar hotel",
        "url": "https://www.booking.com/"
      },
      {
        "label": "Buscar vuelos",
        "url": "https://www.google.com/travel/flights"
      },
      {
        "label": "Airbnb (opcional)",
        "url": "https://www.airbnb.com/"
      }
    ],
    "fullName": "Singapore 🇸🇬",
    "recommendedPlace": "Marina Bay al atardecer",
    "includes": [
      "Vuelos ida y vuelta",
      "Hotel 4★ o 5★",
      "Traslados aeropuerto – hotel",
      "Desayunos incluidos",
      "Experiencia exclusiva local"
    ],
    "hotel": "Hotel recomendado en Singapur: Hotel 5★ en Marina Bay"
  },
  {
    "id": "swissalps",
    "name": "Swiss Alps",
    "country": "Suiza",
    "flag": "🇨🇭",
    "category": "nature",
    "type": "destino",
    "priceFromUSD": 6400,
    "priceModel": "per_person",
    "coords": [
      46.8182,
      8.2275
    ],
    "description": "Los Alpes suizos son el lujo de la naturaleza: aire limpio, vistas infinitas y pueblos que parecen de postal.\\n\\nEn versión premium, la experiencia ideal incluye trenes panorámicos, hoteles tipo chalet con spa y rutas cortas para miradores.\\n\\nTip: elige un hotel con spa y terraza para disfrutar las vistas sin moverte demasiado.",
    "highlights": [
      "Montañas",
      "Trenes",
      "Chalets"
    ],
    "activities": [
      "Naturaleza",
      "Miradores",
      "Aventura suave"
    ],
    "bookingLinks": [
      {
        "label": "Reservar hotel",
        "url": "https://www.booking.com/"
      },
      {
        "label": "Buscar vuelos",
        "url": "https://www.google.com/travel/flights"
      },
      {
        "label": "Airbnb (opcional)",
        "url": "https://www.airbnb.com/"
      }
    ],
    "fullName": "Swiss Alps 🇨🇭",
    "recommendedPlace": "Tren panorámico + spa",
    "includes": [
      "Vuelos ida y vuelta",
      "Hotel 4★ o 5★",
      "Traslados aeropuerto – hotel",
      "Desayunos incluidos",
      "Experiencia exclusiva local"
    ],
    "hotel": "Hotel recomendado en Suiza: Chalet 5★ con spa"
  },
  {
    "id": "zanzibar",
    "name": "Zanzibar",
    "country": "Tanzania",
    "flag": "🇹🇿",
    "category": "escape",
    "type": "destino",
    "priceFromUSD": 5200,
    "priceModel": "per_person",
    "coords": [
      -6.1659,
      39.2026
    ],
    "description": "Zanzíbar es un escape de playa con personalidad: aguas cálidas, arenas blancas y un toque cultural único.\\n\\nUn plan Luxury Escape combina resort frente al mar, day‑trips en barco y al menos una visita a Stone Town para sentir la historia.\\n\\nTip: reserva una cena privada en la playa y un tour en barco al atardecer.",
    "highlights": [
      "Playas",
      "Barco",
      "Cultura"
    ],
    "activities": [
      "Playa",
      "Relax",
      "Excursión"
    ],
    "bookingLinks": [
      {
        "label": "Reservar hotel",
        "url": "https://www.booking.com/"
      },
      {
        "label": "Buscar vuelos",
        "url": "https://www.google.com/travel/flights"
      },
      {
        "label": "Airbnb (opcional)",
        "url": "https://www.airbnb.com/"
      }
    ],
    "fullName": "Zanzibar 🇹🇿",
    "recommendedPlace": "Sunset boat + cena privada",
    "includes": [
      "Vuelos ida y vuelta",
      "Hotel 4★ o 5★",
      "Traslados aeropuerto – hotel",
      "Desayunos incluidos",
      "Experiencia exclusiva local"
    ],
    "hotel": "Hotel recomendado en Zanzíbar: Resort 5★ frente al mar"
  }
];
