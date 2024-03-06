let menuBtn = document.querySelector(".menu-btn");
let menuDialog = document.querySelector(".menu-dialog");
let closeBtn = document.querySelector("#close-btn");
let menuOpened = false;

menuBtn.addEventListener("click", () => {
    if (!menuOpened) {
        menuDialog.style.transform = "translate(50%, 50%)";
        menuOpened = true;
    } else {
        menuDialog.style.transform = "translate(400%, 400%)";
        menuOpened = false;
    }
});

closeBtn.addEventListener("click", () => {
    menuDialog.style.transform = "translate(200%, 200%)";
    menuOpened = false;
});
