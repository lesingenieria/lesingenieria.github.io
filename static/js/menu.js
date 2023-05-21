const header = document.querySelector("header");
const nav = document.querySelector("#nav");
const logonav = document.querySelector("#logonav");
const iniciosection = document.querySelector("#inicio");
const portadasection = document.querySelector("#portada");

document.addEventListener("scroll", function(e){
  if(window.scrollY <= 10){
    nav.classList.replace("bg-light", "bg-transparent");
    nav.classList.remove("shadow");
    logonav.height = "50";
  }else{
    nav.classList.replace("bg-transparent", "bg-light");
    nav.classList.add("shadow");
    logonav.height = "45";
  }
});