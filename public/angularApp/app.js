var app = angular.module('usersApp', ['ngRoute']);
console.log("in app");
//This configures the routes and associates each route with a view and a controller

app.config(function ($routeProvider) {
    $routeProvider
    	.when('/home',
    	{
    			controller:'UserController',
    			templateUrl:'/views/home.ejs'
    	})
        .when('/editProfile',
            {
                controller: 'UserController',
                templateUrl: '/views/userprofile.ejs'
            })
        //Define a route that has a route parameter in it (:customerID)
        .when('/personalprofile',
            {
                controller: 'ProfileController',
                templateUrl: '/views/personalprofile.ejs'
            })
        //Define a route that has a route parameter in it (:customerID)
        .when('/companyEditProfile',
            {
                controller: 'CompanyController',
                templateUrl: '/view/companyEditProfile.ejs'
            })
         .when('/companyViewProfile',
        		 {
        	 	   controller: 'CompanyController',
        	 	   templateUrl: '/views/companyViewProfile.ejs'
        		 })
        .otherwise({ redirectTo: '/home' });
});
