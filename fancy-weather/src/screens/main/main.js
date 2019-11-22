import './main.scss';

const main = () => {
  const mainElement = document.createElement('main');
  mainElement.className = 'main';

  const leftContainer = document.createElement('div');
  leftContainer.className = 'main__container-left';

  const rightContainer = document.createElement('div');
  rightContainer.className = 'main__container-right';

  const mapComponent = document.createElement('div');
  mapComponent.id = 'map';

  const latitude = document.createElement('span');
  latitude.className = 'main__container-right__text-latitude';
  latitude.id = 'latitude';

  const longtitude = document.createElement('span');
  longtitude.className = 'main__container-right__text-longtitude';
  longtitude.id = 'longtitude';

  rightContainer.appendChild(mapComponent);
  rightContainer.appendChild(latitude);
  rightContainer.appendChild(longtitude);
  mainElement.appendChild(leftContainer);
  mainElement.appendChild(rightContainer);

  document.getElementsByTagName('body')[0].appendChild(mainElement);
};

export default main;
