import _ from 'lodash';

export default class ArticleCartController {
    constructor() {
        'ngInject';
    }

    $onInit() {
        console.log('cart init');
    }

    $onChanges(changes) {
        if (changes.item) {
            this.item = _.clone(this.item);
        }
    }
}
