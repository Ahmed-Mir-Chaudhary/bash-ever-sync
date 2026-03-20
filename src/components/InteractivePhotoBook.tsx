import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { BIRTHDAY_CONFIG } from "../config";
import { ChevronRight, ChevronLeft, Heart } from "lucide-react";
import { useSound } from "../hooks/useSound";

export const InteractivePhotoBook = ({ onComplete }: { onComplete: () => void }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const { playSound } = useSound();
  const totalPages = Math.ceil(BIRTHDAY_CONFIG.images.length / 2);

  const nextPage = () => {
    playSound(BIRTHDAY_CONFIG.sounds.pageFlip, 0.15);
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    } else {
      onComplete();
    }
  };

  const prevPage = () => {
    playSound(BIRTHDAY_CONFIG.sounds.pageFlip, 0.15);
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen w-full px-4 relative">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
        className="mb-8 text-center"
      >
        <div className="bg-white/5 backdrop-blur-md px-8 py-4 rounded-full border border-white/10 shadow-xl">
          <h2 className="text-xl md:text-2xl font-serif italic text-pink-200/90 flex items-center gap-3 justify-center">
            <Heart size={16} className="text-pink-400/60 fill-pink-400/60" />
            {BIRTHDAY_CONFIG.birthdayMessage}
            <Heart size={16} className="text-pink-400/60 fill-pink-400/60" />
          </h2>
        </div>
      </motion.div>

      <div className="relative w-full max-w-4xl aspect-[1.4/1] md:aspect-[1.6/1]" style={{ perspective: "1200px" }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ rotateY: 60, opacity: 0, scale: 0.95 }}
            animate={{ rotateY: 0, opacity: 1, scale: 1 }}
            exit={{ rotateY: -60, opacity: 0, scale: 0.95 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="w-full h-full flex gap-1 md:gap-3"
          >
            {/* Left Page */}
            <div className="flex-1 bg-white rounded-l-xl shadow-2xl overflow-hidden border-r border-gray-100 p-2 md:p-4">
              <div className="w-full h-full rounded-lg overflow-hidden relative group">
                <motion.img
                  initial={{ scale: 1.08, opacity: 0.8 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                  src={BIRTHDAY_CONFIG.images[currentPage * 2]}
                  alt="Memory"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>

            {/* Right Page */}
            <div className="flex-1 bg-white rounded-r-xl shadow-2xl overflow-hidden p-2 md:p-4">
              <div className="w-full h-full rounded-lg overflow-hidden relative group">
                {BIRTHDAY_CONFIG.images[currentPage * 2 + 1] ? (
                  <motion.img
                    initial={{ scale: 1.08, opacity: 0.8 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1.2, ease: "easeOut", delay: 0.1 }}
                    src={BIRTHDAY_CONFIG.images[currentPage * 2 + 1]}
                    alt="Memory"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-b from-pink-50 to-white flex items-center justify-center">
                    <p className="text-pink-300/70 font-serif italic text-lg">The End of this Chapter...</p>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Controls */}
        <div className="absolute inset-y-0 -left-4 md:-left-14 flex items-center">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={prevPage}
            disabled={currentPage === 0}
            className="p-3 rounded-full bg-white/5 hover:bg-white/15 disabled:opacity-0 transition-all duration-300 backdrop-blur-sm"
          >
            <ChevronLeft size={28} className="text-white/80" />
          </motion.button>
        </div>
        <div className="absolute inset-y-0 -right-4 md:-right-14 flex items-center">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={nextPage}
            className="p-3 rounded-full bg-white/5 hover:bg-white/15 transition-all duration-300 backdrop-blur-sm"
          >
            <ChevronRight size={28} className="text-white/80" />
          </motion.button>
        </div>
      </div>

      <div className="mt-8 flex gap-3">
        {Array.from({ length: totalPages }).map((_, i) => (
          <motion.div
            key={i}
            animate={{ width: i === currentPage ? 24 : 8 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className={`h-2 rounded-full transition-colors duration-500 ${
              i === currentPage ? "bg-pink-400" : "bg-white/15"
            }`}
          />
        ))}
      </div>
    </div>
  );
};
