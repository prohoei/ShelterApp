// controller using google maps javascript api, to find the users position.

userModule.controller('userController', function($scope){
	var options = {
   	    enableHighAccuracy: true
   	};
	
	$.getJSON('https://ipinfo.io/geo', function(pos) { 
		var loc = pos.loc.split(',');
		var coords = {
			latitude: loc[0],
			longitude: loc[1]
		};
    	$scope.position = new google.maps.LatLng(coords.latitude, coords.longitude);           
	});
});