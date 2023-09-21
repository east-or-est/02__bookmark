/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'ja-min': ["ヒラギノ明朝 ProN W6", "HiraMinProN-W6", "HG明朝E", "ＭＳ Ｐ明朝", "MS PMincho", "MS 明朝", "serif"],
      'ja-go': ["Helvetica Neue","Arial","Hiragino Kaku Gothic ProN","Hiragino Sans","YuGothic","Yu Gothic","Meiryo","sans-serif"]
    }
  },
  plugins: [],
}
