
// ----Roman to Number Convert

let userinput = document.getElementById('userinput');
const useroutput = document.getElementById('useroutput');

document.querySelector('#button').addEventListener('click', RomanConvert);



let roman = '';
function RomanConvert() {

    num = userinput.value.toUpperCase().split('');

    let lookup = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1};
  
    let i;
    
    for (i in num) {
        
    }
    
    console.log(num)
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

let number = '';
function NumberConvert() {

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

