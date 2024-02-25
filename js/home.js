const modalka = document.querySelector(".modalka")
const btn = document.querySelector(".hero-btn-2")
const modal_wrapper = document.querySelector(".bg-modal")


btn.addEventListener("click", () => {
    modalka.style.display = "block";
    modal_wrapper.style.display = "block";

});

