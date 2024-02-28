var container = document.querySelector(".container");
var colorCard = document.querySelector(".color-card");
var btn = document.querySelector("button");
var hex = document.querySelector("span");
var list = document.getElementById("yo");
let liItem = document.createElement("option");
var btn2 = document.getElementById("btn2");



function getNewColor() {
    var symbols = '0123456789ABCDEF'
    var color = "#"
    let liItem = document.createElement("option")

    for (var i = 0; i < 6; i++) {
        color = color + symbols[Math.floor(Math.random() * 16)];
        
    }
    document.body.style.background = color
    colorCard.style.background = color
    hex.innerHTML = color

    list.appendChild(liItem)
    liItem.setAttribute("value", color)
    liItem.innerHTML = color
}
btn.addEventListener("click", getNewColor);


function searchColor() {
  let searchColor = yo.value 

  document.body.style.background = searchColor;
  colorCard.style.background = searchColor;
  hex.innerHTML = searchColor;


}


btn2.addEventListener("click", searchColor)