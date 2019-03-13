var appRoot = angular.module('myApp', []);

console.log('angularjs module loaded ' + appRoot.name);

appRoot.controller('HomeController', ['$scope', function ($scope) {
    $scope.vm = {};
    $scope.vm.user = {};

    $scope.vm.message = "Welcome to AngularJs Forms";
    $scope.resetForm=function()
    {
        $scope.vm.user={};
        // $scope.demoForm.$dirty = false;
        // $scope.demoForm.$submitted = false;
        // $scope.demoForm.$invalid=false;
        // $scope.demoForm.$setPristine();
    }
}]);