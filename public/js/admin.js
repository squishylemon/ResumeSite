// THIS CODE WILL NOT BE FINSIHED
// THIS CODE WILL NOT BE FINSIHED
// THIS CODE WILL NOT BE FINSIHED

const loginForm = document.querySelector('form');
const referenceArea = document.querySelector('main > h2');

// Hide the reference area by default
if (referenceArea) {
  referenceArea.style.display = 'none';
}

loginForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent the form from submitting
  
  const usernameInput = document.querySelector('#username');
  const passwordInput = document.querySelector('#password');
  
  const username = usernameInput.value;
  const password = passwordInput.value;

  fetch('/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ username, password })
  })
  .then(response => response.json())
  .then(data => {
    if (data.success) {
      // If the username and password are correct, show the reference area and hide the login form
      if (referenceArea) {
        loginForm.style.display = 'none';
        referenceArea.style.display = 'block';
      }
    } else {
      // If the username and password are incorrect, display an error message
      alert('Incorrect username or password');
    }
  })
  .catch(error => console.error(error));
});

// THIS CODE WILL NOT BE FINSIHED
// THIS CODE WILL NOT BE FINSIHED
// THIS CODE WILL NOT BE FINSIHED