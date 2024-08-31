/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", "./index.html"
  ],
  theme: {
    extend: {
      animation: {
        fade: "fade 1.2s ease-in-out",
        slideDown: "slideDown 1s ease-in",
        spin: "spin 7s linear infinite",
        rotate: "spin 7s linear",
        expandContract: 'expandContract 3s forwards',
        slideIn: 'slideIn 3s forwards',
      },
      keyframes: {
        fade: {
          "0%": {
            scale: 0,
            opacity: 0,
          },
          "100%": {
            opacity: 1,
            scale: 1,
          },
        },
        slideDown: {
          "0%": {
            transform: "translateY(-70px)",
            opacity: 0,
          },
          "100%": {
            transform: "translateY(0)",
            opacity: 1,
          },
        },
        expandContract: {
          '0%': { flex: '9 1 0%' },
          '100%': { flex: '5 1 0%' },
        },
        slideIn: {
          '0%': { flex: '1 1 0%', transform: 'translateX(100%)' },
          '100%': { flex: '5 1 0%', transform: 'translateX(0)' },
        },
      },

    },
  },
  plugins: [],
}
