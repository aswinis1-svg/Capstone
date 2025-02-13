// Initialize and add the map
function initMap() {
    
    // The location of the center point (coords are for Rowan :D)

    const location = { lat: 39.7065, lng: -75.1177 };
    
    // The map

    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 10,
        center: location,
    });
    
    // The marker

    const marker = new google.maps.Marker({
        position: location,
        map: map,
    });
}