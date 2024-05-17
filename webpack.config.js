const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, './src/index.js'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './dist'),
    clean: true,

  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    // 路径别名配置
    alias: {
      src: path.resolve(__dirname, 'src/'),
      '@/': path.resolve(__dirname, 'src/'),
      '@': path.resolve(__dirname, 'src'),
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(css|less)$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: true
            }
          },
          "less-loader"
        ]
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset",
        parser: {
          dataUrlCondition: {
            // 模块小于 maxSize，会被作为Base64编码的字符串注入到包中， 
            // 否则模块文件会被生成到输出的目标目录中
            maxSize: 1 * 1024
          }
        },
        generator: {
          filename: 'assets/img/[name].[hash:6][ext]'
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './public/index.html'),
      filename: 'index.html'
    })
  ],
}