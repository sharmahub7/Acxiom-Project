// script.js
document.addEventListener("DOMContentLoaded", function() {
    const usernameElement = document.getElementById("username");
    const currentDateElement = document.getElementById("current-date");

    // Get the user's name from your authentication system
    const username = "John Doe"; // Replace with actual username
    usernameElement.textContent = username;

    // Get the current date and format it
    const currentDate = new Date();
    const options = { weekday: 'long', day: 'numeric', month: 'long' };
    currentDateElement.textContent = currentDate.toLocaleDateString('en-US', options);

    // Add event listeners for button actions (replace with your logic)
    document.getElementById("set-reminder").addEventListener("click", function() {
        // Implement your "Set Reminder" logic here
    });

    document.getElementById("modify-reminder").addEventListener("click", function() {
        // Implement your "Modify Reminder" logic here
    });

    document.getElementById("disable-reminder").addEventListener("click", function() {
        // Implement your "Disable Reminder" logic here
    });

    document.getElementById("delete-reminder").addEventListener("click", function() {
        // Implement your "Delete Reminder" logic here
    });

    document.getElementById("enable-reminder").addEventListener("click", function() {
        // Implement your "Enable Reminder" logic here
    });

    document.getElementById("view-reminders").addEventListener("click", function() {
        // Implement your "View Reminders" logic here
    });

    document.getElementById("logout").addEventListener("click", function() {
        // Implement your "Log Out" logic here
    });
});