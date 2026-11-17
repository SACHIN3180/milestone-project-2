let themeBtnElem = document.querySelector("#themeBtn");
let bodyElem = document.querySelector("body");
let headerElem = document.querySelector("#header");
let mainSectionElem = document.querySelector("#mainSection");
let footerElem = document.querySelector("#footer");

themeBtnElem.addEventListener("click", () => {
    bodyElem.classList.toggle("bg-[#334155]");
    bodyElem.classList.toggle("bg-gray-100");
    bodyElem.classList.toggle("text-white");
    bodyElem.classList.toggle("text-gray-900");

    headerElem.classList.toggle("bg-[#334155]");
    headerElem.classList.toggle("bg-white");
    headerElem.classList.toggle("text-white");
    headerElem.classList.toggle("text-gray-900");

    mainSectionElem.classList.toggle("bg-[#334155]");
    mainSectionElem.classList.toggle("bg-gray-100");

    footerElem.classList.toggle("bg-[#334155]");
    footerElem.classList.toggle("bg-white");

    if (bodyElem.classList.contains("bg-gray-100")) {
        themeBtnElem.innerHTML = '<i class="fa-solid fa-moon"></i> Dark'

    } else {
        themeBtnElem.innerHTML = '<i class="fa-solid fa-sun text-yellow-500"></i> Light';
    }
})