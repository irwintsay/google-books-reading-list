document.addEventListener('DOMContentLoaded', () => {
  console.log('Welcome to Irwin\'s Google Books Reading List');
  const loginForm = document.querySelector('.login');

  // loginForm.addEventListener('submit', (e) => {
  //   e.preventDefault();
  //   console.log('Form Submit');
  //   let formData = new FormData(loginForm);
  //   for (var value of formData.keys()){
  //     console.log(value)
  //   }
  //   let formBody = {
  //     email: "irwintsay@mail.com",
  //     password: "123"
  //   }
  //   let config = {
  //     method: 'POST',
  //     mode: 'cors',
  //     headers: {
  //       'Accept': 'application/json, application/xml, text/plain, text/html, *.*',
  //       'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
  //     },
  //     body: formBody
  //   };
  //   fetch('/users/login', config)
  //   .then(r => r.json())
  //   .then(token => {
  //     console.log(token);
  //     localStorage.setItem('access_token', token.token)
  //   })
  // });


  // jQuery Solution

  const $loginForm = $('.login');
  const $searchForm = $('.search');
  const $main = $('.main');

  if(localStorage.getItem('access_token')) {
    $loginForm.hide();
    $main.show();
  }

  const processLogin = (e) => {
    e.preventDefault();
    $.ajax({
      method: 'POST',
      url: '/users/login',
      data: {
        email: $('input[name=email]').val(),
        password: $('input[name=password]').val()
      }
    })
    .then(response => {
      if(response.token) {
        localStorage.setItem('access_token', response.token);
        $loginForm.hide();
        $main.show();
      } else {
        alert('Bad Login');
      }
    });
  };

  const processSearch = (e) => {
    e.preventDefault();
    $.ajax({
      method: 'GET',
      url: `/api/googlebooks/?q=${$('input[name=search]').val()}`
    })
    .then(r => console.log(r));
  };



  $loginForm.on('submit', processLogin);
  $searchForm.on('submit', processSearch);
});