import type { SiteContent } from "./types";
import rawContent from "../../content.json";

const raw = rawContent as Partial<SiteContent> & { business: SiteContent["business"]; hero: SiteContent["hero"] };

// Provide defaults for every optional top-level field so the build never
// crashes when ATLAS omits a section from its generated content.json.
export const content: SiteContent = {
  ...raw,
  services: raw.services ?? [
    { id: "s1", title: "Our Services",       description: "Professional services tailored to your needs.",   icon: "🔧" },
    { id: "s2", title: "Free Quotes",         description: "Honest, transparent pricing — no hidden charges.", icon: "💷" },
    { id: "s3", title: "Emergency Call-Outs", description: "Fast response when you need us most.",            icon: "🚨" },
    { id: "s4", title: "Fully Insured",       description: "Peace of mind with every job.",                   icon: "✅" },
  ],
  about: raw.about ?? {
    headline: `Trusted ${raw.business.category} in ${raw.business.location.city}`,
    body: `We are a professional ${raw.business.category} business serving ${raw.business.location.city} and surrounding areas.`,
    values: ["Fully insured", "Transparent pricing", "On time, every time", "Local experts"],
  },
  contact: raw.contact ?? { formEnabled: true, mapEnabled: false },
  seo: raw.seo ?? {
    title: `${raw.business.name} | ${raw.business.category} in ${raw.business.location.city}`,
    description: `Professional ${raw.business.category} services in ${raw.business.location.city}. Call ${raw.business.phone}.`,
  },
};
