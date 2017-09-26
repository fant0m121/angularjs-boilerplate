/**
 *
 * @ngdoc module
 * @name common.ui-kit
 *
 * @description Элементы типографии
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
