/**
 * BIRTHDAY_CONFIG
 * 
 * Edit this file to customize the birthday experience.
 * - targetName: The name of the birthday girl.
 * - birthdayMessage: The message shown above the photo book.
 * - images: Array of URLs for the interactive photo book (600x800 recommended).
 * - collageImages: Array of URLs for the final heart collage (200x200 recommended).
 */
export const BIRTHDAY_CONFIG = {
  targetName: "Hiba",
  birthdayMessage: "Happy Birthday Hiba ❤️",
  countdownStart: 3,
  images: [
    "https://picsum.photos/seed/hiba1/600/800",
    "https://picsum.photos/seed/hiba2/600/800",
    "https://picsum.photos/seed/hiba3/600/800",
    "https://picsum.photos/seed/hiba4/600/800",
    "https://picsum.photos/seed/hiba5/600/800",
    "https://picsum.photos/seed/hiba6/600/800",
  ],
  collageImages: Array.from({ length: 20 }, (_, i) => `https://picsum.photos/seed/collage${i}/200/200`),
  sounds: {
    transition: "https://assets.mixkit.co/active_storage/sfx/2568/2568-preview.mp3", // Soft chime/whoosh
    heartbeat: "https://assets.mixkit.co/active_storage/sfx/1399/1399-preview.mp3", // Soft thud
    pageFlip: "https://assets.mixkit.co/active_storage/sfx/481/481-preview.mp3", // Paper rustle
    countdownTick: "https://assets.mixkit.co/active_storage/sfx/2571/2571-preview.mp3", // Soft tick
    magicReveal: "https://assets.mixkit.co/active_storage/sfx/2434/2434-preview.mp3", // Sparkle/Magic
    loveSound: "https://assets.mixkit.co/active_storage/sfx/2568/2568-preview.mp3", // Romantic chime
    backgroundMusic: "https://assets.mixkit.co/music/preview/mixkit-romantic-memories-139.mp3", // Romantic instrumental
  },
  colors: {
    primary: "#ff85a2", // Soft pink
    secondary: "#fce4ec", // Blush
    accent: "#d81b60", // Deep rose
    background: "#050505", // Dark cinematic
  }
};
