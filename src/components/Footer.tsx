import Link from "next/link";
import { content } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12 mt-0">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid sm:grid-cols-3 gap-8 mb-8">
          <div>
            <p className="text-white font-bold text-lg mb-2">{content.business.name}</p>
            <p className="text-sm">{content.business.tagline}</p>
          </div>
          <div>
            <p className="text-white font-semibold mb-3">Quick Links</p>
            <ul className="space-y-2 text-sm">
              {["/", "/services", "/about", "/contact"].map((href) => (
                <li key={href}>
                  <Link href={href} className="hover:text-white transition-colors capitalize">
                    {href === "/" ? "Home" : href.replace("/", "")}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-white font-semibold mb-3">Contact</p>
            <ul className="space-y-2 text-sm">
              <li>
                <a href={`tel:${content.business.phone.replace(/\s/g, "")}`} className="hover:text-white">
                  📞 {content.business.phone}
                </a>
              </li>
              {content.business.email && (
                <li>
                  <a href={`mailto:${content.business.email}`} className="hover:text-white">
                    ✉️ {content.business.email}
                  </a>
                </li>
              )}
              {content.business.address && (
                <li>📍 {content.business.address}</li>
              )}
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-6 text-sm text-center">
          © {new Date().getFullYear()} {content.business.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
