function myMap() {
	var mapCanvas = document.getElementById("map");
	var mapOptions = {
		center: new google.maps.LatLng(51.5, -0.2),
		zoom: 10
	};
	var map = new google.maps.Map(mapCanvas, mapOptions);
	console.log('wokr sc');

}

//let map: google.maps.Map;

//function initMap(): void {
//	map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
//		center: { lat: -34.397, lng: 150.644 },
//		zoom: 8,
//	});
//}