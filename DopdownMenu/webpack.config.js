const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	mode: "development",
	// ensure webpack resolves relative to this config file's directory
	context: path.resolve(__dirname),
	entry: path.resolve(__dirname, "src/index.js"), 
	output: {
		filename: "main.js",
		path: path.resolve(__dirname, "dist"),
		clean:true,
	},
	devtool: "eval-source-map",
	devServer: {
		watchFiles: [path.resolve(__dirname, "src/template.html")]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, "src/template.html"),
		}),
	],
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: ["style-loader", "css-loader"]
			},
			{
				test: /\.html$/i,
				loader: "html-loader",
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: "asset/resource",
			}


		],
		
	}
}
