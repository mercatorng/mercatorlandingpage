/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["../index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xxs: "280px",
      xs: "360px",
      xsm: "412px",
      xxx:"440px",
      sm: "480px",
      smd: "540px",
      sms: "580px",
      smmd: "600px",
      smax: "680px",
      md: "768px",
      lg: "976px",
      xlg: "992px",
      bigLg: "1024px",
      fity: "1026px",
      extraLg: "1090px",
      extraExtra: "1120px",
      large: "1170px",
      exl: "1280px",
      topXl: "1300px",
      pcXl: "1360px",
      extraXl :"1450px"
    },
    extend: {
      colors: {
       pryPurpule: "#5956E9",
       btnColor: "#5956E9",
       footerPurple: "#433FDA",
        darkText: "#232233",
        whiteText: "#FFFFFF",
        greyText: "#6C6C72",
        bgFooter: "#232233",
      },
      fontFamily: {
        sans: ['Josefin Sans', 'sans-serif'],
      },
      fontWeight: {
        400: ["400"],
        600: ["600"],
        700: ["700"],
      },
    },
  },
  plugins: [],
};
