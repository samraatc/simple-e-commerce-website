// JavaScript for login button animation
const loginButton = document.getElementById('login-button');

loginButton.addEventListener('click', function () {
    // Simulate a loading state with a timeout (you can replace this with actual authentication logic)
    loginButton.innerHTML = 'Loading...';
    setTimeout(function () {
        loginButton.innerHTML = 'Login';
    }, 2000); // Simulate a 2-second delay
});

// card page 

// JavaScript for quantity update buttons
const quantityInputs = document.querySelectorAll('.quantity-input');
const quantityMinusButtons = document.querySelectorAll('.quantity-minus');
const quantityPlusButtons = document.querySelectorAll('.quantity-plus');

quantityMinusButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        if (quantityInputs[index].value > 1) {
            quantityInputs[index].value--;
        }
    });
});

quantityPlusButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        quantityInputs[index].value++;
    });
});


// product sliding script 
$(document).ready(function () {
    // Initialize the Slick Slider
    $('.product-slider').slick({
        slidesToShow: 5, // Number of visible items at once
        slidesToScroll: 1, // Number of items to scroll
        infinite: true, // Looping
        autoplay: true, // Autoplay
        autoplaySpeed: 2000, // Autoplay speed in milliseconds
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
});
