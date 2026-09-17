"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { brands } from "../../data/brands";
import styles from "./Brands.module.css";

gsap.registerPlugin(ScrollTrigger);

export default function Brands() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate heading in
      gsap.from(`.${styles.title}`, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: `.${styles.head}`,
          start: "top 75%",
        },
      });

      // Stagger brand rows
      gsap.from(`.${styles.brand}`, {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: `.${styles.stack}`,
          start: "top 80%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className={`section ${styles.brands}`} ref={sectionRef} id="brands">
      <div className="container">
        <div className={styles.head}>
          <div>
            <span className="eyebrow">04 · House of brands</span>
          </div>
          <h2 className={styles.title}>
            One house.
            <br />
            Many expressions.
          </h2>
        </div>

        <div className={styles.stack}>
          {brands.map((brand) => (
            <Link
              key={brand.id}
              href={brand.slug === "tapu" ? "/tapu" : `/our-brands#${brand.slug}`}
              className={styles.brand}
              data-brand={brand.id}
            >
              <div className={styles.brandName}>{brand.name}</div>
              <div className={styles.brandDesc}>{brand.description}</div>
              <div className={styles.brandArrow}>↗</div>
              <span className={styles.brandHoverLabel}>Explore</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
