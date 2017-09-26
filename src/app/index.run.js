function runBlock($transitions, amMoment, cfpLoadingBar) {
    'ngInject';

    amMoment.changeLocale('ru');

    $transitions.onStart({}, cfpLoadingBar.start);
    $transitions.onSuccess({}, cfpLoadingBar.complete);

    $transitions.onSuccess({}, () => {
        document.body.scrollTop = document.documentElement.scrollTop = 0;
    });
}

export default runBlock;
