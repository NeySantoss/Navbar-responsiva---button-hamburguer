const humburguerButton = document.querySelector("#humburguerButton");
const closeButton = document.querySelector("#closeButton");

const mobileMenu = document.querySelector("#mobileMenu");

humburguerButton.addEventListener("click",function() {
    mobileMenu.classList.add("flex");
} )

closeButton.addEventListener("click", function() {
    mobileMenu.classList.remove("flex");
})