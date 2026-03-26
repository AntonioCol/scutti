import type { Metadata } from "next";
import { MonteCarlo, Inter, Nunito_Sans, Lora } from "next/font/google";
import Analytics from "@/components/Analytics";
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

const siteUrl = "https://www.scutti.it";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default:
      "Arredo Bagno, Pavimenti e Ceramiche Chieti e Abruzzo | Scutti dal 1970",
    template: "%s | Scutti Gilberto S.r.l. — Chieti, Abruzzo",
  },
  description:
    "Cerchi pavimenti, arredo bagno o ceramiche in provincia di Chieti? Scutti Gilberto: showroom di 1.200 m² a Villa Santa Maria con oltre 60 marchi. Preventivo gratuito per Abruzzo e Molise.",
  keywords: [
    "arredo bagno chieti",
    "pavimenti provincia chieti",
    "ceramiche chieti",
    "showroom bagno abruzzo",
    "sanitari chieti",
    "parquet abruzzo",
    "camini stufe chieti",
    "rubinetterie abruzzo",
    "arredo bagno abruzzo",
    "pavimenti abruzzo",
    "piastrelle chieti",
    "rivestimenti bagno chieti",
    "showroom arredamento molise",
    "preventivo pavimenti chieti",
    "preventivo arredo bagno abruzzo",
    "arredo bagno vicino a me",
    "pavimenti vicino a me",
    "arredo bagno isernia",
    "pavimenti campobasso",
    "ceramiche termoli",
    "arredo bagno termoli",
    "pavimenti isernia",
    "showroom bagno molise",
    "arredo bagno castel di sangro",
    "pavimenti roccaraso",
    "ceramiche atessa",
    "arredo bagno atessa",
    "Villa Santa Maria",
    "Lanciano",
    "Ortona",
    "Vasto",
    "Scutti",
  ],
  authors: [{ name: "Scutti Gilberto S.r.l." }],
  creator: "Scutti Gilberto S.r.l.",
  openGraph: {
    type: "website",
    locale: "it_IT",
    url: siteUrl,
    siteName: "Scutti Gilberto S.r.l.",
    title:
      "Arredo Bagno, Pavimenti e Ceramiche Chieti | Scutti — Preventivo Gratuito",
    description:
      "Showroom 1.200 m² con 60+ marchi internazionali. Preventivi gratuiti per arredo bagno, pavimenti, ceramiche, camini e parquet. Provincia di Chieti, Abruzzo e Molise.",
    images: [
      {
        url: "/img/showroom/scutti_showroom_1.jpg",
        width: 1200,
        height: 630,
        alt: "Showroom arredo bagno e pavimenti Scutti — Villa Santa Maria, Chieti, Abruzzo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Arredo Bagno e Pavimenti Chieti | Scutti — Preventivo Gratuito",
    description:
      "Showroom 1.200 m² a Villa Santa Maria (CH). 60+ marchi internazionali. Preventivi gratuiti per Abruzzo e Molise.",
    images: ["/img/showroom/scutti_showroom_1.jpg"],
  },
  alternates: {
    canonical: siteUrl,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

// Schema.org LocalBusiness structured data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HomeGoodsStore",
  name: "Scutti Gilberto S.r.l.",
  description:
    "Showroom di arredo bagno, pavimenti, ceramiche, camini, parquet e molto altro in provincia di Chieti. Dal 1970 al servizio di Abruzzo e Molise. Preventivi gratuiti.",
  url: siteUrl,
  telephone: ["+39 0872 944160", "+39 334 506 2792"],
  email: "info@scutti.it",
  image: `${siteUrl}/img/showroom/scutti_showroom_1.jpg`,
  logo: `${siteUrl}/img/logo.png`,
  foundingDate: "1970",
  address: {
    "@type": "PostalAddress",
    streetAddress: "C.da Poggio, 25",
    addressLocality: "Villa Santa Maria",
    addressRegion: "Abruzzo",
    postalCode: "66047",
    addressCountry: "IT",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 41.9519,
    longitude: 14.3517,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "13:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "15:00",
      closes: "19:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "09:00",
      closes: "13:00",
    },
  ],
  areaServed: [
    { "@type": "AdministrativeArea", name: "Provincia di Chieti" },
    { "@type": "AdministrativeArea", name: "Provincia di Isernia" },
    { "@type": "AdministrativeArea", name: "Provincia di Campobasso" },
    { "@type": "State", name: "Abruzzo" },
    { "@type": "State", name: "Molise" },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Prodotti Showroom",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Product", name: "Pavimenti e Rivestimenti" } },
      { "@type": "Offer", itemOffered: { "@type": "Product", name: "Arredo Bagno" } },
      { "@type": "Offer", itemOffered: { "@type": "Product", name: "Sanitari" } },
      { "@type": "Offer", itemOffered: { "@type": "Product", name: "Ceramiche e Mosaici" } },
      { "@type": "Offer", itemOffered: { "@type": "Product", name: "Camini e Stufe" } },
      { "@type": "Offer", itemOffered: { "@type": "Product", name: "Parquet e Laminati" } },
    ],
  },
  priceRange: "€€-€€€",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" className={`${montecarlo.variable} ${inter.variable} ${nunitoSans.variable} ${lora.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        <Analytics />
        {children}
      </body>
    </html>
  );
}
