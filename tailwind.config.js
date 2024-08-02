// Tailwind CSS Configuration (tailwind.config.js)
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {},
    screens: {
      'phone': '310px',
      'tablet': '640px',
      'laptop': '1024px',
      'desktop': '1280px',
    },
  },
  plugins: [
    function ({ addUtilities, theme }) {
      addUtilities({
        '.clip-custom-curve': {
          clipPath: 'polygon(0% 0%, 100% 0%, 83% 22%, 17% 22%)',
        },
        '.clip-custom-curve-phone': {
          clipPath: 'polygon(0% 0%, 100% 0%, 70% 10%, 30% 10%)',
        },
      }, ['responsive']);
    },
  ],
};
