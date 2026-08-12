import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import About from "@/components/about";
import MenuSection from "@/components/menu/menu-section";
import TestimonialsSection from "@/components/testimonials-section";
import Gallery from "@/components/gallery";
import VisitUs from "@/components/visit-us";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <MenuSection />
        <TestimonialsSection />
        <Gallery />
        <VisitUs />
      </main>
      <Footer />
    </>
  );
}
