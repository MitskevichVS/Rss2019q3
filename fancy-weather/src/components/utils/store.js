const saveState = (language, units) => {
  localStorage.setItem('language', language);
  localStorage.setItem('units', units);
};

export default saveState;
