var button = document.getElementById("button");
var overlay = document.getElementById("overlay");
var modal = document.getElementById("modal")
var cLose = document.getElementById("close")
var menu = document.getElementById("menu")
var openMenu = document.getElementById("menu-o")
var closeMenu = document.getElementById("close-menu")
 
function openMenuFunction(){
    openMenu.classList.add("active")

    overlay.classList.add("active-o");
}
function closeMenuFunction(){
    openMenu.classList.remove("active")

    overlay.classList.remove("active-o");
}
menu.addEventListener("click", openMenuFunction)
closeMenu.addEventListener("click", closeMenuFunction)
function openFunction(){
    overlay.classList.add("active-o");
    modal.classList.add("active-m")
    console.log("ok")
}
function closeFunction(){
    overlay.classList.remove("active-o");
    modal.classList.remove("active-m")
    console.log("ok")
}

button.addEventListener("click", openFunction)
cLose.addEventListener("click", closeFunction)