/*const name = document.getElementById('name');
const password = document.getElementById('password');
const form = document.getElementById('form');
const errorElement = document.getElementById('error');

form.addEventListener('submit', (e) => {
  let messages = [];
  if (name.value === '' || name.value == null) {
    messages.push('Name is required');
  }

  if (password.value.length <= 6) {
    messages.push('Password must be longer then 6 characters');
  }

  if (password.value.length >= 20) {
    messages.push('Password must be less then 20 characters');
  }

  if (password.value === 'password') {
    messages.push(`Password can't be a word 'password'`);
  }
  if (messages.length > 0) {
    e.preventDefault();
    errorElement.innerText = messages.join(', ');
  }
});
*/

const name1 = document.getElementById('name');
const password = document.getElementById('password');
const form = document.getElementById('form');
const errorElement = document.getElementById('error');

form.addEventListener('submit', (e) => {
  let messages = [];
  if (name1.value === '' || name1.value == null) {
    messages.push('Name is required');
  }

  if (password.value.length <= 6) {
    messages.push('Password must be longer than 6 characters');
  }

  if (password.value.length >= 20) {
    messages.push('Password must be less than 20 characters');
  }

  if (password.value === 'password') {
    messages.push('Password cannot be password');
  }

  if (messages.length > 0) {
    e.preventDefault();
    errorElement.innerText = messages.join(', ');
  }
});
