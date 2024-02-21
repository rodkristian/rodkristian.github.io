const nav = document.querySelector(".navbar");
let lastscrollY = window.scrollY;

window.addEventListener("scroll", () => {
    if(lastscrollY < window.scrollY){
        nav.classList.add("navbar--hidden");
    }
    else{
        nav.classList.remove("navbar--hidden");
    }
    lastscrollY = window.scrollY;
});