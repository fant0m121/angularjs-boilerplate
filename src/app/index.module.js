import config from './index.config';
import runBlock from './index.run';
import httpInterceptor from './index.interceptor';

import { CommonModule } from './common/common.module';
import { ComponentsModule } from './components/components.module';

angular
    .module('angularjs-boilerplate', [
        'ngAnimate',
        'ngCookies',
        'ngTouch',
        'ngMessages',
        'ngSanitize',
        'ngAria',
        'ui.router',
        'angular-loading-bar',
        'toastr',
        'angularMoment',
        'angular-click-outside',
        CommonModule,
        ComponentsModule
    ])
    .constant('ENDPOINT_URL', '')
    .config(config)
    .run(runBlock)
    .factory('httpInterceptor', httpInterceptor);
