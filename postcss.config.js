module.exports = {
  plugins: [
    require('postcss-preset-env')({
      'browsers': ['ie >= 8', 'last 2 version']
    })
  ]
}
