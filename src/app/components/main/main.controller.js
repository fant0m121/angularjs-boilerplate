import _ from 'lodash';

export default class MainController {
    constructor(ArticleService) {
        'ngInject';
        this.ArticleService = ArticleService;
    }

    $onInit() {
        this.getArticleList();
    }

    getArticleList() {
        return this.ArticleService.getArticleList().then((news) => {
            this.news = _.clone(news);

            return news;
        });
    }
}
