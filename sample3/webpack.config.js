import path from "path";
import webpack from "webpack";

const src = path.join(__dirname, 'src')
const dist = path.resolve(__dirname, 'dist')

export default {
    watch: true,
    devtool: '#inline-source-map',
    context: src,
    entry : {
        app1: ['./app1/index.js', 'webpack/hot/dev-server', 'webpack-hot-middleware/client'],
        app2: ['./app2/index.js', 'webpack/hot/dev-server', 'webpack-hot-middleware/client'],
    },
    output: {
        path: dist,
        publicPath: '/dist/',
        filename: '[name].bundle.js'
    },
    module: {
        loaders: [
            {
                loaders: ['react-hot-loader', 'babel-loader'],
                test: /\.js?$/,
                exclude: /node_modules/,
                include: [src],
            },
        ]
    },
    plugins: [
        new webpack.LoaderOptionsPlugin({
            debug: true
        }),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.HotModuleReplacementPlugin(),
    ]
}
