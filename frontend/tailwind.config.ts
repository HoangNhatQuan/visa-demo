import type { Config } from 'tailwindcss';
import daisyui from 'daisyui';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './contexts/**/*.{ts,tsx}',
  ],
  plugins: [daisyui],
  daisyui: {
    themes: ['light'],
    logs: false,
  },
};

export default config;
