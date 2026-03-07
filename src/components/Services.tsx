import Link from "next/link";
import type { SiteContent } from "@/lib/types";

export default function Services({ content }: { content: SiteContent }) {
  const preview = content.services.slice(0, 4);

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="section-heading">What We Do</h2>
          <p className="section-subheading">
            Professional {content.business.category} services in {content.business.location.city}.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {preview.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow text-center"
            >
              {service.icon && <span className="text-4xl mb-4 block">{service.icon}</span>}
              <h3 className="font-bold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/services" className="text-primary font-semibold hover:underline">
            See all services →
          </Link>
        </div>
      </div>
    </section>
  );
}
