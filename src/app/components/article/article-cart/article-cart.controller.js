/**
 * @ngdoc overview
 * @module angularjs-boilerplate.article
 * @name ArticleCartController
 * @memberOf article
 *
 * @requires lodash
 *
 * @description
 * Логика работы с карточкой новости в списке новостей
 **/

import _ from 'lodash';

export default class ArticleCartController {
    constructor() {
        'ngInject';
    }

    $onChanges(changes) {
        if (changes.item) {
            this.item = _.clone(this.item);
        }
    }
}
