const babelConfig = require('./babel.config')
module.exports = {
    entry: './components/index.js', // 这个是组件的总的入口文件，在这个文件里会把所有组件导出
    module: {
        rules: [
          {
            test: /\.(js|jsx|ts|tsx)$/,
            use: [
              {
                loader: 'babel-loader',
                options: babelConfig,
              },
            ],
          },
          {
            test: /\.(css|less)$/,
            use: [
              'style-loader',
              'css-loader',
              {
                loader: 'less-loader',
                options: {
                  lessOptions: {
                    javascriptEnabled: true,
                  },
                },
              },
            ],
          },
        ],
      },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    devServer: {
        proxy: {

        }
    },
}