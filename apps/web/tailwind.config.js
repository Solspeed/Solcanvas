/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        mq1050: {
          raw: "screen and (max-width: 1050px)",
        },
        mq1000: {
          raw: "screen and (max-width: 1000px)",
        },
        mq725: {
          raw: "screen and (max-width: 725px)",
        },
        mq450: {
          raw: "screen and (max-width: 450px)",
        },
      },
      colors: {
        plum: {
          100: "#dfa9fe",
          200: "#dca7fb",
        },
      },
      fontFamily: {
        inter: "Inter",
        nunito: "Nunito",
        archivo: "Archivo",
        silkscreen: "Silkscreen",
      },
    },
  },
  plugins: [],
};
