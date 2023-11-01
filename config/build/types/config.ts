export type BuildMode = 'development' | 'production';

export type BuildPaths = {
	entry: string;
	build: string;
	html: string;
	src: string;
};

export type BuildENV = {
	mode: BuildMode;
	port: number;
};

export type BuildOptions = {
	mode: BuildMode;
	paths: BuildPaths;
	isDev: boolean;
	PORT: number;
};
