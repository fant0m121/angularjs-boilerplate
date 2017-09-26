import controller from './checkbox.controller';
import templateUrl from './checkbox.html';

export const CheckboxComponent = {
    controller,
    bindings: {
        value: '=',
        error: '@',
        disabled: '<',
        onChange: '&',
        title: '@',
        theme: '<'
    },
    templateUrl
};
