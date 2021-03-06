// const { default: axios } = require("axios");
// import axios from 'axios';
// const axios = require('axios').default;

const loginFormHandler = async (event) => {
    // Stop the browser from submitting the form so we can do so with JavaScript
    event.preventDefault();
  
    // Gather the data from the form elements on the page
    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
  
    if (email && password) {
      // Send the e-mail and password to the server
      const response = await axios.post('/api/user-routes/login', {
        email, password
      })
      console.log(response);
  
      if (response.status == 200) {
        document.location.replace('/profile');
      } else {
        alert('Failed to log in');
      }
    }
  };
  
  const signupFormHandler = async (event) => {
    event.preventDefault();
  
    const name = document.querySelector('#name-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const age = document.querySelector('#age-signup').value.trim();
    const gender = document.querySelector('#gender-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
  
    if (name && email && age && gender && password) {
      const response = await axios.post('/api/user-routes/', {name, email, age, gender, password})
      if (response.status == 200) {
        document.location.replace('/profile');
      } else {
        alert(response.statusText);
      }
    }
  };


  document
    .querySelector('.login-form')
    .addEventListener('submit', loginFormHandler);

    document
  .querySelector('.signup-form')
  .addEventListener('submit', signupFormHandler);