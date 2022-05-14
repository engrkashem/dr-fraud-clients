module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#0692B4",
          secondary: "#04C8A4",
          accent: "#0FCFEC",
          neutral: "#3A4256",
          "base-100": "#ffffff",
        },
      },
      "dark",
      "cupcake",
    ],
  },
}
