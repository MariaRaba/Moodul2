module.exports = {
  content: ["./src/**/*.{html,js}"], // Important for Tailwind to purge CSS correctly
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [require("daisyui")], // <-- Include DaisyUI here
}
