if(document.getElementById('map')) {
  var place = document.getElementById('map').getAttribute('data-location');

  if(place) {
    L.mapbox.accessToken = 'pk.eyJ1IjoiZnJpdHNjaHBpZXJyZSIsImEiOiJjaXMwNWo5cWgwMDRhMm5zMmJwdzFnOGFqIn0.6UTfre_WMiqPewCdiKggPQ';
    // Replace 'mapbox.streets' with your map id.
    var mapboxTiles = L.tileLayer('https://api.mapbox.com/v4/mapbox.streets/{z}/{x}/{y}.png?access_token=' + L.mapbox.accessToken, {
      attribution: '© <a href="https://www.mapbox.com/map-feedback/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    var geocoder = L.mapbox.geocoder('mapbox.places'),
    map = L.map('map').addLayer(mapboxTiles);

    geocoder.query(place, showMap);

    var myIcon = L.icon({
      iconUrl: '/images/marker.png',
      iconSize: [24, 33],
      iconAnchor: [12, 33],
      popupAnchor: [0, -20],
      shadowUrl: '/images/marker_shadow.png',
      shadowSize: [24, 20],
      shadowAnchor: [12, 6]
    });

    function showMap(err, data) {
      if (data.latlng) {
        map.setView([data.latlng[0], data.latlng[1]], 7);
        var marker = L.marker([data.latlng[0], data.latlng[1]], {icon: myIcon}).addTo(map);
      }
    }
  }
}
baguetteBox.run('.gallery');
