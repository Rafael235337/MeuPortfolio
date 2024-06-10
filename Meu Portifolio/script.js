document.addEventListener("DOMContentLoaded", function() {
    const loginBtn = document.getElementById("login-btn");

    // Check if the user is already logged in
    if (localStorage.getItem("isLoggedIn") === "true") {
        loginBtn.style.display = "none";
    }

    // Simulate the login process (for demonstration purposes)
    loginBtn.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent the default action of the link
        // Simulate login
        localStorage.setItem("isLoggedIn", "true");
        loginBtn.style.display = "none";
        // Redirect to the login page (if necessary)
        window.location.href = "./login/index.html";
    });
});
