import controller from './badge.controller';
import templateUrl from './badge.html';

export const BadgeComponent = {
    controller,
    bindings: {
        title: '@',
        theme: '@'
    },
    templateUrl
};
