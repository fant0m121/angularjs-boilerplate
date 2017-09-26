import controller from './comment-list.controller';
import templateUrl from './comment-list.html';

export const CommentListComponent = {
    controller,
    bindings: {
        comments: '<',
        level: '<'
    },
    templateUrl
};
