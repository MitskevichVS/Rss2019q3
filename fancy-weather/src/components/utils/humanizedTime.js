const dayPart = (hours) => {
  let dayTime;

  if (hours < 12) {
    dayTime = 'morning';
  } else if (hours <= 17) {
    dayTime = 'evening';
  } else dayTime = 'afternoon';
  return dayTime;
};

export default dayPart;
