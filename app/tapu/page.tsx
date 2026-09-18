import { TapuProvider } from "../../components/TapuLaunch/TapuContext";
import LoadingScreen from "../../components/TapuLaunch/LoadingScreen";
import Particles from "../../components/TapuLaunch/Particles";
import HeroPremium from "../../components/TapuLaunch/HeroPremium";
import ExperienceSection from "../../components/TapuLaunch/ExperienceSection";
import ProductSection from "../../components/TapuLaunch/ProductSection";
import FinalCTA from "../../components/TapuLaunch/FinalCTA";
import Journal from "../../components/Journal/Journal";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import FadeIn from "../../components/TapuLaunch/FadeIn";

export default function TapuLaunchPage() {
  return (
    <TapuProvider>
      <LoadingScreen />
      <Particles />
      <Header />
      
      <main style={{ background: "#050505", color: "#F3E8D0", overflowX: "hidden" }}>
        <HeroPremium />
        
        <FadeIn><ProductSection /></FadeIn>
        
        <FadeIn><ExperienceSection /></FadeIn>

        {/* Section 9 - XOWAD */}
        <FadeIn>
          <section style={{ background: "var(--secondary-green)", padding: "120px 20px", textAlign: "center" }}>
            <div style={{ maxWidth: 800, margin: "0 auto" }}>
              <div style={{ color: "var(--gold)", letterSpacing: "0.2em", fontSize: "0.6rem", marginBottom: 20 }}>AN XOWAD BRAND</div>
              <h2 style={{ fontFamily: "var(--serif)", fontSize: "clamp(3rem, 6vw, 5rem)", color: "var(--ivory)", fontWeight: 400, lineHeight: 0.9, marginBottom: 30 }}>
                ORIGIN, WRAPPED<br />
                AROUND DELIGHT.
              </h2>
              <p style={{ color: "rgba(243,235,221,0.7)", fontSize: "1.1rem", marginBottom: 40 }}>
                XOWAD is building a house of brands rooted in authentic Indian origins, beginning with TAPU.
              </p>
              <button style={{ background: "transparent", color: "var(--ivory)", border: "1px solid rgba(243,235,221,0.3)", padding: "16px 32px", fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", cursor: "pointer" }}>EXPLORE XOWAD</button>
            </div>
          </section>
        </FadeIn>

        <FadeIn><Journal /></FadeIn>
        <FinalCTA />
      </main>

      <Footer />
    </TapuProvider>
  );
}
