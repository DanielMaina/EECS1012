//done by Mahdiyar
const form = document.getElementById('login-form');
const errorElement = document.getElementById('error-message');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const username = form.username.value;
  const password = form.password.value;

  if (username === '' || password === '') {
    errorElement.innerText = 'Please enter both username and password';
    return;
  }

  if (username !== 'user' || password !== 'password') {
    errorElement.innerText = 'Invalid username or password';
    return;
  }

  window.location.href = 'dashboard.html';
});