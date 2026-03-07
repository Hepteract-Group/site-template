import { content } from "@/lib/content";

export default function AboutPage() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="section-heading text-center">{content.about.headline}</h1>
        <p className="text-gray-600 text-lg leading-relaxed mb-10">{content.about.body}</p>

        {content.about.values && content.about.values.length > 0 && (
          <div className="bg-primary text-white rounded-2xl p-8">
            <h2 className="text-xl font-semibold mb-6">Our Commitments</h2>
            <ul className="grid sm:grid-cols-2 gap-3">
              {content.about.values.map((value) => (
                <li key={value} className="flex items-center gap-2">
                  <span className="text-accent text-xl">✓</span>
                  <span>{value}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {content.business.rating && (
          <div className="mt-12 text-center">
            <p className="text-5xl font-bold text-primary mb-2">{content.business.rating} ⭐</p>
            <p className="text-gray-500">
              Based on {content.business.reviewCount?.toLocaleString()} Google reviews
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
