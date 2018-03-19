import angular from 'angular';
import ngAnimate from 'angular-animate';
import ngCookies from 'angular-cookies';
import ngTouch from 'angular-touch';
import ngMessages from 'angular-messages';
import ngSanitize from 'angular-sanitize';
import ngAria from 'angular-aria';
import uiRouter from '@uirouter/angularjs';
import angularLoadingBar from 'angular-loading-bar';
import toastr from 'angular-toastr';
import angularMoment from 'angular-moment';
import config from './index.config';
import runBlock from './index.run';
import httpInterceptor from './index.interceptor';

import { CommonModule } from './common/common.module';
import { ComponentsModule } from './components/components.module';

angular
    .module('angularjs-boilerplate', [
        ngAnimate,
        ngCookies,
        ngTouch,
        ngMessages,
        ngSanitize,
        ngAria,
        uiRouter,
        toastr,
        angularMoment,
        angularLoadingBar,
        CommonModule,
        ComponentsModule
    ])
    .constant('ENDPOINT_URL', '')
    .config(config)
    .run(runBlock)
    .factory('httpInterceptor', httpInterceptor);
