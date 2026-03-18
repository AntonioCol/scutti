import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import Collezioni from "@/components/Collezioni";
import Marchi from "@/components/Marchi";
import Showroom from "@/components/Showroom";
import Contatti from "@/components/Contatti";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
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
