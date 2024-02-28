var container = document.querySelector(".container");
var colorCard = document.querySelector(".color-card");
var btn = document.querySelector("button");
var hex = document.querySelector("span");
var list = document.getElementById("list")
let liItem = document.createElement("li")


function getNewColor() {
    var symbols = '0123456789ABCDEF'
    var color = "#"
    let liItem = document.createElement("li")

    for (var i = 0; i < 6; i++) {
        color = color + symbols[Math.floor(Math.random() * 16)];
        
    }
    document.body.style.background = color
    colorCard.style.background = color
    hex.innerHTML = color

    list.appendChild(liItem)
    liItem.innerHTML = color
}
btn.addEventListener("click", getNewColor);






