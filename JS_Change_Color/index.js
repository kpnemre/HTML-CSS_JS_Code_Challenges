const colors = ["red", "blue","gray", "purple"];

const buttonElement= document.querySelector("#randomColorButton");
const buttonSet = document.querySelector("#setColorButton");

buttonElement.addEventListener("click", changeColors);
// const container = document.querySelector(".container");
buttonSet.addEventListener("click", addColor);


function changeColors (){

    // document.querySelector("body").style.backgroundColor= getRandomColor();
    // document.querySelector("#colorName").textContent= getRandomColor();
// 

    const randomIndex = Math.floor(Math.random()* colors.length);


    document.querySelector("#colorName").textContent= colors[randomIndex];
    document.querySelector("body").style.backgroundColor= colors[randomIndex];

    
};

function addColor(){
    const userInput = document.querySelector("#addColor");

    // array içinde yoksa index i -1 olur.
    if (userInput.value ==""){
        alert("Please enter a color");
                userInput.value ="";
        userInput.focus();

    }
    
    // indexof sadece flat array lerde geçerlidir. ["red", "blue",....]
    // Object arrayler de findIndex geçerlidir. 
    else if(colors.indexOf(userInput.value)===-1){
        colors.push(userInput.value);
        document.querySelector("body").style.backgroundColor= userInput.value ;
        userInput.value ="";
        userInput.focus();
    }
    else{
        alert("Color is already exist");
    }

    
    console.log(userInput.value);
    console.log(colors);
}


function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
    }

// function changeColors (){
//     const randomIndex = Math.floor(Math.random()* colors.length);
//     // array uzunluguna kadar olan sayıları random al
//     const renk = colors[randomIndex];
//     // container.setAttribute("style", "background-color: ${renk};");
//     document.querySelector("body").style.backgroundColor= getRandomColor();
    
// };


// ----------------Array Object array olduğunda-----

  // indexOf SADECE flat array (["red", "blue"] / [1, 2, 3]) geçerlidir.
  // findIndex object arraylerde geçerlidir.
//   const searchedColorIndex = colors.findIndex(
//     (myColor) => myColor.name === colorObject.name
//   );
//   if (searchedColorIndex === -1) {
//     document.querySelector("body").style.backgroundColor = colorObject.name;
//     document.querySelector("#colorName").textContent = colorObject.name;
//     document.querySelector("#colorDesc").textContent = colorObject.motto;

//     colors.push(colorObject);
//     userInput.value = "";
//     userInput.focus();
//   } else {
//     alert("Renk zaten mevcut!");
//   }