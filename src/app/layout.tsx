import type { Metadata, Viewport } from "next";
import { Geist, Instrument_Serif, Noto_Sans_Devanagari, Noto_Sans_Gujarati, Rasa, Tiro_Devanagari_Hindi } from "next/font/google";
import "./globals.css";
import { LocaleProvider } from "@/lib/i18n/context";
import { PwaRegister } from "@/components/shell/PwaRegister";

const geist = Geist({ variable: "--font-geist", subsets: ["latin"], display: "swap" });
const instrument = Instrument_Serif({ variable: "--font-instrument", weight: "400", style: ["normal", "italic"], subsets: ["latin"], display: "swap" });
const tiroHi = Tiro_Devanagari_Hindi({ variable: "--font-tiro-hi", weight: "400", subsets: ["devanagari"], display: "swap" });
const rasa = Rasa({ variable: "--font-rasa", weight: ["400", "500"], subsets: ["gujarati"], display: "swap" });
const notoHi = Noto_Sans_Devanagari({ variable: "--font-noto-hi", weight: ["400", "500", "600"], subsets: ["devanagari"], display: "swap" });
const notoGu = Noto_Sans_Gujarati({ variable: "--font-noto-gu", weight: ["400", "500", "600"], subsets: ["gujarati"], display: "swap" });

export const metadata: Metadata = {
  title: { default: "SAWAAL", template: "%s · SAWAAL" },
  description: "Think. Question. Understand. One question a day to sharpen how you see the world.",
  applicationName: "SAWAAL",
  manifest: "/manifest.webmanifest",
  appleWebApp: { capable: true, statusBarStyle: "default", title: "SAWAAL" },
  icons: { icon: "/icon-192.png", apple: "/apple-icon.png" },
  openGraph: { title: "SAWAAL", description: "A question can change how you see the world.", type: "website" },
};

export const viewport: Viewport = {
  themeColor: "#f5f3ee",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

/** Runs before paint: restores the saved language so fonts and layout don't flash. */
const langScript = `try{var l=localStorage.getItem('sawaal.locale');if(l==='hi'||l==='gu'||l==='en'){document.documentElement.dataset.lang=l;document.documentElement.lang=l}}catch(e){}`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      data-lang="en"
      suppressHydrationWarning
      className={`${geist.variable} ${instrument.variable} ${tiroHi.variable} ${rasa.variable} ${notoHi.variable} ${notoGu.variable} h-full antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: langScript }} />
      </head>
      <body className="grain min-h-full flex flex-col bg-paper text-ink">
        <LocaleProvider>
          {children}
          <PwaRegister />
        </LocaleProvider>
      </body>
    </html>
  );
}
