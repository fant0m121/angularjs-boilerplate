import { HomeArticleComponent } from './home-article.component';

export const NewsHomeModule = angular
    .module('angularjs-boilerplate.main.article', [])
    .component('homeArticle', HomeArticleComponent)
    .name;
