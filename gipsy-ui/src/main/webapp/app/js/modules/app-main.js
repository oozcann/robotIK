import './vendor-share';

import { MainStates } from '../states/main-states';

angular.module('myApp',
    [
        'ui.router',
        'ui.select',
        'myApp.directives',
        'myApp.controllers',
        'myApp.services',
        'myApp.filters'
    ])
    .config([
        '$urlRouterProvider',
        ($urlRouterProvider) => {
            $urlRouterProvider.otherwise('/');
        }
    ])
    .config([
        '$stateProvider',
        ($stateProvider) => {
            MainStates($stateProvider);
        }
    ]);


angular.bootstrap(document.body, ['myApp']);