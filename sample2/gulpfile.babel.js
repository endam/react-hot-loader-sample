import gulp from "gulp";
import webpack from "webpack";
import browserSync from 'browser-sync';
import webpackDevMiddleware from "webpack-dev-middleware";
import webpackHotMiddleware from "webpack-hot-middleware";
import webpackConfig from "./webpack.config.js";


gulp.task("watch", () => {
    const bundler = webpack(webpackConfig);
    browserSync({
        server: {
            baseDir: "./",
            middleware: [
                webpackDevMiddleware(bundler, {
                    publicPath: webpackConfig.output.publicPath,
                    stats: { colors: true }
                }),
                webpackHotMiddleware(bundler)
            ]
        },
        files: [
            '*.css',
            '*.html'
        ],
    });
});