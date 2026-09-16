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
    id: "tomatina-tv",
    url: "https://www.instagram.com/gelateria.al.bacio.es/",
    image: "/images/instagram/post_1.jpg",
    caption: {
      ca: "🍅 ¡La Tomatina, ara també en gelat! Gràcies a RTVE, Telecinco i Agència EFE per visitar el nostre obrador a Bunyol i donar a conèixer aquest homenatge gastronòmic.",
      es: "🍅 ¡La Tomatina, ahora también en helado! Gracias a RTVE, Telecinco y Agencia EFE por visitar nuestro obrador en Buñol y dar a conocer este homenaje gastronómico."
    },
    tag: {
      ca: "Edició Especial Tomatina",
      es: "Edición Especial Tomatina"
    },
    likes: 342,
    comments: 28,
    date: {
      ca: "Agost 2026",
      es: "Agosto 2026"
    }
  },
  {
    id: "vitrina-tomatina",
    url: "https://www.instagram.com/gelateria.al.bacio.es/",
    image: "/images/instagram/post_2.jpg",
    caption: {
      ca: "✨ La vitrina d'Al Bacio a punt amb el cartell artesà 'La Tomatina 🍅'. Ingredients 100% de proximitat per a celebrar la festa del nostre poble.",
      es: "✨ La vitrina de Al Bacio lista con el cartel artesano 'La Tomatina 🍅'. Ingredientes 100% de proximidad para celebrar la fiesta de nuestro pueblo."
    },
    tag: {
      ca: "La Vitrina d'Al Bacio",
      es: "La Vitrina de Al Bacio"
    },
    likes: 289,
    comments: 19,
    date: {
      ca: "Agost 2026",
      es: "Agosto 2026"
    }
  },
  {
    id: "cucurucho-artesano",
    url: "https://www.instagram.com/gelateria.al.bacio.es/",
    image: "/images/instagram/post_3.jpg",
    caption: {
      ca: "🍦 Cucurutxos artesans fets al moment, cruixents i mantecats amb passió italiana. Quin sabor tries hui per a passejar per Bunyol?",
      es: "🍦 Cucuruchos artesanos hechos al momento, crujientes y mantecados con pasión italiana. ¿Qué sabor eliges hoy para pasear por Buñol?"
    },
    tag: {
      ca: "Cucurutxo Artesà",
      es: "Cucurucho Artesano"
    },
    likes: 234,
    comments: 15,
    date: {
      ca: "Juliol 2026",
      es: "Julio 2026"
    }
  },
  {
    id: "pistacchio-greco",
    url: "https://www.instagram.com/gelateria.al.bacio.es/",
    image: "/images/instagram/post_4.jpg",
    caption: {
      ca: "💚 Pistacchio pur de selecció grega Leagel: torrat intens, un pessic de sal marina i sabor pur que conquesta des de la primera cullerada.",
      es: "💚 Pistacho puro de selección griega Leagel: tostado intenso, una pizca de sal marina y sabor puro que conquista desde la primera cucharada."
    },
    tag: {
      ca: "Selecció Leagel",
      es: "Selección Leagel"
    },
    likes: 312,
    comments: 26,
    date: {
      ca: "Juliol 2026",
      es: "Julio 2026"
    }
  },
  {
    id: "dulce-de-leche-baltar",
    url: "https://www.instagram.com/gelateria.al.bacio.es/",
    image: "/images/instagram/post_5.jpg",
    caption: {
      ca: "🍨 Molt orgullosos de la nostra col·laboració amb @casabaltar! Autèntic 'Dulce de Leche' artesanal elaborat amb llet fresca de pastura de Galícia.",
      es: "🍨 ¡Muy orgullosos de nuestra colaboración con @casabaltar! Auténtico 'Dulce de Leche' artesanal elaborado con leche fresca de pasto de Galicia."
    },
    tag: {
      ca: "Col·laboració Casa Baltar",
      es: "Colaboración Casa Baltar"
    },
    likes: 275,
    comments: 21,
    date: {
      ca: "Juliol 2026",
      es: "Julio 2026"
    }
  },
  {
    id: "mascarpone-amarena",
    url: "https://www.instagram.com/gelateria.al.bacio.es/",
    image: "/images/instagram/post_6.jpg",
    caption: {
      ca: "🍒 Mascarpone fresc vellutat i cireres silvestres amarena: el clàssic que mai falla a la nostra vitrina.",
      es: "🍒 Mascarpone fresco aterciopelado y cerezas silvestres amarena: el clásico que nunca falla en nuestra vitrina."
    },
    tag: {
      ca: "Tradició Italiana",
      es: "Tradición Italiana"
    },
    likes: 198,
    comments: 13,
    date: {
      ca: "Juny 2026",
      es: "Junio 2026"
    }
  },
  {
    id: "caffe-especialitat",
    url: "https://www.instagram.com/gelateria.al.bacio.es/",
    image: "/images/instagram/post_7.jpg",
    caption: {
      ca: "☕ Cafè espresso d'especialitat infusionat directament en el nostre mantecat: intensitat, aroma i cremositat a la terrassa d'Al Bacio.",
      es: "☕ Café espresso de especialidad infusionado directamente en nuestro mantecado: intensidad, aroma y cremosidad en la terraza de Al Bacio."
    },
    tag: {
      ca: "Cafè d'Especialitat",
      es: "Café de Especialidad"
    },
    likes: 187,
    comments: 11,
    date: {
      ca: "Maig 2026",
      es: "Mayo 2026"
    }
  },
  {
    id: "crema-oreo",
    url: "https://www.instagram.com/gelateria.al.bacio.es/",
    image: "/images/instagram/post_8.jpg",
    caption: {
      ca: "🍪 Crema artesana suau amb abundants trossos de galeta Oreo cruixent. Un dels favorits indiscutibles de xiquets i adults a Bunyol!",
      es: "🍪 Crema artesana suave con abundantes trozos de galleta Oreo crujiente. ¡Uno de los favoritos indiscutibles de niños y adultos en Buñol!"
    },
    tag: {
      ca: "Especials d'Obrador",
      es: "Especiales del Obrador"
    },
    likes: 256,
    comments: 18,
    date: {
      ca: "Maig 2026",
      es: "Mayo 2026"
    }
  }
];
