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
        test: /\.ico$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'assets/', // Optional: to place in an 'assets' folder in dist
            },
          },
        ],
      },
      {
        test: /\.module\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              modules: {
                localIdentName: "[name]__[local]___[hash:base64:5]",
              },
              importLoaders: 1,
            },
          },
          "postcss-loader", // This will ensure modern CSS is transformed, including calc()
        ],
      },
      {
        test: /\.css$/,
        exclude: /\.module\.css$/, // Regular CSS
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ["@svgr/webpack"],
      },
      {
        test: /\.(jpg|jpeg|png|gif)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[path][name].[ext]", // Keep original filename and path
              outputPath: "images/", // Output directory for images
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      filename: "index.html",
      template: "./public/index.html", // Path to your template HTML
      favicon: "./public/logo.ico", // Path to your favicon
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
