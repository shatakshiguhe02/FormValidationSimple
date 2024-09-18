const form = document.getElementById("form");
const firstname_input = document.getElementById("firstname-input");
const email_input = document.getElementById("email-input");
const password_input = document.getElementById("password-input");
const repeat_password_input = document.getElementById("repeat-password-input");

form.addEventListener('submit', (e) => {
    //  e.preventDefault(); prevent submit
    let errors = [];
    if (firstname_input) {
        // if we have firstname-input then we are in signup
        errors = getSignupFormErrors(firstname_input.value, email_input.value, password_input.value, repeat_password_input.value);
    }
    else{
        // if we dont have firstname-input we are in login
        errors = getLoginFormErrors(email_input.value, password_input.value);
    }

})