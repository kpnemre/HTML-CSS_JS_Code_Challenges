


let userinput = document.getElementById('userinput');
let userinput2 = document.getElementById('userinput2');

const useroutput = document.getElementById('useroutput');

document.querySelector('#button').addEventListener('click', reverseWords);



function reverseWords () {


  // console.log(userinput.value);

let input = userinput.value.split(' ');
let input2 = userinput2.value.split(' ');




//   console.log(input)
//   console.log(input2)


if (input.length == 1 && input2.length == 1){
    var output = input;
    output.sort();
    
    alert("Programs do not reverse single word");
}
else if (input.length == 1 && input2.length != 1){
    var output = input2;
    output.sort();
}
else if (input.length != 1 && input2.length == 1){
    var output = input;
    output.sort();
}
else {
    var output = [...input, ...input2]; 
    // Spread method.
    output.sort();
    
}
  
    document.getElementById('userinput').value = ' ';
    document.getElementById('userinput2').value = ' ';
    console.log(output);
  useroutput.innerHTML =  output;


}
 
