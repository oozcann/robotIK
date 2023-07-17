import bootbox from 'bootbox';
export const MainStates = function ($stateProvider) {
	return (
		$stateProvider
			.state('home', {
				url: '/home',
				template: '<div home></div>>',
				controller: [() => {

				}]
			})
	);
};