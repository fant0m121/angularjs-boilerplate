/**
 *
 * @ngdoc overview
 * @name ui-kit
 * @module ui-kit
 * @memberOf common
 *
 * @requires angularjs-boilerplate.additional-button
 * @requires angularjs-boilerplate.badge
 * @requires angularjs-boilerplate.checkbox
 * @requires angularjs-boilerplate.general-button
 * @requires angularjs-boilerplate.secondary-button
 *
 * @description
 * Элементы типографии
 *
 **/

import { AdditionalButtonModule } from './additional-button/additional-button.module';
import { BadgeModule } from './badge/badge.module';
import { CheckboxModule } from './checkbox/checkbox.module';
import { GeneralButtonModule } from './general-button/general-button.module';
import { SecondaryButtonModule } from './secondary-button/secondary-button.module';

export const UiKitModule = angular
    .module('angularjs-boilerplate.ui-kit', [
        AdditionalButtonModule,
        BadgeModule,
        CheckboxModule,
        GeneralButtonModule,
        SecondaryButtonModule
    ])
    .name;
