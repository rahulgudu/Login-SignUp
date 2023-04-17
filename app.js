// 15th code goes Headers, adding the animation for input fields
const inputs = document.querySelectorAll(".input-field");
inputs.forEach((inp) => {
    inp.addEventListener("focus", () => {
        inp.classList.add("active");
    });
    inp.addEventListener("blur", () => {
        if (inp.value != "") return;
        inp.classList.remove("active");
    });
});

// 25th code goes here, adding the click function on the page
const toggle_btn = document.querySelectorAll(".toggle");
const main = document.querySelector("main");
toggle_btn.forEach((btn) => {
    btn.addEventListener("click", () => {
        main.classList.toggle("sign-up-mode");
    });
});

// 44th code goes Headers, adding animation to the image animation
const bullets = document.querySelectorAll(".bullets span");
const images = document.querySelectorAll(".image");

function moveSlider(){
    let index = this.dataset.value;
    
    let currentImage = document.querySelector(`.img-${index}`);
    images.forEach((img)=>{
        img.classList.remove("show");
    });
    currentImage.classList.add("show");

    // 51st code goes Headers, adding the script for text-group
    const textSlider = document.querySelector(".text-group");
    textSlider.style.transform =  `translateY(${-(index - 1) * 2.2}rem)`; 


    bullets.forEach((bull)=>{
        bull.classList.remove("active");
    });
    this.classList.add("active");
};

bullets.forEach((bullet)=>{
    bullet.addEventListener("click", moveSlider);
});