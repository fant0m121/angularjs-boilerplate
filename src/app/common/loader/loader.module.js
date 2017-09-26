import { LoaderComponent } from './loader.component';

export const LoaderModule = angular
    .module('angularjs-boilerplate.loader', [])
    .component('loader', LoaderComponent)
    .name;
