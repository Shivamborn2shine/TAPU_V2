"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { journalArticles } from "../../data/journal";
import styles from "./Journal.module.css";

gsap.registerPlugin(ScrollTrigger);

const gradients = [styles.gradient1, styles.gradient2, styles.gradient3];

export default function Journal() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(`.${styles.title}`, {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: `.${styles.head}`,
          start: "top 75%",
        },
      });

      gsap.from(`.${styles.article}`, {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: "power2.out",
        scrollTrigger: {
          trigger: `.${styles.grid}`,
          start: "top 80%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className={`section ${styles.journal}`} ref={sectionRef} id="journal">
      <div className="container">
        <div className={styles.head}>
          <div>
            <span className="eyebrow">05 · Journal</span>
          </div>
          <h2 className={styles.title}>
            Notes from
            <br />
            the origin.
          </h2>
        </div>

        <div className={styles.grid}>
          {journalArticles.map((article, i) => (
            <Link
              key={article.id}
              href={`/journal#${article.slug}`}
              className={styles.article}
            >
              <div className={styles.articleVisual}>
                <div
                  className={`${styles.articleGradient} ${gradients[i % gradients.length]}`}
                />
                <span className={styles.articleLabel}>
                  {article.category.split(" · ")[0]}
                </span>
              </div>
              <div className={`eyebrow ${styles.articleCategory}`}>
                {article.category}
              </div>
              <h3 className={styles.articleTitle}>{article.title}</h3>
              <p className={styles.articleExcerpt}>{article.excerpt}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
