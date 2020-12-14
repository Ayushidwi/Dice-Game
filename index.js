
var randomno1=Math.random();
randomno1=Math.floor(randomno1*6)+1;
var randomimage="image/"+"dice"+randomno1+".png";
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomimage);


var randomno2=Math.random();
randomno2=Math.floor(randomno2*6)+1;
var randomimage2="image/"+"dice"+randomno2+".png";
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randomimage2);

if(randomno1>randomno2)

{
document.querySelector("h1").innerHTML="player 1 wins😊 ";
}
else if(randomno1<randomno2)
{
document.querySelector("h1").innerHTML="player 2 wins😊";
}
else {
  document.querySelector("h1").innerHTML="there is a tie!😥";
}
document.queryselector("h1").addEventListener("click",handleclick);
function handleclick()
{
  alert("welcome ayushi");
}
