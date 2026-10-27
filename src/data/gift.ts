/**
 * ═══════════════════════════════════════════════════════════════
 *  PERSONALIZE THIS FILE before sending the link to Mea
 * ═══════════════════════════════════════════════════════════════
 *
 * 1. herCity            → city shown on the fake checkout address
 * 2. myName             → signature at the end of the surprise
 * 3. messageFr / messageEn → your real birthday letter
 * 4. giftTitleFr/En + giftDescriptionFr/En → the real gift reveal
 * 5. giftImage          → optional photo in /public/gift/ (ex: "/gift/photo.jpg")
 *    Leave empty string to use the illustrated gift box only.
 */

export const gift = {
  birthdayDate: "25 octobre",
  birthdayDateEn: "25 October",
  herNickname: "Mea la Milliardaire",
  herCity: "Yaoundé",

  myName: "Ton frère / ta sœur",

  messageFr: `Ma chère Mea la Milliardaire,

Joyeux anniversaire. Aujourd’hui, Mea Mall est à toi : tu peux tout mettre dans le panier, tout aimer, tout “acheter” — parce que tu le mérites.

Mais le plus beau n’est pas sur le site. C’est le cadeau qui t’attend vraiment, choisi avec tout mon cœur.

Je t’aime.`,

  messageEn: `My dear Mea la Milliardaire,

Happy birthday. Today Mea Mall is yours: add everything, love everything, “buy” everything — because you deserve it.

The best part isn’t on the website. It’s the real gift waiting for you, chosen with all my heart.

I love you.`,

  giftTitleFr: "Ton vrai cadeau",
  giftTitleEn: "Your real gift",
  giftDescriptionFr:
    "Remplace ce texte par la description du vrai cadeau (objet, expérience, date, lieu ou enveloppe).",
  giftDescriptionEn:
    "Replace this text with the real gift (item, experience, date, place, or envelope).",
  giftImage: "",
  promoCode: "MEALAMILLIARDAIRE",
} as const;
