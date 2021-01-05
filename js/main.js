const themeToggleBtn = document.querySelector(".switch");
const landingPage = document.querySelector(".landing");
const header = document.querySelector(".header");
const mainContainer = document.querySelector(".container")
const subContainer = document.querySelector(".overview")

const allElements = [themeToggleBtn, landingPage, header, mainContainer, subContainer];

themeToggleBtn.addEventListener("click", () => {

    allElements.forEach(elem => elem.classList.toggle("dark"));
})