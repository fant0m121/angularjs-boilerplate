const path = require('path');
const gulp = require('gulp');
const conf = require('./conf');

const karma = require('karma');

const pathSrcHtml = [
    path.join(conf.paths.tmp, '/serve/**/*.html'),
    path.join(conf.paths.src, '/**/*.html')
];

const pathSrcJs = [path.join(conf.paths.tmp, '/serve/app/index.module.js')];

function runTests(singleRun, done) {
    const reporters = ['progress'];
    const preprocessors = {};

    pathSrcHtml.forEach((result) => {
        preprocessors[result] = ['ng-html2js'];
    });

    if (singleRun) {
        pathSrcJs.forEach((result) => {
            preprocessors[result] = ['coverage'];
        });
        reporters.push('coverage');
    }

    const localConfig = {
        singleRun,
        reporters,
        preprocessors,
        configFile: path.join(__dirname, '/../karma.conf.js'),
        autoWatch: !singleRun
    };

    const server = new karma.Server(localConfig, (failCount) => {
        done(failCount
            ? new Error(`Failed ${failCount} tests.`)
            : null);
    });
    server.start();
}

gulp.task('test', [
    'scripts:test', 'markups'
], (done) => {
    runTests(true, done);
});

gulp.task('test:auto', ['scripts:test-watch'], (done) => {
    runTests(false, done);
});
