var randomNo =Math.floor(((Math.random()*6)+1));
var randomNo2 =Math.floor(((Math.random()*6)+1));
var sourceImg = "./images/dice"+randomNo+".png";
var sourceImg2 = "./images/dice"+randomNo2+".png";
document.getElementsByClassName("img1")[0].setAttribute("src",sourceImg)
document.getElementsByClassName("img2")[0].setAttribute("src",sourceImg2)
if (randomNo>randomNo2){
    document.getElementsByClassName("winner")[0].innerHTML="Player 1 is Winner"  
}
else if(randomNo<randomNo2){ document.getElementsByClassName("winner")[0].innerHTML="Player 2 is Winner"}
else if(randomNo=randomNo2){document.getElementsByClassName("winner")[0].innerHTML="WoW It's A Draw"}


