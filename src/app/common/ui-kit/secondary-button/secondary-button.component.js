import controller from './secondary-button.controller';
import templateUrl from './secondary-button.html';

export const SecondaryButtonComponent = {
    controller,
    bindings: {
        title: '@',
        mode: '@',
        disabled: '<',
        display: '@',
        size: '@',
        to: '@',
        theme: '@'
    },
    templateUrl
};
