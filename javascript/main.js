let aux = 0;
document.getElementById("nav-button").addEventListener("click", function() {
    if (aux == 0) {
        document.getElementById("hidden-nav").style.display = "flex";
        document.getElementById("nav-button").classList.remove("fa-ellipsis-h");
        document.getElementById("nav-button").style.color = "#f28b82";
        document.getElementById("nav-button").classList.add("fa-window-close");
        aux++;
    } else {
        document.getElementById("hidden-nav").style.display = "none";
        document.getElementById("nav-button").classList.remove("fa-window-close");
        document.getElementById("nav-button").style.color = "inherit";
        document.getElementById("nav-button").classList.add("fa-ellipsis-h");
        aux = 0;
    }
});

const scrollToTop = document.getElementById("scroll-to-top");
let dataShow = false;

window.addEventListener("scroll", ()=>{
    if (window.scrollY > 50 && !dataShow) {
        scrollToTop.setAttribute("data-show", "true");
        dataShow = true;
    }

    if (window.scrollY <= 50 && dataShow) {
        scrollToTop.setAttribute("data-show", "false");
        dataShow = false;
    }
});

scrollToTop.addEventListener("click", ()=>{
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});