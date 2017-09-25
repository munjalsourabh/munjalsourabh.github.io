const ResultsCtrl = function($scope, selectionsService, dataService) {
  this.selectionsService_ = selectionsService;
  this.dataService_ = dataService;
  this.selections = [];


  $scope.$watch(() =>  this.selectionsService_.getSelections(), (val) => {
    if (val.destination && val.origin) {
      this.selections = this.dataService_.getResults(
          val.origin.city, val.destination.city);
    }
  });
}

ResultsCtrl.prototype.getSelections = function() {
  return this.selectionsService_.getSelections();
}


resultsModule = angular.module('results', [ 'selections', 'data']);
resultsModule.controller('ResultsCtrl', ResultsCtrl);