import { motion } from "motion/react";
import { useEffect } from "react";
import { Heart } from "lucide-react";
import { BIRTHDAY_CONFIG } from "../config";
import { useSound } from "../hooks/useSound";

export const HeartScene = ({ onComplete }: { onComplete: () => void }) => {
  const { playSound } = useSound();

  useEffect(() => {
    playSound(BIRTHDAY_CONFIG.sounds.loveSound, 0.4);
    const timer = setTimeout(onComplete, 3000);
    const pulseInterval = setInterval(() => {
      playSound(BIRTHDAY_CONFIG.sounds.heartbeat, 0.2);
    }, 1000);

    return () => {
      clearTimeout(timer);
      clearInterval(pulseInterval);
    };
  }, [onComplete, playSound]);

  return (
    <div className="flex items-center justify-center h-screen w-full">
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: [0, 1.2, 1], opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
        >
          <Heart size={150} className="text-pink-500 fill-pink-500 filter drop-shadow-[0_0_20px_rgba(236,72,153,0.8)]" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export const CuteCardScene = ({ onComplete }: { onComplete: () => void }) => {
  const { playSound } = useSound();

  useEffect(() => {
    playSound(BIRTHDAY_CONFIG.sounds.loveSound, 0.3);
    const timer = setTimeout(onComplete, 4000);
    return () => clearTimeout(timer);
  }, [onComplete, playSound]);

  return (
    <div className="flex items-center justify-center h-screen w-full px-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.9, rotateY: 90 }}
        animate={{ opacity: 1, scale: 1, rotateY: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="w-full max-w-md aspect-[4/5] bg-white rounded-3xl shadow-2xl overflow-hidden relative flex flex-col items-center justify-center p-8"
      >
        <div className="relative w-48 h-48 mb-8">
          {/* Cute Hands Animation Placeholder */}
          <motion.div 
            className="absolute left-0 bottom-0 w-16 h-16 bg-pink-100 rounded-full"
            animate={{ x: [0, 10, 0], rotate: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.div 
            className="absolute right-0 bottom-0 w-16 h-16 bg-pink-100 rounded-full"
            animate={{ x: [0, -10, 0], rotate: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          >
            <Heart size={64} className="text-pink-500 fill-pink-500" />
          </motion.div>
        </div>
        <h2 className="text-2xl font-serif text-gray-800 text-center italic">
          For the most special person...
        </h2>
      </motion.div>
    </div>
  );
};

export const BirthdayTextScene = ({ onComplete }: { onComplete: () => void }) => {
  const { playSound } = useSound();

  useEffect(() => {
    playSound(BIRTHDAY_CONFIG.sounds.magicReveal, 0.5);
    const timer = setTimeout(onComplete, 5000);
    return () => clearTimeout(timer);
  }, [onComplete, playSound]);

  return (
    <div className="flex items-center justify-center h-screen w-full px-6">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="text-center"
      >
        <motion.h1
          initial={{ scale: 0.8, letterSpacing: "0.5em" }}
          animate={{ scale: 1, letterSpacing: "0.1em" }}
          transition={{ duration: 3, ease: "easeOut" }}
          className="text-5xl md:text-8xl font-serif font-bold text-pink-200 text-glow-pink mb-4"
        >
          Happy Birthday
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1.5 }}
          className="text-4xl md:text-7xl font-serif italic text-pink-300 text-glow-pink"
        >
          {BIRTHDAY_CONFIG.targetName}
        </motion.h2>
      </motion.div>
    </div>
  );
};
