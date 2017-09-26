import { ArticleCartComponent } from './article-cart.component';

export const ArticleCartModule = angular
    .module('angularjs-boilerplate.article.cart', [])
    .component('articleCart', ArticleCartComponent)
    .name;
