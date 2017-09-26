import { MainComponent } from './main.component';
import { NewsHomeModule } from './home-article/home-article.module';

export const MainModule = angular
    .module('angularjs-boilerplate.main', [
        NewsHomeModule
    ])
    .component('main', MainComponent)
    .config(($stateProvider, $locationProvider) => {
        'ngInject';
        $stateProvider
            .state('main', {
                url: '/',
                component: 'main'
            });

        $locationProvider.html5Mode(true);
    })
    .name;
