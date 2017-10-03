/**
 *
 * @ngdoc service
 * @module angularjs-boilerplate.article
 * @name ArticleService
 * @memberOf article
 *
 * @param {service} $log Simple service for logging
 * @param {service} $http Сервис работы с http запросами
 * @param {service} $sce Сервис удаления потенциально опасных элементов и атрибутов из кода html
 * @param {string} ENDPOINT_URL Адресс сервера для получения данных
 *
 **/

export class ArticleService {
    constructor($log, $http, $sce, ENDPOINT_URL) {
        'ngInject';

        this.$http = $http;
        this.$log = $log;
        this.$sce = $sce;
        this.ENDPOINT_URL = ENDPOINT_URL;
    }

    /**
     * @ngdoc method
     * @name getArticleList
     * @methodOf ArticleService
     *
     * @param {object} params параметры для постраничной пагинации и фильтров при запросе списка новостей
     * @description Получение списка новостей
     **/
    getArticleList(params = {}) {
        return this.$http.get('app/__data__/articles.json', {params})
            .then((response) => {
                response.data.forEach((article) => {
                    article.ShortDescription = this.$sce.trustAsHtml(article.ShortDescription);
                    return article;
                });

                return response.data;
            })
            .catch((error) => {
                this.$log.error(error.data.Message);
                throw error.data;
            });
    }

    /**
     * @ngdoc method
     * @name getArticleById
     * @methodOf ArticleService
     *
     * @param {number} articleById ID получаемой новости
     * @description
     * Получение новости по ее ID
     **/
    getArticleById({articleById}) {
        return this.$http.get(`app/__data__/article-${articleById}.json`)
            .then((response) => {
                return response.data;
            })
            .catch((error) => {
                this.$log.error(error.data.Message);
                throw error.data;
            });
    }

    /**
     * @ngdoc method
     * @name getArticleByCode
     * @methodOf ArticleService
     *
     * @param {string} code Символьный код получаемой новости
     * @description
     * Получение новости по ее символьному коду
     **/
    getArticleByCode(code) {
        return this.$http.get(`app/__data__/article-${code}.json`)
            .then((response) => {
                return response.data;
            })
            .catch((error) => {
                this.$log.error(error.data.Message);
                throw error.data;
            });
    }
}
