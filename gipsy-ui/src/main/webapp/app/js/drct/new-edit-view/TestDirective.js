import htmlTemplate from '../../../view/drct/new-edit-view/test-directive.html';
import { AbstractNewEditViewCtrl } from './AbstractNewEditViewCtrl';
export const TestDirective = [
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
        $injector.invoke(AbstractNewEditViewCtrl, this, { $scope: $scope });
        $scope.getEntityAddress = function () {
            return 'preventive';
        };
        $scope.getEntity = function () {
            return {name: 'test'};
        };
    }
  })
];
