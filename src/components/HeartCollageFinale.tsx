import { motion } from "motion/react";
import { useEffect } from "react";
import { BIRTHDAY_CONFIG } from "../config";
import { Heart } from "lucide-react";
import { useSound } from "../hooks/useSound";

export const HeartCollageFinale = () => {
  const { playSound } = useSound();

  useEffect(() => {
    playSound(BIRTHDAY_CONFIG.sounds.magicReveal, 0.4);
    const timer = setTimeout(() => {
      playSound(BIRTHDAY_CONFIG.sounds.loveSound, 0.5);
    }, 5000);
    return () => clearTimeout(timer);
  }, [playSound]);

  // Heart shape formula:
  // x = 16 * sin^3(t)
  // y = 13 * cos(t) - 5 * cos(2t) - 2 * cos(3t) - cos(4t)
  const getHeartPoint = (t: number, scale: number = 15) => {
    const x = 16 * Math.pow(Math.sin(t), 3);
    const y = -(13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t));
    return { x: x * scale, y: y * scale };
  };

  const images = BIRTHDAY_CONFIG.collageImages;

  return (
    <div className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-[#050505]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-pink-900/20 via-transparent to-transparent" />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="relative w-full h-full flex items-center justify-center"
      >
        {images.map((img, i) => {
          const t = (i / images.length) * 2 * Math.PI;
          const point = getHeartPoint(t, 10); // Base scale for mobile
          const desktopPoint = getHeartPoint(t, 18); // Larger scale for desktop

          return (
            <motion.div
              key={i}
              initial={{ 
                x: (Math.random() - 0.5) * 1000, 
                y: (Math.random() - 0.5) * 1000, 
                rotate: Math.random() * 360,
                opacity: 0 
              }}
              animate={{ 
                x: [null, point.x], 
                y: [null, point.y],
                rotate: 0,
                opacity: 1
              }}
              transition={{ 
                duration: 3, 
                delay: i * 0.1,
                ease: [0.22, 1, 0.36, 1]
              }}
              className="absolute w-12 h-12 md:w-20 md:h-20 p-1 bg-white rounded-md shadow-lg"
              style={{
                // Responsive positioning using media query logic in JS is hard, 
                // so we use CSS variables or just a scale transform
              }}
            >
              <img
                src={img}
                alt="Collage"
                className="w-full h-full object-cover rounded-sm"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          );
        })}

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 5, duration: 2 }}
          className="z-10 text-center"
        >
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Heart size={100} className="text-pink-500 fill-pink-500 mx-auto mb-6 filter drop-shadow-[0_0_30px_rgba(236,72,153,0.6)]" />
          </motion.div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white text-glow-pink">
            Forever Yours, {BIRTHDAY_CONFIG.targetName}
          </h1>
          <p className="mt-4 text-pink-200/60 font-sans tracking-[0.3em] uppercase text-sm">
            Happy Birthday
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};
