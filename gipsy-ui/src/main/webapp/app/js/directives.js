

// import {TestDirective} from './drct/new-edit-view/TestDirective';

import {HomeDirective} from './drct/new-edit-view/HomeDirective'
import {SideBarMenuDirective} from './drct/core/SideBarMenuDirective'

const appDirectives = angular.module('myApp.directives', []);

appDirectives.directive('home',HomeDirective);
appDirectives.directive('sideBarMenu',SideBarMenuDirective);

// appDirectives.directive('testDirective', TestDirective);