(function() {
	'use strict';

	angular
	.module('app')
	.factory('deceasedService', DeceasedService);

	DeceasedService.$inject = ['$http', 'globalConfig'];

	function DeceasedService($http, globalConfig) {
		var url = "";
		return {
			getDeceaseds: function() {
				url = globalConfig.apiAddress + "/deceased";
				return $http.get(url);
			},
			getDeceased: function(id) {
				url = globalConfig.apiAddress + "/deceased/" + id;
				return $http.get(url);
			},
			createDeceased: function(deceased) {
				url = globalConfig.apiAddress + "/deceased";
				console.log('servicio');
				return $http.post(url, deceased);
			},
			updateDeceased: function(deceased) {
				url = globalConfig.apiAddress + "/deceased/" + deceased._id;
				return $http.put(url, deceased);
			},
			deleteDeceased: function(id) {
				url = globalConfig.apiAddress + "/deceased/" + id;
				return $http.delete(url);
			}
		};
	}
})();