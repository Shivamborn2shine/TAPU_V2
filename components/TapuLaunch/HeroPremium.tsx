"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

import { useGSAP } from "@gsap/react";
import styles from "./HeroPremium.module.css";

// Assuming gsap is installed and registered in your project.
import gsapCore from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export default function HeroPremium() {
  const container = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    gsapCore.registerPlugin(ScrollTrigger);
  }, []);

  useGSAP(() => {
    const tl = gsapCore.timeline();

    // Fade in label
    tl.to(".label-anim", {
      opacity: 1,
      duration: 1,
      ease: "power2.out",
      delay: 0.5
    });

    // Stagger in title words
    tl.to(".title-word-anim", {
      y: 0,
      opacity: 1,
      duration: 1.2,
      stagger: 0.1,
      ease: "power4.out"
    }, "-=0.5");

    // Fade in subtitle
    tl.to(".subtitle-anim", {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "power2.out"
    }, "-=0.8");

    // Product enters from the right
    tl.to(".product-wrapper-anim", {
      scale: 1,
      opacity: 1,
      duration: 1.5,
      ease: "expo.out"
    }, "-=1.2");

    // Fade in scroll indicator
    tl.to(".scroll-indicator-anim", {
      opacity: 1,
      duration: 1,
      ease: "power2.out"
    }, "-=0.5");

    // Parallax background on scroll
    gsapCore.to(".hero-bg-anim", {
      yPercent: 30,
      ease: "none",
      scrollTrigger: {
        trigger: container.current,
        start: "top top",
        end: "bottom top",
        scrub: true
      }
    });
  }, { scope: container });

  return (
    <section className={styles.heroContainer} ref={container}>
      {/* Background */}
      <div className={`${styles.heroBackground} hero-bg-anim`}>
        <Image 
          src="/tapu/hero-bg.jpg" 
          alt="Misty Assam Tea Estate" 
          fill
          priority
          style={{ objectFit: 'cover' }}
        />
      </div>
      <div className={styles.overlay}></div>

      {/* Content */}
      <div className={styles.content}>
        
        {/* Left Typography */}
        <div className={styles.textContent}>
          <div className={`${styles.label} label-anim`}>THE TAPU LAUNCH</div>
          
          <h1 className={styles.title}>
            <span className={styles.titleLine}>
              <span className={`${styles.titleWord} title-word-anim`}>ORIGIN,</span>
            </span>
            <span className={styles.titleLine}>
              <span className={`${styles.titleWord} title-word-anim`}>WRAPPED</span>
            </span>
            <span className={styles.titleLine}>
              <span className={`${styles.titleWord} title-word-anim`}>AROUND</span>
            </span>
            <span className={styles.titleLine}>
              <span className={`${styles.titleWord} title-word-anim`}>DELIGHT.</span>
            </span>
          </h1>

          <p className={`${styles.subtitle} subtitle-anim`}>
            A cinematic experience into the heart of Assam. Bold in character, warm in spirit, and unmistakably authentic.
          </p>
        </div>

        {/* Right Product */}
        <div className={`${styles.productWrapper} product-wrapper-anim`}>
          <div className={styles.floatingProduct}>
            <Image 
              src="/tapu/product.png" 
              alt="TAPU Assam Blend" 
              width={600} 
              height={800} 
              className={styles.productImage}
              priority
            />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className={`${styles.scrollIndicator} scroll-indicator-anim`}>
        <span className={styles.scrollText}>Discover</span>
        <div className={styles.scrollLine}></div>
      </div>
    </section>
  );
}
