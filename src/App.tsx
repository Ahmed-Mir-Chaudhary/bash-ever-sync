import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { FloatingParticles, StarBackground, PinkMatrixRain } from "./components/Backgrounds";
import { BackgroundMusic } from "./components/BackgroundMusic";
import { IntroCountdown, HappyReveal } from "./components/IntroScenes";
import { HeartScene, CuteCardScene, BirthdayTextScene } from "./components/MiddleScenes";
import { InteractivePhotoBook } from "./components/InteractivePhotoBook";
import { HeartCollageFinale } from "./components/HeartCollageFinale";
import { useSound } from "./hooks/useSound";
import { BIRTHDAY_CONFIG } from "./config";
import { Heart } from "lucide-react";

type Scene = "countdown" | "happy" | "heart" | "cute" | "book" | "birthdayText" | "finale";

export default function App() {
  const [scene, setScene] = useState<Scene>("countdown");
  const [isStarted, setIsStarted] = useState(false);
  const { playSound } = useSound();

  // Handle scene transitions
  const nextScene = () => {
    playSound(BIRTHDAY_CONFIG.sounds.transition, 0.15);
    if (scene === "countdown") setScene("happy");
    else if (scene === "happy") setScene("heart");
    else if (scene === "heart") setScene("cute");
    else if (scene === "cute") setScene("book");
    else if (scene === "book") setScene("birthdayText");
    else if (scene === "birthdayText") setScene("finale");
  };

  if (!isStarted) {
    return (
      <div className="h-screen w-full flex items-center justify-center bg-[#050505] overflow-hidden relative">
        <PinkMatrixRain />
        <FloatingParticles />
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
          className="z-10 text-center px-6"
        >
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <Heart size={40} className="text-pink-400/60 fill-pink-400/40 mx-auto mb-6" />
          </motion.div>
          <h1
            className="text-4xl md:text-6xl font-serif font-bold text-pink-200/90 mb-3 tracking-tight"
            style={{ textShadow: "0 0 40px rgba(236,72,153,0.2)" }}
          >
            A special gift for you...
          </h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 2 }}
            className="text-pink-300/40 font-sans text-sm tracking-[0.3em] uppercase mb-10"
          >
            tap to begin
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => {
              playSound(BIRTHDAY_CONFIG.sounds.loveSound, 0.2);
              setIsStarted(true);
            }}
            className="px-12 py-4 bg-pink-500/90 text-white rounded-full font-sans font-semibold text-lg hover:bg-pink-500 transition-colors duration-500"
            style={{
              boxShadow: "0 0 30px rgba(236,72,153,0.25), 0 0 60px rgba(236,72,153,0.1)",
            }}
          >
            Open Your Gift
          </motion.button>
        </motion.div>
      </div>
    );
  }

  return (
    <main className="relative h-screen w-full bg-[#050505] overflow-hidden">
      <BackgroundMusic isPlaying={isStarted} scene={scene} />
      {/* Backgrounds */}
      {["countdown", "happy", "heart"].includes(scene) && (
        <>
          <PinkMatrixRain />
          <FloatingParticles />
        </>
      )}
      {["cute", "book", "birthdayText", "finale"].includes(scene) && <StarBackground />}

      <AnimatePresence mode="wait">
        {scene === "countdown" && (
          <motion.div
            key="countdown"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute inset-0 z-10"
          >
            <IntroCountdown onComplete={nextScene} />
          </motion.div>
        )}

        {scene === "happy" && (
          <motion.div
            key="happy"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="absolute inset-0 z-10"
          >
            <HappyReveal onComplete={nextScene} />
          </motion.div>
        )}

        {scene === "heart" && (
          <motion.div
            key="heart"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="absolute inset-0 z-10"
          >
            <HeartScene onComplete={nextScene} />
          </motion.div>
        )}

        {scene === "cute" && (
          <motion.div
            key="cute"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="absolute inset-0 z-10"
          >
            <CuteCardScene onComplete={nextScene} />
          </motion.div>
        )}

        {scene === "book" && (
          <motion.div
            key="book"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="absolute inset-0 z-10"
          >
            <InteractivePhotoBook onComplete={nextScene} />
          </motion.div>
        )}

        {scene === "birthdayText" && (
          <motion.div
            key="birthdayText"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="absolute inset-0 z-10"
          >
            <BirthdayTextScene onComplete={nextScene} />
          </motion.div>
        )}

        {scene === "finale" && (
          <motion.div
            key="finale"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="absolute inset-0 z-10"
          >
            <HeartCollageFinale />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
