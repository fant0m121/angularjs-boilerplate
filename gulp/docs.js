const gulp = require('gulp');
const path = require('path');
const conf = require('./conf');
const jsdoc = require('gulp-jsdoc3');

gulp.task('docs', [], (cb) => {
    const config = require('../jsdoc.json');
    gulp.src(path.join(conf.paths.src, '/**/*.js'), {read: false})
        .pipe(jsdoc(config, cb));
});
