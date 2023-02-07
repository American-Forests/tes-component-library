/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{js,jsx,ts,tsx}', './stories/*'],
  theme: {
    extend: {
      colors: {
        "brand-green": "#6cc296",
        "brand-green-dark": "#33966d",
        "brand-green-pale": "#DFF4E5",
        "brand-mint-green": "#6AC397",
        "brand-orange": "#f89c3e",
        "brand-orange-dark": "#d98935",
        "brand-gray-pale": "#EDEDED",
        "brand-gray": "#f5f5f5",
        "brand-blue-pale": "#CAE7F0",
      },
      fontSize: {
        annotation: "0.7rem",
        caption: "0.9rem",
        body: "1rem",
        subtitle: "1.125rem",
        title: "1.563rem",
        headline: "1.953rem",
      },
      screens: {
        print: { raw: "print" },
      },
    },
  },
  plugins: [],
}
