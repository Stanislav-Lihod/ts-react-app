export type BuildMode = 'development' | 'production'

export interface BuildPaths {
  entry: string;
  build: string;
  html: string;
  src: string;
}

export interface BuildENV{
  mode: BuildMode,
  port: number
}

export interface BuildOptions {
  mode: BuildMode;
  paths: BuildPaths;
  isDev: boolean;
  PORT: number
}