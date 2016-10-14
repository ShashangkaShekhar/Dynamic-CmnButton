app.controller('tchrCtrl', ['$scope', function ($scope) {
    $scope.title = 'Manage Teacher';

    //Enable if need controller based Button
    //$scope.buttons = [
    //    { "method": "save", "title": "Save", "permission": "false" },
    //    { "method": "list", "title": "List", "permission": "true" },
    //    { "method": "reset", "title": "Reset", "permission": "true" }
    //];

   

    $scope.save = function () {
        $scope.lblMessage = "Data Saved";
    }

    $scope.list = function () {
        $scope.lblMessage = "Data List";
    }

    $scope.reset = function () {
        $scope.lblMessage = "All Cleared";
    }

}]);