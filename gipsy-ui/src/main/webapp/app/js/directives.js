

// import {TestDirective} from './drct/new-edit-view/TestDirective';

import {HomeDirective} from './drct/new-edit-view/HomeDirective'
import {SideBarMenuDirective} from './drct/core/SideBarMenuDirective'
import {HtmlFormElementDirective} from './drct/core/HtmlFormElementDirective'
import {RendererDirective} from './drct/core/RendererDirective'

const appDirectives = angular.module('myApp.directives', []);

appDirectives.directive('home',HomeDirective);
appDirectives.directive('sideBarMenu',SideBarMenuDirective);
appDirectives.directive('htmlFormElement',HtmlFormElementDirective);
appDirectives.directive('renderer',RendererDirective);

// appDirectives.directive('testDirective', TestDirective);