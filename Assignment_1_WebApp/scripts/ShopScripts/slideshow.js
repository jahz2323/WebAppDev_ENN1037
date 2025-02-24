$(document).ready(function () {
    // Use querySelector to select a single element
    let slideContainer = document.querySelector(".container-slides");
    const slides = document.querySelectorAll(".image-item"); // Use .image-item for individual slides
    let nextbtn = document.querySelector(".swiper-button-next");
    let prevbtn = document.querySelector(".swiper-button-prev");

    // Check if any of these are not present
    if (!slideContainer || !slides || slides.length === 0 || !nextbtn || !prevbtn) {
        console.error("One or more of the slideshow elements are missing");
        // Check which one
        if (!slideContainer) {
            console.error("Slide container is missing");
        }
        if (!slides || slides.length === 0) {
            console.error("Slides are missing");
        }
        if (!nextbtn) {
            console.error("Next button is missing");
        }
        if (!prevbtn) {
            console.error("Previous button is missing");
        }
        return;
    }

    let currentIndex = 0;
    let interval;

    // Function to move to the next slide
    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        updateSlidePosition();
    }

    // Function to update the slide position
    function updateSlidePosition() {
        slideContainer.querySelector(".image-list").style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    // Start automatic slideshow
    function startSlideshow() {
        interval = setInterval(nextSlide, 5000); // Change slide every 2 seconds
    }

    // Stop automatic slideshow
    function stopSlideshow() {
        clearInterval(interval);
    }

    let slideDetails = document.createElement("div");
    // Speed up transition on hover
    slideContainer.addEventListener('mouseenter', () => {
        console.log("Mouse entered");
        /*
        on mouse enter, stop the slideshow and create a div displaying details of the image
            for example <h2>Sheep Milk 1.5L</h2>
                            <p>
                                Taste the new Sheep Milk, perfect for a healthy alternative to cow's milk.
                            </p>
         */
        stopSlideshow();
        //create a div to display the details of the image

        slideDetails.classList.add("slide-details");
        //get what image is being displayed by h2 element
        let imageTitle = slides[currentIndex].querySelector("h2").textContent;
        console.log(imageTitle);
        slideContainer.appendChild(slideDetails);
        switch (imageTitle) {
            case "Kerrygold Dubliner Cheese 500g":
                slideDetails.innerHTML = `
                <p> Taste the new Kerrygold Dubliner Cheese, perfect for a healthy alternative to cow's milk.</p>
                `;
                break;
            case "Sheep Milk 1.5L":
                slideDetails.innerHTML = `
                <p> Taste the new Sheep Milk, perfect for a healthy alternative to cow's milk.</p>
                `;
                break;
            case "Mooju Milk 500ml":
                slideDetails.innerHTML = `
                <p> Mooju Milk, strawberry, vanilla and banana.</p>
                `;
                break;
            case "New Baileys Irish Coffee Liquor":
                slideDetails.innerHTML = `
                <p> Baileys Irish Coffee Liquor, perfect for a night in.</p>
                `;
                break;
            case "Cadbury Dairy Milk Chocolate 150g":
                slideDetails.innerHTML = `
                <p> Cadbury Dairy Milk Chocolate, perfect for a night in.</p>
                `;
                break;

        }
        slideContainer.querySelector(".image-list").style.transitionDuration = '0.3s'; // Faster transition
    });

    // Resume normal speed on mouse leave
    slideContainer.addEventListener('mouseleave', () => {
        slideContainer.querySelector(".image-list").style.transitionDuration = '0.5s'; // Reset transition speed
        startSlideshow();
    });

    // Initialize the slideshow
    startSlideshow();
});