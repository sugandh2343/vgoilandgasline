/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#5B1E1E',
        secondary: '#D4AF37',
        background: '#F8F4EF',
        dark: '#1A1A1A',
      },
      fontFamily: {
        heading: ['"Playfair Display"', 'serif'],
        body: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        luxury: '0 16px 40px rgba(26, 26, 26, 0.12)',
      },
      backgroundImage: {
        'luxury-gradient':
          'linear-gradient(135deg, rgba(91,30,30,0.88) 0%, rgba(26,26,26,0.72) 100%)',
      },
    },
  },
  plugins: [],
};
