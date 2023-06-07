const header = document.querySelector("header");
const nav = document.querySelector("#nav");
const logonav = document.querySelector("#logonav");
const iniciosection = document.querySelector("#inicio");
const portadasection = document.querySelector("#portada");

const parallaxelements = document.querySelectorAll(".plx");

window.addEventListener("scroll", function(e){
  if(window.scrollY <= 10){
    nav.classList.replace("bg-light", "bg-transparent");
    nav.classList.remove("shadow");
    logonav.height = "50";
  }else{
    nav.classList.replace("bg-transparent", "bg-light");
    nav.classList.add("shadow");
    logonav.height = "45";
  }
  parallaxelements.forEach(el => {
    const viewportHeight = window.innerHeight;
    const elementRect = el.getBoundingClientRect();
    const elementCenterY = elementRect.top + elementRect.height / 2;
  
    const scrollPercentage = ((window.screenTop+viewportHeight/2) - elementCenterY) / viewportHeight;
    const translateX = scrollPercentage * 100 * el.dataset.parallaxSpeed;

    el.style.transform = `translateX(${translateX}%)`;

  })

});