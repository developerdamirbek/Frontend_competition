import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs'

const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});

// Modal settings

const openMenu = document.querySelector(".menu_btn")
const closeMenu = document.querySelector(".close_btn")
const menuModal = document.querySelector("#menu_modal")

openMenu.addEventListener("click", () => {
    menuModal.style.display = 'block'
})

closeMenu.addEventListener("click", () => {
    menuModal.style.display = 'none'
})