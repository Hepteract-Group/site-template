import Link from "next/link";
import type { SiteContent } from "@/lib/types";

export default function About({ content }: { content: SiteContent }) {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="section-heading">{content.about.headline}</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">{content.about.body}</p>
            <Link href="/about" className="btn-primary inline-block">
              More About Us
            </Link>
          </div>

          {content.about.values && content.about.values.length > 0 && (
            <div className="space-y-4">
              {content.about.values.map((value) => (
                <div
                  key={value}
                  className="flex items-center gap-4 bg-primary/5 rounded-xl px-5 py-4"
                >
                  <span className="text-primary font-bold text-xl">✓</span>
                  <span className="font-medium text-gray-800">{value}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
