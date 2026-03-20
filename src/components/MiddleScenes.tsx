import { motion } from "motion/react";
import { useEffect } from "react";
import { Heart, Sparkles } from "lucide-react";
import { BIRTHDAY_CONFIG } from "../config";
import { useSound } from "../hooks/useSound";

export const HeartScene = ({ onComplete }: { onComplete: () => void }) => {
  const { playSound } = useSound();

  useEffect(() => {
    playSound(BIRTHDAY_CONFIG.sounds.loveSound, 0.2);
    const timer = setTimeout(onComplete, 4000);

    return () => {
      clearTimeout(timer);
    };
  }, [onComplete, playSound]);

  return (
    <div className="flex items-center justify-center h-screen w-full">
      {/* Floating mini hearts */}
      {Array.from({ length: 12 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          initial={{
            x: (Math.random() - 0.5) * 300,
            y: 100,
            opacity: 0,
            scale: 0.3,
          }}
          animate={{
            y: -300,
            opacity: [0, 0.6, 0],
            scale: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            delay: i * 0.3,
            ease: "easeOut",
          }}
        >
          <Heart size={20} className="text-pink-400/60 fill-pink-400/40" />
        </motion.div>
      ))}

      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: [0, 1.15, 1], opacity: 1 }}
        transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.div
          animate={{ scale: [1, 1.08, 1] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <Heart
            size={150}
            className="text-pink-500 fill-pink-500"
            style={{
              filter: "drop-shadow(0 0 30px rgba(236,72,153,0.5)) drop-shadow(0 0 60px rgba(236,72,153,0.2))",
            }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export const CuteCardScene = ({ onComplete }: { onComplete: () => void }) => {
  const { playSound } = useSound();

  useEffect(() => {
    playSound(BIRTHDAY_CONFIG.sounds.loveSound, 0.2);
    const timer = setTimeout(onComplete, 5000);
    return () => clearTimeout(timer);
  }, [onComplete, playSound]);

  return (
    <div className="flex items-center justify-center h-screen w-full px-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.85, rotateY: 90 }}
        animate={{ opacity: 1, scale: 1, rotateY: 0 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="w-full max-w-md aspect-[4/5] bg-gradient-to-b from-white to-pink-50 rounded-3xl shadow-2xl overflow-hidden relative flex flex-col items-center justify-center p-8"
        style={{
          boxShadow: "0 25px 60px rgba(236,72,153,0.15), 0 0 40px rgba(236,72,153,0.08)",
        }}
      >
        {/* Decorative sparkles */}
        <motion.div
          className="absolute top-6 right-8"
          animate={{ rotate: [0, 15, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <Sparkles size={24} className="text-pink-300/60" />
        </motion.div>
        <motion.div
          className="absolute top-10 left-8"
          animate={{ rotate: [0, -15, 0], scale: [1, 1.15, 1] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        >
          <Sparkles size={18} className="text-pink-200/50" />
        </motion.div>

        <div className="relative w-48 h-48 mb-8 flex items-center justify-center">
          {/* Gentle pulsing rings */}
          <motion.div
            className="absolute w-32 h-32 rounded-full border border-pink-200/30"
            animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0, 0.3] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute w-24 h-24 rounded-full border border-pink-300/20"
            animate={{ scale: [1, 1.4, 1], opacity: [0.2, 0, 0.2] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          />
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <Heart size={64} className="text-pink-500 fill-pink-500" style={{ filter: "drop-shadow(0 0 15px rgba(236,72,153,0.4))" }} />
          </motion.div>
        </div>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1.5 }}
          className="text-2xl font-serif text-gray-700 text-center italic"
        >
          For the most special person...
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1.5 }}
          className="text-sm font-sans text-pink-400/70 mt-3 tracking-widest uppercase"
        >
          with all my love
        </motion.p>
      </motion.div>
    </div>
  );
};

export const BirthdayTextScene = ({ onComplete }: { onComplete: () => void }) => {
  const { playSound } = useSound();

  useEffect(() => {
    playSound(BIRTHDAY_CONFIG.sounds.magicReveal, 0.2);
    const timer = setTimeout(onComplete, 6000);
    return () => clearTimeout(timer);
  }, [onComplete, playSound]);

  return (
    <div className="flex items-center justify-center h-screen w-full px-6">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="text-center"
      >
        <motion.h1
          initial={{ scale: 0.8, letterSpacing: "0.5em", opacity: 0 }}
          animate={{ scale: 1, letterSpacing: "0.08em", opacity: 1 }}
          transition={{ duration: 3.5, ease: [0.22, 1, 0.36, 1] }}
          className="text-5xl md:text-8xl font-serif font-bold text-pink-200 mb-4"
          style={{
            textShadow: "0 0 40px rgba(236,72,153,0.3), 0 0 80px rgba(236,72,153,0.1)",
          }}
        >
          Happy Birthday
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 2, ease: [0.22, 1, 0.36, 1] }}
          className="text-4xl md:text-7xl font-serif italic text-pink-300"
          style={{
            textShadow: "0 0 30px rgba(236,72,153,0.25)",
          }}
        >
          {BIRTHDAY_CONFIG.targetName}
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: "60%" }}
          transition={{ delay: 2.5, duration: 2, ease: [0.22, 1, 0.36, 1] }}
          className="h-[1px] bg-gradient-to-r from-transparent via-pink-400/50 to-transparent mx-auto mt-6"
        />
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3, duration: 2 }}
          className="text-pink-200/50 font-sans tracking-[0.4em] uppercase text-xs mt-6"
        >
          You make every day beautiful
        </motion.p>
      </motion.div>
    </div>
  );
};
