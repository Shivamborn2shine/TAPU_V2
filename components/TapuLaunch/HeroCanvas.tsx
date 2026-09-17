"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTapuContext } from "./TapuContext";
import styles from "./HeroCanvas.module.css";

gsap.registerPlugin(ScrollTrigger);

export default function HeroCanvas() {
  const { frames, isLoaded } = useTapuContext();
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const copyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isLoaded || frames.length === 0) return;

    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const frameCount = frames.length;
    const animation = { frame: 0 };

    // Set canvas resolution
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      renderFrame(animation.frame);
    };

    const renderFrame = (index: number) => {
      const img = frames[index];
      if (!img) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // object-fit: contain logic
      const scale = Math.min(canvas.width / img.width, canvas.height / img.height);
      const x = canvas.width / 2 - (img.width / 2) * scale;
      const y = canvas.height / 2 - (img.height / 2) * scale;

      ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    // GSAP ScrollTrigger for Canvas Sequence
    const st = ScrollTrigger.create({
      trigger: container,
      start: "top top",
      end: "+=4000",
      pin: true,
      scrub: 0.5, // smooth scrubbing
      onUpdate: (self) => {
        // Calculate frame based on scroll progress
        const targetFrame = Math.min(
          frameCount - 1,
          Math.floor(self.progress * frameCount)
        );
        animation.frame = targetFrame;
        requestAnimationFrame(() => renderFrame(targetFrame));
      },
    });

    // GSAP Timeline for Hero Copy Reveal
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: "+=4000",
        scrub: 1,
      },
    });

    // We want the text to appear near the end of the 4000px scroll
    // The canvas finishes animating when progress is ~90%
    tl.fromTo(
      ".hero-anim-element",
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: "power2.out" }
    );

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      st.kill();
      tl.kill();
    };
  }, [isLoaded, frames]);

  return (
    <section ref={containerRef} className={styles.heroSection}>
      <canvas ref={canvasRef} className={styles.canvas} />

      <div ref={copyRef} className={styles.copyContainer}>
        <div className={styles.copyInner}>
          <span className={`hero-anim-element ${styles.eyebrow}`}>
            FROM THE HEART OF ASSAM
          </span>
          <h1 className={`hero-anim-element ${styles.title}`}>
            THE UNMATCHED<br />
            TASTE OF ASSAM.
          </h1>
          <p className={`hero-anim-element ${styles.text}`}>
            A signature blend of Assam CTC teas, crafted to bring the warmth,
            strength and character of Assam into every cup.
          </p>
          <div className={`hero-anim-element ${styles.ctaGroup}`}>
            <button className={styles.btnPrimary}>SHOP TAPU</button>
            <button className={styles.btnSecondary}>DISCOVER OUR STORY</button>
          </div>
        </div>
      </div>
    </section>
  );
}
