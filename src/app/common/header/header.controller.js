export default class HeaderController {
    constructor($log) {
        'ngInject';
        this.$log = $log;
        this.theme = 'default';
    }

    $onInit() {
        this.$log.info('header init');
    }
}
