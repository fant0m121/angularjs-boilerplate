import { ArticleListComponent } from './article-list.component';

export const ArticleListModule = angular
    .module('angularjs-boilerplate.article.list', [])
    .component('articleList', ArticleListComponent)
    .name;
