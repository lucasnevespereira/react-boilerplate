/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
export default {
  content: ["./src/**/*.{html,js,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      "light",
      "dark",
      {
        jennyDarkLite: {
          primary: "#FAFDFF",
          secondary: "#151531",
          accent: "#7440F8",
          neutral: "#7440F8",
          base100: "#252549",
          info: "#7440F8",
          success: "#33A580",
          warning: "#B5B54A",
          error: "#A3757D",
        },
      },
    ],
  },
};
