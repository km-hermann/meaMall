# Mea Mall 👑

A pretend bilingual boutique for Mea’s birthday. No backend, no real payments. Cart and language live in `localStorage`.

## Personalize before you send the link

Edit **`src/data/gift.ts`**:

- `herCity` — shown on checkout
- `myName` — surprise signature
- `messageFr` / `messageEn` — your letter
- `giftTitleFr` / `giftTitleEn` + `giftDescriptionFr` / `giftDescriptionEn` — the real gift
- `giftImage` — optional, e.g. `"/gift/photo.jpg"` (put the file in `public/gift/`)

Product catalog (names, prices, funny copy, photo paths): **`src/data/products.ts`**.  
Drop real photos in `public/products/` and set each product’s `image` field, e.g. `"/products/microwave.jpg"`.

All interface text: **`src/data/i18n.ts`**. Promo code: `MEALAMILLIARDAIRE` (100% off).

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Designed for a phone (WhatsApp link).

## Deploy (free)

Vercel: import the repo or run `npx vercel`.  
Netlify: import the repo (Next.js runtime) or `npx netlify deploy`.
