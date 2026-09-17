"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./ExperienceSection.module.css";

gsap.registerPlugin(ScrollTrigger);

export default function ExperienceSection() {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const words = gsap.utils.toArray(".floating-word");
      
      gsap.from(".exp-title", {
        y: 40,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
        },
      });

      words.forEach((word: any, i) => {
        gsap.fromTo(
          word,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1.5,
            ease: "power2.out",
            scrollTrigger: {
              trigger: containerRef.current,
              start: `top ${70 - i * 10}%`,
              scrub: 1,
            },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className={styles.section}>
      <h2 className={`exp-title ${styles.title}`}>
        CLOSE YOUR EYES.<br />
        FEEL ASSAM.
      </h2>
      
      <div className={styles.productContainer}>
        <Image
          src="/tapu/product.png"
          alt="TAPU Pouch"
          width={500}
          height={700}
          className={styles.productImage}
        />
        
        <span className={`floating-word ${styles.word1}`}>AROMA</span>
        <span className={`floating-word ${styles.word2}`}>DEPTH</span>
        <span className={`floating-word ${styles.word3}`}>WARMTH</span>
        <span className={`floating-word ${styles.word4}`}>ORIGIN</span>
      </div>
    </section>
  );
}
