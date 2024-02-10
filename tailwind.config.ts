import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'white': '#ffffff',
        'modal-bg' : '#00000080',
        'custom-white': '#F4F6FA',
        'custom-black' : '#6E6E6E',
        'purple': '#3f3cbb',
        'midnight': '#121063',
        'metal': '#1C2499',
        'tahiti': '#CED8E6',
        'custom-white-bg' :'#F4F6FA1A',
        'custom-text-color': '#1E1E1E',
        'bubble-gum': '#ff77e9',
        'bermuda': '#78dcca',
        'custom-green':"#03C161",
        'custom-green-bg': "#03C1611A",
        'custom-text-color-black' : '#414833',
        'custom-text-color-black-bg' : '#4148331A',
        'custom-red' : '#DC2626',
        'custom-brown' : '#85340A',
        'custom-purple' : '#8338EC',
        'custom-purple-bg' : '#8338ec1A',
        'custom-brown-bg' : '#85340A1A'

      }
    },
  },
  plugins: [],
};
export default config;
