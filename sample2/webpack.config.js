import path from "path";
import webpack from "webpack";

const src = path.join(__dirname, 'src')
const dist = path.resolve(__dirname, 'dist')

export default {
    watch: true,
    devtool: '#inline-source-map',
    context: src,
    entry :  [
        'webpack/hot/dev-server',
        'webpack-hot-middleware/client',
        './index.js',
    ],
    output: {
        path: dist,
        publicPath: '/dist/',
        filename: "bundle.js"
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
