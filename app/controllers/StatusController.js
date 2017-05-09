(function() {
	'use strict';
	
	angular
	.module('app')
	.controller('statusController', StatusController);
	
	StatusController.$inject = ['$scope', '$rootScope', 'statusService', '$state', '$stateParams'];
	
	function StatusController($scope, $rootScope, statusService, $state, $stateParams) {
		$scope.statuses = [];

		if ($state.current.name == "statuses") {
			$rootScope.Title = "Deceased Listing";
			statusService.getDeceaseds().then(function(res) {
				$scope.statuses = res.data;
			}).catch(function(err) {
				console.log(err);
			});
			
			$scope.deleteDeceased = function(id) {
				if (confirm('Are you sure to delete?')) {
					statusService.deleteDeceased(id).then(function(res) {
						if (res.data == "deleted") {
							$state.go("statuses", {}, { reload: true });
						}
					}).catch(function(err) {
						console.log(err);
					});
				}
			};
		} else if ($state.current.name == "edit") {
			$rootScope.Title = "Edit Deceased";
			var id = $stateParams.id;
			statusService.getStatus(id).then(function(res) {
				$scope.status = res.data;
			}).catch(function(err) {
				console.log(err);
			});
			
			$scope.saveData = function(status) {
				if ($scope.statusForm.$valid) {
					statusService.updateDeceased(status).then(function(res) {
						if (res.data == "updated") {
							$state.go("statuses");
						}
					}).catch(function(err) {
						console.log(err);
					});
				}
			};
		} else if ($state.current.name == "create") {
			$rootScope.Title = "Create Status";
			//Obtengo todos los status para el select
			statusService.getDeceaseds().then(function(res) {
				$scope.statuses = res.data;
			}).catch(function(err) {
				console.log(err);
			});
			$scope.saveData = function(status) {
				$scope.IsSubmit = true;
				if ($scope.statusForm.$valid) {
					statusService.createStatus(status).then(function(res) {
						console.log(res.data);
						if (res.data == "created") {
							$state.go("statuses");
						}
					}).catch(function(err) {
						console.log(err);
					});
				}
			};
		}
	}
})();