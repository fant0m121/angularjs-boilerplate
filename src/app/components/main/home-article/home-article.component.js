import controller from './home-article.controller';
import templateUrl from './home-article.html';

export const HomeArticleComponent = {
    controller,
    bindings: {
        articleData: '<'
    },
    templateUrl
};
