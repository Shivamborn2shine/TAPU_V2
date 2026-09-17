"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./FinalCTA.module.css";

gsap.registerPlugin(ScrollTrigger);

export default function FinalCTA() {
  const containerRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(`.${styles.productImage}`, {
        y: 100,
        opacity: 0,
        scale: 0.9,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 60%",
        },
      });

      gsap.from(`.${styles.content}`, {
        y: 50,
        opacity: 0,
        duration: 1,
        delay: 0.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 60%",
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className={styles.section}>
      <div className={styles.glow} />
      
      <div className={styles.container}>
        <Image
          src="/tapu/product.png"
          alt="TAPU Pouch"
          width={600}
          height={800}
          className={styles.productImage}
        />
        
        <div className={styles.content}>
          <h2 className={styles.title}>
            BRING ASSAM<br />
            HOME.
          </h2>
          <p className={styles.subtext}>Your next cup begins here.</p>
          
          <button className={styles.ctaBtn}>SHOP TAPU</button>
          <div className={styles.smallText}>SIGNATURE ASSAM BLEND</div>
        </div>
      </div>
    </section>
  );
}
