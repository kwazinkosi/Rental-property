/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#FFA500', // orange (for buttons)
        secondary: '#001F3F', // navy (contrast for buttons and text)
        tertiary: '#FF6F61', // coral
        neutral: '#F5F5F5',   // white smoke (for background)
        neutral2: '#D3D3D3',  // light gray (for background)
        black: '#000000',     // black (for text)
        white: '#FFFFFF',     // white (for text)
      },  
    },
  },
  plugins: [],
}

