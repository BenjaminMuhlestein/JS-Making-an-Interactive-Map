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
	coordinates: [36.5388869],
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
     }).addTo(this.map);
     let marker = L.marker(this.coordinates)
	 .addTo(this.map).bindPopup('<p1><b>Your Location!</b></p1>').openPopup()

	},

	// get foursquare businesses


}
async function getCoords(){
    pos = await new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject)
    })
    return [pos.coords.latitude, pos.coords.longitude]
}


window.onload = async () => {
      let coords = await getCoords()
	  myMap.coordinates = coords
	  myMap.buildmap()

}
async function getFoursquare(business) {
	const options = {
		method: 'GET',
		headers: {
		Accept: 'application/json',
		Authorization: 'fsq3ATzZbmcGhdeFafr73wZcnJ+LlN6bK+4dh19a7ClS4u8='
		}
	}
	let limit = 5
	let lat = myMap.coordinates[0]
	let lon = myMap.coordinates[1]
	let response = await fetch(`https://api.foursquare.com/v3/places/search?&query=${business}&limit=${limit}&ll=${lat}%2C${lon}`, options)
	let data = await response.text()
	let parsedData = JSON.parse(data)
	let businesses = parsedData.results
	return businesses
}