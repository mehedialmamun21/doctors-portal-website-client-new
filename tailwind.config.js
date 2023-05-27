module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'banner-section-backImg': "url('/src/assets/images/bg.png')",
        'contact-section-backImg': "url('/src/assets/images/appointment.png')",
        'home-contact-backImg': "url('https://i.postimg.cc/MGdgMGhj/20210222-221409.png')"
      }
    },
  },

  daisyui: {
    themes: [
      {
        doctortheme: {
          primary: "#0FCFEC",
          // secondary: "#19D3AE",
          secondary: "#1CAA8E",
          accent: "#3A4256",
          neutral: "#3d4451",
          "base-100": "#ffffff",
        },
      },
      "dark",
      "cupcake",
    ],
  },


  plugins: [require("daisyui")],
}