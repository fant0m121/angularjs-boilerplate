import { ArticleDetailComponent } from './article-detail.component';

export const ArticleDetailModule = angular
    .module('angularjs-boilerplate.article.detail', [])
    .component('articleDetail', ArticleDetailComponent)
    .name;
