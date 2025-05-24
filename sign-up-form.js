document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.signup-form');
    const inputs = form.querySelectorAll('input');
  
    form.addEventListener('submit', (event) => {
      event.preventDefault();
  
      inputs.forEach((input) => {
        validateInput(input);
      });
    });
  
    function validateInput(input) {
      const formGroup = input.closest('.form-group');
      const errorMessage = formGroup?.querySelector('.error-message');
      const errorIcon = formGroup?.querySelector('.error-icon');
  
      if (!formGroup || !errorMessage) return;
  
      const value = input.value.trim();
      let message = '';
  
      if (!value) {
        message = `${input.placeholder} cannot be empty`;
      } else if (input.type === 'email' && !isValidEmail(value)) {
        message = `Looks like this is not an email`;
      } else if (input.type === 'password' && value.length < 6) {
        message = `Password must be at least 6 characters`;
      }
  
      if (message) {
        input.classList.add('error');
        formGroup.classList.add('error');
        errorMessage.textContent = message;
        if (errorIcon) errorIcon.style.display = 'block';
      } else {
        input.classList.remove('error');
        formGroup.classList.remove('error');
        errorMessage.textContent = '';
        if (errorIcon) errorIcon.style.display = 'none';
      }
    }
  
    function isValidEmail(email) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }
  });