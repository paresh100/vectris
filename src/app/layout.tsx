import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";

export const metadata: Metadata = {
  title: "Vectris Chartered Accountants & Business Advisors | Wimbledon, South West London",
  description:
    "Vectris Chartered Accountants & Business Advisors, based in Wimbledon, South West London, has over 35 years of experience helping businesses succeed. Expert accountancy, tax, and business advisory services.",
  keywords: [
    "Vectris",
    "Chartered Accountants",
    "South London",
    "Wimbledon",
    "Tax Advisory",
    "Accounting",
    "Business Advisory",
  ],
  openGraph: {
    type: "website",
    locale: "en_GB",
    title: "Vectris Chartered Accountants & Business Advisors | Wimbledon, South West London",
    description:
      "Over 35 years of experience helping businesses succeed with expert accountancy, tax, and business advisory services.",
    siteName: "Vectris Chartered Accountants",
    images: [
      {
        url: "/vectris-logo.png",
        width: 1200,
        height: 630,
        alt: "Vectris Chartered Accountants",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vectris Chartered Accountants",
    description: "Expert accountancy, tax, and business advisory services in Wimbledon.",
    images: ["/vectris-logo.png"],
  },
  metadataBase: new URL("https://vectris.co"),
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AccountingService",
    name: "Vectris Chartered Accountants",
    image: "https://vectris.co/vectris-logo.png",
    description:
      "Vectris Chartered Accountants & Business Advisors, based in Wimbledon, South West London, has over 35 years of experience helping businesses succeed.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Highlands House, 165 The Broadway",
      addressLocality: "Wimbledon",
      addressRegion: "London",
      postalCode: "SW19 1NE",
      addressCountry: "UK",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 51.4196,
      longitude: -0.2057,
    },
    url: "https://vectris.co",
    telephone: "+442085448064",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "17:30",
      },
    ],
    priceRange: "$$",
  };

  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link href="https://fonts.googleapis.com" rel="preconnect" />
        <link
          crossOrigin="anonymous"
          href="https://fonts.gstatic.com"
          rel="preconnect"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-display bg-off-white text-brand-charcoal transition-colors duration-300" suppressHydrationWarning>
        <Header />
        <main className="min-h-screen pt-20 lg:pt-24 pb-20">
          {children}
        </main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
