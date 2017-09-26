import { ButtonLoaderComponent } from './button-loader.component';

export const ButtonLoaderModule = angular
    .module('angularjs-boilerplate.button-loader', [])
    .component('buttonLoader', ButtonLoaderComponent)
    .name;
