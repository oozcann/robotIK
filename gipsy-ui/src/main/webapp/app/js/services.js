import { RendererProvider } from './util/renderers';

const serviceModuleConf = function ($provide) {
    RendererProvider($provide);
    $provide.factory('entityService', [
        '$q',
        '$http',
        function ($q,$http) {
            function getList (entityAddress, query) {
                entityAddress = "/api/" + entityAddress + "/list";
                const deferred = $q.defer();
                $http.post(entityAddress, query)
                .then(function (response) {
                    if (response && response.data) {
                        deferred.resolve(response.data);
                    } else {
                        deferred.resolve();
                    }
                });
                return deferred.promise;
            }
            function findById (entityAddress, query) {
                entityAddress = "/api/" + entityAddress;
                const deferred = $q.defer();
                $http.post(entityAddress, query)
                .then(function (response) {
                    if (response && response.data) {
                        deferred.resolve(response.data);
                    } else {
                        deferred.resolve();
                    }
                });
                return deferred.promise;
            }
            function saveEntity (entityAddress, entity) {
                entityAddress = "/api/" + entityAddress + '/save';
                const deferred = $q.defer();
                if (!entity) {
                    console.error('entity not specified.');
                    deferred.reject();
                }
                $http.post(entityAddress, entity)
                .then(function (response) {
                    if (response && response.data) {
                        deferred.resolve(response.data);
                    } else {
                        deferred.resolve();
                    }
                });
                return deferred.promise;
            }
            function updateEntity (entityAddress, entity) {
                entityAddress = "/api/" + entityAddress + '/update';
                const deferred = $q.defer();
                if (!entity) {
                    console.error('entity not specified.');
                    deferred.reject();
                }
                $http.post(entityAddress, entity)
                .then(function (response) {
                    if (response && response.data) {
                        deferred.resolve(response.data);
                    } else {
                        deferred.resolve();
                    }
                });
                return deferred.promise;
            }
            function deleteEntity (entityAddress, entity) {
                entityAddress = "/api/" + entityAddress + '/delete';
                const deferred = $q.defer();
                if (!entity) {
                    console.error('entity not specified.');
                    deferred.reject();
                }
                $http.post(entityAddress, entity)
                .then(function (response) {
                    if (response && response.data) {
                        deferred.resolve(response.data);
                    } else {
                        deferred.resolve();
                    }
                });
                return deferred.promise;
            }
            function activateEntity (entityAddress, entity) {
                entityAddress = "/api/" + entityAddress + '/activate';
                const deferred = $q.defer();
                if (!entity) {
                    console.error('entity not specified.');
                    deferred.reject();
                }
                $http.post(entityAddress, entity)
                .then(function (response) {
                    if (response && response.data) {
                        deferred.resolve(response.data);
                    } else {
                        deferred.resolve();
                    }
                });
                return deferred.promise;
            }
            function removeEntity (entityAddress, entity) {
                entityAddress = "/api/" + entityAddress + '/remove';
                const deferred = $q.defer();
                if (!entity) {
                    console.error('entity not specified.');
                    deferred.reject();
                }
                $http.post(entityAddress, entity)
                .then(function (response) {
                    if (response && response.data) {
                        deferred.resolve(response.data);
                    } else {
                        deferred.resolve();
                    }
                });
                return deferred.promise;
            }
            return {
                getList: getList,
                findById: findById,
                saveEntity: saveEntity,
                updateEntity: updateEntity,
                deleteEntity: deleteEntity,
                activateEntity: activateEntity,
                removeEntity: removeEntity
            };
        }
    ]);
    $provide.factory('referenceService', [
        '$q',
        '$http',
        'entityService',
        function ($q,$http,entityService) {
            function createEntityRef (entityAddress, entityRefId) {
                const entityQuery = {};
                if(entityAddress == 'company') {
                    entityQuery.companyId = entityRefId;
                } else if(entityAddress == 'employee') {
                    entityQuery.employeeId = entityRefId;
                }
                entityAddress = entityAddress + '/:' + entityAddress + "Id";
                let reference = {};
                const deferred = $q.defer();
                entityService.findById(entityAddress, entityQuery).then((data) => {
                     reference = {
                        _id: data._id,
                        class: data._class
                     };
                     if (data.fullName) {
                        reference.fullName = data.fullName;
                     } else {
                        reference.name = data.name;
                     }
                     deferred.resolve(reference);
                });
                return deferred.promise;
            }
            return {
                createEntityRef: createEntityRef
            };
        }
    ]);
};
serviceModuleConf.$inject = ['$provide'];
angular.module('myApp.services', [], serviceModuleConf);