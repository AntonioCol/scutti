import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import Collezioni from "@/components/Collezioni";
import Marchi from "@/components/Marchi";
import Showroom from "@/components/Showroom";
import Recensioni from "@/components/Recensioni";
import Contatti from "@/components/Contatti";
import CtaFinale from "@/components/CtaFinale";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export default function Home() {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <main>
        <Hero />
        <Intro />
        <Collezioni />
        <Marchi />
        <Showroom />
        <Recensioni />
        <Contatti />
        <CtaFinale />
      </main>
      <Footer />
    </>
  );
}
