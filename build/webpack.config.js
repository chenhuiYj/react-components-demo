const path = require('path')
let HtmlWebpackPlugin =require('html-webpack-plugin')

module.exports={
  entry:{
    app:path.join(__dirname,'./../','src/index.tsx')
  },
  output:{
    path:path.join(__dirname,'./../','dist'),
    filename:'[name].js'
  },
  module:{
    rules:[
      {
        test:/\.ts(x?)$/,
        use:[
          {
            loader:'ts-loader',
          }
        ]
      },
      {
        test:/\.scss$/,
        include:[path.join(__dirname,'./../','src')],
        use:[
          'style-loader',
          {
            loader:'cache-loader',
            options:{
              cacheDirectory:path.join(__dirname,'./../','.cache-loader')
            }
          },
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: ['file-loader']
      }
    ]
  },
  plugins:[
    new HtmlWebpackPlugin({
      template:'build/tpl/index.html'
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000
  },
  resolve:{
    extensions:['.ts','.tsx','.js','.jsx'],
    alias:{
      '@components':path.join(__dirname,'../src/components'),
      '@pages':path.join(__dirname,'../src/pages'),
      '@sass':path.join(__dirname,'../src/sass'),
      '@store':path.join(__dirname,'../src/store')
    }
  }
}