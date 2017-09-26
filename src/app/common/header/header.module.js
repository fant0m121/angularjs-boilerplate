import { HeaderComponent } from './header.component';

export const HeaderModule = angular
    .module('angularjs-boilerplate.header', [])
    .component('header', HeaderComponent)
    .name;
