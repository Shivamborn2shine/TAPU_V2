"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ClosingCTA() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".cta-title", {
        y: 60,
        opacity: 0,
        scale: 0.95,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{
        background: "var(--ivory)",
        color: "var(--ink)",
        textAlign: "center",
        padding: "clamp(100px, 12vw, 160px) 20px",
      }}
    >
      <span className="eyebrow" style={{ color: "var(--earth)" }}>
        06 · The next chapter
      </span>
      <h2
        className="cta-title"
        style={{
          fontFamily: "var(--serif)",
          fontSize: "clamp(4rem, 10vw, 10rem)",
          lineHeight: 0.82,
          fontWeight: 400,
          letterSpacing: "-0.05em",
          margin: "18px 0 48px",
        }}
      >
        Discover where
        <br />
        it begins.
      </h2>
      <Link
        href="https://shop.xowad.in"
        target="_blank"
        rel="noopener"
        className="btn btn-dark"
      >
        Enter the XOWAD shop <span>↗</span>
      </Link>
    </section>
  );
}
