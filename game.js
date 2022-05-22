window.onload=function(){
initialize();


function initialize(){
    const start = document.getElementById('start');
    const boundaries=document.getElementsByClassName("boundary");
    const game=document.getElementById('game');
    const msg=document.getElementsByClassName("boundary example")[0];
    const status = document.getElementById("status");
    const end =document.getElementById("end");
lost = false;
score=0;

start.addEventListener('click',function(event){
    reset();
});
}

function reset (){
    const boundaries=document.getElementsByClassName("boundary");
    const msg=document.getElementsByClassName("boundary example")[0];
    lost=false;
    for (var i=0;i<boundaries.length;i++){
        boundaries[i].classList.remove("youlose");
    }
    msg.innerHTML="0";
    end.addEventListener("mouseenter",win);
    for (var i=0;i<boundaries.length;i++){
        boundaries[i].addEventListener("mouseenter",lostBoundary);
    }
}

function lostBoundary(){
    const boundaries=document.getElementsByClassName("boundary");
    lost = true;
    for (var i=0;i<boundaries.length;i++){
        boundaries[i].classList.add("youlose");
        win();
        }   
    }

function win(){
        const msg=document.getElementsByClassName("boundary example")[0];
        const status = document.getElementById("status");
        const boundaries=document.getElementsByClassName("boundary");
        if (lost===false){
            score=+5;
            status.innerHTML="Congrats! You Win!";
            msg.innerHTML=score;
            
        }else {
            score=-10;
            status.innerHTML="You lost :( Try again."
            msg.innerHTML=score;
        }
        for (var i=0;i<boundaries.length;i++){
            boundaries[i].removeEventListener("mouseenter",lostBoundary);
        }
        end.removeEventListener("mouseenter",win)
    }
}