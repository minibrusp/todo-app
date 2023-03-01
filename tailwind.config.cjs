/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          brightblue: 'hsl(220, 98%, 61%)',
          checkbg: {
            from: 'hsl(192, 100%, 67%)',
            to: 'hsl(280, 87%, 65%)'
          },
        },
        neutral: {
          light: {
            verylightgray: 'hsl(0, 0%, 98%)',
            verylightgrayishblue: 'hsl(236, 33%, 92%)',
            lightgrayishblue: 'hsl(223, 11%, 84%)',
            darkgrayishblue: 'hsl(236, 9%, 61%)',
            verydarkgrayishblue: 'hsl(235, 19%, 35%)'
          },
          dark: {
            verydarkblue: 'hsl(235, 21%, 11%)',
            verydarkdesaturatedblue: 'hsl(235, 24%, 19%)',
            lightgrayishblue: {
              normal: 'hsl(234, 39%, 85%)',
              hover: 'hsl(236, 33%, 92%)'
            },
            darkgrayishblue: 'hsl(234, 11%, 52%)',
            verydarkgrayishblue: 'hsl(233, 14%, 35%)',
            verydarkgrayishblue2: 'hsl(237, 14%, 26%)'
          },
        }
      },

      backgroundImage: {
        'mobile-light': "url('/src/images/bg-mobile-light.jpg')",
        'mobile-dark': "url('src/images/bg-mobile-dark.jpg')",
        'desktop-light': "url('src/images/bg-desktop-light.jpg')",
        'desktop-dark': "url('src/images/bg-desktop-dark.jpg')",
      },

      fontFamily: {
        body: ['Josefin Sans']
      }
    },
  },
  plugins: [],
}
