window.onload = function() {
    var start = document.getElementById('start');
    const boundaries=document.getElementsByClassName("boundary");
    const game=document.getElementById('game');
    const msg=document.getElementsByClassName("boundary example")[0];
    const status = document.getElementById("status");
    const end =document.getElementById("end");
    var score=0;
    start.addEventListener('click', function (event) {
        for (var i=0;i<boundaries.length;i++){
            if (boundaries[i].classList.contains('youlose')){
                checkCheating();
                reset();
                win();
            }
            else{boundaryLose();}
        }
           
            
           
        });


    function boundaryLose(){  
      
        for (let i=0;i<boundaries.length;i++){
            boundaries[i].addEventListener("mouseenter", function( event ) {   
                changeColorBoundaries();  
                console.log(score);       
            });
            }
            score-=10;
            msg.innerHTML=score;
        }
    function checkCheating(){

        game.addEventListener("mouseleave",function(event){
            changeColorBoundaries();
            status.innerHTML="Cheater! Reset"
        });
        }
    function changeColorBoundaries(){
        for (let l=0;l<boundaries.length;l++){ 
            boundaries[l].classList.add('youlose');
            
        }
    }
    function reset(){
        
        for (let l=0;l<boundaries.length;l++){ 
            boundaries[l].classList.remove('youlose');
          
        }
    }
    function win(){
        end.addEventListener("mouseenter",function(event){
            status.innerHTML="You WIN!";
            console.log(score);   
            msg.innerHTML=score;
        
        });
        score+=5;
    }

    }