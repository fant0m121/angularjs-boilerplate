import _ from 'lodash';

export default class CommentCardController {
    constructor(CommentService) {
        'ngInject';

        this.CommentService = CommentService;
        this.padding = 20;
    }

    $onChanges(changes) {
        if (changes.item) {
            this.item = _.clone(this.item);
        }
    }
}
