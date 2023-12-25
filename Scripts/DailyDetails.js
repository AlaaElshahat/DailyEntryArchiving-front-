var myApp = angular
  .module("financialModule", [])
  .controller("DetailsController", function ($scope, $http) {
    $scope.rows = [
      { debits: null, credits: null, AccountName: null, AccountNumber: null },
      { debits: null, credits: null, AccountName: null, AccountNumber: null },
      { debits: null, credits: null, AccountName: null, AccountNumber: null },
    ];
    var totalDebits = 0;
    $scope.totalDebits = totalDebits;
    var totalCredits = 0;
    $scope.totalCredits = totalCredits;
    $scope.totalDebits = totalDebits;
    $scope.Accounts = [];
    $scope.selectedAccount = {};
    $scope.addRow = function () {
      for (var i = 0; i < 5; i++) {
        $scope.rows.push({
          debits: null,
          credits: null,
          AccountName: null,
          AccountNumber: null,
        });
      }
    };
    $scope.calculateDebitsAmount = function (index) {
      if (!$scope.rows[index].debits) {
        $scope.rows[index].debits = 0;
      }
      $scope.totalDebits += $scope.rows[index].debits;
    };
    $scope.calculateCreditssAmount = function (index) {
      if (!$scope.rows[index].credits) {
        $scope.rows[index].credits;
      }
      $scope.totalCredits += $scope.rows[index].credits;
    };
    $scope.getAccounts = $http({
      method: "GET",
      url: "https://localhost:7044/api/AccountChart",
    }).then(function (res) {
      if (res.status == 200) {
        $scope.Accounts = res.data;
        console.log(res);
      }
      console.log($scope.Accounts);
    });
  });
var DailyEntryController = function ($scope, $http) {
  $scope.EntryForm = { date: null, description: null };
  $scope.assignDate = function () {
    $scope.EntryForm.date = $scope.date;
    console.log($scope.date);
  };
  $scope.submitForm = function () {
    $scope.post = $http({
      method: "POST",
      url: "https://localhost:7044/api/DailyEntry",
      data: { test: $scope.EntryForm },
    }).then(function (res) {
      if (res.status == 200) {
        console.log(res.data);
      }
    });
  };
};
myApp.controller("EntryController", DailyEntryController);
