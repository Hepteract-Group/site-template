import { content } from "@/lib/content";

export default function ServicesPage() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-16">
          <h1 className="section-heading">Our Services</h1>
          <p className="section-subheading">
            Everything you need, handled by experienced professionals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {content.services.map((service) => (
            <div key={service.id} className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
              {service.icon && <span className="text-4xl mb-4 block">{service.icon}</span>}
              <h2 className="text-xl font-bold mb-3">{service.title}</h2>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-primary/5 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-3">Not sure what you need?</h2>
          <p className="text-gray-600 mb-6">
            Give us a call and we&apos;ll talk you through your options — no commitment required.
          </p>
          <a href={`tel:${content.business.phone.replace(/\s/g, "")}`} className="btn-primary">
            Call {content.business.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
