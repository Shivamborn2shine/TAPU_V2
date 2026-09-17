"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./Header.module.css";

const navLinks = [
  { label: "Our Story", href: "/our-story" },
  { label: "Our Brands", href: "/our-brands" },
  { label: "TAPU", href: "/tapu" },
  { label: "Journal", href: "/journal" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
        <div className={`container ${styles.nav}`}>
          <Link href="/" className={styles.logo} aria-label="XOWAD home">
            <span className={styles.logoMark} />
            XOWAD
          </Link>

          <nav aria-label="Main navigation">
            <ul className={styles.links}>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={styles.link}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className={styles.actions}>
            <Link
              href="https://shop.xowad.in"
              target="_blank"
              rel="noopener"
              className={styles.shopBtn}
            >
              Shop
            </Link>
            <button
              className={`${styles.menuToggle} ${menuOpen ? styles.open : ""}`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
            >
              <span className={styles.menuLine} />
              <span className={styles.menuLine} />
              <span className={styles.menuLine} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile fullscreen nav */}
      <div className={`${styles.mobileNav} ${menuOpen ? styles.open : ""}`}>
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={styles.mobileLink}
            onClick={() => setMenuOpen(false)}
          >
            {link.label}
          </Link>
        ))}
        <Link
          href="https://shop.xowad.in"
          target="_blank"
          rel="noopener"
          className={styles.mobileLink}
          onClick={() => setMenuOpen(false)}
        >
          Shop
        </Link>
      </div>
    </>
  );
}
