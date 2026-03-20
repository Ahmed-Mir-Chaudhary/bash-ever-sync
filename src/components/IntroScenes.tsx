import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";
import { BIRTHDAY_CONFIG } from "../config";
import { useSound } from "../hooks/useSound";

export const IntroCountdown = ({ onComplete }: { onComplete: () => void }) => {
  const [count, setCount] = useState(BIRTHDAY_CONFIG.countdownStart);
  const { playSound } = useSound();

  useEffect(() => {
    if (count > 0) {
      playSound(BIRTHDAY_CONFIG.sounds.countdownTick, 0.15);
      const timer = setTimeout(() => setCount(count - 1), 1400);
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
          initial={{ scale: 0.3, opacity: 0, filter: "blur(16px)" }}
          animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
          exit={{ scale: 1.8, opacity: 0, filter: "blur(24px)" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="text-[10rem] md:text-[18rem] font-serif font-bold text-pink-400/90"
          style={{
            textShadow: "0 0 60px rgba(236,72,153,0.3), 0 0 120px rgba(236,72,153,0.15)",
          }}
        >
          {count}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export const HappyReveal = ({ onComplete }: { onComplete: () => void }) => {
  useEffect(() => {
    const timer = setTimeout(onComplete, 4000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="flex items-center justify-center h-screen w-full">
      <motion.div className="text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: 40, letterSpacing: "0.8em" }}
          animate={{ opacity: 1, y: 0, letterSpacing: "0.15em" }}
          transition={{ duration: 2.5, ease: [0.22, 1, 0.36, 1] }}
          className="text-5xl md:text-8xl font-serif font-bold text-pink-300 uppercase leading-tight"
          style={{
            textShadow: "0 0 40px rgba(236,72,153,0.3), 0 0 80px rgba(236,72,153,0.1)",
          }}
        >
          Happy Birthday
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 2, ease: [0.22, 1, 0.36, 1] }}
          className="text-4xl md:text-7xl font-serif italic text-pink-200/90 mt-4"
          style={{
            textShadow: "0 0 30px rgba(236,72,153,0.25)",
          }}
        >
          {BIRTHDAY_CONFIG.targetName}
        </motion.h2>
      </motion.div>
    </div>
  );
};
