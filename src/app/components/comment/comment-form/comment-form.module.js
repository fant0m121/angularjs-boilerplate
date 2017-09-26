import { CommentFormComponent } from './comment-form.component';

export const CommentFormModule = angular
    .module('angularjs-boilerplate.comment.form', [])
    .component('commentForm', CommentFormComponent)
    .name;
