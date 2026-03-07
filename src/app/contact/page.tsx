import { content } from "@/lib/content";
import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="section-heading">Get in Touch</h1>
          <p className="section-subheading">
            Call us or send a message below — we aim to respond within 2 hours.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-xl font-semibold mb-6">Contact Details</h2>
            <ul className="space-y-4 text-gray-700">
              {content.business.phone && (
                <li className="flex items-start gap-3">
                  <span className="text-2xl">📞</span>
                  <div>
                    <p className="font-medium">Phone</p>
                    <a
                      href={`tel:${content.business.phone.replace(/\s/g, "")}`}
                      className="text-primary hover:underline"
                    >
                      {content.business.phone}
                    </a>
                  </div>
                </li>
              )}
              {content.business.email && (
                <li className="flex items-start gap-3">
                  <span className="text-2xl">✉️</span>
                  <div>
                    <p className="font-medium">Email</p>
                    <a
                      href={`mailto:${content.business.email}`}
                      className="text-primary hover:underline"
                    >
                      {content.business.email}
                    </a>
                  </div>
                </li>
              )}
              {content.business.address && (
                <li className="flex items-start gap-3">
                  <span className="text-2xl">📍</span>
                  <div>
                    <p className="font-medium">Address</p>
                    <p>{content.business.address}</p>
                  </div>
                </li>
              )}
            </ul>
          </div>

          {content.contact.formEnabled && <ContactForm businessName={content.business.name} />}
        </div>
      </div>
    </section>
  );
}
