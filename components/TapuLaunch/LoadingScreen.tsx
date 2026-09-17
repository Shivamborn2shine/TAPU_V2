"use client";

import { useTapuContext } from "./TapuContext";
import styles from "./LoadingScreen.module.css";

export default function LoadingScreen() {
  const { isLoaded, progress } = useTapuContext();

  return (
    <div
      className={styles.loadingScreen}
      style={{
        opacity: isLoaded ? 0 : 1,
        pointerEvents: isLoaded ? "none" : "all",
      }}
    >
      <div className={styles.content}>
        <div className={styles.brand}>TAPU</div>
        <div className={styles.subtitle}>SIGNATURE ASSAM BLEND</div>
        
        <div className={styles.progressContainer}>
          <div className={styles.track}>
            <div 
              className={styles.bar} 
              style={{ transform: `scaleX(${progress / 100})` }} 
            />
          </div>
          <div className={styles.text}>LOADING {progress}%</div>
        </div>
      </div>
    </div>
  );
}
