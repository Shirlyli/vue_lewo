module.exports = {
  devServer: {
    port: 8000,
    open: true,
    proxy: {
      '/qishitong': {
        target: 'http://m.qstjt.cn',
        changeOrigin: true,
        pathRewrite: {
          '^/qishitong': ''
        }
      }
    }
  }
}
