import { useCallback } from 'react';

export const useSound = () => {
  const playSound = useCallback((url: string, volume: number = 0.25) => {
    try {
      const audio = new Audio(url);
      // Start quiet and fade in for smoother feel
      audio.volume = 0;
      audio.play().catch(err => console.warn("Audio playback failed:", err));

      let vol = 0;
      const targetVol = Math.min(volume, 0.3); // Cap volume for gentle sounds
      const fadeIn = setInterval(() => {
        if (vol < targetVol) {
          vol += 0.03;
          audio.volume = Math.min(vol, targetVol);
        } else {
          clearInterval(fadeIn);
        }
      }, 30);
    } catch (error) {
      console.warn("Audio initialization failed:", error);
    }
  }, []);

  return { playSound };
};
