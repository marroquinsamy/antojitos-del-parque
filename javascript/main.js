let aux = 0;
document.getElementById("nav-button").addEventListener("click", function() {
    if (aux == 0) {
        document.getElementById("hidden-nav").style.display = "flex";
        document.getElementById("nav-button").classList.remove("fa-ellipsis-h");
        document.getElementById("nav-button").classList.add("fa-window-close");
        aux++;
    } else {
        document.getElementById("hidden-nav").style.display = "none";
        document.getElementById("nav-button").classList.remove("fa-window-close");
        document.getElementById("nav-button").classList.add("fa-ellipsis-h");
        aux = 0;
    }
});