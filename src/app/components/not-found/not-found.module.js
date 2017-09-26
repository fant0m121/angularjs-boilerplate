import { NotFoundComponent } from './not-found.component';

export const NotFoundModule = angular
    .module('angularjs-boilerplate.not-found', [])
    .component('notFound', NotFoundComponent)
    .config(($stateProvider, $locationProvider) => {
        'ngInject';
        $stateProvider
            .state('not-found', {
                url: '/404',
                component: 'notFound'
            });

        $locationProvider.html5Mode(true);
    })
    .name;
