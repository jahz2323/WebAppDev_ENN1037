/*
    Event handling
    - Filter button click

 */
let dairy = "Dairy";
let drinks = "Drinks";
let snacks = "Snacks";
let healthBeauty = "Health & Beauty";
let alcohol = "Alcohol";

let filteredProducts = [];

function filterProductsByCategory(filter) {
    //remove products from display via filter and sort
    //by default - alphabetical order of products and no fileter
    let products = document.getElementsByClassName("Product");
    /*
        001 - Baileys is alcohol
        002 - Cadbury is snacks
        003 - Cheese is dairy
        004 - Mooju is dairy
        005 - sheep milk is dairy
        006 - lynx is health and beauty
        007 - fanta is drinks
        008 - coke is drinks
        009 - sprite is drinks
        010 - Freedo is snacks
     */
    let alcohol = ["001"];
    let snacks = ["002", "010"];
    let dairy = ["003", "004", "005"];
    let healthBeauty = ["006"];
    let drinks = ["007", "008", "009"];


    //sort products
    //filter products

    switch (filter) {
        case "Dairy":
            for (let i = 0; i < products.length; i++) {
                let product = products[i];
                let productID = product.id;
                if (dairy.includes(productID)) {
                    filteredProducts.push(product);
                }
            }
            break;
        case "Drinks":
            for (let i = 0; i < products.length; i++) {
                let product = products[i];
                let productID = product.id;
                if (drinks.includes(productID)) {
                    filteredProducts.push(product);
                }
            }
            break;
        case "Snacks":
            for (let i = 0; i < products.length; i++) {
                let product = products[i];
                let productID = product.id;
                if (snacks.includes(productID)) {
                    filteredProducts.push(product);
                }
            }
            break;
        case "Health & Beauty":
            for (let i = 0; i < products.length; i++) {
                let product = products[i];
                let productID = product.id;
                if (healthBeauty.includes(productID)) {
                    filteredProducts.push(product);
                }
            }
            break;
        case "Alcohol":
            for (let i = 0; i < products.length; i++) {
                let product = products[i];
                let productID = product.id;
                if (alcohol.includes(productID)) {
                    filteredProducts.push(product);
                }
            }
            break;
    }
    //hide all products and display the filtered products
    for (let i = 0; i < products.length; i++) {
        products[i].style.display = "none";
    }
    for(let i = 0; i < filteredProducts.length; i++){
        filteredProducts[i].style.display = "block";
    }
}

function filterProductsByPrice() {

}

function filterProductsByName() {

}

//get the filter button
$(document).ready(function () {
    //Buttons are wrapped in Shop_dropdown-content onclick event
    $(".Shop_dropdown-content button").click(function () {

        let priceLow = "Price: Low to High";
        let priceHigh = "Price: High to Low";
        let nameAsc = "Name: A-Z";

        //get the filter value
        let filterValue = $(this).text();
        console.log(filterValue);
        switch (filterValue) {
            case dairy:
                filterProductsByCategory(dairy);
                break;
            case drinks:
                filterProductsByCategory(drinks);
                break;
            case snacks:
                filterProductsByCategory(snacks);
                break;
            case healthBeauty:
                filterProductsByCategory(healthBeauty);
                break;
            case alcohol:
                filterProductsByCategory(alcohol);
                break;
        }
    });

    //sort products on button click
    $(".Shop_dropdown-sort button").click(function () {
        let sortValue = $(this).text();
        console.log(sortValue);
        switch (sortValue) {
            case "Price: Low to High":
                //sort by price low to high
                filterProductsByPrice();
                break;
            case "Price: High to Low":
                //sort by price high to low
                filterProductsByPrice();
                break;
            case "Name: A-Z":
                //sort by name
                filterProductsByName();
                break;
            default:
                //sort by name
                filterProductsByName();
                break;
        }
    });
//sort then filter, by default sort by name
});

