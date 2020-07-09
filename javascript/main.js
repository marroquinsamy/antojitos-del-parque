let aux = 0
let navButton = document.getElementById("nav-button")
let mainNav = document.getElementById("main-nav")
let content = document.getElementsByClassName("content")
navButton.addEventListener("click", function() {
if (aux == 0) {
    mainNav.style.top = "0"
    navButton.classList.remove("fa-ellipsis-h")
    navButton.style.color = "#f28b82"
    navButton.classList.add("fa-window-close")
    for (let i = 0; i < content.length; i++) {
        content[i].style.opacity = ".3"
    }
    aux++
} else {
    mainNav.style.top = "-230px"
    navButton.classList.remove("fa-window-close")
    navButton.style.color = "inherit"
    navButton.classList.add("fa-ellipsis-h")
    for (let i = 0; i < content.length; i++) {
        content[i].style.opacity = "1"
    }
    aux = 0
}
})

const scrollToTop = document.getElementById("scroll-to-top")
let dataShow = false
window.addEventListener("scroll", ()=>{
if (window.scrollY > 50 && !dataShow) {
    scrollToTop.setAttribute("data-show", "true")
    dataShow = true
}

if (window.scrollY <= 50 && dataShow) {
    scrollToTop.setAttribute("data-show", "false")
    dataShow = false
}
})

scrollToTop.addEventListener("click", ()=>{
window.scrollTo({
    top: 0,
    behavior: "smooth"
})
})