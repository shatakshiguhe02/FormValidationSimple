const firstname_input = document.getElementById("firstname-input");
const email_input = document.getElementById("email-input");
const password_input = document.getElementById("password-input");
const repeat_password_input = document.getElementById("repeat-password-input");
const form = document.getElementById("form");

const name_error = document.getElementById("name_error");
const email_error = document.getElementById("email_error");
const password_error = document.getElementById("password_error");
const repeatpassword_error = document.getElementById("repeatpassword_error");

form.addEventListener('submit', (e) => {

    var email_check = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (firstname_input.value === '' || firstname_input.value == null) {
        e.preventDefault(); // this will stop our browser submitting the form
        name_error.innerHTML = "Name is required";
        name_error.style = 'color:red; font-size:15px'
    }
    else {
        name_error.innerHTML = " ";
    }
    //---------------------------------------------------------------------------------------
    if (!email_input.value.match(email_check)) {
        e.preventDefault(); // this will stop our browser submitting the form
        email_error.innerHTML = "Email is required";
        email_error.style = 'color:red; font-size:15px'
    }
    else {
        email_error.innerHTML = " ";
    }
    //---------------------------------------------------------------------------------------
    if (password_input.value.length <= 5) {
        e.preventDefault(); // this will stop our browser submitting the form
        password_error.innerHTML = "Password must be more than 5 character";
        password_error.style = 'color:red; font-size:15px'
    }
    else {
        password_error.innerHTML = " ";
    }
    //---------------------------------------------------------------------------------------
    if (password_input.value !== repeat_password_input.value) {
        e.preventDefault(); // Prevent form submission
        repeatpassword_error.innerHTML = "Repeated Password do not match";
        repeatpassword_error.style = 'color:red; font-size:15px';
    } else {
        repeatpassword_error.innerHTML = ""; // Clear error if valid
    }
})

