const images = document.querySelectorAll(".product img")

images.forEach(img=>{

const original = img.src
const hover = img.dataset.hover

if(hover){
img.addEventListener("mouseenter",()=> img.src = hover)
img.addEventListener("mouseleave",()=> img.src = original)
}

})

function showPayment(){

const payment = document.getElementById("payment")

payment.classList.remove("hidden")

payment.scrollIntoView({behavior:"smooth"})

}

const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav-links");

toggle.addEventListener("click", () => {
nav.classList.toggle("active");
});