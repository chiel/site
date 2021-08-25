import path from 'path';

const isProduction = process.env.NODE_ENV === 'production';

const common = {
	mode: isProduction ? 'production' : 'development',
	devtool: isProduction ? 'source-map' : 'cheap-module-source-map',
	resolve: {
		extensions: ['.ts', '.tsx', '.js', '.json'],
	},
	module: {
		rules: [
			{
				test: /\.mdx?$/,
				use: ['babel-loader', '@mdx-js/loader'],
			},
			{
				test: /\.tsx?$/,
				loader: 'ts-loader',
				exclude: /node_modules/,
			},
			{
				enforce: 'pre',
				test: /\.js$/,
				loader: 'source-map-loader',
				exclude: /node_modules/,
			},
			{
				test: /\.jpg$/,
				loader: 'file-loader',
				exclude: /node_modules/,
				options: {
					outputPath: 'public/assets',
					publicPath: '/assets',
				},
			},
		],
	},
};

export default [
	{
		...common,
		target: 'node',
		entry: ['./src/prism', './src/server'],
		output: {
			filename: 'index.js',
		},
		node: {
			__dirname: false,
			__filename: false,
		},
		optimization: {
			nodeEnv: false,
		},
	},
	{
		...common,
		target: 'web',
		entry: ['./src/prism', './src/client'],
		output: {
			filename: 'public/assets/index.js',
		},
	},
];
