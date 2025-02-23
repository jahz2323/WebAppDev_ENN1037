
//dynamic menu
import {search} from "./scripts/searchbar.js";

let isTop = true;
let menuIsOpen = false;

let menuIcon = $('.va_menu_icon');
let submenuIcon = $('.bubble_submenu')


let sub_one = $('#sub_one');
let sub_two = $('#sub_two');
let sub_three = $('#sub_three');
let sub_four = $('#sub_four');
let sub_five = $('#sub_five');
let sub_six = $('#sub_six');


$(document).click(function () {
    $(document.getElementById("Content")).click(function () {
        if (menuIsOpen === true) {
            menuIcon.removeClass('is-active');
            hideBubbles();
            removeSubBubbles();
            setTimeout(function () {
                $('#nav').animate({top: '30', left: '1850'}, 400);
            }, 500);
            isTop = true;
            menuIsOpen = false;
        }

    });
});

menuIcon.click(function () {

    if (isTop === true) {
        $('#nav').animate({top: '30', left: '1250'}, 400);
        $('.content').animate({opacity: '0'}, 700);
        bubble_submenu_visible = true;
        showBubbles();
        showSubBubbles();
        isTop = false;
    } else {
        if (menuIsOpen === false) {
            bubble_submenu_visible = true;
            showBubbles();
            showSubBubbles();
        } else {
            hideBubbles();
            removeSubBubbles();
        }
    }
});


function showBubbles() {
    menuIcon.addClass('is-active');
    menuIsOpen = true;
}

function hideBubbles() {
    menuIcon.removeClass('is-active');

    setTimeout(function () {
        $('#nav').animate({top: '30px', left: '1250'}, 400);
        $('.content').animate({opacity: '1'}, 900);
    }, 500);


    bubble_submenu_visible = false;
    removeSubBubbles();
    menuIsOpen = false;
    isTop = true
}

let contactlink =
$('.bubble').click(function () {
    menuIcon.removeClass('is-active');
    hideBubbles();
    removeSubBubbles();
    // setTimeout(function () {
    //     $('#nav').animate({top: '30px', left: '1700px'}, 400);
    // }, 500);
    // isTop = true;

    //get the id of the clicked bubble
    let id = $(this).attr('id');
    console.log(id);

});



let bubble_submenu = document.getElementById("shop_submenu");
let bubble_submenu_visible = false;

function showSubBubbles() {

    if (bubble_submenu_visible) {
        console.log("hovered");

        bubble_submenu.style.display = "block";
        sub_one.animate({opacity: '1'}, 100);
        sub_two.animate({opacity: '1'}, 100);
        sub_three.animate({opacity: '1'}, 100);
        sub_four.animate({opacity: '1'}, 100);
        sub_five.animate({opacity: '1'}, 100);
        sub_six.animate({opacity: '1'}, 100);
    }
    else{
        removeSubBubbles();
    }
}

function removeSubBubbles() {
    sub_one.animate({opacity: '0'}, 200);
    sub_two.animate({opacity: '0'}, 200);
    sub_three.animate({opacity: '0'}, 200);
    sub_four.animate({opacity: '0'}, 200);
    sub_five.animate({opacity: '0'}, 200);
    bubble_submenu.style.display = "none";
}


function moveToPage(firstLeft, secondTop, thirdLeft, fourthTop) {

    isTop = true;
}
//check if in index navigate to ../Pages - > else then no need to navigate
// Function to determine the correct path
function getPath(page) {
    // Get the current page's path
    const currentPath = window.location.pathname;

    // Check if the current page is index.html
    if (currentPath.endsWith("index.html") || currentPath.endsWith("/")) {
        // If on index.html, prepend ../Pages/
        return `../Assignment_1_WebApp/Pages/${page}`;
    } else {
        // If already in the Pages directory, use the direct path
        return page;
    }
}


// Add click event listeners for submenu items
sub_one.click(function () {
    window.location.href = getPath("Shop.html");
});

sub_two.click(function () {
    window.location.href = getPath("Orders.html");
});

sub_three.click(function () {
    window.location.href = getPath("Checkout.html");
});

sub_four.click(function () {
    window.location.href = getPath("About.html");
});

sub_five.click(function () {
    window.location.href = getPath("News.html");
});

sub_six.click(function () {
    window.location.href = getPath("Login.html");
});



search();