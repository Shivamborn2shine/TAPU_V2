"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./Tapu.module.css";

gsap.registerPlugin(ScrollTrigger);

export default function Tapu() {
  const sectionRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const lightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Scroll reveal
      gsap.from(`.${styles.copy}`, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
        },
      });

      gsap.from(`.${styles.productImage}`, {
        y: 80,
        opacity: 0,
        scale: 0.95,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 65%",
        },
      });
    }, sectionRef);

    // ── Mouse Parallax (Desktop only) ────────────────────────
    const stage = stageRef.current;
    const image = imageRef.current;
    const light = lightRef.current;

    if (!stage || !image || !light) return () => ctx.revert();

    const handleMouseMove = (e: MouseEvent) => {
      if (window.innerWidth < 768) return;

      const rect = stage.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5; // -0.5 to 0.5
      const y = (e.clientY - rect.top) / rect.height - 0.5;

      // Subtle product rotation
      gsap.to(image, {
        rotateY: x * 6,
        rotateX: -y * 4,
        x: x * 15,
        y: y * 10,
        duration: 0.6,
        ease: "power2.out",
      });

      // Light shift follows mouse
      gsap.to(light, {
        x: x * 40,
        y: y * 30,
        duration: 0.8,
        ease: "power2.out",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(image, {
        rotateY: 0,
        rotateX: 0,
        x: 0,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
      });
      gsap.to(light, {
        x: 0,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
      });
    };

    stage.addEventListener("mousemove", handleMouseMove);
    stage.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      ctx.revert();
      stage.removeEventListener("mousemove", handleMouseMove);
      stage.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <section className={`${styles.tapu}`} ref={sectionRef} id="tapu">
      <div className={styles.grid}>
        {/* Product Stage */}
        <div className={styles.stage} ref={stageRef}>
          <div className={styles.stageOverlay} />
          <div className={styles.lightShift} ref={lightRef} />

          <div className={styles.stageInner}>
            <Image
              ref={imageRef}
              src="/tapu/product.png"
              alt="TAPU Signature Assam Blend tea pouch packaging"
              width={480}
              height={680}
              className={styles.productImage}
              priority
            />
          </div>

          <div className={styles.stageWatermark}>TAPU</div>
        </div>

        {/* Copy */}
        <div className={styles.copy}>
          <span className={`eyebrow ${styles.copyEyebrow}`}>
            01 · First expression
          </span>

          <h2 className={styles.copyTitle}>
            The Unmatched
            <br />
            Taste of Assam.
          </h2>

          <p className={styles.copyText}>
            TAPU is XOWAD&apos;s first major consumer brand — a focused tea identity
            built around Assam&apos;s character, presented with a contemporary
            premium sensibility.
          </p>

          <div className={styles.tags}>
            <span className={styles.tag}>Signature Assam Blend</span>
            <span className={styles.tag}>Black Tea</span>
            <span className={styles.tag}>An XOWAD Brand</span>
          </div>

          <Link
            href="https://shop.xowad.in"
            target="_blank"
            rel="noopener"
            className={styles.cta}
          >
            Explore TAPU <span>↗</span>
          </Link>

          <p className={styles.tagline}>Close Your Eyes. Feel Assam.</p>
        </div>
      </div>
    </section>
  );
}
