mapboxgl.accessToken ='pk.eyJ1IjoiYXJhZjExIiwiYSI6ImNsYmpoY3ZqYTA3dmczb3Jwd3F3Y3hvZXkifQ.5mWQGRqj_w0kGzZbd7S5Vg'
let latitude = 43.6532, longitude = 79.3832
var map = new mapboxgl.Map({ 
    container: 'map',
     style: 'mapbox://styles/mapbox/streets-v11',
      center: [longitude, latitude], zoom: 16 });
      map.addControl(
        new mapboxgl.GeolocateControl({
        positionOptions: {
        enableHighAccuracy: true
        },
        // When active the map will receive updates to the device's location as it changes.
        trackUserLocation: true,
        // Draw an arrow next to the location dot to indicate which direction the device is heading.
        showUserHeading: true
        })
        );
        var img1 = document.querySelector("#amber")
        var marker1 = new mapboxgl.Marker({
          element:img1
        })
        .setLngLat([-79.42684,43.62400])
        .addTo(map);

        var img1 = document.querySelector("#quebec")
        var marker1 = new mapboxgl.Marker({
          element:img1
        })
        .setLngLat([-71.22832,46.77942])
        .addTo(map);

        var img1 = document.querySelector("#PEI")
        var marker1 = new mapboxgl.Marker({
          element:img1
        })
        .setLngLat([-63.28329,46.39529])
        .addTo(map);
        map.addControl( 
            new MapboxDirections({ accessToken: mapboxgl.accessToken }), 'top-left' );