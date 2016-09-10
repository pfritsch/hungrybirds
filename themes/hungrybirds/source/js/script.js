(function () {
  // Map
  var map = document.getElementById('map');
  if(map) {
    var place = document.getElementById('map').getAttribute('data-location');

    if(place) {
      L.mapbox.accessToken = 'pk.eyJ1IjoiZnJpdHNjaHBpZXJyZSIsImEiOiJjaXMwNWo5cWgwMDRhMm5zMmJwdzFnOGFqIn0.6UTfre_WMiqPewCdiKggPQ';
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

      map.scrollWheelZoom.disable();
      map.touchZoom.disable();
      var enableMapInteraction = function () {
        map.scrollWheelZoom.enable();
        map.touchZoom.enable();
      }
      map.addEventListener("click", enableMapInteraction, false);
      map.addEventListener("touchend", enableMapInteraction, false);

    }
  }

  // Timezone
  var time = document.getElementsByClassName("moment");
  if(time.length > 0) {
    var now = moment().format();
    var where = time[0].dataset.timezone;
    time[0].setAttribute("datetime", now);
    var timezone = moment.tz(now, where).format('HH:mm');
    time[0].innerHTML = timezone;
  }

  // Photos gallery
  baguetteBox.run('.gallery');
})();
