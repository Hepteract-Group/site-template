"use client";

export default function ContactForm({ businessName }: { businessName: string }) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const phone = (form.elements.namedItem("phone") as HTMLInputElement).value;
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;
    const mailto = `mailto:${encodeURIComponent(businessName)}?subject=${encodeURIComponent(`Enquiry from ${name}`)}&body=${encodeURIComponent(`Name: ${name}\nPhone: ${phone}\n\n${message}`)}`;
    window.location.href = mailto;
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <h2 className="text-xl font-semibold mb-4">Send a Message</h2>
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
          Your Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-primary focus:border-primary outline-none"
          placeholder="Jane Smith"
        />
      </div>
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
          Phone Number
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-primary focus:border-primary outline-none"
          placeholder="07700 900456"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-primary focus:border-primary outline-none resize-none"
          placeholder="Tell us what you need..."
        />
      </div>
      <button type="submit" className="btn-primary w-full text-center">
        Send Message
      </button>
      <p className="text-xs text-gray-500 text-center">
        We aim to reply within 2 hours during business hours.
      </p>
    </form>
  );
}
