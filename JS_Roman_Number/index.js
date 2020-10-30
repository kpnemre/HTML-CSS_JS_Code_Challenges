
// ----Roman to Number Convert

let userinput = document.getElementById('userinput');
const useroutput = document.getElementById('useroutput');

document.querySelector('#button').addEventListener('click', RomanConvert);






function RomanConvert() {

  let convertNumber= 0;
  useroutput.innerHTML ='';

    num = userinput.value.toUpperCase().split('');

    let lookup = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1};
  
    let i= 0;
    let j;
    
    
    for (i=0;i<num.length; i++) {
      for (j in lookup){
          if (j === num[i]){
            convertNumber += parseInt(lookup[j])
          }
      }
      
        
    }
    console.log(convertNumber);
    useroutput.innerHTML = convertNumber;
    
    
    // for ( i in lookup ) {
    //   while ( num >= lookup[i] ) {
    //     roman += i;
    //     num -= lookup[i];
    //   }
    // }
    // console.log(roman)
    // useroutput2.innerHTML = roman;
  }
 


// -----------------------------------------------------------------------

// ---- Number to Roman  Convert
 
let userinput2 = document.getElementById('userinput2');
const useroutput2 = document.getElementById('useroutput2');

document.querySelector('#button2').addEventListener('click', NumberConvert);


function NumberConvert() {
  let number = '';
  useroutput2.innerHTML = '';
    num = userinput2.value;
    var lookup = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1};
  
    let i;
    
    for ( i in lookup ) {

      while ( num >= lookup[i] ) {
        number += i;
        num -= lookup[i];
      }
    }
    console.log(number)
    useroutput2.innerHTML = number;
  }
// -----------------------------------------------------------

