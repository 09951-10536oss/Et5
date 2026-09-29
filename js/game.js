const board =
document.getElementById("board");

const menu =
document.getElementById("menu");

const gameScreen =
document.getElementById("gameScreen");

const practiceBtn =
document.getElementById("practiceBtn");

const playBigBtn =
document.getElementById("playBigBtn");
 
const backBtn =
document.getElementById("backBtn");

let selectedPiece=null;

practiceBtn.onclick=()=>{

menu.classList.add("hidden");

gameScreen.classList.remove("hidden");

createBoard();

};

backBtn.onclick=()=>{

gameScreen.classList.add("hidden");

menu.classList.remove("hidden");

};

function createBoard(){

board.innerHTML="";

for(let row=0;row<8;row++){

for(let col=0;col<8;col++){

const square=
document.createElement("div");

square.classList.add("square");

if((row+col)%2===0){

square.classList.add("light");

}else{

square.classList.add("dark");

}

square.dataset.row=row;
square.dataset.col=col;

board.appendChild(square);

}

}

spawnPieces();

}

function spawnPieces(){

document
.querySelectorAll(".dark")
.forEach((sq,index)=>{

const row=
parseInt(
sq.dataset.row
);

if(row<3){

const p=
document.createElement("div");

p.className=
"piece red";

addPieceLogic(p);

sq.appendChild(p);

}

if(row>4){

const p=
document.createElement("div");

p.className=
"piece blue";

addPieceLogic(p);

sq.appendChild(p);

}

});

}

function addPieceLogic(piece){

piece.onclick=(e)=>{

e.stopPropagation();

document
.querySelectorAll(".piece")
.forEach(p=>
p.classList.remove(
"selected"
));

piece.classList.add(
"selected"
);

selectedPiece=piece;

};

}
