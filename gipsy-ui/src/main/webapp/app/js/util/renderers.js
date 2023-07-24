
import bootbox from 'bootbox';
// https://datatables.net/reference/option/columns.type
// https://datatables.net/reference/option/columns.render
// https://datatables.net/manual/data/orthogonal-data
export const RendererProvider = function ($provide) {
	$provide.factory('rendererService', [
		'$filter',
		'$translate',
		'$state',
		($filter, $translate, $state) => {
			const Renderer = function (nameCacheOrPropertyName, list) {
				const trnsUndefined = $translate.instant('UNDEFINED');
				const spanUndefined = `<span class="text-muted">${trnsUndefined}</span>`;
				const getName = function (nameCacheId, data, full) {
					let name;
					if (typeof nameCacheOrPropertyName == 'string') {
						name = $$objects.getByDotNotation(full, nameCacheOrPropertyName);
					} else if (nameCacheId) {
						name = nameCacheOrPropertyName.get(nameCacheId, data);
					}
					if (name == undefined) {
						name = $$objects.getByDotNotation(full, 'name');
					}
					const sanitizeName = $sanitize(name);
					return sanitizeName;
				};
				const createLink = function (href, clazz, icon, text, referenceName, limitChars,archived) {

				};
				this.getTypeInfo = function (object) {
					let href;
					let icon;
					let clazz;
					// let name;
					switch (object.type) {
						case 'COMPANY':
							href = 'company';
							icon = 'fa-industry';
							clazz = 'textsuccess';
							name =  $translate.instant('BREADCRUMB.COMPANY.COMPANIES');
							break;
					}
					return {
						href: href,
						icon: icon,
						clazz: clazz,
						name: name
					};
				};
				const { getTypeInfo } = this;
				this.ENTITY_RELATION = function (data, scope, full) {
					if (!data) return spanUndefined;
					const typeInfo = getTypeInfo(full);
                    const { href } = typeInfo;
                    const { clazz } = typeInfo;
                    const { icon } = typeInfo;
					return `<a href='home'><i class=clazz></i></a>`;
				};

				return this;
			};
			return { Renderer: Renderer };
		}
	]);
};
