import controller from './comment-card.controller';

export const CommentCardComponent = {
    controller,
    bindings: {
        item: '<',
        level: '<',
        type: '<'
    },
    templateUrl: 'app/components/comment/comment-card/comment-card.html'
};
