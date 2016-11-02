// controller using google maps javascript api, to find the users position.

userModule.controller('GetUserPositionController', function($scope){
	var options = {
   	    enableHighAccuracy: true
   	};
	navigator.geolocation.getCurrentPosition(
		function(pos) {
    		$scope.position = new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude);           
    	}, 
    	function(error) {                    
    		alert('Unable to get location: ' + error.message);
   		} 
   	);
});