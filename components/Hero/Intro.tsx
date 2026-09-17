"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Intro() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".intro-title", {
        y: 50,
        opacity: 0,
        duration: 1.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      });

      gsap.from(".intro-copy", {
        y: 30,
        opacity: 0,
        duration: 0.9,
        delay: 0.2,
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
    <section
      ref={sectionRef}
      style={{
        background: "var(--ivory)",
        color: "var(--ink)",
        padding: "var(--section-pad) 0",
      }}
    >
      <div
        className="container"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1.45fr",
          gap: "8vw",
          alignItems: "end",
        }}
      >
        <div>
          <span
            className="eyebrow"
            style={{ color: "var(--earth)" }}
          >
            02 · The beginning
          </span>
        </div>
        <div className="intro-copy" style={{ maxWidth: 600 }}>
          <h2
            className="intro-title"
            style={{
              fontFamily: "var(--serif)",
              fontSize: "clamp(3rem, 6vw, 6.4rem)",
              lineHeight: 0.9,
              fontWeight: 400,
              margin: "0 0 28px",
            }}
          >
            We Begin
            <br />
            With Origin.
          </h2>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.7,
              color: "#504b43",
              marginBottom: 30,
            }}
          >
            Before a product, there is a place. Before a flavour, there is a story.
            XOWAD begins with the belief that where something comes from should
            remain part of what makes it special.
          </p>
          <Link
            href="/our-story"
            className="btn btn-dark"
          >
            Enter our story <span>↗</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
