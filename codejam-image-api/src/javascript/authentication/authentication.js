import netlify from 'netlify-auth-providers';

const authentication = () => {
  const errorMessage = document.querySelector('.header__container-error');
  const authenticator = new netlify({
    site_id: '505fe7e3-3366-48e1-99eb-3f34263e84de',
  });

  authenticator.authenticate({ provider: 'github', scope: 'user' }, (err, data) => {
    if (err) {
      errorMessage.classList.remove('header__container-error-hide');
    } else {
      fetch('https://api.github.com/user',
        {
          method: 'GET',
          withCredentials: true,
          credentials: 'include',
          headers: {
            'Access-Control-Allow-Origin': 'https://codejam-api-mvs.netlify.com/',
            Authorization: `token ${data.token}`,
            'Access-Control-Expose-Headers': '*',
          },
        })
        .then((responce) => {
          console.log(responce);
          responce.json();
        })
        .then(userData => console.log(userData));
    }
  });
};

export default authentication;
