const elements = document.querySelectorAll(".animate");

function scrollAnimation(){
  elements.forEach(el=>{
    const top = el.getBoundingClientRect().top;
    if(top < window.innerHeight - 100){
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll",scrollAnimation);
scrollAnimation();
