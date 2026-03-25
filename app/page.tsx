import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import Collezioni from "@/components/Collezioni";
import Marchi from "@/components/Marchi";
import Showroom from "@/components/Showroom";
import Contatti from "@/components/Contatti";
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
        <Contatti />
      </main>
      <Footer />
    </>
  );
}
