import { motion, useMotionValue, useTransform, AnimatePresence } from "motion/react";
import { useState } from "react";
import { BIRTHDAY_CONFIG } from "../config";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { useSound } from "../hooks/useSound";

export const InteractivePhotoBook = ({ onComplete }: { onComplete: () => void }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const { playSound } = useSound();
  const totalPages = Math.ceil(BIRTHDAY_CONFIG.images.length / 2);

  const nextPage = () => {
    playSound(BIRTHDAY_CONFIG.sounds.pageFlip);
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    } else {
      onComplete();
    }
  };

  const prevPage = () => {
    playSound(BIRTHDAY_CONFIG.sounds.pageFlip);
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen w-full px-4 relative">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8 text-center"
      >
        <div className="bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20 shadow-xl">
          <h2 className="text-xl md:text-2xl font-serif italic text-pink-200">
            {BIRTHDAY_CONFIG.birthdayMessage}
          </h2>
        </div>
      </motion.div>

      <div className="relative w-full max-w-4xl aspect-[1.4/1] md:aspect-[1.6/1] perspective-1000">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ rotateY: 90, opacity: 0 }}
            animate={{ rotateY: 0, opacity: 1 }}
            exit={{ rotateY: -90, opacity: 0 }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            className="w-full h-full flex gap-2 md:gap-4"
          >
            {/* Left Page */}
            <div className="flex-1 bg-white rounded-l-lg shadow-2xl overflow-hidden border-r border-gray-200 p-2 md:p-4">
              <div className="w-full h-full rounded-md overflow-hidden relative group">
                <motion.img
                  initial={{ x: -30, scale: 1.1 }}
                  animate={{ x: 0, scale: 1 }}
                  exit={{ x: 30, scale: 1.1 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  src={BIRTHDAY_CONFIG.images[currentPage * 2]}
                  alt="Memory"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>

            {/* Right Page */}
            <div className="flex-1 bg-white rounded-r-lg shadow-2xl overflow-hidden p-2 md:p-4">
              <div className="w-full h-full rounded-md overflow-hidden relative group">
                {BIRTHDAY_CONFIG.images[currentPage * 2 + 1] ? (
                  <motion.img
                    initial={{ x: 30, scale: 1.1 }}
                    animate={{ x: 0, scale: 1 }}
                    exit={{ x: -30, scale: 1.1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    src={BIRTHDAY_CONFIG.images[currentPage * 2 + 1]}
                    alt="Memory"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <div className="w-full h-full bg-pink-50 flex items-center justify-center">
                    <p className="text-pink-300 font-serif italic">The End of this Chapter...</p>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Controls */}
        <div className="absolute inset-y-0 -left-4 md:-left-12 flex items-center">
          <button
            onClick={prevPage}
            disabled={currentPage === 0}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 disabled:opacity-0 transition-all"
          >
            <ChevronLeft size={32} className="text-white" />
          </button>
        </div>
        <div className="absolute inset-y-0 -right-4 md:-right-12 flex items-center">
          <button
            onClick={nextPage}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all"
          >
            <ChevronRight size={32} className="text-white" />
          </button>
        </div>
      </div>

      <div className="mt-8 flex gap-2">
        {Array.from({ length: totalPages }).map((_, i) => (
          <div
            key={i}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              i === currentPage ? "bg-pink-400 w-6" : "bg-white/20"
            }`}
          />
        ))}
      </div>
    </div>
  );
};
