const path = require('path')
const resolve = dir => path.join(__dirname, dir)
module.exports = {
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('assets', resolve('src/assets'))
      .set('common', resolve('src/common'))
      .set('views', resolve('src/views'))
      .set('components', resolve('src/components'))
      .set('network', resolve('src/network'))
  }
}
