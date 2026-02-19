document.getElementById("registrationForm").addEventListener("submit", function(event) {
    
    event.preventDefault(); // Prevent page refresh

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const message = document.getElementById("message");

    if (name === "" || email === "" || password === "") {
        message.style.color = "red";
        message.innerHTML = "Please fill in all fields.";
    } else {
        message.style.color = "green";
        message.innerHTML = "Registration successful!";
    }
});
