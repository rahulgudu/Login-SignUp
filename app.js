// 15th code goes Headers, adding the animation for input fields
const inputs = document.querySelectorAll(".input-field");

inputs.forEach((inp)=>{
    inp.addEventListener("focus", ()=>{
        inp.classList.add("active");
    });
    inp.addEventListener("blur", ()=>{
        if (inp.value != "") return;
        inp.classList.remove("active");
    });
});

// 16th code goes here, adding the click function on the page
const toggle_btn = document.querySelectorAll(".toggle");
const main = document.querySelector("main");

toggle_btn.forEach((btn) => {
    btn.addEventListener("click", () => {
        main.classList.toggle("sign-up-mode");
    });
});