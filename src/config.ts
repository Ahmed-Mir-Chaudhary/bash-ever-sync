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
    "/photos/1.jpg",
    "/photos/2.jpg",
    "/photos/3.jpg",
    "/photos/4.jpg",
  ],
  collageImages: [
    "/photos/c1.jpg",
    "/photos/c2.jpg",
    "/photos/c3.jpg",
    "/photos/c4.jpg",
    "/photos/c5.jpg",
    "/photos/c6.jpg",
    "/photos/c7.jpg",
    "/photos/c8.jpg",
    "/photos/c9.jpg",
    "/photos/c10.jpg",
    "/photos/c11.jpg",
    "/photos/c12.jpg",
    "/photos/c13.jpg",
    "/photos/c14.jpg",
    "/photos/c15.jpg",
    "/photos/c16.jpg",
    "/photos/c17.jpg",
    "/photos/c18.jpg",
    "/photos/c19.jpg",
    "/photos/c20.jpg",
  ],
  sounds: {
    transition: "https://cdn.pixabay.com/audio/2022/03/10/audio_d8d37f79de.mp3", // Gentle whoosh
    heartbeat: "https://cdn.pixabay.com/audio/2022/10/30/audio_607db20d56.mp3", // Soft heartbeat
    pageFlip: "https://cdn.pixabay.com/audio/2022/03/19/audio_78ae578740.mp3", // Gentle page turn
    countdownTick: "https://cdn.pixabay.com/audio/2022/03/15/audio_caa625dafc.mp3", // Soft water drop tick
    magicReveal: "https://cdn.pixabay.com/audio/2022/01/18/audio_8db1f1b5a2.mp3", // Gentle magic sparkle
    loveSound: "https://cdn.pixabay.com/audio/2021/08/04/audio_0625c1539c.mp3", // Soft romantic chime
    backgroundMusic: "https://cdn.pixabay.com/audio/2022/02/16/audio_eca7b7c4f6.mp3", // Soft romantic piano
    backgroundMusicBollywood: "/music/bollywood-romantic.webm", // Tum Hi Ho - Bollywood romantic
  },
  colors: {
    primary: "#ff85a2", // Soft pink
    secondary: "#fce4ec", // Blush
    accent: "#d81b60", // Deep rose
    background: "#050505", // Dark cinematic
  }
};
