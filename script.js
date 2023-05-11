var button = document.getElementById("button");
var button2 = document.getElementById("button-b");
var overlay = document.getElementById("overlay");
var modal = document.getElementById("modal")
var modal2 = document.getElementById("modal-b")
var cLose = document.getElementById("close")
var cLose2 = document.getElementById("close-b")
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


function openFunctionB(){
    overlay.classList.add("active-o");
    modal2.classList.add("active-m")
    console.log("ok")
}
function closeFunctionB(){
    overlay.classList.remove("active-o");
    modal2.classList.remove("active-m")
    console.log("ok")
}

button2.addEventListener("click", openFunctionB)
cLose2.addEventListener("click", closeFunctionB)
button.addEventListener("click", openFunction)
cLose.addEventListener("click", closeFunction)




const udur = document.getElementById('days');
const tsag = document.getElementById('hours');
const minut = document.getElementById('minuts');
const second = document.getElementById('seconds');

const valentine = '31 May 2023';

function countdown(){
    const valentineDate = new Date(valentine);
    const currentDate = new Date();
    const totalSeconds = (valentineDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds/3600/24);
    const hours = Math.floor(totalSeconds/3600)%24;
    const minuts = Math.floor(totalSeconds /60)%60;
    const seconds = Math.floor(totalSeconds)%60;
    
    udur.innerHTML = days;
    tsag.innerHTML = formatTime(hours);
    minut.innerHTML = formatTime(minuts);
    second.innerHTML = formatTime(seconds);
}

    function formatTime(time){
            return time < 10 ? `0${time}` : time;
    }
    // `0${time}` 0 baihgui bol 00 tsag ni 1hen 0 bolno.
    // `0${time}` ni '0' + time tai ylgaa baihgui.
countdown();
setInterval(countdown);

const udur2 = document.getElementById('days-b');
const tsag2 = document.getElementById('hours-b');
const minut2 = document.getElementById('minuts-b');
const second2 = document.getElementById('seconds-b');

const valentine2 = '31 May 2023';

function countdown2(){
    const valentineDate2 = new Date(valentine2);
    const currentDate2 = new Date();
    const totalSeconds2 = (valentineDate2 - currentDate2) / 1000;

    const days2 = Math.floor(totalSeconds2/3600/24);
    const hours2 = Math.floor(totalSeconds2/3600)%24;
    const minuts2 = Math.floor(totalSeconds2 /60)%60;
    const seconds2 = Math.floor(totalSeconds2)%60;
    
    udur2.innerHTML = days2;
    tsag2.innerHTML = formatTime2(hours2);
    minut2.innerHTML = formatTime2(minuts2);
    second2.innerHTML = formatTime2(seconds2);
}

    function formatTime2(time){
            return time < 10 ? `0${time}` : time;
    }
    // `0${time}` 0 baihgui bol 00 tsag ni 1hen 0 bolno.
    // `0${time}` ni '0' + time tai ylgaa baihgui.
countdown2();
setInterval(countdown2);