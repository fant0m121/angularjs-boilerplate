function interceptor($q) {
    'ngInject';

    return {
        request: (config) => {
            return config;
        },
        response: (response) => {
            return response;
        },
        responseError: (rejection) => {
            return $q.reject(rejection);
        }
    };
}

export default interceptor;
