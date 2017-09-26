const path = require('path');
const gulp = require('gulp');
const conf = require('./conf');
const browserSync = require('browser-sync');
const $ = require('gulp-load-plugins')();
const wiredep = require('wiredep').stream;
const _ = require('lodash');

function buildStyles() {
    const injectFiles = gulp.src([
        path.join(conf.paths.src, '/app/**/*.styl'),
        path.join('!' + conf.paths.src, '/app/index.styl')
    ], {read: false});

    const injectOptions = {
        transform: (filePath) => {
            filePath = filePath.replace(conf.paths.src + '/app/', '');
            return '@import "' + filePath + '";';
        },
        starttag: '// injector',
        endtag: '// endinjector',
        addRootSlash: false
    };

    return gulp
        .src([path.join(conf.paths.src, '/app/index.styl')])
        .pipe($.inject(injectFiles, injectOptions))
        .pipe(wiredep(_.extend({}, conf.wiredep)))
        .pipe($.sourcemaps.init())
        .pipe($.plumber())
        .pipe($.stylus())
        .on('error', conf.errorHandler('Stylus'))
        .pipe($.postcss())
        .pipe($.sourcemaps.write('maps'))
        .pipe($.plumber.stop())
        .pipe(gulp.dest(path.join(conf.paths.tmp, '/serve/app/')));
}

gulp.task('styles-reload', ['styles'], () => buildStyles().pipe(browserSync.stream()));
gulp.task('styles', () => buildStyles());
