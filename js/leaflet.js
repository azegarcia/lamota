const map = L.map('map').setView([45.493163254654554, -122.85291944047754], 12);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

let userLatLng = null;

// Try to get user's location
navigator.geolocation.getCurrentPosition(
    position => {
    userLatLng = L.latLng(position.coords.latitude, position.coords.longitude);
    map.setView(userLatLng, 13);
    L.marker(userLatLng).addTo(map).bindPopup("You are here").openPopup();
    },
    () => {
    alert("Could not get your location. Defaulting to Beaverton.");
    }
);

// Custom icon
const defaultIcon = L.icon({
    iconUrl: 'img/lamota.png',
    iconSize: [35, 41],
    iconAnchor: [12, 41],
    popupAnchor: [0, -35]
});

const stores = [
    { name: "Beaverton Dispensary", lat: 45.493163254654554, lng: -122.85291944047754 },
    { name: "Fern Ave, Brookings Store", lat: 42.05175859861859, lng: -124.28080971534331 },
    { name: "Drain Store", lat: 43.66351158783146, lng: -123.31638169999998 },
    { name: "7th Ave, Eugene Store", lat: 44.05278524887731, lng: -123.11219342883585 },
    { name: "Forest Grove Store", lat: 45.52046132377816, lng: -123.09120820185092 },
    { name: "Gold Beach Store", lat: 42.41778515168432, lng: -124.4195319423283 },
    { name: "Johnson Creek Store", lat: 45.46269879779774, lng: -122.62941934417924 },
    { name: "Main St, Lebanon Store", lat: 44.53999472483312, lng: -122.90720139999999 },
    { name: "Santiam Hwy, Lebanon Store", lat: 44.54767642972723, lng: -122.90735478280568 },
    { name: "Main Rd, Lebanon Store", lat: 44.520927089935476, lng: -122.9068551018509 },
    { name: "Riverside Ave, Medford Store", lat: 42.327250111256724, lng: -122.87023541719432 },
    { name: "Stewart Ave, Medford Store", lat: 42.31327460456173, lng: -122.87710634417924 },
    { name: "Pacific Hwy, Medford Store", lat: 42.35832157292605, lng: -122.90272990608872 },
    { name: "Court St, Medford Store", lat: 42.33682922268381, lng: -122.88064308650755 },
    { name: "Main St, Medford Store", lat: 42.32379452847158, lng: -122.89421017116415 },
    { name: "Myrtle Point Store", lat: 43.05101900169422, lng: -124.12974549814908 },
    { name: "North PDX Store", lat: 45.59640070500738, lng: -122.75058632883584 },
    { name: "Northeast Store", lat: 45.55917328908917, lng: -122.56101099999998 },
    { name: "Rockaway Store", lat: 45.61242444777348, lng: -123.94371710000001 },
    { name: "Cass Ave, Roseburg Store", lat: 43.20893109921166, lng: -123.34678614603015 },
    { name: "Stephens St, Roseburg Store", lat: 43.21819530396957, lng: -123.34318148650755 },
    { name: "Sandy Blvd Store", lat: 45.55628374814345, lng: -122.56919660185092 },
    { name: "Shaw Store", lat: 45.49371321580193, lng: -122.87175193068678 },
    { name: "52nd Ave, Portland Store", lat: 45.46948307665346, lng: -122.61018511349242 },
    { name: "Stark Store", lat: 45.51932732574776, lng: -122.53932363068678 },
    { name: "Main St, Sweet Home Store", lat: 44.39750411594266, lng: -122.73136135582075 },
    { name: "Sweet Home 2 Store", lat: 44.404914496524896, lng: -122.6899201153434 },
    { name: "Taylor's Ferry Rd, Portland Store", lat: 45.46320067240275, lng: -122.6903616423283 },
];

// Add store markers with Google Maps redirect on click
stores.forEach(store => {
    const marker = L.marker([store.lat, store.lng], { icon: defaultIcon }).addTo(map);
    marker.bindPopup(`<strong>${store.name}</strong><br>Click to open in Google Maps`);

    marker.on('click', () => {
    const mapsUrl = userLatLng
        ? `https://www.google.com/maps/dir/?api=1&origin=${userLatLng.lat},${userLatLng.lng}&destination=${store.lat},${store.lng}`
        : `https://www.google.com/maps?q=${store.lat},${store.lng}`;
    window.open(mapsUrl, '_blank');
    });
});