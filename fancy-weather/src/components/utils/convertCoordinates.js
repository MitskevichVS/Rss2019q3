const convertCoordinates = (coordinate) => {
  const num = Math.abs(+coordinate);
  const degrees = Math.floor(num);
  const minutes = Math.floor((num - degrees) * 60);

  return `${degrees}°${minutes}'`;
};

export default convertCoordinates;
