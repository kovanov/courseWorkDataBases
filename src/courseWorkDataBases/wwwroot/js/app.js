!function(){"use strict";angular.module("scheduleKpi",["ngRoute","groupsService"]),angular.module("scheduleKpi").config(["$routeProvider","$locationProvider",function(a,b){a.when("/",{templateUrl:"partials/groups.html",controller:"groupsController"}).when("/groups/add",{templateUrl:"partials/add.html",controller:"groupsAddController"}).when("/groups/edit/:id",{templateUrl:"partials/edit.html",controller:"groupsEditController"}).when("/groups/delete/:id",{templateUrl:"partials/delete.html",controller:"groupsDeleteController"}),b.html5Mode(!0)}])}(),function(){"use strict";function a(a,b){a.groups=b.query()}function b(a,b,c){a.groups=b.query()}function c(a,b,c,d){a.groups=b.query()}function d(a,b,c,d){a.groups=b.query()}angular.module("scheduleKpi").controller("groupsController",a).controller("groupsAddController",b).controller("groupsEditController",c).controller("groupsDeleteController",d),a.$inject=["$scope","Groups"],b.$inject=["$scope","Groups","$location"],c.$inject=["$scope","Groups","$location","$routeParams"],d.$inject=["$scope","Groups","$location","$routeParams"]}(),function(){"use strict";var a=angular.module("groupsService",["ngResource"]);a.factory("Groups",["$resource",function(a){return a("/api/groups/",{},{query:{method:"GET",params:{},isArray:!0}})}])}();