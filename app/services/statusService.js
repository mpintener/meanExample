(function() {
	'use strict';

	angular
	.module('app')
	.factory('statusService', StatusService);

	StatusService.$inject = ['$http', 'globalConfig'];

	function StatusService($http, globalConfig) {
		var url = "";
		return {
			getStatuses: function() {
				url = globalConfig.apiAddress + "/status";
				return $http.get(url);
			},
			getStatus: function(id) {
				url = globalConfig.apiAddress + "/status/" + id;
				return $http.get(url);
			},
			createStatus: function(status) {
				url = globalConfig.apiAddress + "/status";
				console.log('servicio');
				return $http.post(url, status);
			},
			updateStatus: function(status) {
				url = globalConfig.apiAddress + "/status/" + status._id;
				return $http.put(url, status);
			},
			deleteStatus: function(id) {
				url = globalConfig.apiAddress + "/status/" + id;
				return $http.delete(url);
			}
		};
	}
})();