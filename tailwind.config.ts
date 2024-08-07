import type { Config } from 'tailwindcss';
const plugin = require('tailwindcss/plugin');

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    plugin(function ({ addVariant }: { addVariant: (name: string, generator: string) => void }) {
      // this class is applied to `html` by `src/util/theme-effect.ts`, similar
      // to how `dark:` gets enabled
      addVariant('theme-system', '.theme-system &');
    }),
  ],
  future: {
    hoverOnlyWhenSupported: true,
  },
};
export default config;
