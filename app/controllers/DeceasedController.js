(function() {
	'use strict';
	
	angular
	.module('app')
	.controller('deceasedController', DeceasedController);
	
	DeceasedController.$inject = ['$scope', '$rootScope', 'deceasedService', '$state', '$stateParams'];
	
	function DeceasedController($scope, $rootScope, deceasedService, $state, $stateParams) {
		$scope.deceasedArray = [];

		if ($state.current.name == "deceaseds") {
			$rootScope.Title = "Deceased Listing";
			deceasedService.getDeceaseds().then(function(res) {
				$scope.deceasedArray = res.data;
			}).catch(function(err) {
				console.log(err);
			});
			
			$scope.deleteDeceased = function(id) {
				if (confirm('Are you sure to delete?')) {
					deceasedService.deleteDeceased(id).then(function(res) {
						if (res.data == "deleted") {
							$state.go("deceaseds", {}, { reload: true });
						}
					}).catch(function(err) {
						console.log(err);
					});
				}
			};
		} else if ($state.current.name == "edit") {
			$rootScope.Title = "Edit Deceased";
			var id = $stateParams.id;
			deceasedService.getDeceased(id).then(function(res) {
				$scope.deceased = res.data;
			}).catch(function(err) {
				console.log(err);
			});
			
			$scope.saveData = function(deceased) {
				if ($scope.deceasedForm.$valid) {
					deceasedService.updateDeceased(deceased).then(function(res) {
						if (res.data == "updated") {
							$state.go("deceaseds");
						}
					}).catch(function(err) {
						console.log(err);
					});
				}
			};
		} else if ($state.current.name == "create") {
			$rootScope.Title = "Create Deceased";
			$scope.saveData = function(deceased) {
				$scope.IsSubmit = true;
				if ($scope.deceasedForm.$valid) {
					deceasedService.createDeceased(deceased).then(function(res) {
						console.log(res.data);
						if (res.data == "created") {
							$state.go("deceaseds");
						}
					}).catch(function(err) {
						console.log(err);
					});
				}
			};
		}
	}
})();