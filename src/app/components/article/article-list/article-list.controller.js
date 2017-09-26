/**
 * @ngdoc type
 * @name ArticleListController
 * @module angularjs-boilerplate.article
 *
 * @description Логика работы страницы со списком новостей
 **/

export default class ArticleListController {
    constructor(ArticleService) {
        'ngInject';
        this.ArticleService = ArticleService;

        this.loading = false;
        this.articles = [];
    }

    $onInit() {
        this.getArticleList({});
    }

    /**
     * @ngdoc method
     * @name ArticleListController#getArticleList
     *
     * @description Получение списка новостей
     **/
    getArticleList() {
        this.loading = true;

        return this.ArticleService.getArticleList()
            .then((articles) => {
                this.articles = [...this.articles, ...articles];
                this.loading = false;

                return articles;
            })
            .catch((error) => {
                this.error = error;
                this.loading = false;
                throw error;
            });
    }
}
