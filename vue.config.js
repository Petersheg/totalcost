module.exports = {
  configureWebpack: {
    module: {
      rules: [
        {
          loader: "file-loader",
          test: /\.ico/,
          exclude: /node_modules/,
        },
      ],
    },
  },
  publicPath: process.env.NODE_ENV === "production" ? "/totalcost/" : "/",
};
