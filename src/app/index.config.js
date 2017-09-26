import moment from 'moment';

function config($httpProvider, $logProvider, toastrConfig, $urlRouterProvider, $locationProvider, $compileProvider) {
    'ngInject';

    $logProvider.debugEnabled(true);
    toastrConfig.allowHtml = true;
    toastrConfig.timeOut = 3000;
    toastrConfig.positionClass = 'toast-top-right';
    toastrConfig.preventDuplicates = true;
    toastrConfig.progressBar = true;

    moment.locale('ru');
    moment.locale('ru', {
        calendar: {
            sameElse: 'LLL'
        }
    });

    $httpProvider.interceptors.push('httpInterceptor');
    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/');

    $compileProvider.preAssignBindingsEnabled(true);
}

export default config;
