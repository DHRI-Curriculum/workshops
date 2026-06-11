// nyc-data.js
$(document).ready(function() {
    console.log("NYC Data page ready.");

    const map = L.map('map').setView([40.7128, -74.0060], 11); // Start slightly more zoomed out

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    console.log("Base map initialized.");

    // --- GeoJSON processing will go here ---
    // Check if the data variable exists (loaded from nycneighborhoods.js)
    let neighborhoodLayer = null; // Declared here so the list click handler can access it

if (typeof nycNeighborhoods !== 'undefined') {
    console.log("nycNeighborhoods data found.");

    // Create the GeoJSON layer with styling and popups
    neighborhoodLayer = L.geoJSON(nycNeighborhoods, {
        // Style function for each feature (polygon)
        style: function(feature) {
            return {
                color: "#007bff",       // Border color (blue)
                weight: 1,            // Border weight
                fillColor: "#a8dadc",   // Fill color (light cyan)
                fillOpacity: 0.4      // Fill opacity
            };
        },

        // Function executed for each feature, adding popups
        onEachFeature: function(feature, layer) {
            if (feature.properties && feature.properties.neighborhood && feature.properties.borough) {
                const popupContent = `<h3>${feature.properties.neighborhood}</h3><hr>Borough: ${feature.properties.borough}`;
                layer.bindPopup(popupContent);
            }
            // Optional: Add mouse hover effect
            layer.on({
                mouseover: function(e) {
                    const currentLayer = e.target;
                    currentLayer.setStyle({
                        weight: 3,
                        color: '#ff7800', // Orange highlight
                        fillOpacity: 0.6
                    });
                    // Bring layer to front (doesn't work perfectly with polygons sometimes)
                   // if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
                   //     currentLayer.bringToFront();
                   // }
                },
                mouseout: function(e) {
                    // Reset style using the layer reference stored during creation
                     neighborhoodLayer.resetStyle(e.target);
                }
                // click: function(e) {
                //     map.fitBounds(e.target.getBounds()); // Example: Zoom to feature on click
                // }
            });
        }

    }).addTo(map); // Add the processed GeoJSON layer to the map

    console.log("GeoJSON layer added.");

} else {
    console.error("nycNeighborhoods data not found. Check if nycneighborhoods.js is loaded correctly.");
    $('#map').html("<p style='color:red; text-align:center;'>Error: Could not load neighborhood data.</p>");
}

// --- GeoJSON processing ends here ---
// --- Populate Neighborhood List ---
if (typeof nycNeighborhoods !== 'undefined') {

    // 1. Extract and sort neighborhood names
    const neighborhoodNames = nycNeighborhoods.features
        .map(feature => feature.properties.neighborhood) // Get just the name
        .filter(name => name) // Filter out any null/empty names
        .sort(); // Sort alphabetically

    // Remove duplicates (optional but good)
    const uniqueNames = [...new Set(neighborhoodNames)]; // Clever way to get unique values

    console.log(`Found ${uniqueNames.length} unique neighborhoods.`);

    // 2. Add each name to the HTML list
    const listElement = $("#neighborhoods"); // Get the target div
    uniqueNames.forEach(name => {
        // Create a list item with a link inside
        // Store the name in a data attribute for easy retrieval on click
        const listItemHtml = `<li><a href="#" data-neighborhood="${name}">${name}</a></li>`;
        listElement.append(listItemHtml);
    });

    // 3. Add click listener to the list (using event delegation)
    listElement.on('click', 'a', function(event) {
        event.preventDefault(); // Stop link navigation

        const clickedName = $(this).data('neighborhood'); // Get name from data attribute

        // Find the corresponding feature in the GeoJSON data
        const feature = nycNeighborhoods.features.find(
            feat => feat.properties.neighborhood === clickedName
        );

        if (feature) {
            // Option 1: Fly to the feature's bounds (if polygon)
             // Find the layer corresponding to this feature (more complex)
             // A simpler way for now: calculate bounds approx. or pan to first point
             // Let's pan to the approximate center (or first point)

            // Find the layer (might be slow for large datasets)
            let targetLayer = null;
            neighborhoodLayer.eachLayer(function(layer) {
                if (layer.feature.properties.neighborhood === clickedName) {
                    targetLayer = layer;
                }
            });

             if(targetLayer) {
                 map.fitBounds(targetLayer.getBounds().pad(0.1)); // Zoom to fit the neighborhood bounds slightly padded
                 targetLayer.openPopup(); // Open its popup
             } else {
                  // Fallback: Pan to the first coordinate if layer not found directly
                   const coords = feature.geometry.coordinates[0][0]; // [lng, lat]
                   map.panTo(new L.LatLng(coords[1], coords[0])); // PanTo needs [lat, lng]
                   map.setZoom(15); // Set appropriate zoom
             }


        } else {
            console.warn("Could not find feature for:", clickedName);
        }
    });

} // End of list population block
// --- End Populate Neighborhood List ---

}); // End document ready