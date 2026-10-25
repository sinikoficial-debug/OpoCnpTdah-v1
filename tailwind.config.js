/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#0B1120', // Main background anti-fatigue
          900: '#10172A',
          850: '#131C31', // Card background
          800: '#1A253F',
          700: '#233252',
          600: '#32456C',
        },
        bone: {
          50: '#FFFFFF',
          100: '#F8FAFC',
          200: '#F1F5F9', // Bone white text
          300: '#E2E8F0',
          400: '#CBD5E1',
          500: '#94A3B8',
        },
        emerald: {
          400: '#34D399',
          500: '#10B981', // Success / Dopamine
          600: '#059669',
        },
        amber: {
          400: '#FBBF24',
          500: '#F59E0B', // Soft error / warning (zero cortisol spike)
          600: '#D97706',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'Menlo', 'Monaco', 'Courier New', 'monospace']
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in': 'fadeIn 0.25s ease-out',
        'slide-up': 'slideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
        'flip': 'flip 0.6s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(4px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
}
