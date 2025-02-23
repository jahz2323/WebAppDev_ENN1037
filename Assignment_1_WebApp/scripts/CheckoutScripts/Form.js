/*
    JS Implementations
    Date time check - get users current date and time

    Payment method - change DOM based on payment method selected

    .2 Form validation
    Card number
    Name on card
    CVV
 */

$(document).ready(function () {
    console.log("Form.js loaded");
    validateForm();
});
jQuery.validator.addMethod("lettersonly", function (value, element) {
    return this.optional(element) || /^[a-z\s]+$/i.test(value);
});
jQuery.validator.addMethod("cvv", function (value, element) {
    return this.optional(element) || /^[0-9]+$/i.test(value);
});
jQuery.validator.addMethod("month", function (value, element) {
    return this.optional(element) || /^[0-9]+$/i.test(value);
});


function validateForm() {
    let form = document.getElementById("payment_form");
    //check if form is present

    form.addEventListener("submit", function (event) {
        event.preventDefault();


        //GET FORM VALUES
        const card_number = document.getElementById("Card_number").value;
        const cardholder_name = document.getElementById("Cardholder_name").value;
        const cvv = document.getElementById("cvv").value;
        const month = document.getElementById("month").value;
        const year = document.getElementById("year").value;
        //for event - either card or cash
        // const payment_method = document.getElementById("payment_method").value;
        const Payment_amount = document.getElementById("Payment_amount").value;

        //get time
        const time = new Date().toLocaleTimeString(); //Add a time stamp to the form
        console.log(time);

        // Validate if all fields are filled
        if (!card_number || !cardholder_name || !cvv || !month || !year) {
            alert("Please fill in all fields.");
            return;
        }

        // Validate card number (16 digits and numeric)
        if (card_number.length !== 16 || isNaN(card_number)) {
            alert("Please enter a valid card number of 16 digits.");
            return;
        }

        // Validate cardholder name (at least 3 characters and no numbers)
        if (cardholder_name.length < 3 || /\d/.test(cardholder_name)) {
            alert("Please enter a valid name (at least 3 characters, no numbers).");
            return;
        }

        // Validate CVV (3 digits and numeric)
        if (cvv.length !== 3 || isNaN(cvv)) {
            alert("Please enter a valid CVV of 3 digits.");
            return;
        }

        // Validate month (2 digits, numeric, and between 1 and 12)
        if (month.length !== 2 || isNaN(month) || month < 1 || month > 12) {
            alert("Please enter a valid month (01-12).");
            return;
        }

        // Validate year (4 digits, numeric, and at least 2025)
        if (year.length !== 4 || isNaN(year) || year < 2025) {
            alert("Please enter a valid year (must be 2025 or later).");
            return;
        }


        //place in array
        const formValues = {
            card_number: card_number,
            cardholder_name: cardholder_name,
            cvv: cvv,
            month: month,
            year: year,
            Payment_amount: Payment_amount,
            time: time

        };
        console.log(formValues);
        //save to local storage
        let paymentForms = JSON.parse(localStorage.getItem("Checkout-Form-table")) || [];
        if (!Array.isArray(paymentForms)) {
            paymentForms = [];
        }
        paymentForms.push(formValues);
        localStorage.setItem("Checkout-Form-table", JSON.stringify(paymentForms));

        alert("Payment Form submitted");
        form.reset();
    });
    $("#payment_form").validate({
        rules: {
            Card_number: {
                required: true,
                number: true,
                minlength: 16,
                maxlength: 16
            },
            Cardholder_name: {
                required: true,
                number: false,
                minlength: 3,
                lettersonly: true
            },
            cvv: {

                required: true,
                number: true,
                minlength: 3,
                maxlength: 3
            },
            month: {
                required: true,
                number: true,
                minlength: 2
            },
            year: {
                required: true,
                number: true,
                minlength: 4
            }


        },
        messages: {
            Card_number: {
                required: "Please enter your 16 digit card number",
                number: "Please enter a valid card number",
                minlength: "Please enter a valid card number of at least 16 digits",
                maxlength: "Please enter a valid card number minimum of 16 digits"
            },
            Cardholder_name: {
                required: "Please enter the name on the card",
                minlength: "Please enter a valid name",
                number: "Please enter a valid name",
                lettersonly: "Please enter a valid name without numbers"
            },
            cvv: {
                required: "Please enter your CVV",
                number: "Please enter a valid CVV",
                minlength: "Please enter a valid CVV of 3 digits",
                maxlength: "Please enter a valid CVV of 3 digits",
                cvv: "Please enter a valid CVV with no letter"
            },
            month: {
                required: "",
                number: "",
                minlength: "",
                month: "Please enter a valid date"
            },
            year: {
                required: "enter a valid date",
                number: "enter a valid date",
                minlength: "enter a valid date"
            }
        }
    });
}