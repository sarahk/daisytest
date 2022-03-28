module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },

    extend: {
      fontFamily: {
        sans: ["Lexend", '"PT Sans"', "sans-serif"],
      },
    },
  },
  plugins: [require("tailwindcss-debug-screens"), require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#254050",
          "primary-focus": "#65ADA5",
          "primary-content": "#ffffff",
          secondary: "#f000b8",
          "secondary-focus": "#bd0091",
          "secondary-content": "#ffffff",
          accent: "#37cdbe",
          "accent-focus": "#2aa79b",
          "accent-content": "#ffffff",
          neutral: "#FCF5DD",
          "neutral-focus": "#FCF3DC",
          "neutral-content": "#2b4762",
          "base-100": "#ffffff",
          "base-200": "#f9fafb",
          "base-300": "#d1d5db",
          "base-content": "#1f2937",
          info: "#2094f3",
          "info-content": "#FFFFFF",
          success: "#009485",
          "success-content": "#FFFFFF",
          warning: "#ff9900",
          "warning-content": "#1f2937",
          error: "#ff5724",
          "error-content": "#1f2937",
        },
      },
    ],
  },
};
