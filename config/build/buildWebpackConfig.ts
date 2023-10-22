import { Configuration } from "webpack";
import { BuildOptions } from "./types/config";
import { buildPlugins } from "./buildPlugins";
import { buildLoaders } from "./buildLoaders";
import { buildResolves } from "./buildResolves";
import { buildDevServer } from "./buildDevServer";

export function buildWebpackConfig(options: BuildOptions): Configuration{
  const {paths, mode} = options

  return{
    mode, 
      entry: {
        main: paths.entry,
      },
      devtool: options.isDev ? 'inline-source-map' : undefined,
      devServer: options.isDev ? buildDevServer(options) : undefined,
      output : {
        filename: '[name].[contenthash:8].js',
        path: paths.build,
        clean: true
      },
      plugins: buildPlugins(options),
      module: {
        rules: buildLoaders(options)
      },
      resolve: buildResolves(options),
  }
}