export const RendererDirective = [
	'$compile',
	'rendererService',
	($compile, rendererService) => ({
		restrict: 'A',
		link: function ($scope, $element, attrs) {
			const type = attrs.renderer;
			// const { scope } = attrs;
			const { model } = attrs;
			const { fullModel } = attrs;
			const { propertyName } = attrs;

			const attrList = attrs.list;
			const list = $scope.$eval(attrList);

		}
	})
];
