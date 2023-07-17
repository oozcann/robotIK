import htmlTemplate from '../../../view/drct/core/sidebar-menu.html';
export const SideBarMenuDirective = [
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
