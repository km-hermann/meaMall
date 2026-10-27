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
  title: "Mea Mall 👑",
  description: "Boutique privée pour Mea la Milliardaire — joyeux anniversaire.",
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
