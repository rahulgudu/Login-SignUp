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