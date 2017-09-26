import { AdditionalButtonComponent } from './additional-button.component';

export const AdditionalButtonModule = angular
    .module('angularjs-boilerplate.button.additional', [])
    .component('additionalButton', AdditionalButtonComponent)
    .name;
