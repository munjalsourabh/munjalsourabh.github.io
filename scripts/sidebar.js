const SideBarCtrl = function($q, dataService, selectionsService) {
 
  this.$q_ = $q;
 
  this.departureDate = new Date();

  this.returnDate = new Date();  

  this.minDate = new Date();
 
  this.dataService_ = dataService;

  this.selectionsService_ = selectionsService;

  this.startPrice = 0;

  this.minPrice = 0

  this.maxPrice = 100000;

  this.isTripTwoWay = false;

  this.origin;

  this.destination;
}

SideBarCtrl.prototype.sourceQuerySearch = function(searchText) {
  let cities = this.dataService_.getCities();
  let resultsMap = [];
  Object.keys(cities).forEach(function(city) {
    if (city.toLowerCase().includes(searchText.toLowerCase())) {
      resultsMap.push({city: city, code: cities[city]});
    }
  });
  return resultsMap;
}

SideBarCtrl.prototype.setOrigin = function(origin) {
  this.origin = origin;
};

SideBarCtrl.prototype.setDestination = function(destination) {
  this.destination = destination;
};

SideBarCtrl.prototype.setSelections = function() {
  const selections = {
    origin: this.origin,
    destination: this.destination,
    departureDate: this.departureDate,
    returnData: this.returnDate,
    isTripTwoWay: this.isTripTwoWay,
    minPrice: this.minPrice,
    maxPrice: this.maxPrice,
  };
  this.selectionsService_.setSelections(selections)
};

sideBarModule = angular.module('sidebar', ['data', 'selections']);
sideBarModule.controller('SideBarCtrl', SideBarCtrl);