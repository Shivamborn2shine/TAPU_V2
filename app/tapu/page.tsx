import { TapuProvider } from "../../components/TapuLaunch/TapuContext";
import LoadingScreen from "../../components/TapuLaunch/LoadingScreen";
import Particles from "../../components/TapuLaunch/Particles";
import HeroCanvas from "../../components/TapuLaunch/HeroCanvas";
import StorySection from "../../components/TapuLaunch/StorySection";
import ExperienceSection from "../../components/TapuLaunch/ExperienceSection";
import IngredientsSection from "../../components/TapuLaunch/IngredientsSection";
import OriginTimeline from "../../components/TapuLaunch/OriginTimeline";
import ProductSection from "../../components/TapuLaunch/ProductSection";
import FinalCTA from "../../components/TapuLaunch/FinalCTA";
import Journal from "../../components/Journal/Journal";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

export default function TapuLaunchPage() {
  return (
    <TapuProvider>
      <LoadingScreen />
      <Particles />
      <Header />
      
      <main style={{ background: "#050505", color: "#F3E8D0" }}>
        <HeroCanvas />
        <StorySection />
        <ExperienceSection />
        <IngredientsSection />
        <OriginTimeline />
        
        {/* Section 6 - The Cup */}
        <section style={{ height: "100vh", display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center", padding: 20 }}>
          <div>
            <h2 style={{ fontFamily: "var(--serif)", fontSize: "clamp(3rem, 7vw, 6rem)", color: "var(--ivory)", fontWeight: 400, lineHeight: 0.9, marginBottom: 20 }}>
              ONE CUP.<br />
              A WHOLE LANDSCAPE.
            </h2>
            <p style={{ fontFamily: "var(--sans)", color: "rgba(243,235,221,0.6)", fontSize: "1.1rem" }}>
              Bold in character. Warm in spirit. Unmistakably Assam.
            </p>
          </div>
        </section>

        <ProductSection />
        
        {/* Section 8 - Why Tapu */}
        <section style={{ padding: "100px 20px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 40, maxWidth: 1200, margin: "0 auto", textAlign: "center" }}>
          <div>
            <h4 style={{ color: "var(--gold)", letterSpacing: "0.15em", marginBottom: 12, fontSize: "0.8rem" }}>AUTHENTIC ASSAM</h4>
            <p style={{ color: "rgba(243,235,221,0.6)", fontSize: "0.9rem", lineHeight: 1.6 }}>Rooted in the land and character of Assam.</p>
          </div>
          <div>
            <h4 style={{ color: "var(--gold)", letterSpacing: "0.15em", marginBottom: 12, fontSize: "0.8rem" }}>CAREFULLY BLENDED</h4>
            <p style={{ color: "rgba(243,235,221,0.6)", fontSize: "0.9rem", lineHeight: 1.6 }}>Selected tea components brought together for a consistent cup.</p>
          </div>
          <div>
            <h4 style={{ color: "var(--gold)", letterSpacing: "0.15em", marginBottom: 12, fontSize: "0.8rem" }}>EVERYDAY PREMIUM</h4>
            <p style={{ color: "rgba(243,235,221,0.6)", fontSize: "0.9rem", lineHeight: 1.6 }}>Premium experience without unnecessary extravagance.</p>
          </div>
          <div>
            <h4 style={{ color: "var(--gold)", letterSpacing: "0.15em", marginBottom: 12, fontSize: "0.8rem" }}>MADE TO BE FELT</h4>
            <p style={{ color: "rgba(243,235,221,0.6)", fontSize: "0.9rem", lineHeight: 1.6 }}>More than tea — a sensory connection to Assam.</p>
          </div>
        </section>

        {/* Section 9 - XOWAD */}
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

        <Journal />
        <FinalCTA />
      </main>

      <Footer />
    </TapuProvider>
  );
}
