import { CommentCardComponent } from './comment-card.component';

export const CommentCardModule = angular
    .module('angularjs-boilerplate.comment.card', [])
    .component('commentCard', CommentCardComponent)
    .name;
