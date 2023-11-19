const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', function (event) {

  event.preventDefault();

  function validateEmail(email) {
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  const formData = {
    name: name,
    email: email,
    message: message,
  };

  if (!validateEmail(email)) {
    alert('Please enter a valid email address.');
    return;
  }


  const formDataJSON = JSON.stringify(formData);
  localStorage.setItem('contactFormData', formDataJSON);
  alert('Form data has been saved to local storage.');
});
