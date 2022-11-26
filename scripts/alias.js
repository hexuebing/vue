const path = require('path')

// __dirname 是当前文件所在的目录，../就是根目录，再拼接其他目录
const resolve = p => path.resolve(__dirname, '../', p)

module.exports = {
  vue: resolve('src/platforms/web/entry-runtime-with-compiler'),
  compiler: resolve('src/compiler'),
  core: resolve('src/core'),
  shared: resolve('src/shared'),
  web: resolve('src/platforms/web'),
  server: resolve('packages/server-renderer/src'),
  sfc: resolve('packages/compiler-sfc/src')
}
