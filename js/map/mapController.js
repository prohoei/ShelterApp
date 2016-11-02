// Controller for map locations. Get JSON data via shelter.json file, and set $scope to mapLocations.

app.controller('mapController', function($scope, $http){
	$http.get('http://prohoei.dk/projects/shelter/shelter.json')
	.then(function(response){
		$scope.mapLocations = response.data.features
	});
// Function that sets the current marker id, to id (in $scope). 
  this.showMapLocationInfo = function () {
    $scope.id = this.id;
  };
//Function that returns array of coordinates from.
  this.getCoordinatesShelter = function (key) {
    return [$scope.mapLocations[key].properties.lat, $scope.mapLocations[key].properties.lon];
  };
  
  $scope.customIcon = {
        "scaledSize": [72, 72],
        "url": "marker.png"
    };
	
	var styleArray=[{featureType:"all",elementType:"labels.text.fill",stylers:[{saturation:36},{color:"#333333"},{lightness:40}]},{featureType:"all",elementType:"labels.text.stroke",stylers:[{visibility:"on"},{color:"#ffffff"},{lightness:16}]},{featureType:"all",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"administrative",elementType:"geometry.fill",stylers:[{color:"#fefefe"},{lightness:20}]},{featureType:"administrative",elementType:"geometry.stroke",stylers:[{color:"#fefefe"},{lightness:17},{weight:1.2}]},{featureType:"landscape",elementType:"geometry",stylers:[{color:"#ededed"},{lightness:20}]},{featureType:"landscape",elementType:"geometry.stroke",stylers:[{visibility:"on"},{color:"#19d860"}]},{featureType:"landscape.natural.landcover",elementType:"geometry.stroke",stylers:[{color:"#0ec875"}]},{featureType:"poi",elementType:"geometry",stylers:[{color:"#f5f5f5"},{lightness:21}]},{featureType:"poi.park",elementType:"geometry",stylers:[{color:"#dedede"},{lightness:21}]},{featureType:"poi.park",elementType:"geometry.fill",stylers:[{color:"#1fcb7f"}]},{featureType:"road.highway",elementType:"geometry.fill",stylers:[{color:"#ffffff"},{lightness:17}]},{featureType:"road.highway",elementType:"geometry.stroke",stylers:[{color:"#ffffff"},{lightness:29},{weight:0.2}]},{featureType:"road.arterial",elementType:"geometry",stylers:[{color:"#168d4b"},{lightness:18},{visibility:"off"}]},{featureType:"road.local",elementType:"geometry",stylers:[{color:"#ffffff"},{lightness:16}]},{featureType:"transit",elementType:"geometry",stylers:[{color:"#f2f2f2"},{lightness:19}]},{featureType:"water",elementType:"geometry",stylers:[{color:"#e9e9e9"},{lightness:17}]}];

   $scope.options = {
		styles: styleArray
	  }
});