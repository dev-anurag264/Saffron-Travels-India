/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Cormorant Garamond', 'Georgia', 'serif'],
        body: ['DM Sans', 'sans-serif'],
        accent: ['Playfair Display', 'serif'],
      },
      colors: {
        saffron: {
          50: '#fff9f0',
          100: '#ffefd6',
          200: '#ffd9a0',
          300: '#ffbf5f',
          400: '#ff9f20',
          500: '#f07d00',
          600: '#c45e00',
          700: '#9a4500',
          800: '#7a3800',
          900: '#5c2a00',
        },
        earth: {
          50: '#fdf8f3',
          100: '#f5ede0',
          200: '#e8d4b8',
          300: '#d4b08a',
          400: '#b8865c',
          500: '#9a6340',
          600: '#7d4d2f',
          700: '#623c24',
          800: '#4d2f1c',
          900: '#3a2314',
        },
        jade: {
          400: '#34d399',
          500: '#10b981',
          600: '#059669',
        },
        cream: '#fdf8f3',
        charcoal: '#1a1a2e',
        midnight: '#0f0f1a',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-gradient': 'linear-gradient(135deg, rgba(15,15,26,0.85) 0%, rgba(90,45,0,0.6) 50%, rgba(15,15,26,0.8) 100%)',
        'card-gradient': 'linear-gradient(180deg, transparent 40%, rgba(15,15,26,0.95) 100%)',
        'saffron-gradient': 'linear-gradient(135deg, #f07d00 0%, #ff9f20 50%, #c45e00 100%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'slide-in': 'slideIn 0.5s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideIn: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
      boxShadow: {
        'card': '0 4px 40px rgba(0,0,0,0.12)',
        'card-hover': '0 20px 60px rgba(0,0,0,0.2)',
        'saffron': '0 8px 32px rgba(240, 125, 0, 0.35)',
        'glass': '0 8px 32px rgba(0,0,0,0.12)',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
