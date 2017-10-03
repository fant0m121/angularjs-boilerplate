/**
 * @ngdoc overview
 * @module angularjs-boilerplate.article
 * @name ArticleDetailController
 * @memberOf article
 *
 * @requires lodash
 *
 * @description
 * Логика работы с детальной страницей новости
 **/

import _ from 'lodash';

export default class ArticleDetailController {
    constructor($stateParams, ArticleService, CommentService) {
        'ngInject';
        this.$stateParams = $stateParams;
        this.ArticleService = ArticleService;
        this.CommentService = CommentService;
    }

    $onInit() {
        this.getArticle(this.$stateParams.code);
        this.getComments();
    }

    /**
     * @ngdoc method
     * @name ArticleDetailController#getArticle
     * @methodOf ArticleDetailController
     *
     * @description Получение информации о новости
     **/
    getArticle(code) {
        this.loading = true;

        return this.ArticleService.getArticleByCode(code)
            .then((article) => {
                this.item = _.clone(article);
                this.loading = false;

                return article;
            })
            .catch((error) => {
                this.error = error;
                this.loading = false;
                throw error;
            });
    }

    getComments() {
        return this.CommentService.getComments()
            .then((comments) => {
                this.comments = _.clone(comments);

                return comments;
            })
            .catch((error) => {
                this.error = error;
                throw error;
            });
    }
}
