import './weatherIcons.scss';

const weatherIcons = (icon, id) => {
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
    case 'Rain':
    case 'Drizzle':
      switch (id) {
        case 500:
        case 501:
        case 502:
        case 503:
        case 504:
          weatherIcon.classList.add('sun-shower');
          sun.appendChild(rays);
          weatherIcon.appendChild(Bigcloud);
          weatherIcon.appendChild(sun);
          weatherIcon.appendChild(rain);
          break;
        default:
          weatherIcon.classList.add('rainy');
          weatherIcon.appendChild(Bigcloud);
          weatherIcon.appendChild(rain);
          break;
      }
      break;
    case 'Thunderstorm':
      weatherIcon.classList.add('thunder-storm');
      lightning.appendChild(Bigbolt);
      lightning.appendChild(Litbolt);
      weatherIcon.appendChild(Bigcloud);
      weatherIcon.appendChild(lightning);
      break;
    case 'Snow':
      weatherIcon.classList.add('flurries');
      weatherIcon.appendChild(Bigcloud);
      snow.appendChild(Bigflake);
      snow.appendChild(flake);
      weatherIcon.appendChild(snow);
      break;
    case 'Clear':
      weatherIcon.classList.add('sunny');
      sun.appendChild(rays);
      weatherIcon.appendChild(sun);
      break;
    case 'Clouds':
      switch (id) {
        case 801:
          weatherIcon.classList.add('broken-clouds');
          sun.appendChild(rays);
          weatherIcon.appendChild(Bigcloud);
          weatherIcon.appendChild(sun);
          break;
        default:
          weatherIcon.classList.add('cloudy');
          weatherIcon.appendChild(Bigcloud);
          weatherIcon.appendChild(Litcloud);
          break;
      }
      break;
    default:
      weatherIcon.classList.add('cloudy');
      weatherIcon.appendChild(Bigcloud);
      weatherIcon.appendChild(Litcloud);
      break;
  }

  return weatherIcon;
};

export default weatherIcons;
