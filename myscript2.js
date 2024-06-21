$(document).ready(function() {
    $('#contact-form').on('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Get form values
        const username = $('#username').val();
        const email = $('#email').val();
        const phone = $('#phone').val();
        const message = $('#message').val();

        // Create the content for the alert
        const alertContent = `
            Username: ${username}\n
            Email: ${email}\n
            Phone Number: ${phone}\n
            Message: ${message}
        `;

        // Display the alert
        alert(alertContent);

        // Clear the form fields
        $('#username').val('');
        $('#email').val('');
        $('#phone').val('');
        $('#message').val('');

        // Optionally, refresh the form (if needed)
        $('#contact-form')[0].reset();
    });
});
