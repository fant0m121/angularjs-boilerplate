import controller from './general-button.controller';
import templateUrl from './general-button.html';

export const GeneralButtonComponent = {
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
