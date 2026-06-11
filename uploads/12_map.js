// Wait for the DOM to be fully loaded before initializing the map.
// This is the native JS equivalent of jQuery's $(document).ready().
document.addEventListener('DOMContentLoaded', function() {

    // -----------------------------------------------------------------------
    // 1. Initialize the map and set its initial view
    // L.map('map') links the Leaflet instance to the <div id="map"> in HTML.
    // .setView([lat, lng], zoomLevel) centers the map on NYC at zoom 13.
    // -----------------------------------------------------------------------
    const map = L.map('map').setView([40.7128, -74.0060], 13);

    // -----------------------------------------------------------------------
    // 2. Add a Tile Layer (the base map image)
    // OpenStreetMap tiles are free and open-source.
    // Attribution is *required* — always credit the tile provider.
    // -----------------------------------------------------------------------
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    console.log("Map initialized.");

    // -----------------------------------------------------------------------
    // 3. Add Markers with Popups
    // L.marker([lat, lng]) places a pin; .bindPopup() attaches a click popup.
    // -----------------------------------------------------------------------

    // Times Square marker
    const timesSquareCoords = [40.7580, -73.9855];
    const timesSquareMarker = L.marker(timesSquareCoords).addTo(map);
    timesSquareMarker.bindPopup("<b>Times Square</b><br>Mentioned in Whitman's era context.");

    // The Graduate Center, CUNY — methods can be chained
    const gradCenterCoords = [40.7486, -73.9840];
    const gradCenterMarker = L.marker(gradCenterCoords)
        .addTo(map)
        .bindPopup("The Graduate Center, CUNY");

    // -----------------------------------------------------------------------
    // 4. Add Shapes
    // -----------------------------------------------------------------------

    // Circle: centered on Times Square, radius in meters
    const circle = L.circle(timesSquareCoords, {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.3,
        radius: 500
    }).addTo(map);
    circle.bindPopup("Approx. 500m radius around Times Square");

    // Polyline: a line connecting two points
    const polyline = L.polyline([timesSquareCoords, gradCenterCoords], {
        color: 'blue'
    }).addTo(map);
    polyline.bindPopup("Line from Times Square to the Grad Center");

    // Polygon: a closed shape (first and last point are the same)
    const trianglePoints = [
        [40.7480, -73.9850],
        [40.7490, -73.9830],
        [40.7480, -73.9830],
        [40.7480, -73.9850]
    ];
    const polygon = L.polygon(trianglePoints, {
        color: 'green',
        fillColor: '#0f0',
        fillOpacity: 0.4
    }).addTo(map);
    polygon.bindPopup("A sample polygon near the Grad Center");

    // -----------------------------------------------------------------------
    // 5. Map Events
    // .on(eventName, handler) listens for user or state-change events.
    // -----------------------------------------------------------------------

    // Show a popup at the exact coordinates where the user clicks
    map.on('click', function(e) {
        const coords = e.latlng; // e.latlng carries the click location
        const popupContent =
            `You clicked at:<br>Lat: ${coords.lat.toFixed(4)}<br>Lng: ${coords.lng.toFixed(4)}`;
        L.popup()
            .setLatLng(coords)
            .setContent(popupContent)
            .openOn(map);
        console.log(`Map clicked at: Lat ${coords.lat}, Lng ${coords.lng}`);
    });

    // Log the current zoom level every time the user finishes zooming
    map.on('zoomend', function() {
        console.log("Current map zoom level:", map.getZoom());
    });

    // -----------------------------------------------------------------------
    // CHALLENGE 1: Add Another Marker
    // Coordinates for the Statue of Liberty (approximate)
    // -----------------------------------------------------------------------
    const statueOfLibertyCoords = [40.6892, -74.0445];
    const statueOfLibertyMarker = L.marker(statueOfLibertyCoords)
        .addTo(map)
        .bindPopup("<b>Statue of Liberty</b><br>A well-known symbol of New York harbor.");
    // END CHALLENGE 1

    // -----------------------------------------------------------------------
    // CHALLENGE 2: Change Map View Button
    // The button #zoomToNYC is defined in poem.html.
    // When clicked, reset the map to the original NYC center and zoom level.
    // jQuery is already loaded on the page via poem.html, so $ is available.
    // -----------------------------------------------------------------------
    $('#zoomToNYC').on('click', function() {
        map.setView([40.7128, -74.0060], 13);
    });
    // END CHALLENGE 2

}); // End DOMContentLoaded
