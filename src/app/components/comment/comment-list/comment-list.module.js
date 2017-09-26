import { CommentListComponent } from './comment-list.component';

export const CommentListModule = angular
    .module('angularjs-boilerplate.comment.list', [])
    .component('commentList', CommentListComponent)
    .name;
