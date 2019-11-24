import './weatherIcons.scss';

const weatherIcons = (icon) => {
  const weatherIcon = document.createElement('div');
  weatherIcon.classList.add('icon');

  const Bigcloud = document.createElement('div');
  Bigcloud.className = 'cloud';

  const Litcloud = document.createElement('div');
  Litcloud.className = 'cloud';

  const sun = document.createElement('div');
  sun.className = 'sun';

  const rain = document.createElement('div');
  rain.className = 'rain';

  const lightning = document.createElement('div');
  lightning.className = 'lightning';

  const Bigbolt = document.createElement('div');
  Bigbolt.className = 'bolt';

  const Litbolt = document.createElement('div');
  Litbolt.className = 'bolt';

  const rays = document.createElement('div');
  rays.className = 'rays';

  const snow = document.createElement('div');
  snow.className = 'snow';

  const Bigflake = document.createElement('div');
  Bigflake.className = 'flake';

  const flake = document.createElement('div');
  flake.className = 'flake';

  switch (icon) {
    case 'sun-shower':
      weatherIcon.classList.add('sun-shower');
      sun.appendChild(rays);
      weatherIcon.appendChild(Bigcloud);
      weatherIcon.appendChild(sun);
      weatherIcon.appendChild(rain);
      break;
    case 'lighting':
      weatherIcon.classList.add('thunder-storm');
      lightning.appendChild(Bigbolt);
      lightning.appendChild(Litbolt);
      weatherIcon.appendChild(Bigcloud);
      weatherIcon.appendChild(lightning);
      break;
    case 'cloudy':
      weatherIcon.classList.add('cloudy');
      weatherIcon.appendChild(Bigcloud);
      weatherIcon.appendChild(Litcloud);
      break;
    case 'flurries':
      weatherIcon.classList.add('flurries');
      weatherIcon.appendChild(Bigcloud);
      snow.appendChild(Bigflake);
      snow.appendChild(flake);
      weatherIcon.appendChild(snow);
      break;
    case 'sunny':
      weatherIcon.classList.add('sunny');
      sun.appendChild(rays);
      weatherIcon.appendChild(sun);
      break;
    case 'rainy':
      weatherIcon.classList.add('rainy');
      weatherIcon.appendChild(Bigcloud);
      weatherIcon.appendChild(rain);
      break;
    default:
      break;
  }

  return weatherIcon;
};

export default weatherIcons;
