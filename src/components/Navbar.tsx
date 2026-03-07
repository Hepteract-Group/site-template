"use client";
import { useState } from "react";
import Link from "next/link";
import { content } from "@/lib/content";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="font-bold text-xl text-primary">
            {content.business.name}
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-gray-600 hover:text-primary transition-colors font-medium"
              >
                {l.label}
              </Link>
            ))}
            <a
              href={`tel:${content.business.phone.replace(/\s/g, "")}`}
              className="btn-primary text-sm"
            >
              {content.business.phone}
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 text-gray-600"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <span className="block w-6 h-0.5 bg-current mb-1.5" />
            <span className="block w-6 h-0.5 bg-current mb-1.5" />
            <span className="block w-6 h-0.5 bg-current" />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-gray-100 bg-white">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-3">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-gray-700 font-medium py-2 border-b border-gray-100"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            ))}
            <a
              href={`tel:${content.business.phone.replace(/\s/g, "")}`}
              className="btn-primary text-center mt-2"
            >
              Call {content.business.phone}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
