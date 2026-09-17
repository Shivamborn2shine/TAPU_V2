"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./StorySection.module.css";

gsap.registerPlugin(ScrollTrigger);

export default function StorySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(`.${styles.title}`, {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });

      gsap.from(`.${styles.text}`, {
        y: 20,
        opacity: 0,
        duration: 1,
        delay: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });

      // Subtle parallax on the visual
      if (visualRef.current) {
        gsap.to(visualRef.current, {
          yPercent: 15,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className={styles.section}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.copy}>
            <h2 className={styles.title}>
              WHERE ASSAM<br />
              MEETS THE CUP.
            </h2>
            <p className={styles.text}>
              Born from the tea-growing landscape of Assam, TAPU brings together
              carefully selected CTC teas to create a bold, comforting cup with
              the character of its origin.
            </p>
          </div>
          <div className={styles.visualContainer}>
            <div ref={visualRef} className={styles.visual}>
              {/* This is a placeholder for the lush tea garden imagery */}
              <div className={styles.visualOverlay} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
