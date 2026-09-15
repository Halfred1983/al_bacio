export const products = [
  // 1. PISTACCHIO
  {
    id: "pistacchio",
    category: "cremes",
    name: {
      ca: "Pistacchio Selecció Grega Leagel",
      es: "Pistacchio Selección Griega Leagel"
    },
    desc: {
      ca: "Extraordinària selecció de pistatxos d'origen grec de Leagel. Una pasta pura amb un pessic de sal per a exaltar-ne el sabor i una punta de clorofil·la per al seu verd brillant. Torrats lentament als laboratoris Leagel, refinats i conservats en la seua màxima puresa.",
      es: "Extraordinaria selección de pistachos de origen griego de Leagel. Una pasta pura con una pizca de sal para realzar su sabor y una punta de clorofila para su verde brillante. Tostados lentamente en los laboratorios Leagel, refinados y conservados en su máxima pureza."
    },
    dietary: ["senseGluten"],
    image: "/images/gelato/pistacchio.jpg",
    badge: {
      ca: "Selecció Leagel",
      es: "Selección Leagel"
    }
  },

  // 2. CAFFÈ
  {
    id: "caffe",
    category: "cremes",
    name: {
      ca: "Caffè Espresso d'Especialitat",
      es: "Caffè Espresso de Especialidad"
    },
    desc: {
      ca: "Elaborat amb una cuidada selecció de grans de cafè d'especialitat acabats de moldre. Infusió cremosa, intensa i aromàtica, coronada amb grans de cafè torrats per a un sabor profund i autèntic.",
      es: "Elaborado con una cuidada selección de granos de café de especialidad recién molidos. Infusión cremosa, intensa y aromática, coronada con granos de café tostados para un sabor profundo y auténtico."
    },
    dietary: ["senseGluten"],
    image: "/images/gelato/caffe.jpg",
    badge: {
      ca: "Cafè d'Especialitat",
      es: "Café de Especialidad"
    }
  },

  // 3. DULCE DE LECHE CON DULCE DE LECHE BALTAR
  {
    id: "dulce-de-leche",
    category: "especials",
    name: {
      ca: "Dulce de Leche Casa Baltar",
      es: "Dulce de Leche Casa Baltar"
    },
    desc: {
      ca: "Col·laboració artesanal amb Casa Baltar (Galícia). Gelat cremós vetejat amb el seu autèntic dulce de leche elaborat a foc lent amb un 80% de llet fresca de la seua pròpia ramaderia seguint la recepta tradicional uruguaiana.",
      es: "Colaboración artesanal con Casa Baltar (Galicia). Helado cremoso veteado con su auténtico dulce de leche elaborado a fuego lento con un 80% de leche fresca de su propia ganadería siguiendo la receta tradicional uruguaya."
    },
    dietary: ["senseGluten", "proximitat"],
    image: "/images/gelato/dulce_de_leche.jpg",
    badge: {
      ca: "Casa Baltar",
      es: "Casa Baltar"
    }
  },

  // 4. OREO
  {
    id: "oreo",
    category: "especials",
    name: {
      ca: "Crema de Galetes Oreo",
      es: "Crema de Galletas Oreo"
    },
    desc: {
      ca: "Cremosa base de fior di latte i vainilla amb generosos trossos de galeta Oreo cruixent i un intens vetejat de xocolata negra. El favorit dels més llaminers.",
      es: "Cremosa base de fior di latte y vainilla con generosos trozos de galleta Oreo crujiente y un intenso veteado de chocolate negro. El favorito de los más golosos."
    },
    dietary: [],
    image: "/images/gelato/oreo.jpg",
    badge: {
      ca: "Cruixent",
      es: "Crujiente"
    }
  },

  // 5. MASCARPONE E AMARENA
  {
    id: "mascarpone-amarena",
    category: "especials",
    name: {
      ca: "Mascarpone & Amarena",
      es: "Mascarpone & Amarena"
    },
    desc: {
      ca: "Clàssic aristocràtic de la tradició italiana: autèntic formatge mascarpone fresc d'indiscutible cremositat, contrastat amb un generós vetejat de cireres silvestres amarena confitades en el seu almívar.",
      es: "Clásico aristocrático de la tradición italiana: auténtico queso mascarpone fresco de indiscutible cremosidad, contrastado con un generoso veteado de cerezas silvestres amarena confitadas en su almíbar."
    },
    dietary: ["senseGluten"],
    image: "/images/gelato/mascarpone_amarena.jpg",
    badge: {
      ca: "Tradició Italiana",
      es: "Tradición Italiana"
    }
  },

  // 6. LECHE MERENGADA
  {
    id: "leche-merengada",
    category: "especials",
    name: {
      ca: "Llet Merengada Tradicional",
      es: "Leche Merengada Tradicional"
    },
    desc: {
      ca: "Un gran clàssic de la nostra cultura: llet fresca infusionada amb canella en branca de Ceilan i pell de llima mediterrània, combinada amb merengue artesanal i empolvorada amb canyella.",
      es: "Un gran clásico de nuestra cultura: leche fresca infusionada con canela en rama de Ceilán y piel de limón mediterráneo, combinada con merengue artesanal y espolvoreada con canela."
    },
    dietary: ["senseGluten"],
    image: "/images/gelato/leche_merengada.jpg",
    badge: {
      ca: "Clàssic Tradicional",
      es: "Clásico Tradicional"
    }
  },

  // 7. TURRÓN
  {
    id: "turron",
    category: "especials",
    name: {
      ca: "Torró de Xixona Artesà",
      es: "Turrón de Jijona Artesano"
    },
    desc: {
      ca: "Homenatge al dolç més emblemàtic de la nostra terra: elaborat amb autèntic torró de Xixona de qualitat suprema, ametles marcones torrades a l'obrador i un toc de mel de flor de taronger.",
      es: "Homenaje al dulce más emblemático de nuestra tierra: elaborado con auténtico turrón de Jijona de calidad suprema, almendras marconas tostadas en el obrador y un toque de miel de azahar."
    },
    dietary: ["senseGluten", "proximitat"],
    image: "/images/gelato/turron.jpg",
    badge: {
      ca: "De la Terra",
      es: "De la Tierra"
    }
  },

  // 8. NOCCIOLA
  {
    id: "nocciola",
    category: "cremes",
    name: {
      ca: "Nocciola Pura Italiana",
      es: "Nocciola Pura Italiana"
    },
    desc: {
      ca: "Elaborat amb pasta pura d'avellanes italianes de torrat marcat. Es caracteritza pel seu color intens, aroma inconfusible i sabor decidit per a un gelat amb molt de cos i caràcter.",
      es: "Elaborado con pasta pura de avellanas italianas de tostado marcado. Se caracteriza por su color intenso, aroma inconfundible y sabor decidido para un helado con mucho cuerpo y carácter."
    },
    dietary: ["senseGluten"],
    image: "/images/gelato/nocciola.jpg",
    badge: {
      ca: "Torrat Marcat",
      es: "Tostado Marcado"
    }
  },

  // 9. CIOCCOLATO AL LATTE
  {
    id: "cioccolato-al-latte",
    category: "cremes",
    name: {
      ca: "Cioccolato al Latte Cremós",
      es: "Cioccolato al Latte Cremoso"
    },
    desc: {
      ca: "L'harmonia perfecta entre cacau seleccionat i la riquesa de la llet sencera fresca. De textura vellutada, sabor rodó i dolçor equilibrada que captiva des de la primera cullerada.",
      es: "La armonía perfecta entre cacao seleccionado y la riqueza de la leche entera fresca. De textura aterciopelada, sabor redondo y dulzor equilibrado que cautiva desde la primera cucharada."
    },
    dietary: ["senseGluten"],
    image: "/images/gelato/cioccolato_al_latte.jpg",
    badge: {
      ca: "Cremós & Suau",
      es: "Cremoso & Suave"
    }
  }
];

export const instagramPosts = [
  {
    id: "C_Hq7gMtL5r",
    url: "https://www.instagram.com/p/C_Hq7gMtL5r/",
    image: "/images/gelato/instagram_1.jpg",
    caption: {
      ca: "🍅 ¡La Tomatina, ara també en gelat! Gràcies a @apunt_media per visitar-nos i donar veu al nostre gelat dedicat a Bunyol.",
      es: "🍅 ¡La Tomatina, ahora también en helado! Gracias a @apunt_media por visitarnos y dar voz a nuestro nuevo helado dedicado a Buñol."
    },
    tag: {
      ca: "À Punt Mèdia · Tomatina",
      es: "À Punt Mèdia · Tomatina"
    },
    date: {
      ca: "Agost 2026",
      es: "Agosto 2026"
    }
  },
  {
    id: "C9k6YwNtM_z",
    url: "https://www.instagram.com/p/C9k6YwNtM_z/",
    image: "/images/gelato/instagram_2.jpg",
    caption: {
      ca: "🍨 Molt orgullosos d'anunciar la col·laboració amb @casabaltar! El millor 'Dulce de Leche' amb llet fresca de les praderies de Galícia.",
      es: "🍨 ¡Muy orgullosos de anunciar la colaboración con @casabaltar! El mejor 'Dulce de Leche' con leche fresca de las praderas de Galicia."
    },
    tag: {
      ca: "Col·laboració Casa Baltar",
      es: "Colaboración Casa Baltar"
    },
    date: {
      ca: "Juliol 2026",
      es: "Julio 2026"
    }
  },
  {
    id: "C7ZE3QptS4o",
    url: "https://www.instagram.com/p/C7ZE3QptS4o/",
    image: "/images/gelato/instagram_3.jpg",
    caption: {
      ca: "🍦 Arriba a la nostra carta el nou iogurt gelat artesà: natural, fresc i combinat amb la teua crema o guarnició favorita.",
      es: "🍦 Llega a nuestra carta el nuevo yogur helado artesano: natural, fresco y combinado con tu crema o guarnición favorita."
    },
    tag: {
      ca: "Iogurt Gelat Artesà",
      es: "Yogur Helado Artesano"
    },
    date: {
      ca: "Maig 2026",
      es: "Mayo 2026"
    }
  },
  {
    id: "C-aK__UNbXg",
    url: "https://www.instagram.com/p/C-aK__UNbXg/",
    image: "/images/gelato/instagram_4.jpg",
    caption: {
      ca: "☕ Gelat artesanal italià, cafè d'especialitat, orxata, granissats i terrassa a l'Av. de la Música, 12 a Bunyol.",
      es: "☕ Helado artesanal italiano, café de especialidad, horchata, granizados y terraza en Av. de la Música, 12 en Buñol."
    },
    tag: {
      ca: "Terrassa a Bunyol",
      es: "Terraza en Buñol"
    },
    date: {
      ca: "Juny 2026",
      es: "Junio 2026"
    }
  }
];
