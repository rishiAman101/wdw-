// Function to redirect to the home page when "Home" button is clicked
function goHome() {
    window.location.href = "index.html";  // Redirect to the home page (or replace with your actual home page URL)
}

// Add an event listener to the form submit
document.querySelector("form").addEventListener("submit", function (e) {
    // Prevent the default form submission (for demo purposes)
    e.preventDefault();

    // Get the values of the username and password fields
    const username = document.querySelector("input[name='username']").value;
    const password = document.querySelector("input[name='password']").value;
    
    // Validation: Check if username and password are not empty
    if (username === "" || password === "") {
        // Display an error message
        displayError("Please fill in both the username and password fields.");
    } else {
        // If valid, simulate login success (for demo purposes)
        loginSuccess();
    }
});

// Function to display error message
function displayError(message) {
    const errorContainer = document.createElement("div");
    errorContainer.classList.add("error-message");
    errorContainer.textContent = message;

    // Append the error message to the login box
    const loginBox = document.querySelector(".login-box");
    loginBox.prepend(errorContainer);

    // Remove the error message after 5 seconds
    setTimeout(() => {
        errorContainer.remove();
    }, 5000);
}

// Simulate successful login (for demo purposes)
function loginSuccess() {
    const successMessage = document.createElement("div");
    successMessage.classList.add("success-message");
    successMessage.textContent = "Login successful! Redirecting...";

    // Append the success message to the login box
    const loginBox = document.querySelector(".login-box");
    loginBox.prepend(successMessage);

    // After 2 seconds, redirect to another page (for demo purposes)
    setTimeout(() => {
        window.location.href = "dashboard.html";  // You can replace this with your actual URL
    }, 2000);
}