import { content } from "@/lib/content";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";

export default function HomePage() {
  return (
    <>
      <Hero content={content} />
      <Services content={content} />
      <About content={content} />
    </>
  );
}
