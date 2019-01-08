////// BURGERMENU /////////


let navSlide = () => {

    let burger = document.querySelector('.burger');
    let nav = document.querySelector('.nav_links');
    let navLinks = document.querySelectorAll('.nav_links li');

    //toggle Nav

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav_active');

    });

}

navSlide();






///// PORTFOLIO FOLD UD ////////

let knap1 = document.querySelector("#knap1");
let content1 = document.querySelector(".content1");

knap1.onclick = function () {
    content1.classList.toggle("normal1");
}

let knap2 = document.querySelector("#knap2");
let content2 = document.querySelector(".content2");

knap2.onclick = function () {
    content2.classList.toggle("normal2");
}

let knap3 = document.querySelector("#knap3");
let content3 = document.querySelector(".content3");

knap3.onclick = function () {
    content3.classList.toggle("normal3");
}

let knap4 = document.querySelector("#knap4");
let content4 = document.querySelector(".content4");

knap4.onclick = function () {
    content4.classList.toggle("normal4");
}
