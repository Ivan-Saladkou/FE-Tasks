var path = require("path");
var MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: "./assets/js/index.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist")
    },

    resolve: {
		extensions: ['.tsx', '.ts', '.js']
	},
    module: {
        rules: [
          {
            test: /\.css$/,
            use: [
              MiniCssExtractPlugin.loader,
              "css-loader"
            ]
          },
          {
            test:/\.tsx?$/,
            use:["ts-loader"],
            include:/js/
            
          }
        ]
      },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "bundle.css"
        })
    ]
};

