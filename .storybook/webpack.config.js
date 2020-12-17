const path = require("path");

module.exports = async ({ config }) => {

  // fonts
  config.module.rules.push({
    test: /\.(png|eot|otf|ttf|woff|woff2|svg)$/,
    use: [
      {
        loader: "file-loader",
        query: {
          name: "[name].[ext]",
        },
      },
    ],
    include: path.resolve(__dirname, "../"),
  });
  return config;
};
