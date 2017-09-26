export default class HomeArticleController {
    constructor() {
        'ngInject';
    }

    $onChanges(changes) {
        if (changes.articleData) {
            this.news = angular.copy(this.articleData);
        }
    }
}
