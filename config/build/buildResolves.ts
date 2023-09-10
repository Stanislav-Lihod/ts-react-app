import { ResolveOptions } from "webpack";

export function buildResolves(): ResolveOptions{
  return {
    extensions: ['.tsx', '.ts', '.js'], // Строка для того чтоб не указывать расширения при импорте
  }
}