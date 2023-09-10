import { RuleSetRule } from "webpack"
import { BuildOptions } from "./types/config"
import MiniCssExtractPlugin from "mini-css-extract-plugin"

export function buildLoaders({isDev}: BuildOptions): RuleSetRule[] {

  const typescriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  }
  
  const styleLoader = {
    test: /\.less$/i,
    use: [
      isDev ? "style-loader" : MiniCssExtractPlugin.loader,
      {
        loader: "css-loader",
        options: {
          modules: {
            auto : (resourcePath : string) => resourcePath.includes('.module.'),
            localIdentName: isDev ? "[path][name]__[local]--[hash:base64:6]" : '[hash:base64:6]'
          },
        },
      },
      "less-loader",
    ],
  }

  return [
    typescriptLoader,
    styleLoader
  ]
}