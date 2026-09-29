const splash =
document.getElementById("splash");

const menu =
document.getElementById("menu");

splash.addEventListener("click",()=>{

splash.classList.add("hidden");

menu.classList.remove("hidden");

});

const buttons =
document.querySelectorAll(".menuBtn");

buttons.forEach(btn=>{

btn.addEventListener("click",()=>{

btn.style.transform =
"scale(0.95)";

setTimeout(()=>{

btn.style.transform =
"scale(1)";

},100);

});

});
