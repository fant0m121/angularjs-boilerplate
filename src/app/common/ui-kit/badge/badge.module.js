import { BadgeComponent } from './badge.component';

export const BadgeModule = angular
    .module('angularjs-boilerplate.badge', [])
    .component('badge', BadgeComponent)
    .name;
