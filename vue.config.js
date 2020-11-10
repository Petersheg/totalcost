module.exports = {
    configureWebpack: {
      module:{
        rules:[{
            loader: 'babel-loader',
            test: /\.js$|jsx/,
            exclude: /node_modules/
        },
        {
          loader: 'file-loader',
          test: /\.ico/,
          exclude: /node_modules/
      }]
    }
    }
  }