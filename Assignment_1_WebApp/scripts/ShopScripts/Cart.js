/*
    Add to cart scripts

    to
   <div id="cart-container">
            <div class ="cart-content">
                <h2>Items in Cart:</h2>
                <div id="products-imgs">
                    <img src="../images/ShopProducts/coca-cola-bottle-transparent-background-9-903137475.png"
                         alt="Coca-Cola Bottle">
                </div>
                <p>€2.00</p>
            </div>
            <a href="../Pages/Orders.html">
                <button id="order-btn">Proceed to Orders</button>
            </a>
        </div>

 */
//alert user that they have added a product to the cart

function addToCart(event){
    //modify cart-container to add the product to the cart

    //get product
     let product = event.target.closest(".Product");

     //get details of the product
    let productImg  = product.querySelector("img").src;
    let productPrice = product.querySelector("p").textContent;
    let productName = product.querySelector("h3").textContent;

    //create new cart item
    let cartItem = document.createElement("div");
    cartItem.classList.add("cart-content");

    //alert what the user has added to the cart
    alert("You have added " + productName + " to the cart");
    //get the cart container and append the cart item inner html
    cartItem.innerHTML = `
    <h2>Items in Cart:</h2>
    <div id="products-imgs">
        <img src="${productImg}" alt="${productName}">
    </div>
    <p>${productPrice}</p>
    `;

    let cartContainer = document.getElementById("cart-container");
    cartContainer.appendChild(cartItem);

}

$(document).ready(function () {
    //get the add to cart buttons
    let addToCartButtons = document.getElementsByClassName("add");
    //add event listeners to the add to cart buttons
    for (let i = 0; i < addToCartButtons.length; i++) {
        addToCartButtons[i].addEventListener("click", addToCart);
    }
});