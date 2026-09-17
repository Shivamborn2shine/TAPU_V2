"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface TapuContextType {
  isLoaded: boolean;
  progress: number;
  frames: HTMLImageElement[];
}

const TapuContext = createContext<TapuContextType>({
  isLoaded: false,
  progress: 0,
  frames: [],
});

export const useTapuContext = () => useContext(TapuContext);

export function TapuProvider({ children }: { children: ReactNode }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [progress, setProgress] = useState(0);
  const [frames, setFrames] = useState<HTMLImageElement[]>([]);

  useEffect(() => {
    const startFrame = 25;
    const endFrame = 191;
    const frameCount = endFrame - startFrame + 1;
    const loadedFrames: HTMLImageElement[] = [];
    let loadedCount = 0;

    const loadFrame = (index: number) => {
      return new Promise<void>((resolve, reject) => {
        const img = new Image();
        const num = (index + startFrame).toString().padStart(5, "0");
        img.src = `/tapu/frames/${num}.jpg`;
        img.onload = () => {
          loadedFrames[index] = img;
          loadedCount++;
          setProgress(Math.round((loadedCount / frameCount) * 100));
          resolve();
        };
        img.onerror = () => {
          console.warn(`Failed to load frame ${num}`);
          resolve();
        };
      });
    };

    const loadAllFrames = async () => {
      const promises = [];
      for (let i = 0; i < frameCount; i++) {
        promises.push(loadFrame(i));
      }
      await Promise.all(promises);
      setFrames(loadedFrames);
      
      // Add a slight delay after 100% before fading out
      setTimeout(() => {
        setIsLoaded(true);
      }, 800);
    };

    loadAllFrames();
  }, []);

  return (
    <TapuContext.Provider value={{ isLoaded, progress, frames }}>
      {children}
    </TapuContext.Provider>
  );
}
