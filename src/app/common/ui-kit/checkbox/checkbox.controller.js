export default class CheckboxController {
    constructor($log) {
        'ngInject';
        this.$log = $log;
        this.mode = void 0;
        this.value = void 0;
    }

    $onInit() {
        this.disabled = false;
    }
}
