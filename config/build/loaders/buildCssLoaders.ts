import MiniCssExtractPlugin from "mini-css-extract-plugin";

export default function buildCssLoader(isDev: Boolean){
  return {
		test: /\.less$/i,
		use: [
			isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
			{
				loader: 'css-loader',
				options: {
					modules: {
						auto: (resourcePath: string) => resourcePath.includes('.module.'),
						// LocalIdentName: isDev ? "[path][name]__[local]--[hash:base64:6]" : '[hash:base64:6]'
						localIdentName: isDev ? '[local]--[hash:base64:6]' : '[hash:base64:8]',
					},
				},
			},
			'less-loader',
		],
	};
}