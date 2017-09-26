import controller from './article-cart.controller';
import templateUrl from './article-cart.html';

export const ArticleCartComponent = {
    controller,
    bindings: {
        item: '<'
    },
    templateUrl
};
