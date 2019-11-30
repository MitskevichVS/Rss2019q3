const mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');

const showMap = (latitude, longtitude) => {
  console.log(latitude);
  console.log(longtitude);
  mapboxgl.accessToken = 'pk.eyJ1IjoidmljbSIsImEiOiJjazM3OGptajcwM2U2M2hub3VndW85bmY0In0.YjI_4SkVRa67Odgm-yrNvg';
  const map = new mapboxgl.Map({
    style: 'mapbox://styles/mapbox/light-v10',
    center: [longtitude, latitude],
    zoom: 15.2,
    pitch: 100,
    bearing: 0,
    container: 'map',
    antialias: true,
  });

  // The 'building' layer in the mapbox-streets vector source contains building-height
  // data from OpenStreetMap.
  map.on('load', () => {
  // Insert the layer beneath any symbol layer.
    const { layers } = map.getStyle();

    let labelLayerId;
    for (let i = 0; i < layers.length; i += 1) {
      if (layers[i].type === 'symbol' && layers[i].layout['text-field']) {
        labelLayerId = layers[i].id;
        break;
      }
    }

    map.addLayer({
      id: '3d-buildings',
      source: 'composite',
      'source-layer': 'building',
      filter: ['==', 'extrude', 'true'],
      type: 'fill-extrusion',
      minzoom: 15,
      paint: {
        'fill-extrusion-color': '#aaa',

        // use an 'interpolate' expression to add a smooth transition effect to the
        // buildings as the user zooms in
        'fill-extrusion-height': [
          'interpolate', ['linear'], ['zoom'],
          15, 0,
          15.05, ['get', 'height'],
        ],
        'fill-extrusion-base': [
          'interpolate', ['linear'], ['zoom'],
          15, 0,
          15.05, ['get', 'min_height'],
        ],
        'fill-extrusion-opacity': 0.6,
      },
    }, labelLayerId);
  });
};

export default showMap;
