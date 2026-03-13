const menuButton = document.getElementById("menu-button");
const menu = document.querySelector(".menu");
const menuLinks = document.querySelectorAll(".menu a");
const mainTitle = document.querySelector(".temples-main h1");


menuButton.addEventListener("click", () => {
    menu.classList.toggle("open");
});

menuLinks.forEach(link => {
    link.addEventListener("click", () => {
        mainTitle.textContent = link.textContent;

    });
});
