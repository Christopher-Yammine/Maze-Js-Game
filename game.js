window.onload=function(){

}
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

function reset (){
    lost=false;
    for (var i=0;i<boundaries.length;i++){
        boundaries[i].classList.remove("youlose");
    }
    msg.innerHTML="0";
    end.addEventListene("mousenter",win);
    for (var i=0;i<boundaries.length;i++){
        boundaries[i].addEventListener("mouseenter",lostBoundary);
    }
}

