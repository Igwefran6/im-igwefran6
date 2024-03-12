let menuBtn = document.querySelector(".menu-btn");
let sharePage = document.querySelector(".share-page");
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

const inputElement = document.querySelectorAll("input");

inputElement.forEach(element => {
    element.addEventListener("input", event => {
        const inputValue = event.target.value.trim();
        const inputElementID = document.getElementById(`r-${event.target.id}`);
        if (inputValue === "") {
            inputElementID.style.display = "inline";
        } else {
            inputElementID.style.display = "none";
        }
        // Do something with the input value
    });
});

menuDialogList.forEach(item => {
    activateBtn(item, menuDialogList);
});
scrollToPage.forEach(item => {
    activateBtn(item, scrollToPage);
});
desktopMenus.forEach(item => {
    activateBtn(item, desktopMenus);
});

function activateBtn(item, myItem) {
    item.addEventListener("click", button => {
        myItem.forEach(event => {
            event.classList.remove("active-button");
        });
        button.target.classList.add("active-button");
    });
}

sharePage.addEventListener("click", () => {
    if (sharePage.classList.contains("rotate90deg")) {
        console.log("works");
        rotate0deg(sharePage);
    } else {
        rotate90deg(sharePage);
    }
});
menuBtn.addEventListener("click", () => {
    rotate90deg(menuBtn);
    if (!menuOpened) {
        menuDialog.style.transform = `translate(50%, 50%)`;
        menuOpened = true;
    } else {
        menuDialog.style.transform = `translate(${movement})`;
        menuOpened = false;
        rotate0deg(menuBtn);
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
    rotate0deg(menuBtn);
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

function rotate90deg(item) {
    item.classList.add("rotate90deg");
}
function rotate0deg(item) {
    item.classList.remove("rotate90deg");
}

const msg = document.getElementById("message");

msg.addEventListener("input", event => {
    let msgLabel = document.getElementById("r-msg");

    msgLabel.style.display =
        event.target.value.trim() === "" ? "inline" : "none";
});

(function () {
    emailjs.init({
        publicKey: "Jevwt9uRllCInf_FC"
    });
})();

let sending = document.querySelector(".loading07");
let send = document.querySelector(".send-text");
let failure = document.querySelector(".failure");
let success = document.querySelector(".success");
let closeFailureBox = (window.onload = function () {
    document
        .getElementById("contact-form")
        .addEventListener("submit", function (event) {
            event.preventDefault();
            send.classList.add("hide");
            sending.classList.remove("hide");
            // these IDs from the previous steps
            emailjs.sendForm("service_xvl55ql", "template_zrohmna", this).then(
                () => {
                    console.log("SUCCESS!");
                    setTimeout(function () {
                        sending.classList.add("hide");
                        send.classList.remove("hide");
                        success.style.bottom = "0";
                        setTimeout(function () {
                            success.style.bottom = "-100px";
                        }, 5000);
                    }, 1000);
                },
                error => {
                    console.log("FAILED...", error);
                    setTimeout(function () {
                        sending.classList.add("hide");
                        send.classList.remove("hide");
                        failure.style.bottom = "0";
                        let setFailTimeOut = setTimeout(function () {
                            failure.style.bottom = "-100px";
                        }, 20000);
                        document
                            .querySelector(".close-failure-box")
                            .addEventListener("click", () => {
                                failure.style.bottom = "-100px";
                                clearTimeout(setFailTimeOut);
                            });
                    }, 1000);
                }
            );
        });
});
