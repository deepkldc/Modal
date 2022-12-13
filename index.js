const butn = document.querySelector(".btn");
const cls = document.querySelector(".btn-close");
const mode= document.querySelector(".modal");
butn.addEventListener("click",function(){
mode.classList.add("modal-hide");

})

cls.addEventListener("click",function(){
    mode.classList.remove("modal-hide");
})