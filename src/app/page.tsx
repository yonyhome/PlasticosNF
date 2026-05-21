import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/layout/FloatingWhatsApp";
import { Hero } from "@/components/sections/Hero";
import { Products } from "@/components/sections/Products";
import { Process } from "@/components/sections/Process";
import { Machinery } from "@/components/sections/Machinery";
import { WhyUs } from "@/components/sections/WhyUs";
import { Gallery } from "@/components/sections/Gallery";
import { Sectors } from "@/components/sections/Sectors";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTASection } from "@/components/sections/CTASection";
import { Contact } from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="relative">
        <Hero />
        <Products />
        <Process />
        <Machinery />
        <WhyUs />
        <Gallery />
        <Sectors />
        <Testimonials />
        <CTASection />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
