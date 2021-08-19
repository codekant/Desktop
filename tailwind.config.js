module.exports = {
  purge: {
    enabled: true,
    content: [ './index.html', 
    './static/client.js', 
    './static.css' ],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}