import gulp from "gulp";
import webpack from "webpack";
import browserSync from 'browser-sync';
import webpackDevMiddleware from "webpack-dev-middleware";
import webpackHotMiddleware from "webpack-hot-middleware";
import webpackConfig from "./webpack.config.js";
// import proxyMiddleware from 'http-proxy-middleware';


gulp.task("watch", () => {
    const bundler = webpack(webpackConfig);
    // const proxy = proxyMiddleware('/', {target: 'http://***.**.**.**'});
    browserSync({
        port: 3006,
        server: {
            baseDir: "./",
            middleware: [
                webpackDevMiddleware(bundler, {
                    publicPath: webpackConfig.output.publicPath,
                    stats: { colors: true },
                    // watchOptions: {
                    //     poll: true,
                    //     ignored: /node_modules/
                    // }
                }),
                webpackHotMiddleware(bundler),
                // proxy,
            ]
        },
        files: [
            '*.css',
            '*.html'
        ],
    });
});