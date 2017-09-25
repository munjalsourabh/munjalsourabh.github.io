
const SelectionsService = function() {
  this.selections_ = {};
}

SelectionsService.prototype.setSelections = function(selectionData) {
  this.selections_ = selectionData;
}

SelectionsService.prototype.getSelections = function() {
  return this.selections_;
}

sideBarModule = angular.module('selections', []);
sideBarModule.service('selectionsService', SelectionsService);
