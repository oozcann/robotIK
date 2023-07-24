import htmlTemplate from '../../../view/drct/core/html-form-element.html';
export const HtmlFormElementDirective = [
    '$injector',
    ($injector) => ({
        restrict: 'A',
        scope: {
            beingEdited: '=',
            htmlFormElement: '@',
            ngModel: '=',
            ngRequired: '=',
            ngChange: '&',
            label: '@',
            name: '@',
            placeholder: '@',
            ngMaxlength: '@',
            ngMinlength: '@',
            min: '@',
            max: '@',
            quantity: '@'
        },
        template: htmlTemplate,
        controller: [
            '$scope',
            ($scope) => {
                if($scope.ngChange) {
                    $scope.ngChange();
                }
            }
        ],
        link: function ($scope) {

        }
    })
];
