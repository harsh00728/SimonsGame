// initialization.
let gameSeq=[];
let userSeq=[];
let btns= ["orange", "red", "green", "blue"];

let started= false;
let level= 0;



// element selectors.
let h2= document.querySelector("h2");




// STEP 1: game started.
document.addEventListener("keypress", function(){
    if(started == false){
        started= true;
        levelUp();
        console.log(" game started");
    }
});

// STEP 2: functionality of game.

// LevelUp function.
function levelUp(){
    userSeq= [];
    level++;  
    h2.innerText= `Level ${level}`;

    let randomIdx= Math.floor(Math.random()*3);
    let randomColor= btns[randomIdx];
    gameSeq.push(randomColor);
    let randomBtn= document.querySelector(`.${randomColor}`);
    btnFlash(randomBtn);
}

// function checkAns.
function checkAns(idx){
    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp, 1000);
        }
    } else{
        h2.innerHTML= `Game Over! Your Score Was:<b> ${level} </b> <br>Press any Key to start Your Game Again`;
        let body=document.querySelector("body");
        body.style.backgroundColor= "red";
        setTimeout(function(){
            body.style.backgroundColor= "white";
        }, 250);
        
        reset();
    }
}

// Button flash Function.
function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    }, 250);
}

// reset function.
function reset(){
    started = false;
    gameSeq= [];
    userSeq= [];
    level = 0;
}

//function btnPress.
function btnPress(){ 
    let btn= this;
    btnFlash(btn);
    userSeq.push(btn.getAttribute("id"));

    checkAns(userSeq.length-1);
}


let allBtns= document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click", btnPress);   
}


