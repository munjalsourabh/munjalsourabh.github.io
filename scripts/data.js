var ALL_CITIES = {
	Agartala: 'IXA',
	Agra: 'AGR',
	Ahmedabad: 'AMD',
	Allahabad: 'IXD',
	Amritsar: 'ATQ',
	Aurangabad: 'IXU',
	Bagdogra: 'IXB',
	Bangalore: 'BLR',
	Bhavnagar: 'BHU',
	Bhopal: 'BHO',
	Bhubaneswar: 'BBI',
	Bhuj: 'BHJ',
	Calcutta: 'CCU',
	Chandigarh: 'IXC',
	Chennai: 'MAA',
	Cochin: 'COK',
	Coimbatore: 'CJB',
	Daman: 'NMB',
	Dehradun: 'DED',
	Dibrugarh: 'DIB',
	Dimapur: 'DMU',
	Diu: 'DIU',
	Gauhati: 'GAU',
	Goa: 'GOI',
	Gwalior: 'GWL',
	Hubli: 'HBX',
	Hyderabad: 'HYD',
	Imphal: 'IMF',
	Indore: 'IDR',
	Jaipur: 'JAI',
	Jammu: 'IXJ',
	Jamnagar: 'JGA',
	Jamshedpur: 'IXW',
	Jodhpur: 'JDH',
	Jorhat: 'JRH',
	Kanpur: 'KNU',
	Khajuraho: 'HJR',
	Kozhikode: 'CCJ',
	Leh: 'IXL',
	Lucknow: 'LKO',
	Ludhiana: 'LUH',
	Madurai: 'IXM',
	Mangalore: 'IXE',
	Mumbai: 'BOM',
	Nagpur: 'NAG',
	Nanded: 'NDC',
	Nasik: 'ISK',
	New: 'DEL',
	Patna: 'PAT',
	Pondicherry: 'PNY',
	Poona: 'PNQ',
	Porbandar: 'PBD',
	Port: 'IXZ',
	Puttaparthi: 'PUT',
	Rae: 'BEK',
	Rajkot: 'RAJ',
	Ranchi: 'IXR',
	Shillong: 'SHL',
	Silchar: 'IXS',
	Srinagar: 'SXR',
	Surat: 'STV',
	Tezpur: 'TEZ',
	Tiruchirapally: 'TRZ',
	Tirupati: 'TIR',
	Trivandrum: 'TRV',
	Udaipur: 'UDR',
	Vadodara: 'BDQ',
	Varanasi: 'VNS',
	Vijayawada: 'VGA',
	Vishakhapatnam: 'VTZ',
}

const DataService = function() {
  this.cities_ = ALL_CITIES;

  this.results_ = [];
}

DataService.prototype.getCities = function() {
  return this.cities_;
}

DataService.prototype.getResults = function(source, destination) {
  if (!source || !destination) return
  debugger
  const fligtStatus = {
    source : {
      flightCode:  ALL_CITIES[source] + Math.floor(Math.random() * 1000),
      city: source,
      price: 'INR 12000',
      cityCode: ALL_CITIES[source],
      depart: '10 AM',
      arrive: '12 AM',
    },
    destination: {
      flightCode: ALL_CITIES[destination] + Math.floor(Math.random() * 1000),
      city: destination,
      price: 'INR 12000',
      cityCode: ALL_CITIES[destination],
      depart: '1 PM',
      arrive: '5 PM',
    }
  }
  this.results_.length = 0;
  Array.prototype.push.apply(this.results_, [fligtStatus, fligtStatus, fligtStatus, fligtStatus, fligtStatus]);
  return this.results_;
}

sideBarModule = angular.module('data', []);
sideBarModule.service('dataService', DataService);
