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
