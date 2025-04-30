


// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./app/**/*.{js,ts,jsx,tsx}",  // si tu utilises le dossier /app
      "./pages/**/*.{js,ts,jsx,tsx}", // pour le dossier /pages
      "./components/**/*.{js,ts,jsx,tsx}" // tes composants
    ],
    theme: {
      extend: {
        keyframes: {
          marquee: {
            '0%': { transform: 'translateX(100%)' },
            '100%': { transform: 'translateX(-100%)' },
          },
        },
        animation: {
          marquee: 'marquee 10s linear infinite',
        },
      },
    },
    plugins: [],
  }
  