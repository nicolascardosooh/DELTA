import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        azuldelta: "#1e4493",
      },
    },
  },
  plugins: [],
};

export default config;
