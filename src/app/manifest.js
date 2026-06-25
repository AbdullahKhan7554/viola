import { BUSINESS } from "@/lib/constants";

/** PWA web manifest (PRD future PWA-readiness). */
export default function manifest() {
  return {
    name: BUSINESS.name,
    short_name: BUSINESS.shortName,
    description: BUSINESS.description,
    start_url: "/",
    display: "standalone",
    background_color: "#FBF7F3",
    theme_color: "#7A4E57",
    icons: [
      { src: "/favicon.svg", sizes: "any", type: "image/svg+xml", purpose: "any" },
    ],
  };
}
