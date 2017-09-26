import controller from './additional-button.controller';
import templateUrl from './additional-button.html';

export const AdditionalButtonComponent = {
    controller,
    bindings: {
        title: '@',
        mode: '@',
        display: '@',
        disabled: '<',
        size: '@',
        to: '@',
        theme: '@'
    },
    templateUrl
};
