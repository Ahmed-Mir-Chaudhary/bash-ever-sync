import { motion } from "motion/react";
import { useEffect } from "react";
import { BIRTHDAY_CONFIG } from "../config";
import { Heart, Sparkles } from "lucide-react";
import { useSound } from "../hooks/useSound";

export const HeartCollageFinale = () => {
  const { playSound } = useSound();

  useEffect(() => {
    playSound(BIRTHDAY_CONFIG.sounds.magicReveal, 0.2);
    const timer = setTimeout(() => {
      playSound(BIRTHDAY_CONFIG.sounds.loveSound, 0.2);
    }, 5000);
    return () => clearTimeout(timer);
  }, [playSound]);

  // Heart shape formula
  const getHeartPoint = (t: number, scale: number = 15) => {
    const x = 16 * Math.pow(Math.sin(t), 3);
    const y = -(13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t));
    return { x: x * scale, y: y * scale };
  };

  const images = BIRTHDAY_CONFIG.collageImages;

  return (
    <div className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-[#050505]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-pink-900/15 via-transparent to-transparent" />

      {/* Subtle floating sparkles in background */}
      {Array.from({ length: 8 }).map((_, i) => (
        <motion.div
          key={`sparkle-${i}`}
          className="absolute"
          style={{
            left: `${15 + Math.random() * 70}%`,
            top: `${15 + Math.random() * 70}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0, 0.4, 0],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: 4 + Math.random() * 2,
            repeat: Infinity,
            delay: i * 0.7,
            ease: "easeInOut",
          }}
        >
          <Sparkles size={14} className="text-pink-300/30" />
        </motion.div>
      ))}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3 }}
        className="relative w-full h-full flex items-center justify-center"
      >
        {images.map((img, i) => {
          const t = (i / images.length) * 2 * Math.PI;
          const point = getHeartPoint(t, 10);

          return (
            <motion.div
              key={i}
              initial={{
                x: (Math.random() - 0.5) * 600,
                y: (Math.random() - 0.5) * 600,
                rotate: Math.random() * 180 - 90,
                opacity: 0,
                scale: 0.5,
              }}
              animate={{
                x: point.x,
                y: point.y,
                rotate: 0,
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 4,
                delay: i * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="absolute w-12 h-12 md:w-20 md:h-20 p-[2px] bg-white/90 rounded-lg shadow-lg"
              style={{
                boxShadow: "0 4px 20px rgba(236,72,153,0.15)",
              }}
            >
              <img
                src={img}
                alt="Collage"
                className="w-full h-full object-cover rounded-md"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          );
        })}

        <motion.div
          initial={{ opacity: 0, scale: 0.3 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 5, duration: 3, ease: [0.22, 1, 0.36, 1] }}
          className="z-10 text-center"
        >
          <motion.div
            animate={{ scale: [1, 1.08, 1] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <Heart
              size={90}
              className="text-pink-500 fill-pink-500 mx-auto mb-6"
              style={{
                filter: "drop-shadow(0 0 30px rgba(236,72,153,0.4)) drop-shadow(0 0 60px rgba(236,72,153,0.15))",
              }}
            />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 6, duration: 2 }}
            className="text-4xl md:text-6xl font-serif font-bold text-white"
            style={{
              textShadow: "0 0 40px rgba(236,72,153,0.3)",
            }}
          >
            Forever Yours, {BIRTHDAY_CONFIG.targetName}
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: "50%" }}
            transition={{ delay: 7, duration: 2 }}
            className="h-[1px] bg-gradient-to-r from-transparent via-pink-400/40 to-transparent mx-auto mt-5"
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 7.5, duration: 2 }}
            className="mt-4 text-pink-200/40 font-sans tracking-[0.4em] uppercase text-xs"
          >
            Happy Birthday
          </motion.p>
        </motion.div>
      </motion.div>
    </div>
  );
};
