import controller from './header.controller';
import templateUrl from './header.html';

export const HeaderComponent = {
    controller,
    templateUrl,
    bindings: {
        theme: '@'
    }
};
