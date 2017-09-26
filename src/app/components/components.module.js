/**
 *
 * @ngdoc module
 * @name components
 *
 * @requires angularjs-boilerplate.main
 * @requires angularjs-boilerplate.articles
 * @requires angularjs-boilerplate.comment
 * @requires angularjs-boilerplate.not-found
 *
 * @description
 *
 * Модуль компонентов. Включает в себя все другие компоненты приложения.
 *
 **/

import { MainModule } from './main/main.module';
import { NotFoundModule } from './not-found/not-found.module';
import { ArticleModule } from './article/article.module';
import { CommentModule } from './comment/comment.module';

export const ComponentsModule = angular
    .module('angularjs-boilerplate.components', [
        MainModule,
        NotFoundModule,
        ArticleModule,
        CommentModule
    ])
    .name;
