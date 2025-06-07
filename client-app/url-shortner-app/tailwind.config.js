/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}", // update with your source paths
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-img': "url('./src/assets/bg.jpg')",
      },
    },
  },
  plugins: [],
};
