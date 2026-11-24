let menuBtnElm = document.querySelector("#menuBtn");
let closeBtnElem = document.querySelector("#closeBtn");
let navMenuElem = document.querySelector("#navMenu");
let menuOverlayElem = document.querySelector("#menuOverlay");

menuBtnElm.addEventListener("click", () => {

    navMenu.classList.remove("-translate-x-full");
    navMenu.classList.remove("translate-x-full");
    menuOverlayElem.classList.remove("hidden");

})

closeBtnElem.addEventListener("click", () => {
    navMenuElem.classList.add("translate-x-full");
    menuOverlayElem.classList.add("hidden");
})

menuOverlay.addEventListener("click", function () {
    navMenu.classList.add("translate-x-full");
    menuOverlay.classList.add("hidden");
});

navMenu.querySelectorAll("ul a").forEach(function (link) {
    link.addEventListener("click", function () {
        navMenu.classList.add("translate-x-full");
        menuOverlay.classList.add("hidden");
    });
});