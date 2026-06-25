import Script from "next/script";
import { GA_ID } from "@/lib/analytics";

/**
 * GA4 loader (PRD §16). Uses next/script `afterInteractive` so analytics
 * never blocks the main thread or hurts LCP. Renders nothing when GA_ID
 * is not configured, so local/dev stays clean.
 */
export default function GoogleAnalytics() {
  if (!GA_ID) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}', { anonymize_ip: true });
        `}
      </Script>
    </>
  );
}
