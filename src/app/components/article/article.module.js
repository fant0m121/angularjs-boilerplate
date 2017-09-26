/**
 *
 * @ngdoc module
 * @name article
 *
 * @requires angularjs-boilerplate.article.detail
 * @requires angularjs-boilerplate.article.cart
 * @requires angularjs-boilerplate.article.list
 *
 * @description Модуль для работы с статьями.
 *
 **/

import { ArticleDetailModule } from './article-detail/article-detail.module';
import { ArticleCartModule } from './article-cart/article-cart.module';
import { ArticleListModule } from './article-list/article-list.module';
import { ArticleService } from './article.service';

export const ArticleModule = angular
    .module('angularjs-boilerplate.article', [
        ArticleListModule,
        ArticleCartModule,
        ArticleDetailModule
    ])
    .service('ArticleService', ArticleService)
    .config(($stateProvider, $locationProvider, $urlRouterProvider) => {
        'ngInject';
        $stateProvider
            .state('article', {
                abstract: true,
                template: `<header></header>
                            <ui-view></ui-view>
                        <footer class="footer"></footer>`
            })
            .state('article.list', {
                url: '/articles',
                component: 'articleList'
            })
            .state('article.detail', {
                url: '/articles/{code}',
                component: 'articleDetail'
            });

        $locationProvider.html5Mode(true);
        $urlRouterProvider.otherwise('/');
    })
    .name;
