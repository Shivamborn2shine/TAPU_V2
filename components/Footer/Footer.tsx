import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          <div>
            <div className={styles.brand}>XOWAD</div>
            <p className={styles.tagline}>The Taste of Origin.</p>
          </div>

          <div>
            <div className={styles.colTitle}>Explore</div>
            <Link href="/our-story" className={styles.colLink}>Our Story</Link>
            <Link href="/our-brands" className={styles.colLink}>Our Brands</Link>
            <Link href="/tapu" className={styles.colLink}>TAPU</Link>
            <Link href="/journal" className={styles.colLink}>Journal</Link>
          </div>

          <div>
            <div className={styles.colTitle}>Visit</div>
            <Link
              href="https://shop.xowad.in"
              target="_blank"
              rel="noopener"
              className={styles.colLink}
            >
              Shop
            </Link>
            <Link href="mailto:hello@xowad.in" className={styles.colLink}>
              hello@xowad.in
            </Link>
            <span className={styles.colLink}>Assam, India</span>
          </div>

          <div>
            <div className={styles.colTitle}>Social</div>
            <Link
              href="https://instagram.com/xowad.in"
              target="_blank"
              rel="noopener"
              className={styles.colLink}
            >
              Instagram
            </Link>
            <Link
              href="https://youtube.com/@xowad"
              target="_blank"
              rel="noopener"
              className={styles.colLink}
            >
              YouTube
            </Link>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.bottomText}>© 2026 XOWAD. All rights reserved.</p>
          <p className={styles.bottomText}>Origin Wrapped Around Delight.</p>
        </div>
      </div>
    </footer>
  );
}
