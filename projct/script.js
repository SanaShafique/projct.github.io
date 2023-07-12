document.addEventListener("DOMContentLoaded", function() {
  var loginModal = document.getElementById("login-modal");
  var loginButton = document.querySelector(".login-button");
  var closeButton = document.querySelector(".close");
  var loginForm = document.getElementById("login-form");
  var signupLink = document.getElementById("signup-link");
  var signupForm = document.getElementById("signup-form");
  var signupUsernameInput = document.getElementById("signup-username");
  var signupPasswordInput = document.getElementById("signup-password");
  var signupLinkContainer = document.querySelector(".signup-link-container");
  var signupLinkp= document.getElementById("link-p");

  // Show login modal on login button click
  loginButton.addEventListener("click", function() {
    loginModal.style.display = "block";
  });

  // Hide login modal on close button click
  closeButton.addEventListener("click", function() {
    loginModal.style.display = "none";
  });

  // Handle login form submission
  loginForm.addEventListener("submit", function(event) {
    event.preventDefault();

    // Get the entered username and password
    var username = loginForm.elements.username.value;
    var password = loginForm.elements.password.value;

    // Store the login data in the local storage
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);

    // Clear the form inputs
    loginForm.reset();

    // Close the login modal
    loginModal.style.display = "none";

    // Show login success alert
    alert("Login successful!");

    // Perform any other actions after successful login
    // ...
  });

  // Show signup form on signup link click
  signupLink.addEventListener("click", function(event) {
    event.preventDefault();

    // Show the signup form and hide the login form
    signupForm.style.display = "block";
    loginForm.style.display = "none";

    // Hide the signup link container
    signupLinkp.style.display = "none";
  });

  signupForm.addEventListener("submit", function(event) {
    event.preventDefault();

    // Get the entered username and password
    var username = signupUsernameInput.value;
    var password = signupPasswordInput.value;

    // Store the signup data in the local storage
    localStorage.setItem("signupUsername", username);
    localStorage.setItem("signupPassword", password);

    // Clear the form inputs
    signupUsernameInput.value = "";
    signupPasswordInput.value = "";

    // Close the login modal
    loginModal.style.display = "none";

    // Show account creation success alert
    alert("Account created successfully!");

    // Perform any other actions after successful signup
    window.location.href="hotels.html";
  });
});
