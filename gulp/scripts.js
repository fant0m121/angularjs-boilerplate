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
            rules: [
                {
                    enforce: 'pre',
                    test: /\.js$/,
                    exclude: /node_modules/,
                    loader: 'eslint-loader'
                }, {
                    test: /\.html$/,
                    use: [
                        {
                            loader: 'ngtemplate-loader',
                            options: {
                                angular: true
                            }
                        }, {
                            loader: 'raw-loader'
                        }
                    ]
                }, {
                    test: /\.js$/,
                    exclude: /(node_modules|bower_components)/,
                    use: [
                        {
                            loader: 'ng-annotate-loader?relativeTo=' + path.resolve(__dirname, 'app/!html')
                        }, {
                            loader: 'babel-loader',
                            options: {
                                babelrc: true
                            }
                        }, {
                            loader: 'eslint-loader'
                        }
                    ]
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

    return gulp.src(sources).pipe($.plumber()).pipe(webpack(webpackOptions, null, webpackChangeHandler)).pipe($.plumber.stop()).pipe(gulp.dest(path.join(conf.paths.tmp, '/serve/app')));
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
