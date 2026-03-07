import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { content } from "@/lib/content";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: content.seo.title,
  description: content.seo.description,
  keywords: content.seo.keywords?.join(", "),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
