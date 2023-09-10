import { Configuration as DevServerConfiguration} from "webpack-dev-server";
import { BuildOptions } from "./types/config";

export function buildDevServer({paths, PORT}: BuildOptions): DevServerConfiguration {
  return{
    historyApiFallback: true,
    static: paths.build,
    open: true,
    compress: true,
    hot: true,
    port: PORT
  }
}