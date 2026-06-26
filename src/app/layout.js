import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/layout/NavBar";
import Footer from "@/components/layout/Footer";
import StickyWhatsApp from "@/components/layout/StickyWhatsApp";
import GoogleAnalytics from "@/components/analytics/GoogleAnalytics";
import IntroVideo from "@/components/intro/IntroVideo";
import ScrollProgress from "@/components/motion/ScrollProgress";
import { BUSINESS, SITE_URL } from "@/lib/constants";
import { businessSchema, jsonLd } from "@/lib/schema";

/* Self-hosted via next/font → no render-blocking external font requests. */
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
  variable: "--font-cormorant",
});

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "Voila Luxury Skincare Clinic Lahore | HydraFacial & Laser",
    template: "%s | Voila Luxury Skincare",
  },
  description: BUSINESS.description,
  applicationName: BUSINESS.name,
  authors: [{ name: BUSINESS.practitioner }],
  generator: "Next.js",
  keywords: [
    "HydraFacial Lahore",
    "laser hair removal Lahore",
    "laser hair removal Wapda Town",
    "BB Glow Lahore",
    "microneedling Lahore",
    "PRP hair treatment Lahore",
    "skincare clinic Lahore",
    "Dr. Beenish Jahangir",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_PK",
    url: SITE_URL,
    siteName: BUSINESS.name,
    title: "Voila Luxury Skincare Clinic Lahore | HydraFacial & Laser",
    description: BUSINESS.description,
    images: [
      {
        url: "/images/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Voila Luxury Skincare Aesthetics, Wapda Town, Lahore",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Voila Luxury Skincare Clinic Lahore",
    description: BUSINESS.description,
    images: ["/images/og-image.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    apple: "/favicon.svg",
  },
};

export const viewport = {
  themeColor: "#7A4E57",
  width: "device-width",
  initialScale: 1,
  colorScheme: "light",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${cormorant.variable}`}
      suppressHydrationWarning
    >
      <body className="flex min-h-screen flex-col">
        {/* Pre-paint guard: decide the intro state before first paint so the
            hero entrance is held and there is no flash. Only reduced-motion
            skips it; otherwise the intro plays on every entry / refresh.
            (If PLAY_ONCE is re-enabled in IntroVideo, also restore the
            sessionStorage 'voila:intro-seen' check here.) */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "(function(){try{var rm=window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches;var c=document.documentElement.classList;if(rm){c.add('intro-skip');}else{c.add('intro-active');}}catch(e){}})();",
          }}
        />

        {/* No-JS fallback: never trap the user behind the overlay. */}
        <noscript>
          <style>{`html,body{overflow:auto!important}#voila-intro{display:none!important}`}</style>
        </noscript>

        {/* Cinematic first-visit intro (once per session) */}
        <IntroVideo />

        {/* Slim reading-progress bar (native scrolling kept for smoothness) */}
        <ScrollProgress />

        {/* Skip link for keyboard users (WCAG 2.1 AA) */}
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-primary focus:px-5 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>

        {/* Sitewide LocalBusiness structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={jsonLd(businessSchema())}
        />

        <NavBar />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        <StickyWhatsApp />
        <GoogleAnalytics />
      </body>
    </html>
  );
}
