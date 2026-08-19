let offer_section = document.getElementById('offer');
let offer_close = document.getElementById('offer_close');

offer_close.addEventListener('click', () => {
    offer_section.style.display="none"
})


let menu = document.getElementById('menu')
let menu_content = document.getElementById('menu-content')
let menu_close  = document.getElementById('menu_close')

menu.addEventListener("click" ,() => {
    menu_content.style.left = 0
})

menu_close.addEventListener("click", () => {
    menu_content.style.left = '-100%'
})



const offerBtn = document.getElementById("offer-button");
const offerOverlay = document.getElementById("offer-overlay");
const offerClose = document.getElementById("offer-close");

offerBtn.addEventListener("click", (e) => {
    e.preventDefault();
    offerOverlay.style.display = "block";
});

offerClose.addEventListener("click", () => {
    offerOverlay.style.display = "none";
});