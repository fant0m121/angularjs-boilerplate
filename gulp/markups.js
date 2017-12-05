const path = require('path');
const gulp = require('gulp');
const conf = require('./conf');

const browserSync = require('browser-sync');

const $ = require('gulp-load-plugins')();

gulp.task('markups', () => {
    function renameToHtml(path) {
        path.extname = '.html';
    }

    return gulp.src(path.join(conf.paths.src, '/app/**/*.pug')).pipe($.consolidate('pug', {
        basedir: conf.paths.src,
        doctype: 'html',
        pretty: '  '
    })).on('error', conf.errorHandler('Pug')).pipe($.rename(renameToHtml)).pipe(gulp.dest(path.join(conf.paths.tmp, '/serve/app/'))).pipe(browserSync.stream());
});
