import { CommentListModule } from './comment-list/comment-list.module';
import { CommentCardModule } from './comment-card/comment-card.module';
import { CommentFormModule } from './comment-form/comment-form.module';
import { CommentService } from './comment.service';

export const CommentModule = angular
    .module('angularjs-boilerplate.comment', [
        CommentListModule,
        CommentCardModule,
        CommentFormModule
    ])
    .service('CommentService', CommentService)
    .name;
