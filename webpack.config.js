const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: "./src/app/index.tsx", // Entry point of your app
  output: {
    path: path.resolve(__dirname, "dist"), // Output directory
    filename: "bundle.js", // Output filename
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"], // File extensions Webpack will resolve
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@components": path.resolve(__dirname, "./src/app/components"),
      "@styles": path.resolve(__dirname, "./src/app/styles"),
      "@images": path.resolve(__dirname, "./public/images"),
      "@colors": path.resolve(__dirname, "./public/colors"),
      "@utils": path.resolve(__dirname, "./src/app/utils"),
      "@pages": path.resolve(__dirname, "./src/app/pages"),
      "@svgs": path.resolve(__dirname, "./public/svgs"),
    },
  },
  mode: "production",
  module: {
    rules: [
      {
        test: /\.tsx?$/, // For TypeScript/TSX files
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: [
          { loader: MiniCssExtractPlugin.loader, options: {} },
          {
            loader: "css-loader",
            options: {
              url: false,
              modules: {
                localIdentName: "[name]__[local]___[hash:base64:5]", // Customize class name format
              },
            },
          },
        ],
      },
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ["@svgr/webpack"],
      },
      {
        test: /\.(jpg|jpeg|png|gif)$/, // For image files
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      filename: "index.html",
      template: "./public/index.html", // Path to your template HTML
      minify: false,
    }),
    new MiniCssExtractPlugin(),
  ],
  optimization: {
    minimizer: [new MiniCssExtractPlugin()],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "public"),
    },
    compress: true,
    port: 3000, // Development server port
  },
  devtool: "source-map", // Enable source maps
};
