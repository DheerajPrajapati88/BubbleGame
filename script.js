
var timer=60;
var score=0
var hitrn=0;


function inScore(){
    document.querySelector("#scoreVal").textContent=score;
    score+=10;
}

function getNewHit(){

    hitrn = Math.floor(Math.random() * 10);
    document.querySelector("#hitVal").textContent=hitrn;

}


function makeBubble(){

    var clutter="";
    
    for(var i=1;i<=140;i++)
    {
    
        var rn = Math.floor(Math.random()*10);
    
        clutter += `<div class="bubble">${rn}</div>`;
    
    }
    document.querySelector(".pannel_bottom").innerHTML=clutter;
}

function runTimer(){

    var timerInt = setInterval(function(){

        if(timer>0){

            timer--;
            document.querySelector("#timerVal").textContent=timer;
        }
        else{

            clearInterval(timerInt);
            document.querySelector(".pannel_bottom").innerHTML=`<h1>Game Over 🤷‍♂️</h1>`;
        }
    },1000)
}

document.querySelector(".pannel_bottom").addEventListener("click",function(dets){
   var clickedNum = Number(dets.target.textContent);
   if(clickedNum===hitrn){
    inScore();
    makeBubble();
    getNewHit();
   }else{
    clearInterval(timerInt);

   }
})
runTimer();
makeBubble();
getNewHit();
inScore();
