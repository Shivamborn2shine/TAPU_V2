"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Leaf, Blend, Mountain } from "lucide-react";
import styles from "./IngredientsSection.module.css";

gsap.registerPlugin(ScrollTrigger);

export default function IngredientsSection() {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(`.${styles.card}`, {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className={styles.section}>
      <div className={`container ${styles.grid}`}>
        
        <div className={styles.card}>
          <div className={styles.iconWrapper}>
            <Leaf className={styles.icon} strokeWidth={1.5} />
          </div>
          <h3 className={styles.title}>ASSAM CTC TEAS</h3>
          <p className={styles.text}>
            A carefully selected blend delivering the bold character Assam tea is known for.
          </p>
        </div>

        <div className={styles.card}>
          <div className={styles.iconWrapper}>
            <Blend className={styles.icon} strokeWidth={1.5} />
          </div>
          <h3 className={styles.title}>SIGNATURE BLEND</h3>
          <p className={styles.text}>
            Balanced for a rich, satisfying cup that fits effortlessly into everyday life.
          </p>
        </div>

        <div className={styles.card}>
          <div className={styles.iconWrapper}>
            <Mountain className={styles.icon} strokeWidth={1.5} />
          </div>
          <h3 className={styles.title}>THE TASTE OF ORIGIN</h3>
          <p className={styles.text}>
            Inspired by the land where every leaf begins its journey.
          </p>
        </div>

      </div>
    </section>
  );
}
