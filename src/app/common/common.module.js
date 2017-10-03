/**
 *
 * @ngdoc overview
 * @name common
 * @module common
 *
 * @requires angularjs-boilerplate.header
 * @requires angularjs-boilerplate.footer
 * @requires angularjs-boilerplate.button-loader
 * @requires angularjs-boilerplate.loader
 * @requires angularjs-boilerplate.ui-kit
 *
 * @description
 * Общие модули для всего проекта.
 *
 **/

import { HeaderModule } from './header/header.module';
import { FooterModule } from './footer/footer.module';
import { LoaderModule } from './loader/loader.module';
import { ButtonLoaderModule } from './button-loader/button-loader.module';
import { UiKitModule } from './ui-kit/ui-kit.module';

export const CommonModule = angular
    .module('angularjs-boilerplate.common', [
        HeaderModule,
        FooterModule,
        LoaderModule,
        ButtonLoaderModule,
        UiKitModule
    ])
    .name;
