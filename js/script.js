var swiper =new Swiper(".home-slider",{
    grabCursor:false,    
    loop:true,
    centeredSlides:true,
    autoplay: {
        delay:7000,
        disableOnInteraction:false,      
    },
    
    
});
const    preloader = document.querySelector(".preloader");

window.addEventListener("load", () => {
  
  setTimeout(() => {
    preloader.style.display = "none";

  },2000);
});
