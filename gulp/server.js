const path = require('path');
const gulp = require('gulp');
const conf = require('./conf');

const browserSync = require('browser-sync');
const browserSyncSpa = require('browser-sync-spa');

const util = require('util');

const proxyMiddleware = require('http-proxy-middleware');

function browserSyncInit(baseDir, browser) {
    browser = typeof browser === 'undefined' ? 'default' : browser;

    let routes = null;
    if (baseDir === conf.paths.src || util.isArray(baseDir) && baseDir.indexOf(conf.paths.src) !== -1) {
        routes = {
            '/node_modules': 'node_modules'
        };
    }

    const server = {
        baseDir,
        routes
    };

    /*
     * You can add a proxy to your backend by uncommenting the line below.
     * You just have to configure a context which will we redirected and the target url.
     * Example: $http.get('/users') requests will be automatically proxified.
     *
     * For more details and option, https://github.com/chimurai/http-proxy-middleware/blob/v0.9.0/README.md
     */
    server.middleware = proxyMiddleware([], {
        target: 'http://localhost:19359',
        changeOrigin: true
    });

    browserSync.instance = browserSync.init({
        startPath: '/',
        server,
        browser
    });
}

browserSync.use(browserSyncSpa({
    selector: '[ng-app]' // Only needed for angular apps
}));

gulp.task('serve', ['watch'], () => {
    browserSyncInit([path.join(conf.paths.tmp, '/serve'), conf.paths.src]);
});

gulp.task('serve:dist', ['build'], () => {
    browserSyncInit(conf.paths.dist);
});

gulp.task('serve:docs', ['docs'], () => {
    browserSyncInit(conf.paths.docs);
});

gulp.task('serve:e2e', ['inject'], () => {
    browserSyncInit([conf.paths.tmp + '/serve', conf.paths.src], []);
});

gulp.task('serve:e2e-dist', ['build'], () => {
    browserSyncInit(conf.paths.dist, []);
});
