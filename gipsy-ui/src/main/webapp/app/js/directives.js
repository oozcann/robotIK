

// import {TestDirective} from './drct/new-edit-view/TestDirective';

import {HomeDirective} from './drct/new-edit-view/HomeDirective'

const appDirectives = angular.module('myApp.directives', []);

appDirectives.directive('home',HomeDirective);

// appDirectives.directive('testDirective', TestDirective);