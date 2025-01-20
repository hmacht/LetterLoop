import type { Config } from 'tailwindcss';
import flowbitePlugin from 'flowbite/plugin'

export default {
  content: ['./src/**/*.{html,js,svelte,ts}', './node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'],
  darkMode: 'selector',
  theme: {
    extend: {
      colors: {
        // flowbite-svelte
        primary: {
          50: '#FFEFF1',
          100: '#FFDFE4',
          200: '#FFC1C9',
          300: '#FFA1AC',
          400: '#FF7386',
          500: '#EF4A5F',
          600: '#D83F55',
          700: '#F43653',
          800: '#991F34',
          900: '#721726'
        }
      }
    }
  },
  plugins: [flowbitePlugin]
} as Config;