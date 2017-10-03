const path = require('path');
const gulp = require('gulp');
const conf = require('./conf');

const browserSync = require('browser-sync');
const webpack = require('webpack-stream');

const $ = require('gulp-load-plugins')();

function webpackWrapper(watch, test, callback) {
    const webpackOptions = {
        watch,
        module: {
            preLoaders: [
                {
                    test: /\.js$/,
                    exclude: /(node_modules|bower_components)/,
                    loader: 'eslint-loader'
                }
            ],
            loaders: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    loaders: ['ng-annotate', 'babel-loader?presets[]=es2015']
                }, {
                    test: /\.html$/,
                    loader: 'ngtemplate?relativeTo=app/!html'
                }
            ]
        },
        output: {
            filename: 'index.module.js'
        }
    };

    if (watch) {
        webpackOptions.devtool = 'inline-source-map';
    }

    function webpackChangeHandler(err, stats) {
        if (err) {
            conf.errorHandler('Webpack')(err);
        }
        $.util.log(stats.toString({colors: $.util.colors.supportsColor, chunks: false, hash: false, version: false}));
        browserSync.reload();
        if (watch) {
            watch = false;
            callback();
        }
    }

    const sources = [path.join(conf.paths.src, '/app/index.module.js')];
    if (test) {
        sources.push(path.join(conf.paths.src, '/app/**/*.spec.js'));
    }

    return gulp.src(sources)
        .pipe($.plumber())
        .pipe(webpack(webpackOptions, null, webpackChangeHandler))
        .pipe($.plumber.stop())
        .pipe(gulp.dest(path.join(conf.paths.tmp, '/serve/app')));
}

gulp.task('scripts', () => {
    return webpackWrapper(false, false);
});

gulp.task('scripts:watch', ['scripts'], (callback) => {
    return webpackWrapper(true, false, callback);
});

gulp.task('scripts:test', () => {
    return webpackWrapper(false, true);
});

gulp.task('scripts:test-watch', ['scripts'], (callback) => {
    return webpackWrapper(true, true, callback);
});
