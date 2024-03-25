import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark': '#1B1E24',
        'darkest': '#121418',
        'lime': '#FFD155',
        'jade': '#00C299',
        'lavender': '#7269E3',
        'indigo': '#50A2FF',
        'peach': '#FCC699',
      },
      fontFamily: {
        'funky': ["Love Ya Like A Sister"],
        'chill': ["Itim"]
      }
    },
  },
  
  plugins: [],
};
export default config;
