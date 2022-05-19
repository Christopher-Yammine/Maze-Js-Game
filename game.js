window.onload = function() {
    var start = document.getElementById('start');
    const boundaries=document.getElementsByClassName("boundary");
    const game=document.getElementById('game');
    var score=0;
    start.addEventListener('click', function (event) {
            startGame();
            checkCheating();
            
        });


    function startGame(){
        
        
        for (let i=0;i<boundaries.length;i++){
            boundaries[i].addEventListener("mouseenter", function( event ) {   
                for (let l=0;l<boundaries.length;l++){ 
                    boundaries[l].classList.add('youlose');
                }
            score-=15
            console.log(score);
            });
            }
        }
    function checkCheating(){
        game.addEventListener("mouseleave",function(event){
            for (let l=0;l<boundaries.length;l++){ 
                boundaries[l].classList.add('youlose');
            }
        });
        }
    }