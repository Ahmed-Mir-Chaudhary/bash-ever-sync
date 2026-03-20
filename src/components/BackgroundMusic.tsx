import { useEffect, useRef } from "react";
import { BIRTHDAY_CONFIG } from "../config";

export const BackgroundMusic = ({ isPlaying, scene }: { isPlaying: boolean; scene: string }) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio(BIRTHDAY_CONFIG.sounds.backgroundMusic);
      audioRef.current.loop = true;
      audioRef.current.volume = 0;
    }

    const audio = audioRef.current;

    if (isPlaying) {
      audio.play().catch((err) => console.warn("Background music failed to play:", err));
      
      // Initial Fade in
      if (audio.volume === 0) {
        let vol = 0;
        const fadeIn = setInterval(() => {
          if (vol < 0.5) {
            vol += 0.01;
            audio.volume = vol;
          } else {
            clearInterval(fadeIn);
          }
        }, 100);
      }
    } else {
      // Fade out on stop
      let vol = audio.volume;
      const fadeOut = setInterval(() => {
        if (vol > 0.01) {
          vol -= 0.01;
          audio.volume = vol;
        } else {
          audio.pause();
          clearInterval(fadeOut);
        }
      }, 100);
    }
  }, [isPlaying]);

  // Scene transition "dip"
  useEffect(() => {
    if (!isPlaying || !audioRef.current) return;
    
    const audio = audioRef.current;
    const originalVol = 0.5;
    const dipVol = 0.2;

    // Dip volume
    audio.volume = dipVol;
    
    // Fade back up
    const timer = setTimeout(() => {
      let vol = dipVol;
      const fadeUp = setInterval(() => {
        if (vol < originalVol) {
          vol += 0.02;
          audio.volume = Math.min(vol, originalVol);
        } else {
          clearInterval(fadeUp);
        }
      }, 100);
    }, 500);

    return () => clearTimeout(timer);
  }, [scene, isPlaying]);

  return null;
};
