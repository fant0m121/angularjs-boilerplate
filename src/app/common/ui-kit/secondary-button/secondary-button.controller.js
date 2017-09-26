import _ from 'lodash';

export default class SecondaryButtonController {
    constructor($log) {
        'ngInject';
        this.$log = $log;
        this.theme = 'gray';
        this.size = 'md';
        this.mode = void 0;
        this.to = void 0;
        this.display = 'inline-block';
    }

    $onInit() {
        this.disabled = false;
    }

    $onChanges(changes) {
        if (changes.mode) {
            this.mode = _.clone(this.mode);
        }
    }
}
