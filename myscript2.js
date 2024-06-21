$(document).ready(function() {
    // Event listener for form submission
    $('#contact-form').on('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Get form values
        const username = $('#username').val(); // Get the username input value
        const email = $('#email').val(); // Get the email input value
        const phone = $('#phone').val(); // Get the phone number input value
        const message = $('#message').val(); // Get the message input value

        // Create the content for the alert
        const alertContent = `
            Username: ${username}\n
            Email: ${email}\n
            Phone Number: ${phone}\n
            Message: ${message}
        `;

        // Display the alert with the form details
        alert(alertContent);

        // Clear the form fields
        $('#username').val(''); // Clear the username input
        $('#email').val(''); // Clear the email input
        $('#phone').val(''); // Clear the phone number input
        $('#message').val(''); // Clear the message input

        // Optionally, refresh the form (if needed)
        $('#contact-form')[0].reset(); // Reset the form to its initial state
    });
});

// JavaScript to handle dark mode toggle
document.addEventListener("DOMContentLoaded", function() {
    const darkModeToggle = document.getElementById('dark-mode-toggle'); // Get the dark mode toggle button
    const body = document.body; // Get the body element

    // Event listener for dark mode toggle button
    darkModeToggle.addEventListener('click', function() {
        body.classList.toggle('dark-mode'); // Toggle the 'dark-mode' class on the body
        if (body.classList.contains('dark-mode')) {
            darkModeToggle.textContent = 'Light Mode'; // Change button text to 'Light Mode' if dark mode is active
        } else {
            darkModeToggle.textContent = 'Dark Mode'; // Change button text to 'Dark Mode' if dark mode is inactive
        }
    });
});
