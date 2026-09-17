import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Intro from "../components/Hero/Intro";
import Origin from "../components/Origin/Origin";
import Brands from "../components/Brands/Brands";
import Tapu from "../components/Tapu/Tapu";
import Journal from "../components/Journal/Journal";
import ClosingCTA from "../components/Hero/ClosingCTA";
import Footer from "../components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        {/* Scene 01 — The Opening */}
        <Hero />

        {/* Scene 02 — TAPU Product Reveal */}
        <Tapu />

        {/* Scene 03 — We Begin With Origin */}
        <Intro />

        {/* Scene 04 — Philosophy Scroll */}
        <Origin />

        {/* Scene 05 — House of Brands */}
        <Brands />

        {/* Scene 06 — Journal */}
        <Journal />

        {/* Scene 08 — Closing CTA */}
        <ClosingCTA />
      </main>

      <Footer />
    </>
  );
}
