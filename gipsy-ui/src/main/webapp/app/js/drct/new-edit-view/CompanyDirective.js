import htmlTemplate from '../../../view/drct/new-edit-view/company.html';
export const CompanyDirective = [
    '$injector',
    ($injector) => ({
        restrict : "EA",
        scope: {
            company: '=',
            beingEdited: '=',
            isNew: '=',
            justSaved: '='
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
