"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./Hero.module.css";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const skyRef = useRef<HTMLDivElement>(null);
  const mountainRef = useRef<HTMLDivElement>(null);
  const silhouetteRef = useRef<HTMLDivElement>(null);
  const mistLayerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const kickerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);
  const tapuLaunchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // ── Entrance Timeline ──────────────────────────────────
      const tl = gsap.timeline({ delay: 0.3 });

      tl.to(kickerRef.current, {
        opacity: 1,
        duration: 1,
        ease: "power2.out",
      })
        .to(
          titleRef.current,
          {
            opacity: 1,
            duration: 0.8,
            ease: "power2.out",
          },
          "-=0.6"
        )
        .to(
          subtitleRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "power2.out",
          },
          "-=0.4"
        )
        .to(
          bottomRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
          },
          "-=0.5"
        )
        .to(
          tapuLaunchRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: "power2.out",
          },
          "-=0.4"
        );

      // Set initial states for animated elements
      gsap.set(subtitleRef.current, { y: 20 });
      gsap.set(bottomRef.current, { y: 15 });
      gsap.set(tapuLaunchRef.current, { y: 30 });

      // ── Scroll Parallax ────────────────────────────────────
      const section = sectionRef.current;
      if (!section) return;

      // Sky layer zooms subtly
      gsap.to(skyRef.current, {
        scale: 1.15,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });

      // Mountains rise slightly
      gsap.to(mountainRef.current, {
        y: "-8%",
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom top",
          scrub: 1.2,
        },
      });

      // Silhouette parallax
      gsap.to(silhouetteRef.current, {
        y: "-12%",
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom top",
          scrub: 1.5,
        },
      });

      // Mist shifts
      gsap.to(mistLayerRef.current, {
        y: "-15%",
        opacity: 0.3,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });

      // Content fades out on scroll
      gsap.to(contentRef.current, {
        y: "-40",
        opacity: 0,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "20% top",
          end: "60% top",
          scrub: 1,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className={styles.hero} ref={sectionRef}>
      {/* Landscape layers for parallax */}
      <div className={styles.landscape}>
        <div className={styles.skyLayer} ref={skyRef} />
        <div className={styles.mountainLayer} ref={mountainRef} />
        <div className={styles.mountainSilhouette} ref={silhouetteRef} />
      </div>

      {/* Drifting mist */}
      <div className={styles.mistLayer} ref={mistLayerRef}>
        <div className={`${styles.mist} ${styles.mist1}`} />
        <div className={`${styles.mist} ${styles.mist2}`} />
        <div className={`${styles.mist} ${styles.mist3}`} />
      </div>

      {/* Film grain */}
      <div className={styles.grain} />

      {/* Content */}
      <div className={styles.content} ref={contentRef}>
        <div className={styles.kicker} ref={kickerRef}>
          <span className="eyebrow">XOWAD · Assam · India</span>
        </div>

        <h1 className={styles.title} ref={titleRef}>
          <span className={styles.titleLine}>
            <span className={styles.titleWord}>The Taste</span>
          </span>
          <span className={styles.titleLine}>
            <span className={styles.titleWord}>
              of <em className={styles.titleAccent}>Origin.</em>
            </span>
          </span>
        </h1>

        <p className={styles.subtitle} ref={subtitleRef}>
          Rooted in Assam. Created for the world.
        </p>

        <div className={styles.tapuLaunch} ref={tapuLaunchRef}>
          <div className={styles.tapuBadge}>NEW LAUNCH</div>
          <Image
            src="/tapu/product.png"
            alt="TAPU Signature Assam Blend"
            width={360}
            height={500}
            className={styles.tapuLaunchImg}
            priority
          />
        </div>

        <div className={styles.bottom} ref={bottomRef}>
          <Link href="/our-story" className="btn">
            Discover where it begins <span>↗</span>
          </Link>

          <div className={styles.scrollIndicator}>
            <span>Scroll to discover</span>
            <span className={styles.scrollArrow}>↓</span>
          </div>
        </div>
      </div>
    </section>
  );
}
