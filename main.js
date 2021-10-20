let id = (id) => document.getElementById(id);

let classes = (classes) => document.getElementsByClassName(classes);

let username = id('username'),
  email = id('email'),
  password = id('password'),
  form = id('form'),
  errorMsg = ['error', 'error', 'error'];

(errorMsg = classes('error')),
  (successIcon = classes('success-icon')),
  (failureIcon = classes('failure-icon'));

form.addEventListener('submit', (e) => {
  e.preventDefault();
  //   errorMsg[2].innerHTML = 'oajoifjoi';

  engine(username, 0, 'Username cannot be blank');
  engine(email, 1, 'Email cannot be blank');
  engine(password, 2, 'Password cannot be blank');
});

let engine = (id, serial, message) => {
  if (id.value.trim() === '') {
    errorMsg[serial].innerHTML = message;
    failureIcon[serial].style.opacity = '1';
    successIcon[serial].style.opacity = '0';
  } else {
    failureIcon[serial].style.opacity = '0';
    successIcon[serial].style.opacity = '1';
  }
};
