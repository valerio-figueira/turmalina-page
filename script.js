
//copyright year on footer
let year = new Date().getFullYear();
let copyright = document.querySelector(".copyright");
copyright.innerHTML += " - " + year;


const mobile = document.querySelector(".mobile");
const navbar = document.querySelector(".navbar");
mobile.addEventListener("click", mobileNav);

function mobileNav(){
    if(navbar.className === "navbar"){
        navbar.className += " open-mobile-nav";
    } else{
        navbar.className = "navbar";
    }
}