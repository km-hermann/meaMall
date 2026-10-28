import type { Metadata, Viewport } from "next";
import { DM_Sans, Great_Vibes, Playfair_Display } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { AppProvider } from "@/context/AppContext";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const greatVibes = Great_Vibes({
  variable: "--font-great-vibes",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://meamall.vercel.app"
  ),
  title: "Mea Mall 👑 | La Boutique Exclusive de Mea La Milliardaire",
  description:
    "Boutique privée pour le 25ème anniversaire de Mea La Milliardaire. Tout est offert avec le code VIP 🎀✨",
  openGraph: {
    title: "Mea Mall 👑 | Joyeux 25ème Anniversaire Mea !",
    description:
      "Bienvenue dans ton centre commercial privé VIP. Remplis ton panier à 0 € et prépare-toi pour ta surprise 💌✨",
    url: "/",
    siteName: "Mea Mall",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Mea Mall 👑 - Joyeux 25ème Anniversaire Mea La Milliardaire",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mea Mall 👑 | Joyeux 25ème Anniversaire Mea !",
    description:
      "Bienvenue dans ton centre commercial privé VIP. Remplis ton panier à 0 € et prépare-toi pour ta surprise 💌✨",
    images: ["/og-image.jpg"],
  },
  icons: { icon: "/favicon.svg" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#fff8f0",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fr"
      className={`${dmSans.variable} ${playfair.variable} ${greatVibes.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col text-rose-ink">
        <AppProvider>
          <Header />
          <main className="flex flex-1 flex-col">{children}</main>
          <Footer />
        </AppProvider>
      </body>
    </html>
  );
}
