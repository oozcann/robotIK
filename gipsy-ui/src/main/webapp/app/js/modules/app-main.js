import './vendor-share';

import { MainStates } from '../states/main-states';

angular.module('myApp',
    [
        'ui.router',
        'ui.select',
        'myApp.directives',
        'myApp.controllers',
        'myApp.services',
        'myApp.filters',
        'pascalprecht.translate'
    ])
    .config([
        '$urlRouterProvider',
        ($urlRouterProvider) => {
            $urlRouterProvider.otherwise('/home');
        }
    ])
    .config([
        '$stateProvider',
        ($stateProvider) => {
            MainStates($stateProvider);
        }
    ])
    .config(['$translateProvider', function ($translateProvider) {
        $translateProvider.useStaticFilesLoader({
            prefix: './asset/json/translations/',
            suffix: '.json'
        })
        .preferredLanguage('tr')
        .fallbackLanguage('en')
        .uniformLanguageTag('iso639-1')
        .determinePreferredLanguage();
        $translateProvider.useSanitizeValueStrategy(null);
    }]);


angular.bootstrap(document.body, ['myApp']);