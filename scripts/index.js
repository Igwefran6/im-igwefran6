let menuBtn = document.querySelector(".menu-btn");
let menuDialog = document.querySelector(".menu-dialog");
let closeBtn = document.querySelector("#close-btn");
let scrollToPage = document.querySelectorAll(".scroll-to ul li");
let menuDialogList = document.querySelectorAll(".menu-dialog ul li");
let desktopMenus = document.querySelectorAll(".desktop-menus li");
let menuOpened = false;
let moveRight = "-400%, 400%";
let moveLeft = "400%, 400%";
let movement = moveRight;
let moved = false;

menuDialogList.forEach(item=>{
  activateBtn(item, menuDialogList)
})
scrollToPage.forEach(item => {
    activateBtn(item, scrollToPage)
});
desktopMenus.forEach(item => {
    activateBtn(item, desktopMenus)
});




function activateBtn(item, myItem) {
  item.addEventListener("click", button => {
         myItem.forEach(event =>{
           event.classList.remove("active-button")
        })
         button.target.classList.add("active-button")
    });
}

menuBtn.addEventListener("click", () => {
  menuBtn.classList.add("rotate90deg")
    if (!menuOpened) {
        menuDialog.style.transform = `translate(50%, 50%)`;
        menuOpened = true;
    } else {
        menuDialog.style.transform = `translate(${movement})`;
        menuOpened = false;
        menuBtn.classList.remove("rotate90deg")
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
  menuBtn.classList.remove("rotate90deg")
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