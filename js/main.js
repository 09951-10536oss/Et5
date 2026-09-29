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

const floatingStars =
document.getElementById(
"floatingStars"
);

for(let i=0;i<50;i++){

const star=
document.createElement("div");

star.classList.add("star");

star.style.left=
Math.random()*100+"%";

star.style.animationDuration=
(4+Math.random()*6)+"s";

star.style.animationDelay=
Math.random()*5+"s";

floatingStars.appendChild(
star
);

}
