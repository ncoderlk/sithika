tailwind.config = {
  content: ['./*.html', './pages/*.html'],
  theme: {
    screens: {

      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        darkGray: 'hsl(233,12%,13%)',
        lightGray: 'hsl(233,12%,43%)',
        veryLightGray: 'hsl(233,10%,61%)',
        titleRed: '#FF2D6A',
      }
    },
  },
  plugins: [],
}
