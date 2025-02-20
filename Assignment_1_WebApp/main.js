/*
    Dyanmic menubar -
       modify menu dropdown
 */
function BurgerExpand(){
    let burgermenu_p = document.createElement("p");
    let burgermenu_text = document.createTextNode("Welcome to londis");
    burgermenu_p.appendChild(burgermenu_text);
    //add to navbar
    document.querySelector("nav").appendChild(burgermenu_p);
    // Burgermenu element
    let burgermenu = document.createElement("div");
    burgermenu.setAttribute("id", "burgermenu");

}

$(document).ready(function () {
    $(document.getElementsByClassName("dropbtn")[0]).click(function () {
       BurgerExpand();
    });
});




