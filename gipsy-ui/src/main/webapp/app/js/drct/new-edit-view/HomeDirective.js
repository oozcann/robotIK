import htmlTemplate from '../../../view/drct/new-edit-view/home.html';
export const HomeDirective = [
    '$injector',
    ($injector) => ({
        restrict: 'A',
        scope: {

        },
        template: htmlTemplate,
        controller: [
            '$scope',
            ($scope) => {

            }
        ],
        link: function ($scope) {

        }
    })
];
