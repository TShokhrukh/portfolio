const path = require('path')
const CracoAlias = require('craco-alias')

module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      webpackConfig.module.rules[1].oneOf.forEach((rules) => {
        if (!rules.test?.toString().match(/sass/)) {
          return
        }
        rules.use.push({
          loader: 'sass-resources-loader',
          options: {
            resources: [
              path.join(__dirname, 'src', '**', '*.g.scss'),
              path.join(__dirname, 'src', '**', '*.l.scss')
            ]
          }
        })
      })
      return webpackConfig
    }
  },
  plugins: [{
    plugin: CracoAlias,
    options: {
      source: 'tsconfig',
      tsConfigPath: path.join(__dirname, 'tsconfig.paths.json')
    }
  }]
}
