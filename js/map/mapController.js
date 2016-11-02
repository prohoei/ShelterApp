// Controller for map locations. Get JSON data via shelter.json file, and set $scope to mapLocations.

app.controller('mapController', function($scope, $http){
	$http.get('http://prohoei.dk/projects/shelter/shelter.json')
	.then(function(response){
		$scope.mapLocations = response.data.features
		console.log(response);
	});
// Function that sets the current marker id, to id (in $scope). 
  this.showMapLocationInfo = function () {
    $scope.id = this.id;
  };
//Function that returns array of coordinates from.
  this.getCoordinatesShelter = function (key) {
    return [$scope.mapLocations[key].properties.lat, $scope.mapLocations[key].properties.lon];
  };
});