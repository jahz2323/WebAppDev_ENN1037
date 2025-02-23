function displayData(tableId,data){

    //check if POST data is present
    if(!data){
        console.error("No data to display for table with id", tableId);
        return;
    }
    //Get table element by id
    const tableBody = document.querySelector(`#${tableId} tbody`);
    if (!tableBody) {
        console.error(`Table body with id ${tableId} not found`);
        return;
    }

    tableBody.innerHTML = ""; //clear the table
    //note issue with parsing as getting elements as strings but need to get as objects


    //loop through data and add to table
    for(const item of data){
        const row = document.createElement("tr");
        for(const key in item){
            const cell = document.createElement("td");
            cell.textContent = item[key];
            row.appendChild(cell);
        }
        tableBody.appendChild(row);
    }
}

const loginForm = JSON.parse(localStorage.getItem("Login-Form-table"));
const contactForm = JSON.parse(localStorage.getItem("Contact-Form-table"));
const paymentForm = JSON.parse(localStorage.getItem("Checkout-Form-table"));

displayData("Login-Form-table",loginForm);
displayData("Contact-Form-table",contactForm);
displayData("Checkout-Form-table",paymentForm);

//clear contents of form via button
function clearForm() {
    //clear tables
    document.getElementById("Login-Form-table").innerHTML = "";
    document.getElementById("Checkout-Form-table").innerHTML = "";
    document.getElementById("Contact-Form-table").innerHTML = "";
    //clear
    localStorage.clear();
    alert("Form cleared");
}
//clear form button
document.getElementById("Form-clear").addEventListener("click", clearForm);

//clear Login
function clearLogin() {
    document.getElementById("Login-Form-table").innerHTML = "";
    localStorage.removeItem("Login-Form-table");
    alert("Login Form cleared");
}
document.getElementById("Form-clear-Login").addEventListener("click", clearLogin);

//clear Checkout
function clearCheckout() {
    document.getElementById("Checkout-Form-table").innerHTML = "";
    localStorage.removeItem("paymentForm");
    alert("Checkout Form cleared");
}
document.getElementById("Form-clear-Checkout").addEventListener("click", clearCheckout);

//clear Contact
function clearContact() {
    document.getElementById("Contact-Form-table").innerHTML = "";
    localStorage.removeItem("contactForm");
    alert("Contact Form cleared");
}
document.getElementById("Form-clear-Contact").addEventListener("click", clearContact);