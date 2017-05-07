(function() {
	'use strict';
	
	angular.module('app', [
		"ui.router"
		])
	.config(function($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise("/");
		
		// $stateProvider.state("users", {
		// 	url: "/",
		// 	templateUrl: "/views/user/list.html",
		// 	controller: "userController"
		// }).state("create", {
		// 	url: "/create",
		// 	templateUrl: "/views/user/create.html",
		// 	controller: "userController"
		// }).state("edit", {
		// 	url: "/edit/:id",
		// 	templateUrl: "/views/user/create.html",
		// 	controller: "userController"
		// }).state("details", {
		// 	url: "/details/:id",
		// 	templateUrl: "/views/user/details.html",
		// 	controller: "userController"
		// });

		$stateProvider.state("deceaseds", {
			url: "/",
			templateUrl: "/views/deceased/list.html",
			controller: "deceasedController"
		}).state("create", {
			url: "/create",
			templateUrl: "/views/deceased/create.html",
			controller: "deceasedController"
		}).state("edit", {
			url: "/edit/:id",
			templateUrl: "/views/deceased/create.html",
			controller: "deceasedController"
		}).state("details", {
			url: "/details/:id",
			templateUrl: "/views/deceased/details.html",
			controller: "deceasedController"
		});
	})
	.constant("globalConfig", {
		apiAddress: 'http://localhost:3000/api'
	});
})();