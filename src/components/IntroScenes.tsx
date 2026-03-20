import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";
import { BIRTHDAY_CONFIG } from "../config";
import { useSound } from "../hooks/useSound";

export const IntroCountdown = ({ onComplete }: { onComplete: () => void }) => {
  const [count, setCount] = useState(BIRTHDAY_CONFIG.countdownStart);
  const { playSound } = useSound();

  useEffect(() => {
    if (count > 0) {
      playSound(BIRTHDAY_CONFIG.sounds.countdownTick);
      const timer = setTimeout(() => setCount(count - 1), 1200);
      return () => clearTimeout(timer);
    } else {
      onComplete();
    }
  }, [count, onComplete, playSound]);

  return (
    <div className="flex items-center justify-center h-screen w-full">
      <AnimatePresence mode="wait">
        <motion.div
          key={count}
          initial={{ scale: 0.5, opacity: 0, filter: "blur(10px)" }}
          animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
          exit={{ scale: 2, opacity: 0, filter: "blur(20px)" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-[12rem] md:text-[20rem] font-serif font-bold text-pink-400 text-glow-pink"
        >
          {count}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export const HappyReveal = ({ onComplete }: { onComplete: () => void }) => {
  useEffect(() => {
    const timer = setTimeout(onComplete, 3000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="flex items-center justify-center h-screen w-full">
      <motion.h1
        initial={{ opacity: 0, y: 50, letterSpacing: "1em" }}
        animate={{ opacity: 1, y: 0, letterSpacing: "0.2em" }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="text-5xl md:text-8xl font-serif font-bold text-pink-300 text-glow-pink uppercase text-center px-4 leading-tight"
      >
        Happy Birthday <br /> {BIRTHDAY_CONFIG.targetName}
      </motion.h1>
    </div>
  );
};
