import _ from 'lodash';

export default class CommentListController {
    constructor() {
        'ngInject';

        this.level = 0;
    }

    $onChanges(changes) {
        if (changes.level) {
            this.level = _.clone(this.level);
        }
    }
}
