/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: 'rgb(146, 157, 255)',
          DEFAULT: 'rgb(146, 157, 255)',
          dark: 'rgb(146, 157, 255)',
        },
        secondary: {
          light: 'rgb(53, 41, 226)',
          DEFAULT: 'rgb(53, 41, 226)',
          dark: 'rgb(42, 33, 181)',
        },
        accent: {
          light: 'rgb(255, 255, 255)',
          DEFAULT: 'rgb(255, 255, 255)',
          dark: 'rgb(245, 245, 245)',
        }
      },
      fontFamily: {
        'sans': ['IBM Plex Sans JP', 'Noto Sans JP', 'sans-serif'],
        'japanese': ['IBM Plex Sans JP', 'Noto Sans JP', 'sans-serif'],
        'korean': ['Noto Sans KR', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'slide-down': 'slideDown 0.8s ease-out',
        'scale-in': 'scaleIn 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      }
    },
  },
  plugins: [],
}
