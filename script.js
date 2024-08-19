document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('validation-form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirm-password');

    form.addEventListener('submit', (event) => {
        let isValid = true;

        // Name validation
        if (nameInput.value.trim() === '') {
            document.getElementById('name-error').style.display = 'block';
            isValid = false;
        } else {
            document.getElementById('name-error').style.display = 'none';
        }

        // Email validation
        if (!emailInput.value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
            document.getElementById('email-error').style.display = 'block';
            isValid = false;
        } else {
            document.getElementById('email-error').style.display = 'none';
        }

        // Password validation
        if (passwordInput.value.length < 6) {
            document.getElementById('password-error').style.display = 'block';
            isValid = false;
        } else {
            document.getElementById('password-error').style.display = 'none';
        }

        // Confirm Password validation
        if (passwordInput.value !== confirmPasswordInput.value) {
            document.getElementById('confirm-password-error').style.display = 'block';
            isValid = false;
        } else {
            document.getElementById('confirm-password-error').style.display = 'none';
        }

        if (!isValid) {
            event.preventDefault(); // Prevent form submission if validation fails
        }
    });
});
