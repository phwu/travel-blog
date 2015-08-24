var travelApp = angular.module('travelApp', []);

	// create a service that shares the location clicked by the map controller to be used in the post controller

	travelApp.controller('TravelMapCtrl', function($scope, $http) {
		// get locations to pin on map		
		// home
		 var homeLoc = [
			['Tampa', 27.9681, -82.4764]
		  ];			
		 var locationsVisited = [
			['Yellowstone', 44.6000,-110.5000],
			['New York City', 40.7127, -74.0059],
			['Bellevue', 47.6000, -122.1667]
		  ];	  
		  var locationsToVisit = [
			['Yosemite', 37.8499,-119.5677]
		  ];
		// get places been
		$http.get('')
		.success(function(data) {
			// set response to object
			//$scope.post = data;
		})
		.error(function(data) {
			//err
		});		
		// places to go
		$http.get('')
		.success(function(data) {
			// set response to object
			//$scope.post = data;
		})
		.error(function(data) {
			//err
		});
			  
		// marker images
		var markHome = {
			url: 'https://cdn4.iconfinder.com/data/icons/miu/22/map_location_pin_map-marker_-128.png',
			scaledSize: new google.maps.Size(20,30)
		}
		var markVisited = {
			url: 'https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678111-map-marker-128.png',
			scaledSize: new google.maps.Size(30,30)
		};
		var markDestination = {
			url: 'https://cdn2.iconfinder.com/data/icons/perfect-flat-icons-2/512/Location_marker_pin_map_gps.png',
			scaledSize: new google.maps.Size(30,30)
		};
	  
		function setMarkers(map, locations, markIcon) {
			for(var i = 0; i < locations.length; i++) {
				var loc = locations[i];
				var latlng = new google.maps.LatLng(loc[1], loc[2]);
				
				var marker = new google.maps.Marker({
					position: latlng,
					map: map,
					icon: markIcon,
					title: loc[0]
				});

				// add a click event listener - closures ...
				google.maps.event.addListener(marker, 'click', function(marker, i) {
					// open related blog post and photo gallery
					return function() {
						$('#post').html('<h1>When I was in ... ' + this.title + '</h1>');
					// set the variable in service 
					};
				}(marker, i));
				google.maps.event.trigger(marker, 'click');
			}
		}
	  
		// initialize the map
		var center = new google.maps.LatLng(27.0000,17.0000);
		var mapOptions = {
			zoom: 2,
			center: center
		};

		var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
		
		// load the map with data
		setMarkers(map, homeLoc, markHome);
		setMarkers(map, locationsVisited, markVisited);	
		setMarkers(map, locationsToVisit, markDestination);  
		$('#post').html('<h1>Hello!</h1>');
	});

	travelApp.controller('TravelPostCtrl', function($scope, $http) {
	
		// get loc from service
		// then
		// get post from db route, using location as identifier
		$http.get('')
		.success(function(data) {
			//$scope.post = data;
			$scope.post = {
				location: 'Tampa',
				id: 0,
				date: {start: '', end: ''},
				entry: '',
				gallery: ''		
			}
		})
		.error(function(data) {
			//err
		});
		
	});
	