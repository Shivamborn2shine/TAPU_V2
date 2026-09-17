"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./Story.module.css";

gsap.registerPlugin(ScrollTrigger);

export default function Story() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(`.${styles.visual}`, {
        x: -40,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      });

      gsap.from(`.${styles.title}`, {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 65%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className={`section ${styles.story}`} ref={sectionRef} id="story">
      <div className={`container ${styles.grid}`}>
        <div
          className={styles.visual}
          role="img"
          aria-label="Assam landscape — placeholder for editorial photography"
        />
        <div>
          <span className={`eyebrow ${styles.eyebrow}`}>
            03 · From Assam, with intention
          </span>
          <h2 className={styles.title}>
            A place with
            <br />
            a point of view.
          </h2>
          <p className={styles.text}>
            XOWAD is being built from Assam outward: a contemporary house of
            brands where regional character meets international design language.
          </p>
          <p className={styles.text}>
            Our visual world is quiet by design — forest, rain, soil, leaves,
            hands, craft and the people behind what reaches your table.
          </p>
          <div className={styles.cta}>
            <Link href="/our-brands" className="btn btn-dark">
              Meet the house <span>↘</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
