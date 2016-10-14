app.controller('userCtrl', ['$scope', function ($scope) {

    //Enable if need global Button
    $scope.buttons = [
        { "method": "save", "title": "Save", "permission": "true" },
        { "method": "list", "title": "List", "permission": "true" },
        { "method": "reset", "title": "Reset", "permission": "true" }
    ];

}]);