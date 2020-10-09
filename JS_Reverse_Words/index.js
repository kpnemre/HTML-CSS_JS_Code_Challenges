


let userinput = document.getElementById('userinput');

const useroutput = document.getElementById('useroutput');

document.querySelector('#button').addEventListener('click', reverseWords);



function reverseWords () {


  // console.log(userinput.value);

let input = userinput.value.split(' ');




  // console.log(input)

  if (input.length <2){
    alert("Programs do not reverse single word");
    confirm('Could you try again !');
    
    document.getElementById('userinput').value = ' ';
    
    console.warn('Write more than a word');
  }
  else{
    let output =' ';
  
    document.getElementById('userinput').value = ' ';


    for (i = 1; i < input.length+1; i++) {
        let word = input[input.length-i];
        output+=" " + word;
      }
      console.log(output);
      useroutput.innerHTML = output;
  }

}
 
