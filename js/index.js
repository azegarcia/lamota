function initMap() {
    const center = { lat: 34.052235, lng: -118.243683 };
    const locations = [
        ['Philz Coffee<br>\
        801 S Hope St A, Los Angeles, CA 90017<br>\
        <a href="https://goo.gl/maps/L8ETMBt7cRA2">Get Directions</a>', 34.046438, -118.259653],
        ['Philz Coffee<br>\
        525 Santa Monica Blvd, Santa Monica, CA 90401<br>\
        <a href="https://goo.gl/maps/PY1abQhuW9C2">Get Directions</a>', 34.017951, -118.493567],
        ['Philz Coffee<br>\
        146 South Lake Avenue #106, At Shoppers Lane, Pasadena, CA 91101<br>\
        <a href="https://goo.gl/maps/eUmyNuMyYNN2">Get Directions</a>', 34.143073, -118.132040],
        ['Philz Coffee<br>\
        21016 Pacific Coast Hwy, Huntington Beach, CA 92648<br>\
        <a href="https://goo.gl/maps/Cp2TZoeGCXw">Get Directions</a>', 33.655199, -117.998640],
        ['Philz Coffee<br>\
        252 S Brand Blvd, Glendale, CA 91204<br>\
        <a href="https://goo.gl/maps/WDr2ef3ccVz">Get Directions</a>', 34.142823, -118.254569]
    ];

    const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 9,
        center: center,
        mapId: '7c47e6adf119c2e23b0ec9fa'
    });

    const infoWindow = new google.maps.InfoWindow();

    for (let i = 0; i < locations.length; i++) {
        const position = { lat: locations[i][1], lng: locations[i][2] };
        const title = locations[i][0];

        const marker = new google.maps.marker.AdvancedMarkerElement({
            position: position,
            map: map,
            title: stripHTML(title)  // Important for accessibility
        });

        marker.addListener('click', () => {
            infoWindow.setContent(title);
            infoWindow.open(map, marker);
        });
    }
}

// Helper function to strip HTML tags from title for accessibility
function stripHTML(html) {
    const div = document.createElement('div');
    div.innerHTML = html;
    return div.textContent || div.innerText || '';
}
