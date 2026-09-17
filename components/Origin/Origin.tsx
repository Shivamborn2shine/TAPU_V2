"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./Origin.module.css";

gsap.registerPlugin(ScrollTrigger);

const words = [
  {
    word: "ORIGIN",
    num: "01",
    title: "Know where it comes from.",
    desc: "Place is not a footnote; it is the beginning. Every product starts with a landscape, a climate, a culture that shapes its character.",
  },
  {
    word: "WRAPPED",
    num: "02",
    title: "Preserve what makes it special.",
    desc: "Care travels from source to finished experience. What arrives in your hands should carry the integrity of where it began.",
  },
  {
    word: "AROUND",
    num: "03",
    title: "Build an experience around it.",
    desc: "Product, story, design and people belong together. The experience is never separate from the thing itself.",
  },
  {
    word: "DELIGHT",
    num: "04",
    title: "Make it worth experiencing.",
    desc: "Delight is the destination, never an afterthought. The smallest details are often what people remember most.",
  },
];

export default function Origin() {
  const sectionRef = useRef<HTMLElement>(null);
  const wordRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Each word section gets a ScrollTrigger that adds .active class
      wordRefs.current.forEach((wordEl) => {
        if (!wordEl) return;

        ScrollTrigger.create({
          trigger: wordEl,
          start: "top 60%",
          end: "bottom 40%",
          onEnter: () => wordEl.classList.add(styles.active),
          onLeave: () => wordEl.classList.remove(styles.active),
          onEnterBack: () => wordEl.classList.add(styles.active),
          onLeaveBack: () => wordEl.classList.remove(styles.active),
        });
      });

      // Animate the intro heading
      gsap.from(`.${styles.introTitle}`, {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: `.${styles.intro}`,
          start: "top 75%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className={styles.origin} ref={sectionRef}>
      <div className={`${styles.intro} container`}>
        <div className={styles.introEyebrow}>
          <span className={`eyebrow ${styles.eyebrow}`}>03 · The philosophy</span>
        </div>
        <h2 className={styles.introTitle}>
          Origin Wrapped
          <br />
          Around Delight.
        </h2>
      </div>

      <div className={styles.wordsContainer}>
        <div className={styles.decorLine} />

        {words.map((w, i) => (
          <div
            key={w.word}
            className={styles.wordSection}
            ref={(el) => { wordRefs.current[i] = el; }}
          >
            <div className={styles.wordInner}>
              <div className={styles.wordDisplay}>{w.word}</div>
              <div className={styles.wordContent}>
                <div className={styles.wordNum}>{w.num}</div>
                <h3 className={styles.wordTitle}>{w.title}</h3>
                <p className={styles.wordDesc}>{w.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
