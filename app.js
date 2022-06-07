// map object

// get coordinates via geolocation api

// get foursquare businesses

// process foursquare array

// event handlers
// window load

// business submit button


// Create map:                                                       
const myMap = L.map('map', {
    center: [48.868672, 2.342130],
    zoom: 12,
});
var map = L.map('map').setView([51.505, -0.09], 13);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);




// Create and add a geolocation marker:
const marker = L.marker([48.87007, 2.346453])
marker.addTo(myMap).bindPopup('<p1><b>The Hoxton, Paris</b></p1>').openPopup()

// map object 
let mymap = {
	coordinates: [],
	buuesiness: [],
	map: [],
	markers: [], 

	buildMap() {
        this.map = L.map('map', {
			center: this.coordinates,
			zoom: 11


		});

    // add openstreetmap tiles
    L.tileLayer('https://.tile.openstreetmap.org///.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    minZoom: '15',
     }).addTo(myMap)
     let marker = L.marker(this.coordinates)
	 .addTo(this.map)

	}

}
async function getCoords(){
    pos = await new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject)
    })
    return [pos.coords.latitude, pos.coords.longitude]
}
async 