import { SecondaryButtonComponent } from './secondary-button.component';

export const SecondaryButtonModule = angular
    .module('angularjs-boilerplate.button.secondary', [])
    .component('secondaryButton', SecondaryButtonComponent)
    .name;
