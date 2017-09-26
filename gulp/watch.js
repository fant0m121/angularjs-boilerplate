const path = require('path');
const gulp = require('gulp');
const conf = require('./conf');

const browserSync = require('browser-sync');

function isOnlyChange(event) {
    return event.type === 'changed';
}

gulp.task('watch', [
    'scripts:watch', 'markups', 'inject'
], () => {
    gulp.watch([
        path.join(conf.paths.src, '/*.html'),
        'bower.json'
    ], ['inject-reload']);

    gulp.watch([
        path.join(conf.paths.src, '/app/**/*.css'),
        path.join(conf.paths.src, '/app/**/*.styl'),
        path.join(conf.paths.src, '/assets/**/*.css'),
        path.join(conf.paths.src, '/assets/**/*.styl')
    ], (event) => {
        if (isOnlyChange(event)) {
            gulp.start('styles-reload');
        } else {
            gulp.start('inject-reload');
        }
    });

    gulp.watch(path.join(conf.paths.src, '/app/**/*.pug'), ['markups']);

    gulp.watch(path.join(conf.paths.src, '/app/**/*.html'), (event) => {
        browserSync.reload(event.path);
    });

    // Images
    gulp.watch([
        path.join(conf.paths.src, '/assets/**/*.{jpg,jpeg,gif,svg,png}')
    ], (event) => {
        console.log(event.path);
        browserSync.reload(event.path);
    });
});
