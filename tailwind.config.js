// module.exports = {
//   purge: [
//     './**/*.html',
//     './**/*.js',
//   ],
//   darkMode: false, // or 'media' or 'class'
//   theme: {
//     extend: {},
//   },
//   variants: {
//     extend: {},
//   },
//   plugins: [],
// }

// tailwind.config.js
module.exports = {
  purge: {
    content: ['./**/*.html'],

    // These options are passed through directly to PurgeCSS
    options: {
      safelist: ['bg-red-500', 'px-4'],
      blocklist: [/^debug-/],
      keyframes: true,
      fontFace: true,
    },
  },
  // ...
}