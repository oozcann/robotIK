import bootbox from 'bootbox';
export const CompanyStates = function ($stateProvider) {
	return (
		$stateProvider
			.state('company', {
                //parent: 'root',
                abstract: true,
                url: '/company/:companyId',
                params: {
                    companyId: null
                },
                template: '<div ui-view></div>',
                controller: [
                    '$scope',
                    'company',
                    'referenceService',
                    '$stateParams',
                    function ($scope,company,referenceService,$stateParams) {
                        $scope.company = company;
                    }
                ],
                resolve: {
                    company: ['entityService','$stateParams', (entityService,$stateParams) => {return entityService.findById("company/:companyId", {"companyId": $stateParams.companyId,"_class":"company"})}]
                }
            })
            .state('company.main', {
                url: '?justSaved',
                template: '<div company="company" being-edited="beingEdited" is-new="isNew" just-saved="justSaved"></div>',
                controller: [
                    '$scope',
                    '$state',
                    '$stateParams',
                    '$rootScope',
                    function ($scope,$state,$stateParams,$rootScope) {
                        $scope.beingEdited = false;
                        $scope.isNew = false;
                        $scope.justSaved = $stateParams.justSaved;
                    }
                ],
                resolve: {

                }
            })
            .state('new-company', {
                url: '/company/new',
                template: '<div company="company" being-edited="beingEdited" is-new="isNew"></div>',
                controller: [
                    '$scope',
                    '$state',
                    '$rootScope',
                    function ($scope, $state, $rootScope) {
                        $scope.beingEdited = true;
                        $scope.isNew = true;
                        $scope.company = {
                            _class: 'company'
                        };
                    }
                ]
            })
	);
};