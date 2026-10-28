export type AlbumCheckpoint = {
  id: string;
  stepNumber: number;
  title_fr: string;
  title_en: string;
  date: string;
  location: string;
  caption_fr: string;
  caption_en: string;
  /** Drop your photo in /public/album/ and specify path, e.g. "/album/photo-1.jpg" */
  image: string;
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
    placeholderHint: "Photo 3 : Avec les amis / Les toasts / L'ambiance",
  },
  {
    id: "checkpoint-4",
    stepNumber: 4,
    title_fr: "Nostalgie & Pensées du Cameroun 🇨🇲❤️🇩🇪",
    title_en: "Nostalgia & Love from Cameroon 🇨🇲❤️🇩🇪",
    date: "Pont d'Amour",
    location: "Yaoundé 🇨🇲 ➔ Neumünster 🇩🇪",
    caption_fr:
      "Regarder tes photos et vidéos de tes 24 ans m'a donné des frissons de nostalgie. Être séparés par les frontières n'a jamais affaibli notre complicité fraternelle.",
    caption_en:
      "Looking back at your 24th birthday photos and videos gave me sweet chills of nostalgia. Being oceans apart has never weakened our brother-sister bond.",
    image: "/album/photo-4.jpg",
    placeholderHint: "Photo 4 : Un moment complice / Un souvenir nostalgique",
  },
  {
    id: "checkpoint-5",
    stepNumber: 5,
    title_fr: "Cap sur les 25 ans & Docteure Mea 👩‍⚕️👑",
    title_en: "Stepping into 25 & Dr. Mea 👩‍⚕️👑",
    date: "Vers l'Avenir",
    location: "Le Monde Entier 🌍",
    caption_fr:
      "Les 24 ans étaient magnifiques, mais le chapitre des 25 ans s'annonce grandiose avec la fin de la médecine et la blouse blanche officielle. Tellement fier de toi !",
    caption_en:
      "24 was amazing, but 25 is about to be legendary with the medical degree and the official white coat. So immensely proud of you!",
    image: "/album/photo-5.jpg",
    placeholderHint: "Photo 5 : Cap sur les 25 ans / Projet ou sourire d'avenir",
  },
];
