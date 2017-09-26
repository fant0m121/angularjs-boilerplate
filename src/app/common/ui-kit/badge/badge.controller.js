export default class BadgeController {
    constructor($log) {
        'ngInject';
        this.$log = $log;
        this.theme = 'free';
        this.to = void 0;
        this.display = 'inline-block';
    }
}
