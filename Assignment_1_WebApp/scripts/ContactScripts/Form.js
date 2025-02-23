/*
    Regex exp for email
    /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i
    https://regex101.com/r/xX0bK2/1
 */

$(document).ready(function () {
    console.log("Form.js loaded");
    validateForm();
})
jQuery.validator.addMethod("lettersonly", function (value, element) {
    return this.optional(element) || /^[a-z\s]+$/i.test(value);
});
//validate email
jQuery.validator.addMethod("emailcheck", function (value, element) {
    //can check if email exists in system

    //check if contains @ and ends with .com
    return /@.*\.com$/.test(value);
});

//validate phone
jQuery.validator.addMethod("phonecheck", function (value, element) {
    // validate only irish phone numbers, starting with
    /*
    087,086,085,089,088
     */
    return this.optional(element) || /^08[5-9]\d{7}$/i.test(value);
});

//validate topic
jQuery.validator.addMethod("notEqual", function (value, element, param) {
    return this.optional(element) || value != param;
});

function validateForm() {

    let form = document.getElementById("contact_form");

    //check if form is present
    form.addEventListener("submit", function (event) {
        event.preventDefault();

        //GET FORM VALUES
        const email = document.getElementById("email").value;
        const phone = document.getElementById("phone").value;
        const message = document.getElementById("message").value;
        const topic = document.getElementById("topic").value;
        const policy = document.getElementById("policy").checked;

        //get time
        const time = new Date().toLocaleTimeString(); //Add a time stamp to the form
        console.log(time);

        console.log(phone.value);
        //check if phone is 087,086,085,089,08
        if (!/^08[5-9]\d{7}$/.test(phone)) {
            alert("Please enter a valid phone number, for example 0871234567");
            return;
        }
        //check if values are filled
        if (!email || !phone || !message || !topic || !policy) {
            alert("Please fill in all fields");
            return;
        }


        //place in array
        const formValues = {
            email: email,
            phone: phone,
            message: message,
            topic: topic,
            policy: policy,
            time: time
        }
        console.log(formValues);
        //save to local storage
        let contactForms = JSON.parse(localStorage.getItem("Contact-Form-table")) || [];

         if(!Array.isArray(contactForms)){
             contactForms = [];
         }
        contactForms.push(formValues);
        localStorage.setItem("Contact-Form-table", JSON.stringify(contactForms));

        localStorage.key("Contact-Form-table") ? alert("Contact Form submitted") : alert("Contact Form not submitted");
        form.reset();
    });
    $('#contact_form').validate({
        rules: {
            email: {
                required: true,
                emailcheck: true
            },
            phone: {
                required: true,
                number: true,
                text: false,
                phonecheck: true,
                maxlength: 10,
            },
            policy: {
                required: true

            },
            message: {
                required: true
            },
            topic: {
                required: true,
                notEqual: "default"
            }
        },
        messages: {
            email: {
                required: "Please enter your email address",
                text: "Please enter a valid email address",
                emailcheck: "Please enter a valid email address, for example Bobby@gmail.com"
            },
            phone: {
                required: "Please enter a valid phone number",
                text: "Please enter a valid phone number",
                phonecheck: "Please enter a valid phone number, for example 0871234567",
                maxlength: "Please enter a valid phone number"
            },
            message: {
                required: "Please enter a message"
            },
            policy: {
                required: "Please accept the privacy policy"
            },
            topic: {
                required: "Please select a topic",
                notEqual: "Please select a topic"
            }
        },
    });

}
