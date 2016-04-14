var app = angular.module("myModule", []);

app.controller("myController", function($scope) {
	$scope.toDoList = ["Mop Floors", "Wash Windows", "Bathe Dog", "Fold Laundry"];
	
	$scope.addItem = function(){
		$scope.toDoList.push($scope.newItem);
};
});
