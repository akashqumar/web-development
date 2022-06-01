var rnum = Math.floor(Math.random() * 6) + 1;
var rdicepic = "dice" + rnum + ".png";
var rpicsrc = "images/" + rdicepic;
document.querySelectorAll("img")[0].setAttribute("src" , rpicsrc); 

var rnum2 = Math.floor(Math.random() * 6) + 1;
var rdicepic2 = "dice" + rnum2 + ".png";
var rpicsrc2 = "images/" + rdicepic2;
document.querySelectorAll("img")[1].setAttribute("src" , rpicsrc2); 

if(rnum > rnum2)
{
    document.querySelector("h1").innerHTML = "🙌 Player 1 wins";
}
else if(rnum < rnum2){
    document.querySelector("h1").innerHTML = "🙌 Player 2 wins";
}
else{
    document.querySelector("h1").innerHTML = "🤦‍♂️ Match Draw";
}