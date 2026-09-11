export const products = [
  // CREMES CLÀSSIQUES
  {
    id: "pistacchio",
    category: "creams",
    name: {
      ca: "Pistacchio Puro di Sicilia",
      es: "Pistacchio Puro de Sicilia"
    },
    tagline: {
      ca: "El rei de la nostra vitrina. 100% gra de pistatxo torrat a foc lent.",
      es: "El rey de nuestra vitrina. 100% grano de pistacho tostado a fuego lento."
    },
    dietary: ["glutenFree"],
    image: "https://images.unsplash.com/photo-1560008581-09826d1de69e?auto=format&fit=crop&w=800&q=80",
    tags: ["top", "traditional", "indulgent"],
    origin: "Bronte, Sicília"
  },
  {
    id: "bacio-cioccolato",
    category: "creams",
    name: {
      ca: "Bacio Artigianale",
      es: "Bacio Artesanal"
    },
    tagline: {
      ca: "Cacau noble i pasta d'avellana de Piemont amb trossos d'avellana cruixent.",
      es: "Cacao noble y pasta de avellana de Piamonte con tropezones de avellana tostada."
    },
    dietary: ["glutenFree"],
    image: "https://images.unsplash.com/photo-1570197788417-0e82375c9371?auto=format&fit=crop&w=800&q=80",
    tags: ["signature", "indulgent", "traditional"],
    origin: "Recepta exclusiva Al Bacio"
  },
  {
    id: "dulce-de-leche",
    category: "creams",
    name: {
      ca: "Dulce de Leche Casa Baltar",
      es: "Dulce de Leche Casa Baltar"
    },
    tagline: {
      ca: "Col·laboració especial amb Casa Baltar. Llet fresca de les praderies d'Astúries.",
      es: "Colaboración especial con Casa Baltar. Leche fresca de las praderas asturianas."
    },
    dietary: ["glutenFree", "local"],
    image: "https://images.unsplash.com/photo-1580915411954-282cb1b0d780?auto=format&fit=crop&w=800&q=80",
    tags: ["collab", "indulgent"],
    origin: "Astúries / Obrador Bunyol"
  },
  {
    id: "fior-di-latte",
    category: "creams",
    name: {
      ca: "Fior di Latte Tradizionale",
      es: "Fior di Latte Tradicional"
    },
    tagline: {
      ca: "La puresa de la bona llet sencera i nata fresca. La prova de foc del mestre gelater.",
      es: "La pureza de la buena leche entera y nata fresca. La prueba de fuego del maestro heladero."
    },
    dietary: ["glutenFree"],
    image: "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?auto=format&fit=crop&w=800&q=80",
    tags: ["traditional", "fresh"],
    origin: "Llet de granges seleccionades"
  },
  {
    id: "stracciatella",
    category: "creams",
    name: {
      ca: "Stracciatella alla Romana",
      es: "Stracciatella a la Romana"
    },
    tagline: {
      ca: "Base de crema suau amb fils de xocolata negra fosa que cruixen a la boca.",
      es: "Base de crema suave con hilos de chocolate negro fundido que crujen al contacto."
    },
    dietary: ["glutenFree"],
    image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=800&q=80",
    tags: ["traditional", "indulgent"],
    origin: "Tradició de Bèrgam"
  },
  {
    id: "crema-valenciana",
    category: "creams",
    name: {
      ca: "Crema Valenciana amb Xufa i Canyella",
      es: "Crema Valenciana con Chufa y Canela"
    },
    tagline: {
      ca: "Fusió de la tradició italiana amb la xufa de l'Horta i un toc de cítrics i canyella.",
      es: "Fusión de la tradición italiana con la chufa de l'Horta y notas de cítricos y canela."
    },
    dietary: ["glutenFree", "local"],
    image: "https://images.unsplash.com/photo-1549395156-e0c1fe6fc7a5?auto=format&fit=crop&w=800&q=80",
    tags: ["local", "traditional"],
    origin: "Bunyol & Alboraya"
  },

  // SORBETS DE FRUITA (VEGANS)
  {
    id: "sorbet-llima",
    category: "sorbets",
    name: {
      ca: "Sorbet de Llima Natural",
      es: "Sorbete de Limón Natural"
    },
    tagline: {
      ca: "Elaborat amb suc de llima acabat d'esprémer. Intensitat cítrica, vibrant i digestiva.",
      es: "Elaborado con zumo de limón recién exprimido. Intensidad cítrica, vibrante y digestiva."
    },
    dietary: ["glutenFree", "vegan"],
    image: "https://images.unsplash.com/photo-1505394033641-40c6ad1178d7?auto=format&fit=crop&w=800&q=80",
    tags: ["fresh", "guiltfree"],
    origin: "Cítrics valencians"
  },
  {
    id: "sorbet-maduixa",
    category: "sorbets",
    name: {
      ca: "Sorbet de Maduixes de Proximitat",
      es: "Sorbete de Fresas de Proximidad"
    },
    tagline: {
      ca: "Pura fruita al 60%. Aroma intens i dolçor natural sense additius.",
      es: "Pura fruta al 60%. Aroma intenso y dulzor natural sin colorantes ni aditivos."
    },
    dietary: ["glutenFree", "vegan"],
    image: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?auto=format&fit=crop&w=800&q=80",
    tags: ["fresh", "guiltfree"],
    origin: "Fruita seleccionada"
  },
  {
    id: "sorbet-mango",
    category: "sorbets",
    name: {
      ca: "Sorbet de Mango Alphonso & Maracujà",
      es: "Sorbete de Mango Alphonso & Maracuyá"
    },
    tagline: {
      ca: "Textura increïblement setinada amb el contrast exòtic del maracujà fresc.",
      es: "Textura increíblemente sedosa con el contraste exótico del maracuyá fresco."
    },
    dietary: ["glutenFree", "vegan"],
    image: "https://images.unsplash.com/photo-1576506295286-5cda18df43e7?auto=format&fit=crop&w=800&q=80",
    tags: ["fresh", "adventurous"],
    origin: "Obrador Al Bacio"
  },

  // SENSE SUCRE AFEGIT
  {
    id: "sugarfree-xocolata",
    category: "sugarFree",
    name: {
      ca: "Xocolata 72% Sense Sucre Afegit",
      es: "Chocolate 72% Sin Azúcar Añadido"
    },
    tagline: {
      ca: "Tota la potència del cacau d'origen, endolcit de forma equilibrada i natural.",
      es: "Toda la potencia del cacao de origen, endulzado de forma equilibrada y natural."
    },
    dietary: ["glutenFree", "sugarFree"],
    image: "https://images.unsplash.com/photo-1549007994-cb92caebd54b?auto=format&fit=crop&w=800&q=80",
    tags: ["guiltfree", "indulgent"],
    origin: "Cacau d'origen seleccionat"
  },
  {
    id: "sugarfree-avellana",
    category: "sugarFree",
    name: {
      ca: "Avellana Piemont Sense Sucre Afegit",
      es: "Avellana Piamonte Sin Azúcar Añadido"
    },
    tagline: {
      ca: "Cremositat intacta i sabor pur a fruita seca torrada sense sucres afegits.",
      es: "Cremosidad intacta y sabor puro a fruto seco tostado sin azúcares añadidos."
    },
    dietary: ["glutenFree", "sugarFree"],
    image: "https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=800&q=80",
    tags: ["guiltfree", "traditional"],
    origin: "Piemont IGP"
  },

  // EDICIONS ESPECIALS & TOMATINA
  {
    id: "la-tomatina",
    category: "specials",
    name: {
      ca: "Gelat 'La Tomatina de Bunyol' (Edició Exclusiva)",
      es: "Helado 'La Tomatina de Buñol' (Edición Exclusiva)"
    },
    tagline: {
      ca: "Creat en homenatge a la nostra gran festa. Tomaca fresca de proximitat, suau i refrescant.",
      es: "Creado en homenaje a nuestra gran fiesta. Tomate fresco de proximidad, suave y refrescante."
    },
    dietary: ["glutenFree", "vegan", "local", "seasonal"],
    image: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=800&q=80",
    tags: ["signature", "adventurous", "local"],
    origin: "Creació d'autor Bunyol (À Punt Mèdia)"
  },
  {
    id: "turro-xixona",
    category: "specials",
    name: {
      ca: "Torró de Xixona amb Ametla Marcona",
      es: "Turrón de Jijona con Almendra Marcona"
    },
    tagline: {
      ca: "Autèntic torró artesà amb denominació d'origen i mel d'atzavara.",
      es: "Auténtico turrón artesano con denominación de origen y miel de azahar."
    },
    dietary: ["glutenFree", "local"],
    image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=800&q=80",
    tags: ["traditional", "local"],
    origin: "Jijona / Bunyol"
  },

  // FROZEN YOGURT
  {
    id: "frozen-yogurt",
    category: "yogurt",
    name: {
      ca: "Frozen Yogurt Natural Artesà",
      es: "Frozen Yogurt Natural Artesano"
    },
    tagline: {
      ca: "Iogurt fresc cremós i lleuger. Combina'l amb fruita fresca picada, cremes càlides i toppings cruixents.",
      es: "Yogur fresco cremoso y ligero. Combínalo con fruta fresca picada, cremas tibias y toppings crujientes."
    },
    dietary: ["glutenFree"],
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=800&q=80",
    tags: ["fresh", "indulgent"],
    origin: "Iogurt natural pasteuritzat"
  },

  // CAFÈ & REBOSTERIA
  {
    id: "affogato",
    category: "coffee",
    name: {
      ca: "Affogato al Caffè Espresso",
      es: "Affogato al Caffè Espresso"
    },
    tagline: {
      ca: "Bomba de fior di latte submergida en un espresso italià de torrat artesà acabat d'extraure.",
      es: "Bola de fior di latte sumergida en un espresso italiano de tueste artesanal recién extraído."
    },
    dietary: ["glutenFree"],
    image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=800&q=80",
    tags: ["traditional", "indulgent"],
    origin: "Espresso 100% Aràbica"
  },
  {
    id: "orxata-granissat",
    category: "coffee",
    name: {
      ca: "Orxata Artesana de Xufa & Granissats",
      es: "Horchata Artesana de Chufa & Granizados"
    },
    tagline: {
      ca: "Elaborada diàriament amb xufa de collita valenciana i granissats naturals de llima.",
      es: "Elaborada a diario con chufa de cosecha valenciana y granizados naturales de limón."
    },
    dietary: ["glutenFree", "vegan", "local"],
    image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80",
    tags: ["fresh", "local"],
    origin: "Xufa DO València"
  },
  {
    id: "bizcocho-casero",
    category: "coffee",
    name: {
      ca: "Bizcochos i Galetes de l'Obrador",
      es: "Bizcochos y Galletas del Obrador"
    },
    tagline: {
      ca: "Enfornats a casa per a acompanyar el teu cafè o banyar en el teu gelat favorit.",
      es: "Horneados en casa para acompañar tu café o sumergir en tu helado favorito."
    },
    dietary: ["local"],
    image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=800&q=80",
    tags: ["traditional", "indulgent"],
    origin: "Forn Al Bacio"
  }
];

export const quizMapping = {
  fresh: "sorbet-llima",
  indulgent: "bacio-cioccolato",
  traditional: "pistacchio",
  guiltfree: "sugarfree-xocolata",
  adventurous: "la-tomatina"
};
