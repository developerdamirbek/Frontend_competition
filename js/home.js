const modalka = document.querySelector(".modalka")
const btn = document.querySelector(".hero-btn-2")
const modal_wrapper = document.querySelector(".bg-modal")
console.log(modalka);
console.log(btn);


btn.addEventListener("click", () => {
    modalka.style.display = "block";
    modal_wrapper.style.display = "block";

});

