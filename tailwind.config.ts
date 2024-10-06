import type { Config } from "tailwindcss";
import { PluginAPI } from "tailwindcss/types/config";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/utils/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary)",
      },
      fontFamily: {
        syne: ["Syne", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [
    function ({ addUtilities }: PluginAPI) {
      addUtilities({
        "::-webkit-scrollbar": {
          width: "10px",
          height: "10px",
          background: "#222",
        },
        "::-webkit-scrollbar-thumb": {
          background: "#555",
          borderRadius: "2px",
        },
      });
    },
  ],
};
export default config;
