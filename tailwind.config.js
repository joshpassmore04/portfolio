/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        main: "url('/blurry-gradient-haikei.png')" 
      },
      fontFamily: {
        normal: ["JetBrains Mono", "sans-serif"],
        headings: ["Lexend Tera", "sans-serif"],
      },
      keyframes: {
        headerFade: {
          '0%': {
            opacity: 0,
            transform: 'translate3d(0, 200%, 0)',
          },
          '100%': {
            opacity: 1,
            transform: 'none',
          },
        },
        secondFade: {
          '0%': {
            opacity: 0,
            transform: 'translate3d(0, 250%, 0)',
          },
          '100%': {
            opacity: 1,
            transform: 'none',
          },
        },
        lastFade: {
          '0%': {
            opacity: 0,
            transform: 'translate3d(0, 50%, 0)',
          },
          '100%': {
            opacity: 1,
            transform: 'none',
          },
        },
        leftSlideFade: {
          '0%': {
            opacity: 0,
            transform: 'translate3d(-50%, 0, 0)',
          },
          '100%': {
            opacity: 1,
            transform: 'none',
          },
        },
      },
      animation: {
        headerFade: 'headerFade 1s ease-in-out', // 1s duration, ease-in-out timing
        secondFade: 'secondFade 1.2s ease-in-out', // 1s duration, ease-in-out timing
        lastFade: 'lastFade 3s ease-in-out',
        leftSlideFade: 'leftSlideFade 1s ease-in-out',
      },
    },
  },
  plugins: [],
}
