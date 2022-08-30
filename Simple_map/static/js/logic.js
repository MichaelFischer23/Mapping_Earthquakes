// add console.log to check to see if our code is working.
console.log("working");

// get data from cities.js
var cityData = cities;
// Create the map object with a center and zoom level
//let map = L.map('mapid').setView([40.7, -94.5], 4);

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: API_KEY
});
//var marker = L.marker([34.0522, -118.2437]).addTo(map);
L.circle([34.0522, -118.2437], {
    radius: 300,
    color: '#FFFF00',
}).addTo(map);
// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);

  // Loop through the cities array and create one marker for each city.

   // Loop through the cities array and create one marker for each city.
cityData.forEach(function(city) {
    console.log(city)
    L.marker(city.location)
    .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
  .addTo(map);
});
// we create the map object with options
//let map = L.map('mapid').setView([36.1733, -120.1794], 7);

// coordinates for each point used in the poly line
let line = [
    [33.9416, -118.4085],
    [37.6213, -122.3790]
  ];
  // Create a polyline using the line coordinates and make the line red.
  L.polyline(line, {
    color: "red"
  }).addTo(map);

  //creating multiline
  // Coordinates for each point to be used in the polyline.
let line_2 = [
    [33.9416, -118.4085],
    [37.6213, -122.3790],
    [40.7899, -111.9791],
    [47.4502, -122.3088]
  ];
  // Create a polyline using the line coordinates and make the line yellow.
L.polyline(line_2, {
    color: "yellow"
 }).addTo(map);
 // Create the map object with center at the San Francisco airport.
let map = L.map('mapid').setView([37.6213, -122.3790], 5);