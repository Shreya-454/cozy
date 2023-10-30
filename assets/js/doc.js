let notvisible = document.querySelector(".notvisible");

function bcard(evt, Id) {
    let card3 = document.querySelectorAll(".card3");
    document.getElementById(Id).classList.remove("d-none");
    notvisible.classList.add("d-none");
}

function visible(evt, Id) {
    let card3 = document.querySelectorAll(".card3");
    document.getElementById(Id).classList.add("d-none");
    notvisible.classList.remove("d-none");
}