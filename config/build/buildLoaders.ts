import {type RuleSetRule} from 'webpack';
import {type BuildOptions} from './types/config';
import buildCssLoader from './loaders/buildCssLoaders';

export function buildLoaders({isDev}: BuildOptions): RuleSetRule[] {
	const svgLoader = {
		test: /\.svg$/,
		use: ['@svgr/webpack'],
	};

	const fileLoader = {
		test: /\.(png|jpe?g|gif|webp)$/i,
		use: [
			{
				loader: 'file-loader',
			},
		],
	};

	const typescriptLoader = {
		test: /\.tsx?$/,
		use: 'ts-loader',
		exclude: /node_modules/,
	};

	const styleLoader = buildCssLoader(isDev);

	return [
		svgLoader,
		fileLoader,
		typescriptLoader,
		styleLoader,
	];
}
