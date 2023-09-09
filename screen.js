// script.js
document.addEventListener("DOMContentLoaded", function() {
    const reminderForm = document.getElementById("new-reminder-form");

    reminderForm.addEventListener("submit", function(e) {
        e.preventDefault();

        // Retrieve form data
        const date = document.getElementById("date").value;
        const subject = document.getElementById("subject").value;
        const description = document.getElementById("description").value;
        const email = document.getElementById("email").value;
        const contactNo = document.getElementById("contact-no").value;
        const smsNo = document.getElementById("sms-no").value;
        const recurrenceOptions = [];

        // Retrieve selected recurrence options
        const checkboxes = document.querySelectorAll('input[name="recur"]:checked');
        checkboxes.forEach((checkbox) => {
            recurrenceOptions.push(checkbox.value);
        });

        // Implement your reminder creation logic here
        console.log("Date:", date);
        console.log("Subject:", subject);
        console.log("Description:", description);
        console.log("Email:", email);
        console.log("Contact No:", contactNo);
        console.log("SMS No:", smsNo);
        console.log("Recurrence Options:", recurrenceOptions);
    });
});