window.addEventListener("scroll", function(){

  const header = document.querySelector("header");

  if(window.scrollY > 50){

    header.style.position = "sticky";
    header.style.top = "0";
    header.style.zIndex = "1000";
    header.style.boxShadow = "0 2px 20px rgba(0,0,0,0.05)";

  }
});