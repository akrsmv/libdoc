/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  corePlugins: {
    // Enable / diable core plugins
    backgroundColor: true,
    textColor: true,
  },
  plugins: [
    // Add your custom utility class
    function ({ addUtilities }) {
      const newUtilities = {
        '.doc-explorer-contents.additional': {
          backgroundColor: 'yellow'
        },
      };
      addUtilities(newUtilities);
    },
  ]
}

