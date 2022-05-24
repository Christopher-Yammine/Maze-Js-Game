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
    startTimer();
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
            msg.innerText=score;
            
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
    stopTimer();
    for (var i=0;i<boundaries.length;i++){
        boundaries[i].classList.add("youlose");
        win();
        }   
    }
    const live = document.getElementById('live');
    const last =document.getElementById('last');
    const best= document.getElementById('best');

    var ms = 0;
    var min = 0;
    var sec = 0;
    var stoptime = true;

    function startTimer() {
        if (stoptime == true) {
              stoptime = false;
              timerCycle();
          }
        }
    function timerCycle() {
        const live = document.getElementById('live');
        if (stoptime == false) {
        ms  = parseInt(ms);
        sec = parseInt(sec);
        min = parseInt(min);
        ms = ms + 1;
          if (ms==100){
            sec = sec + 1;
            ms=0;
    
          }
        
        if (sec == 60) {
          min = min + 1;
          sec = 0;
          ms=0;
        }
       
        if (ms < 100 || ms == 0) {
          ms = '0' + ms;
        }
        if (sec < 10 || sec == 0) {
          sec = '0' + sec;
        }
        if (min < 10 || min == 0) {
          min = '0' + min;
        }
        
    
        live.innerHTML = min + ':' + sec + ':' +  ms
    
        setTimeout("timerCycle()", 10);
        }
    }
      function stopTimer() {
  
 
        if (stoptime == false) {
          stoptime = true;
        }
        const last =document.getElementById('last');  
        last.innerText=min + ':' + sec + ':' +  ms;
        

        }
    
    
    
