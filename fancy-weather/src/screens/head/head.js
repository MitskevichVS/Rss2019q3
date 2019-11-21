const head = () => {
  const fontAwesome = document.createElement('link');
  fontAwesome.rel = 'stylesheet';
  fontAwesome.href = 'https://use.fontawesome.com/releases/v5.8.2/css/all.css';
  fontAwesome.integrity = 'sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay';
  fontAwesome.crossOrigin = 'anonymous';
  document.head.appendChild(fontAwesome);
}

export default head;
