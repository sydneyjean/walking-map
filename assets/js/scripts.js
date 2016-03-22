var map;
function initMap() {
	map = new google.maps.Map(document.getElementById('map'), {
		center: {lat: 38.7139, lng: -9.1394},
		zoom: 14
	});
}