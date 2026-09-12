export const products = [
  // CREMES CLÀSSIQUES
  {
    id: "pistacchio",
    category: "cremes",
    name: {
      ca: "Pistacchio Puro di Sicilia",
      es: "Pistacchio Puro de Sicilia"
    },
    desc: {
      ca: "100% gra de pistatxo de Sicília torrat a foc lent. Textura sedosa i sabor intens.",
      es: "100% grano de pistacho de Sicilia tostado a fuego lento. Textura sedosa y sabor intenso."
    },
    dietary: ["senseGluten"],
    image: "https://images.unsplash.com/photo-1560008581-09826d1de69e?auto=format&fit=crop&w=1000&q=85",
    badge: {
      ca: "El Clàssic",
      es: "El Clásico"
    }
  },
  {
    id: "bacio",
    category: "cremes",
    name: {
      ca: "Bacio Artigianale",
      es: "Bacio Artesanal"
    },
    desc: {
      ca: "Xocolata noble amb pasta pura d'avellana de Piemont i trossos d'avellana cruixent.",
      es: "Chocolate noble con pasta pura de avellana de Piamonte y trozos de avellana crujiente."
    },
    dietary: ["senseGluten"],
    image: "https://images.unsplash.com/photo-1570197788417-0e82375c9371?auto=format&fit=crop&w=1000&q=85",
    badge: {
      ca: "Especialitat Al Bacio",
      es: "Especialidad Al Bacio"
    }
  },
  {
    id: "dulce-de-leche",
    category: "cremes",
    name: {
      ca: "Dulce de Leche Casa Baltar",
      es: "Dulce de Leche Casa Baltar"
    },
    desc: {
      ca: "Col·laboració exclusiva amb Casa Baltar. Elaborat amb llet fresca de les praderies d'Astúries.",
      es: "Colaboración exclusiva con Casa Baltar. Elaborado con leche fresca de las praderas de Asturias."
    },
    dietary: ["senseGluten", "proximitat"],
    image: "https://images.unsplash.com/photo-1580915411954-282cb1b0d780?auto=format&fit=crop&w=1000&q=85",
    badge: {
      ca: "Casa Baltar",
      es: "Casa Baltar"
    }
  },
  {
    id: "fior-di-latte",
    category: "cremes",
    name: {
      ca: "Fior di Latte Tradizionale",
      es: "Fior di Latte Tradicional"
    },
    desc: {
      ca: "La puresa de la llet sencera fresca i la nata. El sabor més net de la tradició italiana.",
      es: "La pureza de la leche entera fresca y la nata. El sabor más limpio de la tradición italiana."
    },
    dietary: ["senseGluten"],
    image: "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?auto=format&fit=crop&w=1000&q=85",
    badge: {
      ca: "Pura Llet",
      es: "Pura Leche"
    }
  },
  {
    id: "stracciatella",
    category: "cremes",
    name: {
      ca: "Stracciatella alla Romana",
      es: "Stracciatella a la Romana"
    },
    desc: {
      ca: "Base cremosa de fior di latte amb fils de xocolata negra cruixent fosa a mà.",
      es: "Base cremosa de fior di latte con hilos de chocolate negro crujiente fundido a mano."
    },
    dietary: ["senseGluten"],
    image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=1000&q=85",
    badge: {
      ca: "Tradicional",
      es: "Tradicional"
    }
  },

  // SORBETS DE FRUITA
  {
    id: "sorbet-llima",
    category: "sorbets",
    name: {
      ca: "Sorbet de Llima Natural",
      es: "Sorbete de Limón Natural"
    },
    desc: {
      ca: "Elaborat amb suc de llima natural espremut al dia. Refrescant, viu i digestiu.",
      es: "Elaborado con zumo de limón natural exprimido al día. Refrescante, vivo y digestivo."
    },
    dietary: ["senseGluten", "vegat"],
    image: "https://images.unsplash.com/photo-1505394033641-40c6ad1178d7?auto=format&fit=crop&w=1000&q=85",
    badge: {
      ca: "100% Fruita",
      es: "100% Fruta"
    }
  },
  {
    id: "sorbet-maduixa",
    category: "sorbets",
    name: {
      ca: "Sorbet de Maduixes Fresques",
      es: "Sorbete de Fresas Frescas"
    },
    desc: {
      ca: "Altíssim percentatge de fruita seleccionada. Dolçor natural sense colorants ni conservants.",
      es: "Altísimo porcentaje de fruta seleccionada. Dulzor natural sin colorantes ni conservantes."
    },
    dietary: ["senseGluten", "vegat"],
    image: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?auto=format&fit=crop&w=1000&q=85",
    badge: {
      ca: "100% Vegà",
      es: "100% Vegano"
    }
  },
  {
    id: "sorbet-mango",
    category: "sorbets",
    name: {
      ca: "Sorbet de Mango & Maracujà",
      es: "Sorbete de Mango & Maracuyá"
    },
    desc: {
      ca: "Textura increïblement suau amb el contrast vibrant del maracujà fresc.",
      es: "Textura increíblemente suave con el contraste vibrante del maracuyá fresco."
    },
    dietary: ["senseGluten", "vegat"],
    image: "https://images.unsplash.com/photo-1576506295286-5cda18df43e7?auto=format&fit=crop&w=1000&q=85",
    badge: {
      ca: "Exòtic",
      es: "Exótico"
    }
  },

  // SENSE SUCRE AFEGIT
  {
    id: "xocolata-sense-sucre",
    category: "senseSucre",
    name: {
      ca: "Xocolata 72% Sense Sucre Afegit",
      es: "Chocolate 72% Sin Azúcar Añadido"
    },
    desc: {
      ca: "Intensitat pura de cacau noble, endolcit suaument per a cuidar-se gaudint.",
      es: "Intensidad pura de cacao noble, endulzado suavemente para cuidarse disfrutando."
    },
    dietary: ["senseGluten", "senseSucre"],
    image: "https://images.unsplash.com/photo-1549007994-cb92caebd54b?auto=format&fit=crop&w=1000&q=85",
    badge: {
      ca: "Sense Sucre",
      es: "Sin Azúcar"
    }
  },
  {
    id: "avellana-sense-sucre",
    category: "senseSucre",
    name: {
      ca: "Avellana Piemont Sense Sucre Afegit",
      es: "Avellana Piamonte Sin Azúcar Añadido"
    },
    desc: {
      ca: "Tota la cremositat i el torrat característic de l'avellana IGP sense sucres afegits.",
      es: "Toda la cremosidad y el tostado característico de la avellana IGP sin azúcares añadidos."
    },
    dietary: ["senseGluten", "senseSucre"],
    image: "https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=1000&q=85",
    badge: {
      ca: "Lleuger",
      es: "Ligero"
    }
  },

  // ESPECIALS & TOMATINA
  {
    id: "la-tomatina",
    category: "especials",
    name: {
      ca: "Gelat 'La Tomatina de Bunyol'",
      es: "Helado 'La Tomatina de Buñol'"
    },
    desc: {
      ca: "L'exclusiu homenatge a la festa de Bunyol elaborat amb tomaca local. Protagonista a À Punt Mèdia.",
      es: "El exclusivo homenaje a la fiesta de Buñol elaborado con tomate local. Protagonista en À Punt Mèdia."
    },
    dietary: ["senseGluten", "vegat", "proximitat"],
    image: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=1000&q=85",
    badge: {
      ca: "Orgull de Bunyol",
      es: "Orgullo de Buñol"
    }
  },

  // FROZEN YOGURT
  {
    id: "frozen-yogurt",
    category: "yogurt",
    name: {
      ca: "Frozen Yogurt Natural Artesà",
      es: "Frozen Yogurt Natural Artesano"
    },
    desc: {
      ca: "Iogurt natural batut fred, acompanyat amb la teua crema calenta i toppings cruixents preferits.",
      es: "Yogur natural batido frío, acompañado con tu crema templada y toppings crujientes favoritos."
    },
    dietary: ["senseGluten"],
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=1000&q=85",
    badge: {
      ca: "Artesà",
      es: "Artesano"
    }
  },

  // CAFÈ & DOLÇOS
  {
    id: "affogato-al-caffe",
    category: "cafe",
    name: {
      ca: "Affogato al Caffè Espresso",
      es: "Affogato al Caffè Espresso"
    },
    desc: {
      ca: "Bola de gelat artesà fior di latte banyada al moment amb un espresso italià d'especialitat.",
      es: "Bola de helado artesano fior di latte bañada al momento con un espresso italiano de especialidad."
    },
    dietary: ["senseGluten"],
    image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=1000&q=85",
    badge: {
      ca: "Cafè Italià",
      es: "Café Italiano"
    }
  },
  {
    id: "orxata-granissat",
    category: "cafe",
    name: {
      ca: "Orxata Artesana de Xufa & Granissats",
      es: "Horchata Artesana de Chufa & Granizados"
    },
    desc: {
      ca: "Elaborada al dia amb xufa valenciana i granissats naturals de llima espremuda.",
      es: "Elaborada al día con chufa valenciana y granizados naturales de limón recién exprimido."
    },
    dietary: ["senseGluten", "vegat", "proximitat"],
    image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=1000&q=85",
    badge: {
      ca: "Tradició",
      es: "Tradición"
    }
  }
];

export const instagramPosts = [
  {
    id: "C_Hq7gMtL5r",
    url: "https://www.instagram.com/p/C_Hq7gMtL5r/",
    image: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=900&q=85",
    caption: {
      ca: "🍅 ¡La Tomatina, ara també en gelat! Gràcies a @apunt_media per visitar-nos i donar veu al nostre gelat dedicat a Bunyol.",
      es: "🍅 ¡La Tomatina, ahora también en helado! Gracias a @apunt_media por visitarnos y dar voz a nuestro nuevo helado dedicado a Buñol."
    },
    tag: "À Punt Mèdia · Tomatina",
    date: "Agost 2026"
  },
  {
    id: "C9k6YwNtM_z",
    url: "https://www.instagram.com/p/C9k6YwNtM_z/",
    image: "https://images.unsplash.com/photo-1580915411954-282cb1b0d780?auto=format&fit=crop&w=900&q=85",
    caption: {
      ca: "🍨 Molt orgullosos d'anunciar la col·laboració amb @casabaltar! El millor 'Dulce de Leche' amb llet de les praderies d'Astúries.",
      es: "🍨 ¡Muy orgullosos de anunciar la colaboración con @casabaltar! El mejor 'Dulce de Leche' con leche de las praderas de Asturias."
    },
    tag: "Col·laboració Casa Baltar",
    date: "Juliol 2026"
  },
  {
    id: "C7ZE3QptS4o",
    url: "https://www.instagram.com/p/C7ZE3QptS4o/",
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=900&q=85",
    caption: {
      ca: "🍦 Arriba a la nostra carta el nou Frozen Yogurt: natural, fresc i combinat amb la teua crema o topping favorit.",
      es: "🍦 Llega a nuestra carta el nuevo Frozen Yogurt: natural, fresco y combinado con tu crema o topping favorito."
    },
    tag: "Frozen Yogurt",
    date: "Maig 2026"
  },
  {
    id: "C-aK__UNbXg",
    url: "https://www.instagram.com/p/C-aK__UNbXg/",
    image: "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?auto=format&fit=crop&w=900&q=85",
    caption: {
      ca: "☕ Helat artesanal italià, cafè d'especialitat, orxata, granissats i terrassa a l'Av. de la Música, 12 a Bunyol.",
      es: "☕ Helado artesanal italiano, café de especialidad, horchata, granizados y terraza en Av. de la Música, 12 en Buñol."
    },
    tag: "Terrassa a Bunyol",
    date: "Juny 2026"
  }
];
