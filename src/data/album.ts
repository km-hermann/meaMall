export type AlbumCheckpoint = {
  id: string;
  stepNumber: number;
  title_fr: string;
  title_en: string;
  date: string;
  location: string;
  caption_fr: string;
  caption_en: string;
  /** Primary photo path */
  image: string;
  /** Optional fallback paths if named differently */
  altImages?: string[];
  placeholderHint: string;
};

export const albumCheckpoints: AlbumCheckpoint[] = [
  {
    id: "checkpoint-1",
    stepNumber: 1,
    title_fr: "Le Réveil de la Reine & 24 Bougies 🎂",
    title_en: "The Queen's Morning & 24 Candles 🎂",
    date: "24ème Anniversaire",
    location: "Neumünster 🇩🇪",
    caption_fr:
      "Le début d'une journée inoubliable ! Même à des milliers de kilomètres, je souriais en pensant à toi qui soufflais tes 24 bougies avec grâce.",
    caption_en:
      "The start of an unforgettable day! Even thousands of miles away, I was smiling picturing you blowing out your 24 candles with grace.",
    image: "/album/photo-1.jpg",
    altImages: ["/album/photo-1.jpeg", "/album/photo-1.png"],
    placeholderHint: "Photo 1 : Le gâteau / Les bougies / Le début de fête",
  },
  {
    id: "checkpoint-2",
    stepNumber: 2,
    title_fr: "Le Look de Milliardaire & Éclats de Rire ✨",
    title_en: "Billionaire Glow & Golden Laughs ✨",
    date: "Moments Précieux",
    location: "Neumünster 🇩🇪",
    caption_fr:
      "Toujours aussi rayonnante et pleine de vie. Cette élégance naturelle digne d'une vraie Milliardaire qui illumine toute la pièce !",
    caption_en:
      "Radiant and full of joy as always. That natural elegance worthy of a true Billionaire lighting up every room!",
    image: "/album/photo-2.jpg",
    altImages: ["/album/photo-2.jpeg", "/album/photo-2.png"],
    placeholderHint: "Photo 2 : Son magnifique look / Portrait souvenir",
  },
  {
    id: "checkpoint-3",
    stepNumber: 3,
    title_fr: "Entourée d'Amour & Toast Royal 🥂",
    title_en: "Surrounded by Love & Royal Cheers 🥂",
    date: "La Fête",
    location: "Neumünster 🇩🇪",
    caption_fr:
      "Des verres levés en ton honneur et de la joie pure. Même depuis le Cameroun, mon cœur et mes pensées trinquaient avec vous !",
    caption_en:
      "Glasses raised in your honor and pure joy. Even from Cameroon, my heart and spirits were clinking glasses right beside you!",
    image: "/album/photo-3.jpg",
    altImages: ["/album/photo-3.jpeg", "/album/photo-3.png"],
    placeholderHint: "Photo 3 : Avec les amis / Les toasts / L'ambiance",
  },
  {
    id: "checkpoint-4",
    stepNumber: 4,
    title_fr: "Le Festin Royal : Au Merveilleux Buffet 🍽️✨",
    title_en: "The Royal Feast: At the Wonderful Buffet 🍽️✨",
    date: "Le Festin",
    location: "Neumünster 🇩🇪",
    caption_fr:
      "Quand la Milliardaire passe à table ! Te voir te servir à ce délicieux buffet avec un immense sourire... Un vrai festin digne d'une reine pour honorer tes 24 ans.",
    caption_en:
      "When the Billionaire heads to the feast! Seeing you serve yourself from that wonderful buffet with a radiant smile... A true royal feast to celebrate your 24th birthday.",
    image: "/album/photo-4.jpg",
    altImages: [
      "/album/photo-buffet.jpg",
      "/album/photo-buffet.jpeg",
      "/album/photo-buffet.png",
      "/album/photo-4.jpeg",
    ],
    placeholderHint: "Photo au buffet : Se servant au délicieux buffet 🍽️",
  },
  {
    id: "checkpoint-5",
    stepNumber: 5,
    title_fr: "Complicité Fraternelle : Avec Mr. Crepinho 👦❤️👑",
    title_en: "Complicité Fraternelle: With Mr. Crepinho 👦❤️👑",
    date: "Famille Réunie",
    location: "Neumünster 🇩🇪",
    caption_fr:
      "Un des moments les plus touchants pour moi ! Même si j'étais à distance au Cameroun, voir Crepinho à tes côtés en Allemagne pour célébrer tes 24 ans m'a réchauffé le cœur. Les Mea ensemble, une force inébranlable !",
    caption_en:
      "One of the most touching moments for me! Even from afar in Cameroon, seeing our brother right beside you in Germany to celebrate your 24th warmed my soul. The Mea family united, an unbreakable bond!",
    image: "/album/photo-5.jpg",
    altImages: [
      "/album/photo-brother.jpg",
      "/album/photo-brother.jpeg",
      "/album/photo-brother.png",
      "/album/photo-5.jpeg",
    ],
    placeholderHint: "Photo avec Crepinho : À la fête d'anniversaire 👦❤️",
  },
  {
    id: "checkpoint-6",
    stepNumber: 6,
    title_fr: "La Montagne de Cadeaux de la Fête 🎁🎀",
    title_en: "The Billionaire Gift Mountain 🎁🎀",
    date: "Célébration",
    location: "Neumünster 🇩🇪",
    caption_fr:
      "Regarde tous ces magnifiques paquets et attentions reçus lors de ta soirée ! Tu as été gâtée comme une véritable reine, et tu mérites chaque étincelle d'amour et de joie de ce monde.",
    caption_en:
      "Look at all those wonderful gifts and surprises received during your party! Spoiled like true royalty, and you deserve every single ounce of joy and love this world has to offer.",
    image: "/album/photo-6.jpg",
    altImages: [
      "/album/photo-gifts.jpg",
      "/album/photo-gifts.jpeg",
      "/album/photo-gifts.png",
      "/album/photo-6.jpeg",
    ],
    placeholderHint: "Photo des cadeaux : Les cadeaux reçus à la fête 🎁",
  },
  {
    id: "checkpoint-7",
    stepNumber: 7,
    title_fr: "Nostalgie & Pensées du Cameroun 🇨🇲❤️🇩🇪",
    title_en: "Nostalgia & Love from Cameroon 🇨🇲❤️🇩🇪",
    date: "Pont d'Amour",
    location: "Yaoundé 🇨🇲 ➔ Neumünster 🇩🇪",
    caption_fr:
      "Regarder tes photos et vidéos de tes 24 ans m'a donné des frissons de nostalgie. Être séparés par les frontières n'a jamais affaibli notre complicité fraternelle.",
    caption_en:
      "Looking back at your 24th birthday photos and videos gave me sweet chills of nostalgia. Being oceans apart has never weakened our brother-sister bond.",
    image: "/album/photo-7.jpg",
    altImages: [
      "/album/photo-cameroun.jpg",
      "/album/photo-4.jpg",
      "/album/photo-7.jpeg",
      "/album/photo-7.png",
    ],
    placeholderHint: "Photo Nostalgie : Un moment complice / Pensées du Cameroun",
  },
  {
    id: "checkpoint-8",
    stepNumber: 8,
    title_fr: "Les Racines d'Amour : Avec Maman au Cameroun 🇨🇲👩‍👧❤️",
    title_en: "Roots of Love: With Mum in Cameroon 🇨🇲👩‍👧❤️",
    date: "Souvenir Précieux",
    location: "Cameroun 🇨🇲",
    caption_fr:
      "Ce moment inoubliable avec Maman quand vous étiez encore ensemble au Cameroun 🇨🇲❤️. Même avec les kilomètres qui séparent l'Allemagne et le pays, les prières, la fierté et l'amour infini de Maman t'accompagnent chaque jour !",
    caption_en:
      "This unforgettable moment with Mum back when you were still together in Cameroon 🇨🇲❤️. Even across the miles between Germany and home, Mum's infinite love, pride, and prayers walk beside you every single day!",
    image: "/album/photo-mum.jpg",
    altImages: [
      "/album/photo-8.jpg",
      "/album/photo-maman.jpg",
      "/album/photo-mum.jpeg",
      "/album/photo-mum.png",
      "/album/photo-8.jpeg",
    ],
    placeholderHint: "Photo avec Maman au Cameroun 👩‍👧❤️ (ex: photo-mum.jpg ou photo-8.jpg)",
  },
  {
    id: "checkpoint-9",
    stepNumber: 9,
    title_fr: "Complicité Royale : Avec sa Bestie Mama Dangotte 👯‍♀️✨",
    title_en: "Royalty Besties: Unforgettable Month with Mama Dangotte 👯‍♀️✨",
    date: "1 Mois Inoubliable",
    location: "Allemagne 🇩🇪",
    caption_fr:
      "Ce mois magique et inoubliable passé ensemble en Allemagne avant que Mama Dangotte ne reparte ! La vraie définition de la Bestie : des fous rires incontrôlables, des virées de Milliardaires et des souvenirs gravés pour toujours. Une amitié en or massif !",
    caption_en:
      "That magical and unforgettable month spent together in Germany before Mama Dangotte returned! The pure definition of a Bestie: unstoppable laughter, billionaire adventures, and lifelong memories. Pure gold friendship!",
    image: "/album/photo-mama-dangotte.jpg",
    altImages: [
      "/album/photo-9.jpg",
      "/album/photo-mama-dangotte.jpeg",
      "/album/photo-mama-dangotte.png",
      "/album/photo-bestie.jpg",
      "/album/photo-9.jpeg",
    ],
    placeholderHint: "Photo avec sa Bestie Mama Dangotte 👯‍♀️✨ (ex: photo-mama-dangotte.jpg ou photo-9.jpg)",
  },
  {
    id: "checkpoint-10",
    stepNumber: 10,
    title_fr: "Cap sur les 25 ans & Docteure Mea 👩‍⚕️👑",
    title_en: "Stepping into 25 & Dr. Mea 👩‍⚕️👑",
    date: "Vers l'Avenir",
    location: "Le Monde Entier 🌍",
    caption_fr:
      "Les 24 ans étaient magiques, mais le chapitre des 25 ans s'annonce grandiose avec la fin des études de médecine et la blouse blanche officielle. Tellement fier de toi grande sœur !",
    caption_en:
      "24 was amazing, but 25 is about to be legendary with the medical degree and the official white coat. So immensely proud of you big sister!",
    image: "/album/photo-10.jpg",
    altImages: [
      "/album/photo-10.jpeg",
      "/album/photo-10.png",
      "/album/photo-future.jpg",
    ],
    placeholderHint: "Photo 10 : Cap sur les 25 ans / Projet ou sourire d'avenir 👩‍⚕️",
  },
];
