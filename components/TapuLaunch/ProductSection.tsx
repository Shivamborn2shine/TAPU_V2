"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./ProductSection.module.css";

import { getCheckoutUrl } from "../../lib/woocommerce";

export default function ProductSection() {
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState("250g");

  const sizes = ["250g", "500g", "1kg"];

  const handleBuyNow = () => {
    // Map selected size to real WooCommerce Product IDs
    let productId = 56; // Default 250g
    if (size === "250g") productId = 56;
    if (size === "500g") productId = 60;
    if (size === "1kg") productId = 61;

    const url = getCheckoutUrl(productId, quantity);
    window.location.href = url;
  };

  return (
    <section className={styles.section}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.imageCol}>
          <div className={styles.imageWrapper}>
            <Image
              src="/tapu/product.png"
              alt="TAPU Pouch"
              width={500}
              height={700}
              className={styles.productImage}
            />
          </div>
        </div>
        
        <div className={styles.infoCol}>
          <div className={styles.eyebrow}>SIGNATURE ASSAM BLEND</div>
          <h2 className={styles.title}>TAPU</h2>
          <p className={styles.desc}>
            A premium Assam CTC black tea blend created for a rich, bold and comforting cup.
          </p>

          <div className={styles.selectorGroup}>
            <div className={styles.label}>SIZE</div>
            <div className={styles.sizeOptions}>
              {sizes.map((s) => (
                <button
                  key={s}
                  className={`${styles.sizeBtn} ${size === s ? styles.sizeActive : ""}`}
                  onClick={() => setSize(s)}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          <div className={styles.selectorGroup}>
            <div className={styles.label}>QUANTITY</div>
            <div className={styles.qtyControl}>
              <button 
                className={styles.qtyBtn} 
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
              >
                −
              </button>
              <span className={styles.qtyValue}>{quantity}</span>
              <button 
                className={styles.qtyBtn} 
                onClick={() => setQuantity(quantity + 1)}
              >
                +
              </button>
            </div>
          </div>

          <div className={styles.ctaGroup}>
            <button className={styles.btnPrimary} onClick={handleBuyNow}>ADD TO CART</button>
            <button className={styles.btnSecondary} onClick={handleBuyNow}>BUY NOW</button>
          </div>
        </div>
      </div>
    </section>
  );
}
