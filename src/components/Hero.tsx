import type { SiteContent } from "@/lib/types";

export default function Hero({ content }: { content: SiteContent }) {
  return (
    <section
      className="relative bg-gradient-to-br from-primary to-blue-800 text-white py-24 px-4"
      style={{ background: `linear-gradient(135deg, ${content.theme?.primaryColor ?? "#1a56db"}, #1e3a8a)` }}
    >
      <div className="container mx-auto max-w-5xl text-center">
        {content.business.rating && (
          <p className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-1.5 text-sm mb-6 backdrop-blur">
            ⭐ {content.business.rating} · {content.business.reviewCount?.toLocaleString()} Google Reviews
          </p>
        )}

        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
          {content.hero.headline}
        </h1>

        {content.hero.subheadline && (
          <p className="text-xl md:text-2xl text-blue-100 mb-10 max-w-2xl mx-auto">
            {content.hero.subheadline}
          </p>
        )}

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href={content.hero.ctaHref} className="btn-primary bg-white text-primary hover:bg-blue-50 text-lg px-8 py-4">
            {content.hero.ctaText}
          </a>
          <a
            href={`tel:${content.business.phone.replace(/\s/g, "")}`}
            className="inline-block border-2 border-white text-white font-semibold px-8 py-4 rounded-lg hover:bg-white hover:text-primary transition-colors text-lg"
          >
            📞 {content.business.phone}
          </a>
        </div>

        <p className="mt-6 text-blue-200 text-sm">
          Serving {content.business.location.city}
          {content.business.location.neighbourhood ? ` · ${content.business.location.neighbourhood}` : ""}
          {content.business.location.region ? ` · ${content.business.location.region}` : ""}
        </p>
      </div>
    </section>
  );
}
