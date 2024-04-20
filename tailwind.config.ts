import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#01303A',
        secondary: '#083C2F',
        'slate-gray': '#394649',
        lemon: '#E7F874',
      },
      screens: {
        wide: '1320px',
      },
    },
  },
  plugins: [],
};
export default config;
