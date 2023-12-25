var DailyEntryController = function ($scope, $http) {
  $scope.PostedDailyObject = {};
  $scope.submitForm = function () {
    console.log($scope.formDate);
    $scope.submitForm = $http({
      method: "POST",
      url: "https://localhost:7044/api/DailyEntry",
      data: $scope.PostedDailyObject,
    }).then(function (res) {
      if (res.status == 200) {
        console.log("hello");
        console.log(res.data);
      }
    });
  };
};
angular
  .module("financialModule", [])
  .controller("EntryController", DailyEntryController);
