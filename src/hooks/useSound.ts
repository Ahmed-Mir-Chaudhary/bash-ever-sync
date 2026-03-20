import { useCallback } from 'react';

export const useSound = () => {
  const playSound = useCallback((url: string, volume: number = 0.4) => {
    try {
      const audio = new Audio(url);
      audio.volume = volume;
      audio.play().catch(err => console.warn("Audio playback failed:", err));
    } catch (error) {
      console.warn("Audio initialization failed:", error);
    }
  }, []);

  return { playSound };
};
