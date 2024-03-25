function initMap() {
    const mapCenter = { lat: 0, lng: 0 }; // Center of the map (Earth's center)
    const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 2,
        center: mapCenter
    });
}
