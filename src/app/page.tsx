import FaqSection from "@/components/faq-section";
import Hero from "@/components/hero";
import VerseSection from "@/components/verse-section";
import WhySection from "@/components/why-section";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <WhySection />
      <VerseSection />
      <FaqSection />
    </main>
  );
}
