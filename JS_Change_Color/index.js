
const buttonElement= document.querySelector("#randomColorButton");

buttonElement.addEventListener("click", changeColors);
// const container = document.querySelector(".container");


function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
    }

function changeColors (){

    document.querySelector("body").style.backgroundColor= getRandomColor();
    document.querySelector("#colorName").textContent= getRandomColor();

    
};


// const colors = ["red", "blue","gray", "purple"];


// function changeColors (){
//     const randomIndex = Math.floor(Math.random()* colors.length);
//     // array uzunluguna kadar olan sayıları random al
//     const renk = colors[randomIndex];
//     // container.setAttribute("style", "background-color: ${renk};");
//     document.querySelector("body").style.backgroundColor= getRandomColor();
    
// };
