/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FAF8F5',
          100: '#F5EFE6',
          200: '#EBDDCF',
          300: '#DFCAB4',
          400: '#CEB295',
        },
        cacao: {
          900: '#1B130E',
          800: '#2A1D16',
          700: '#3D2C22',
          600: '#533D30',
          500: '#715443',
        },
        terracotta: {
          400: '#D97554',
          500: '#C25938',
          600: '#A44527',
          700: '#84341B',
        },
        pistachio: {
          100: '#E8EFE6',
          200: '#D2DFCE',
          500: '#73956F',
          600: '#5E7D5A',
        },
        tomatina: {
          500: '#D93E2B',
          600: '#BA2F1F',
        },
        caramel: {
          400: '#E9B55C',
          500: '#D69E3D',
          600: '#B88028',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      },
      animation: {
        fadeIn: 'fadeIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      }
    },
  },
  plugins: [],
}
