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
    default: "Scutti Gilberto S.r.l. — Gli interni che desideri",
    template: "%s | Scutti Gilberto S.r.l.",
  },
  description:
    "Showroom di arredo bagno, pavimenti, ceramiche, camini, parquet e molto altro. Dal 1970 a Villa Santa Maria (CH), Abruzzo. Oltre 1.200 m² di esposizione con i migliori marchi internazionali.",
  keywords: [
    "arredo bagno",
    "pavimenti",
    "ceramiche",
    "camini",
    "parquet",
    "sanitari",
    "mosaici",
    "rubinetterie",
    "showroom",
    "Villa Santa Maria",
    "Chieti",
    "Abruzzo",
    "Scutti",
    "arredamento interni",
    "rivestimenti",
    "stufe",
    "pietre naturali",
  ],
  authors: [{ name: "Scutti Gilberto S.r.l." }],
  creator: "Scutti Gilberto S.r.l.",
  openGraph: {
    type: "website",
    locale: "it_IT",
    url: siteUrl,
    siteName: "Scutti Gilberto S.r.l.",
    title: "Scutti Gilberto S.r.l. — Gli interni che desideri",
    description:
      "Showroom di arredo bagno, pavimenti, ceramiche, camini, parquet e molto altro. Dal 1970 a Villa Santa Maria (CH), Abruzzo.",
    images: [
      {
        url: "/img/showroom/scutti_showroom_1.jpg",
        width: 1200,
        height: 630,
        alt: "Showroom Scutti Gilberto — Villa Santa Maria, Abruzzo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Scutti Gilberto S.r.l. — Gli interni che desideri",
    description:
      "Showroom di arredo bagno, pavimenti, ceramiche, camini, parquet e molto altro. Villa Santa Maria (CH), Abruzzo.",
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
    "Showroom di arredo bagno, pavimenti, ceramiche, camini, parquet e molto altro. Dal 1970 a Villa Santa Maria, Abruzzo.",
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
  areaServed: {
    "@type": "State",
    name: "Abruzzo",
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
