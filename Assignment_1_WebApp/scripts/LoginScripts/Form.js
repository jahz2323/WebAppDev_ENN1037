
$(document).ready(function () {
    console.log("Form.js loaded");
    validateForm();
});

function validateForm(){
    //check if form is present
    let form = document.getElementById("login-form");

    form.addEventListener("submit", function (event) {
        //prevent form from submitting
        event.preventDefault();

        //GET FORM VALUES
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        const remember = document.getElementById("remember-me").checked;
        //get time
        const time = new Date().toLocaleTimeString(); //Add a time stamp to the form
        console.log(time);


        //check if values are filled
        if (!username || !password) {
            alert("Please fill in all fields");
            return;
        }
        //usernames must be at least 3 characters
        if (username.length < 3) {
            alert("Username must be at least 3 characters");
            return;
        }

        //check if username values contain reserved characters
        if (username.includes("admin") || username.includes("Admin") || username.includes("ADMIN")
        || username.includes("root") || username.includes("Root") || username.includes("ROOT")
        || username.includes("\\") || username.includes("/") || username.includes(":")
        || username.includes("*") || username.includes("?") || username.includes("\"")
        || username.includes(";") || username.includes("|") || username.includes("<")){
            alert("Username contains reserved characters");
            return;
        }

        //place in array
        /*
        use object instead of array to store form values as issue when parsing
        as getting elements as strings and inputed to table as char
        but need to get as objects
         */
        const formValues = {
            username: username,
            password: password,
            remember: remember,
            time: time
        }
        console.log(formValues);
        //save to local storage
        const LoginForms = JSON.parse(localStorage.getItem("Login-Form-table")) || [];
        LoginForms.push(formValues);
        localStorage.setItem("Login-Form-table", JSON.stringify(LoginForms));
        //check if form is submitted
        localStorage.key("Login-Form-table") ? alert("Login Form submitted") : alert("Login Form not submitted");
        // alert("Login Form submitted");
        form.reset();
    });

    //validate form
    $("#login-form").validate({
        rules: {
            username: {
                required: true,
                minlength: 3
            },
            password: {
                required: true,
                minlength: 6
            }
        },
        messages: {
            username: {
                required: "Please enter your username",
                minlength: "Your username must consist of at least 3 characters"
            },
            password: {
                required: "Please provide a password",
                minlength: "Your password must be at least 6 characters long"
            }
        }
    });
}
