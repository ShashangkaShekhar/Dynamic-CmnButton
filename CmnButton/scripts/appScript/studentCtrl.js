app.controller('stdCtrl', ['$scope', function ($scope) {
    $scope.title = 'Manage Student';

    //Enable if need controller based Button
    $scope.buttons = [
        { "method": "create", "title": "Create", "permission": "true" },
        { "method": "update", "title": "Update", "permission": "true" }
    ];

    $scope.create = function () {
        $scope.lblMessage = "Created Student: " + $scope.stName;
        console.log("Created Student" + $scope.stName);
    }

    $scope.update = function () {
        $scope.lblMessage = "Updated Student";
        console.log("Updated Student");
    }

    //Enable if need common function by cmnCtrl
    //$scope.save = function () {
    //    $scope.lblMessage = "Data Saved";
    //}

    //$scope.list = function () {
    //    $scope.lblMessage = "Data List";
    //}

    //$scope.reset = function () {
    //    $scope.lblMessage = "All Cleared";
    //}
}]);