window.onload=function(){
initialize();
}

function initialize(){
    const start = document.getElementById('start');
start.addEventListener('click',function(event){
    reset();
});
}

function reset (){
    const boundaries=document.getElementsByClassName("boundary");
    const msg=document.getElementsByClassName("boundary example")[0];
    const status = document.getElementById("status");
    lost=false;
    cheated=false;
    status.innerHTML='Begin by moving your mouse over the "S".'
    for (var i=0;i<boundaries.length;i++){
        boundaries[i].classList.remove("youlose");
    }
    msg.innerHTML="0";
    end.addEventListener("mouseenter",win);
    for (var i=0;i<boundaries.length;i++){
        boundaries[i].addEventListener("mouseenter",lostBoundary);
    }
    game.addEventListener("mouseleave",cheating);
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
        if (lost===false && cheated===false){
            score=+5;
            status.innerHTML="Congrats! You Win!";
            msg.innerHTML=score;
            
        }
        else if (lost===true && cheated===true){
            score=0;
            status.innerHTML="Don't cheat (-___-).Try again."
            msg.innerHTML=score;
        }
        else if (lost===true && cheated===false) {
            score=-10;
            status.innerHTML="You lost :( Try again."
            msg.innerHTML=score;
        }
        
        for (var i=0;i<boundaries.length;i++){
            boundaries[i].removeEventListener("mouseenter",lostBoundary);
        }
        end.removeEventListener("mouseenter",win)
        game.removeEventListener("mouseleave",cheating)
    }
    function cheating(){
    const boundaries=document.getElementsByClassName("boundary");
    lost = true;
    cheated=true;
    for (var i=0;i<boundaries.length;i++){
        boundaries[i].classList.add("youlose");
        win();
        }   
    }
