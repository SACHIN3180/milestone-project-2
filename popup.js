
let coinModalElem = document.querySelector("#coinModal");

let closeModalElem = document.querySelector("#closeModal");

let viewButtonsElem = document.querySelectorAll(".viewBtn");

closeModalElem.addEventListener("click", () => {
    coinModalElem.classList.add("hidden")
});

viewButtonsElem.forEach((button) => {
    button.addEventListener("click", () => {
        coinModalElem.classList.remove("hidden");
    });
});