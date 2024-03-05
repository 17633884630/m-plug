const { defineConfig } = require('@vue/cli-service');

const pxtorem = {
  rootValue: 75,
  viewportUnit: 'rem', // (String) Expected units.
  selectorBlackList: [], // 忽略转换正则匹配项
  propList: ['*'],
  unitPrecision: 3, // (Number) The decimal numbers to allow the REM units to grow to.
  minPixelValue: 2, // (Number) Set the minimum pixel value to replace.
  mediaQuery: false, // (Boolean) Allow px to be converted in media queries.
  replace: true
}
// const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = defineConfig({
  // assetsDir: 'static',
  //ES6是否编译
  transpileDependencies: true,
  //构建是否生成SourceMap 文件
  productionSourceMap: false,
  pages: {
    index: {
      entry: 'src/main.js',
      template: 'public/index.html',
      filename: 'index.html',

    },
  },
  //通过链式编程的形式，来修改默认的webpack配置
  chainWebpack: config => {
    config.module
      .rule('js')
      .include
      .add('/packages')
      .end()
      .use('babel')
      .loader('babel-loader')
  },
  configureWebpack: {
    // plugins: [
    //   new MiniCssExtractPlugin({
    //     filename: 'var.css'
    //   }),
    // ]
  },
  css: {
    // 是否分css离
    extract: false,
    // 字体转化
    loaderOptions: {
      postcss: {
        postcssOptions: {
          plugins: [
            require('postcss-pxtorem')(pxtorem),
          ]
        }
      }
    },
  },
})
