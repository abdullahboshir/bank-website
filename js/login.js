document.getElementById("login-submit").addEventListener("click", function () {
    // get user email 
    const emailField = document.getElementById("user-email");
    const userEmail = emailField.value;
    // get user pass 
    const pass = document.getElementById("user-password");
    const userPassword = pass.value;
    // check email or password 
    if (userEmail == "abc@gmail.com" && userPassword == "secret") {
        console.log("Valid User")
        window.location.href = "banking.html"
    }
    else {
        prompt("Wrong Password Or Email")
    }
});

