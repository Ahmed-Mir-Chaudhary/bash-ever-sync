import { useEffect, useRef } from "react";
import { BIRTHDAY_CONFIG } from "../config";

export const BackgroundMusic = ({ isPlaying, scene }: { isPlaying: boolean; scene: string }) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const prevTrackRef = useRef<string>("");

  const getTrackForScene = () => {
    if (["cute", "book", "birthdayText", "finale"].includes(scene)) {
      return BIRTHDAY_CONFIG.sounds.backgroundMusicBollywood || BIRTHDAY_CONFIG.sounds.backgroundMusic;
    }
    return BIRTHDAY_CONFIG.sounds.backgroundMusic;
  };

  useEffect(() => {
    const trackUrl = getTrackForScene();

    // Smooth crossfade when switching tracks
    if (audioRef.current && prevTrackRef.current !== trackUrl) {
      const oldAudio = audioRef.current;
      // Fade out old track
      let vol = oldAudio.volume;
      const fadeOut = setInterval(() => {
        if (vol > 0.02) {
          vol -= 0.02;
          oldAudio.volume = Math.max(vol, 0);
        } else {
          oldAudio.pause();
          clearInterval(fadeOut);
        }
      }, 50);

      audioRef.current = null;
    }

    if (!audioRef.current) {
      audioRef.current = new Audio(trackUrl);
      audioRef.current.loop = true;
      audioRef.current.volume = 0;
      prevTrackRef.current = trackUrl;
    }

    if (isPlaying) {
      const current = audioRef.current;
      current.play().catch((err) => console.warn("Background music failed to play:", err));
      // Gentle fade in to 0.35 (softer than before)
      let vol = current.volume;
      const fadeIn = setInterval(() => {
        if (vol < 0.35) {
          vol += 0.01;
          current.volume = Math.min(vol, 0.35);
        } else {
          clearInterval(fadeIn);
        }
      }, 60);

      return () => clearInterval(fadeIn);
    }

    return;
  }, [isPlaying, scene]);

  return null;
};
