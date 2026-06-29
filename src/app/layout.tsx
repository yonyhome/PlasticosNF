import type { Metadata, Viewport } from "next";
import { Inter, Montserrat, Poppins } from "next/font/google";
import "./globals.css";
import { COMPANY } from "@/lib/constants";
import { GoogleAnalytics } from "@/components/analytics/GoogleAnalytics";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
  weight: ["400", "600", "700", "800", "900"],
});

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: `${COMPANY.name} | Fabricación de Empaques Plásticos Industriales — Barranquilla`,
    template: `%s | ${COMPANY.name}`,
  },
  description: COMPANY.description,
  keywords: [
    "bolsas plásticas Barranquilla",
    "empaques industriales Colombia",
    "rollos plásticos para corte",
    "fabricación bolsas plásticas",
    "empaque al por mayor",
    "polietileno industrial",
    "extrusión plásticos",
    "impresión flexográfica",
    "Plásticos NF",
  ],
  authors: [{ name: COMPANY.name }],
  creator: COMPANY.name,
  metadataBase: new URL("https://plasticosnf.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_CO",
    url: "https://plasticosnf.com",
    siteName: COMPANY.name,
    title: `${COMPANY.name} — ${COMPANY.tagline}`,
    description: COMPANY.description,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: `${COMPANY.name} - Empaques industriales`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${COMPANY.name} — ${COMPANY.tagline}`,
    description: COMPANY.description,
    images: ["/og-image.jpg"],
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
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  category: "industrial",
};

export const viewport: Viewport = {
  themeColor: "#0A0A0B",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: COMPANY.fullName,
    url: "https://plasticosnf.com",
    logo: "https://plasticosnf.com/logo.png",
    description: COMPANY.description,
    address: {
      "@type": "PostalAddress",
      streetAddress: COMPANY.address,
      addressLocality: "Barranquilla",
      addressRegion: "Atlántico",
      addressCountry: "CO",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: COMPANY.phone,
      contactType: "sales",
      areaServed: "CO",
      availableLanguage: "Spanish",
    },
    sameAs: [
      COMPANY.social.instagram,
      COMPANY.social.facebook,
      COMPANY.social.linkedin,
    ],
  };

  return (
    <html
      lang="es-CO"
      className={`${inter.variable} ${montserrat.variable} ${poppins.variable}`}
    >
      <body className="bg-carbon text-platinum font-sans antialiased">
        <GoogleAnalytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
