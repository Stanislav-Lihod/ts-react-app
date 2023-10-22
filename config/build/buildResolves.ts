import { ResolveOptions } from "webpack";
import { BuildOptions } from "./types/config";

export function buildResolves(options:BuildOptions): ResolveOptions{
  return {
    extensions: ['.tsx', '.ts', '.js'], // Строка для того чтоб не указывать расширения при импорте
    preferAbsolute: true,
    modules:[
      options.paths.src, 'node_modules'
    ],
    alias: {},
    mainFiles: ['index']
  }
}