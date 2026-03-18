import type { Metadata } from "next";
import { MonteCarlo, Inter, Nunito_Sans, Lora } from "next/font/google";
import "./globals.css";

const montecarlo = MonteCarlo({
  variable: "--font-montecarlo",
  subsets: ["latin"],
  weight: "400",
});

const nunitoSans = Nunito_Sans({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: "900",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Scutti — Gli interni che desideri",
  description:
    "Showroom di arredo bagno, pavimenti, ceramiche, camini, parquet e molto altro. Villa Santa Maria (CH) — Abruzzo.",
  keywords:
    "arredo bagno, pavimenti, ceramiche, camini, parquet, sanitari, mosaici, showroom, Villa Santa Maria, Abruzzo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" className={`${montecarlo.variable} ${inter.variable} ${nunitoSans.variable} ${lora.variable}`}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
