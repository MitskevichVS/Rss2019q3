const getWindSpeedUnits = (units) => {
  let windSpeedUnit;
  switch (units) {
    case 'metric':
      windSpeedUnit = 'm/s';
      break;
    default:
      windSpeedUnit = 'mph';
      break;
  }
  return windSpeedUnit;
};

export default getWindSpeedUnits;
