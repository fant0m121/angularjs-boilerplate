import moment from 'moment';

export class CommentService {
    constructor($log, $http, $q, $sce) {
        'ngInject';

        this.$http = $http;
        this.$log = $log;
        this.$q = $q;
        this.$sce = $sce;
    }

    getComments() {
        return this.$http.get('app/__data__/comments.json').then((response) => {
            response.data.forEach((comment) => {
                comment.Text = this.$sce.trustAsHtml(comment.Text);
                comment.CreateDate = moment(comment.CreateDate, 'MM/DD/YYYY hh:mm:ss');
                return comment;
            });
            return response.data;
        }).catch((error) => {
            this.$log.error(error.data.Message);
            throw error.data;
        });
    }
}
