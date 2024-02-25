import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs';

function initializeSwiper() {
    let slidesPerViewValue = 4;

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

window.addEventListener('resize', function () {
    initializeSwiper();
});


// Modal settings

const openMenu = document.querySelector(".menu_btn")
const closeMenu = document.querySelector(".close_btn")
const menuModal = document.querySelector("#menu_modal")

openMenu.addEventListener("click", () => {
    menuModal.style.transform = 'translateX(0)';
});

closeMenu.addEventListener("click", () => {
    menuModal.style.transform = 'translateX(120%)';
});