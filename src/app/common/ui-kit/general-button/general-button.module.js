import { GeneralButtonComponent } from './general-button.component';

export const GeneralButtonModule = angular
    .module('angularjs-boilerplate.button.general', [])
    .component('generalButton', GeneralButtonComponent)
    .name;
