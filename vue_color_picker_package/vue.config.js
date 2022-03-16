const { defineConfig } = require('@vue/cli-service')
var path = require('path')

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath:'/dist/',
  configureWebpack:{
    entry:'./src/index.js',
    output: {
      path: path.resolve(__dirname, './dist'),
      filename: '[name].min.js',
      library: 'ColorPick',
      libraryTarget: 'umd',
      umdNamedDefine: true
    },
  }
  
})
