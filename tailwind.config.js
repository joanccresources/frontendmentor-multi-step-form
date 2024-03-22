/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    /*---Start Addapter to bootstrap breakpoints---*/
    container: {
      center: true,
      /*
      padding: {
        DEFAULT: "1rem",
        sm: "calc(18px + 1rem)",
        md: "calc(24px + 1rem)",
        lg: "calc(16px + 1rem)",
        xl: "calc(30px + 1rem)",
        "2xl": "calc(40px + 1rem)",
      },
      */

      // screens: {
      //   sm: "576px",
      //   md: "768px",
      //   lg: "992px",
      //   xl: "1200px",
      //   "2xl": "1400px",
      // },
    },
    /*---End Addapter to bootstrap breakpoints---*/
    extend: {
      colors: {
        "jc-primary": "#262335",
        "jc-secondary": "#241B2F",
        // Primary
        "marine-blue": "hsl(213, 96%, 18%)",
        "purplish-blue": "hsl(243, 100%, 62%)",
        "pastel-blue": "hsl(228, 100%, 84%)",
        "light-blue": "hsl(206, 94%, 87%)",
        "strawberry-red": "hsl(354, 84%, 57%)",
        // Neutral
        "cool-gray": "hsl(231, 11%, 63%)",
        "light-gray": "hsl(229, 24%, 87%)",
        magnolia: "hsl(217, 100%, 97%)",
        alabaster: "hsl(231, 100%, 99%)",
        white: "hsl(0, 0%, 100%)",
      },
      fontFamily: {
        ubuntu: ["var(--font-ubuntu)"],
      },
      screens: {
        "3xl": "1900px",
      },
    },
  },

  plugins: [],
};
