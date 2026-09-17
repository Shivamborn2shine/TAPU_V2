"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./OriginTimeline.module.css";

gsap.registerPlugin(ScrollTrigger);

export default function OriginTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollWrapperRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const container = containerRef.current;
    const wrapper = scrollWrapperRef.current;
    if (!container || !wrapper) return;

    const ctx = gsap.context(() => {
      // Calculate how far to scroll the horizontal section
      const getScrollAmount = () => {
        let scrollWidth = wrapper.scrollWidth;
        return -(scrollWidth - window.innerWidth);
      };

      const tween = gsap.to(wrapper, {
        x: getScrollAmount,
        ease: "none",
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: () => `+=${getScrollAmount() * -1}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });

      return () => tween.kill();
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const stages = [
    { num: "01", title: "THE LAND", desc: "Assam's lush tea-growing landscape." },
    { num: "02", title: "THE LEAF", desc: "Fresh tea leaves and tea gardens." },
    { num: "03", title: "THE BLEND", desc: "The carefully selected Assam CTC blend." },
    { num: "04", title: "THE CUP", desc: "Rich amber tea being poured into a ceramic cup." },
    { num: "05", title: "TAPU", desc: "The final TAPU package." },
  ];

  return (
    <section ref={containerRef} className={styles.section}>
      <div ref={scrollWrapperRef} className={styles.scrollWrapper}>
        {stages.map((stage, i) => (
          <div key={i} className={styles.panel}>
            <div className={styles.visual}>
              {/* Placeholders for actual imagery */}
              <div className={styles.visualOverlay} />
            </div>
            <div className={styles.content}>
              <span className={styles.num}>{stage.num}</span>
              <h3 className={styles.title}>{stage.title}</h3>
              <p className={styles.desc}>{stage.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
