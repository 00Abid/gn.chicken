import "./globals.css";
import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";
import { WhatsAppButton } from "@/app/components/WhatsAppButton";
import Breadcrumbs from "@/app/components/Breadcrum";


// SEO STRATEGY: Enterprise-Grade Global Metadata
export const metadata = {
  metadataBase: new URL('https://garibnawazchicken.vercel.app'),
  title: {
    default: "Garib Nawaz | Fresh Halal Chicken Supplier in Vasai Phata",
    template: "%s | Garib Nawaz Fresh Chicken"
  },
  description: "Vasai Phata's trusted source for 100% fresh, Zabihah Halal chicken. We provide retail and wholesale poultry delivery across Vasai-Virar and Dhaniv.",
  keywords: ["fresh chicken Vasai", "halal chicken supplier", "wholesale poultry Vasai", "Garib Nawaz Chicken", "chicken delivery Vasai Phata", "chicken shop near me", "raw chicken home delivery"],
  authors: [{ name: "Garib Nawaz Team" }],
  creator: "Garib Nawaz Chicken",
  publisher: "Garib Nawaz Chicken",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Garib Nawaz | Fresh Halal Chicken Supplier",
    description: "Daily farm-fresh, 100% Halal chicken delivered in Vasai-Virar. Trusted by 1000+ local families.",
    url: 'https://garibnawazchicken.vercel.app',
    siteName: 'Garib Nawaz Chicken',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Garib Nawaz | Fresh Halal Chicken Supplier",
    description: "Premium fresh halal chicken in Vasai Phata. Retail & Wholesale.",
  },
};

export default function RootLayout({ children }) {
  // Global Schema: Telling Google who you are
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Garib Nawaz Fresh Halal Chicken",
    "url": "https://garibnawazchicken.vercel.app/",
    "logo": "https://garibnawazchicken.com/gnc-logo.webp",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+918446319998",
      "contactType": "customer service"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Shop 1-2, Gausiya Masjid, Wakanpada, Vasai Phata",
      "addressLocality": "Vasai-Virar",
      "addressRegion": "Maharashtra",
      "postalCode": "401208",
      "addressCountry": "IN"
    }
  };

  return (
    <html lang="en" className="scroll-smooth" data-scroll-behavior="smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="antialiased font-sans">
        <Header />
        <Breadcrumbs />

        {/* Content Layer */}
        <div className="min-h-screen">
          {children}
        </div>

        {/* Global Conversion Layer */}
        <WhatsAppButton />

        {/* Footer Layer */}
        <Footer />
      </body>
    </html>
  );
}