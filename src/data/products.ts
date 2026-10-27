export type CategoryId =
  | "appliances"
  | "cookware"
  | "tableware"
  | "storage"
  | "tech";

export type Product = {
  id: string;
  category: CategoryId;
  name_fr: string;
  name_en: string;
  price: number;
  rating: number;
  description_fr: string;
  description_en: string;
  /** Drop a real photo in /public/products/ and set this path, e.g. "/products/microwave.jpg" */
  image: string;
  art: string;
  bestseller?: boolean;
  flashSale?: boolean;
};

export const categories: {
  id: CategoryId;
  name_fr: string;
  name_en: string;
  emoji: string;
  blurb_fr: string;
  blurb_en: string;
}[] = [
  {
    id: "appliances",
    name_fr: "Appareils électroménagers",
    name_en: "Home appliances",
    emoji: "🏠",
    blurb_fr: "La cuisine de Milliardaire, version bouton ON.",
    blurb_en: "A billionaire kitchen, ON-button edition.",
  },
  {
    id: "cookware",
    name_fr: "Ustensiles de cuisine",
    name_en: "Cookware",
    emoji: "🍳",
    blurb_fr: "Pour des plats qui font des selfies tout seuls.",
    blurb_en: "Pans worthy of a standing ovation.",
  },
  {
    id: "tableware",
    name_fr: "Vaisselle & art de la table",
    name_en: "Tableware",
    emoji: "🍽️",
    blurb_fr: "Parce que même le riz mérite un tapis rouge.",
    blurb_en: "Even weeknight dinner deserves a red carpet.",
  },
  {
    id: "storage",
    name_fr: "Rangement & organisation",
    name_en: "Storage",
    emoji: "🫙",
    blurb_fr: "Le chaos n’est plus invité à la maison.",
    blurb_en: "Chaos is no longer on the guest list.",
  },
  {
    id: "tech",
    name_fr: "Technologie",
    name_en: "Tech",
    emoji: "✨",
    blurb_fr: "Le luxe qui tient dans une poche.",
    blurb_en: "Luxury that fits in a pocket.",
  },
];

export const products: Product[] = [
  {
    id: "microwave",
    category: "appliances",
    name_fr: "Micro-ondes rose champagne",
    name_en: "Champagne-pink microwave",
    price: 89000,
    rating: 4.8,
    description_fr:
      "Réchauffe les restes… et un peu l’ego. Ding ! C’est prêt, Milliardaire.",
    description_en:
      "Reheats leftovers — and a little bit of ego. Ding! Dinner is served, billionaire.",
    image: "",
    art: "microwave",
    bestseller: true,
    flashSale: true,
  },
  {
    id: "smoothie-mixer",
    category: "appliances",
    name_fr: "Mixeur à smoothies velours",
    name_en: "Velvet smoothie mixer",
    price: 42000,
    rating: 4.7,
    description_fr:
      "Fruits, glace, et un soupçon de dramatique. Tes matins vont applaudir.",
    description_en:
      "Fruit, ice, and a pinch of drama. Your mornings will applaud.",
    image: "",
    art: "smoothie",
    bestseller: true,
  },
  {
    id: "power-blender",
    category: "appliances",
    name_fr: "Blender / robot multifonction puissant",
    name_en: "Power blender & multi-function robot",
    price: 125000,
    rating: 4.9,
    description_fr:
      "Il mixe, il hache, il impressionne les invités. Presque un sous-chef.",
    description_en:
      "It blends, it chops, it impresses guests. Basically a sous-chef.",
    image: "",
    art: "blender",
    bestseller: true,
  },
  {
    id: "toaster",
    category: "appliances",
    name_fr: "Grille-pain doré matin",
    name_en: "Golden-morning toaster",
    price: 28000,
    rating: 4.6,
    description_fr:
      "Deux tranches croustillantes, zéro compromis. Le petit-déj a un trône.",
    description_en:
      "Two crunchy slices, zero compromise. Breakfast gets a throne.",
    image: "",
    art: "toaster",
  },
  {
    id: "kettle",
    category: "appliances",
    name_fr: "Bouilloire électrique nacrée",
    name_en: "Pearl electric kettle",
    price: 24500,
    rating: 4.5,
    description_fr:
      "L’eau bout plus vite quand on s’appelle Mea. C’est scientifique.",
    description_en:
      "Water boils faster when your name is Mea. It’s science.",
    image: "",
    art: "kettle",
  },
  {
    id: "stand-mixer",
    category: "appliances",
    name_fr: "Robot pâtissier princesse",
    name_en: "Princess stand mixer",
    price: 185000,
    rating: 4.9,
    description_fr:
      "Gâteaux, crèmes, et un peu de royauté dans la pâte. Fouette comme une star.",
    description_en:
      "Cakes, cream, and a little royalty in the batter. Whisk like a star.",
    image: "",
    art: "mixer",
    bestseller: true,
  },
  {
    id: "vacuum",
    category: "appliances",
    name_fr: "Aspirateur nuage de soie",
    name_en: "Silk-cloud vacuum",
    price: 98000,
    rating: 4.6,
    description_fr:
      "Les miettes n’ont plus aucune chance. Ton salon respire le palace.",
    description_en:
      "Crumbs don’t stand a chance. Your living room breathes palace air.",
    image: "",
    art: "vacuum",
  },
  {
    id: "pots",
    category: "cookware",
    name_fr: "Ensemble de casseroles or-rose",
    name_en: "Rose-gold casserole set",
    price: 76000,
    rating: 4.8,
    description_fr:
      "Cinq casseroles qui promettent sauces veloutées et compliments infinis.",
    description_en:
      "Five pots that promise silky sauces and endless compliments.",
    image: "",
    art: "pots",
    bestseller: true,
  },
  {
    id: "pans",
    category: "cookware",
    name_fr: "Ensemble de poêles antiadhésives",
    name_en: "Non-stick frying pan set",
    price: 54000,
    rating: 4.7,
    description_fr:
      "Rien n’accroche — sauf les regards. Œufs, crêpes, victoires.",
    description_en:
      "Nothing sticks — except compliments. Eggs, crêpes, victories.",
    image: "",
    art: "pans",
  },
  {
    id: "plates",
    category: "tableware",
    name_fr: "Service d’assiettes porcelaine blush",
    name_en: "Blush porcelain plate set",
    price: 48000,
    rating: 4.8,
    description_fr:
      "Douze assiettes. Une table de fête, même un mardi soir.",
    description_en: "Twelve plates. A feast table, even on a Tuesday.",
    image: "",
    art: "plates",
    bestseller: true,
  },
  {
    id: "bowls",
    category: "tableware",
    name_fr: "Ensemble de bols nuage",
    name_en: "Cloud bowl set",
    price: 22000,
    rating: 4.6,
    description_fr:
      "Céréales, soupes, secrets. Ces bols savent garder un peu de magie.",
    description_en:
      "Cereal, soup, secrets. These bowls know how to keep a little magic.",
    image: "",
    art: "bowls",
  },
  {
    id: "glasses",
    category: "tableware",
    name_fr: "Verres à eau et à jus cristal doux",
    name_en: "Soft crystal water & juice glasses",
    price: 19500,
    rating: 4.7,
    description_fr:
      "L’eau a meilleur goût quand le verre brille. Santé, Milliardaire.",
    description_en:
      "Water tastes better in a sparkling glass. Cheers, billionaire.",
    image: "",
    art: "glasses",
  },
  {
    id: "cups",
    category: "tableware",
    name_fr: "Tasses à café et à thé dentelle",
    name_en: "Lace coffee & tea cups",
    price: 26000,
    rating: 4.8,
    description_fr:
      "Le café devient un rendez-vous. L’anse est trop mignonne, c’est officiel.",
    description_en:
      "Coffee becomes a date. The handle is officially too cute.",
    image: "",
    art: "cups",
  },
  {
    id: "cutlery",
    category: "tableware",
    name_fr: "Ensemble de couverts lumière d’or",
    name_en: "Gold-light cutlery set",
    price: 39000,
    rating: 4.7,
    description_fr:
      "Fourchettes qui ont de l’allure. Même les pâtes se tiennent droites.",
    description_en:
      "Forks with presence. Even pasta sits up straighter.",
    image: "",
    art: "cutlery",
  },
  {
    id: "tray",
    category: "tableware",
    name_fr: "Plateau de service cérémonie",
    name_en: "Ceremony serving tray",
    price: 17500,
    rating: 4.5,
    description_fr:
      "Entre comme une reine, sers le thé comme une légende.",
    description_en: "Enter like a queen, serve tea like a legend.",
    image: "",
    art: "tray",
  },
  {
    id: "salad-bowl",
    category: "tableware",
    name_fr: "Saladier élégant Grand Soir",
    name_en: "Grand Soir elegant salad bowl",
    price: 21000,
    rating: 4.6,
    description_fr:
      "Salade, fruits, ou simplement poser au centre pour le style.",
    description_en:
      "Salad, fruit, or just sit pretty in the middle of the table.",
    image: "",
    art: "salad",
  },
  {
    id: "jars",
    category: "storage",
    name_fr: "Bocaux (riz, pâtes, farine, sucre)",
    name_en: "Jars (rice, pasta, flour, sugar)",
    price: 18500,
    rating: 4.8,
    description_fr:
      "Quatre bocaux, zéro bazar. Ton garde-manger vient de signer un contrat de luxe.",
    description_en:
      "Four jars, zero chaos. Your pantry just signed a luxury contract.",
    image: "",
    art: "jars",
    bestseller: true,
  },
  {
    id: "spice-boxes",
    category: "storage",
    name_fr: "Boîtes à épices bijou",
    name_en: "Jewel spice boxes",
    price: 14500,
    rating: 4.7,
    description_fr:
      "Le cumin a enfin une suite présidentielle. Tes plats vont le sentir.",
    description_en:
      "Cumin finally gets a presidential suite. Your dishes will notice.",
    image: "",
    art: "spices",
  },
  {
    id: "airpods",
    category: "tech",
    name_fr: "AirPods — édition Milliardaire",
    name_en: "AirPods — Billionaire edition",
    price: 165000,
    rating: 4.9,
    description_fr:
      "Le monde en sourdine, ta playlist en VIP. Petites, blanches, légendaires.",
    description_en:
      "Mute the world, VIP your playlist. Small, white, legendary.",
    image: "",
    art: "airpods",
    bestseller: true,
    flashSale: true,
  },
];

export function getProduct(id: string) {
  return products.find((p) => p.id === id);
}

export function getCategory(id: string) {
  return categories.find((c) => c.id === id);
}

export function productsByCategory(id: CategoryId) {
  return products.filter((p) => p.category === id);
}

export function searchProducts(query: string) {
  const q = query.trim().toLowerCase();
  if (!q) return products;
  return products.filter(
    (p) =>
      p.name_fr.toLowerCase().includes(q) ||
      p.name_en.toLowerCase().includes(q) ||
      p.description_fr.toLowerCase().includes(q) ||
      p.description_en.toLowerCase().includes(q),
  );
}
