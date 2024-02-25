import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs';

function initializeSwiper() {
    let slidesPerViewValue = 3;

    if (window.innerWidth <= 420) {
        slidesPerViewValue = 1;
    }

    var swiper = new Swiper(".swiper", {
        direction: "horizontal",
        loop: true,
        slidesPerView: slidesPerViewValue,
        scrollbar: {
            el: ".swiper-scrollbar",
        },
    });
}

initializeSwiper();

window.addEventListener('resize', function() {
    initializeSwiper();
});
