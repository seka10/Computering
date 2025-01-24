/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:"#339DFF",
        brandDark:"#151616",
      },
      boxShadow:{"custom-inset":"px 3px 4px rgba( 0, 0, 0, 0.25 ), inset 2px 5px 6px  rgba( 225, 225, 255, 0.37 ), inset 0px -5px 6px  rgba( 0, 0, 0, 0.37 )"},
      fontFamily:{
        Poppins:["Poppins","sans-serif"],
        varela:["varela Round","sans-serif"],
      },
      container:{
        center:true,
        padding:{
          default:"1rem",
          sm:"2rem",
          lg:"4rem",
          xl:"5rem",
          "2xl":"6rem",
        },
      },
    },
  },
  plugins: [],
}

