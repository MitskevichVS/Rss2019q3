const head = () => {
  const fontAwesome = document.createElement('link');
  fontAwesome.rel = 'stylesheet';
  fontAwesome.href = 'https://use.fontawesome.com/releases/v5.8.2/css/all.css';
  fontAwesome.integrity = 'sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay';
  fontAwesome.crossOrigin = 'anonymous';

  const meta = document.createElement('meta');
  meta.content = 'width=device-width, initial-scale=1';
  meta.name = 'viewport';

  const mapLink = document.createElement('link');
  mapLink.href = 'https://api.tiles.mapbox.com/mapbox-gl-js/v1.5.0/mapbox-gl.css';
  mapLink.rel = 'stylesheet';

  document.head.appendChild(fontAwesome);
  document.head.appendChild(meta);
  document.head.appendChild(mapLink);
};

export default head;
