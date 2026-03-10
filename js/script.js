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

function shareProduct(productName){

const url = window.location.href
const text = "Mira estas " + productName + " en VS BOOTS 👢"

if(navigator.share){

navigator.share({
title: productName,
text: text,
url: url
})

}else{

const whatsapp = "https://wa.me/?text=" + encodeURIComponent(text + " " + url)
window.open(whatsapp, "_blank")

}

}