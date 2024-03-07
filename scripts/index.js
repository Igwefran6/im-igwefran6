let menuBtn = document.querySelector(".menu-btn");
let menuDialog = document.querySelector(".menu-dialog");
let closeBtn = document.querySelector("#close-btn");
let menuOpened = false;
let moveRight = "-400%, 400%";
let moveLeft = "400%, 400%";
let movement = moveRight;
let moved = false;

menuBtn.addEventListener("click", () => {
    if (!menuOpened) {
        menuDialog.style.transform = `translate(50%, 50%)`;
        menuOpened = true;
    } else {
        menuDialog.style.transform = `translate(${movement})`;
        menuOpened = false;
        if (!moved) {
            movement = moveLeft;
            moved = true;
        } else {
            movement = moveRight;
            moved = false;
        }
    }
});

closeBtn.addEventListener("click", () => {
    menuDialog.style.transform = `translate(${movement})`;
    menuOpened = false;
    if (!moved) {
        movement = moveLeft;
        moved = true;
    } else {
        movement = moveRight;
        moved = false;
    }
});
