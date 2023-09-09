// script.js
document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("login-form");

    loginForm.addEventListener("submit", function(e) {
        e.preventDefault();

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        // Here, you can add your validation logic.
        // For example, you can check if the username and password are correct,
        // and then redirect the user to the main page if they are.

        // For this example, we'll simply display an alert.
        alert(`Username: ${username}\nPassword: ${password}`);
    });
});