// hello-world
let message= prompt("what is your name??");
alert(message);
// variables
alert("Hello! welcome \n fill out the form please");

let first = prompt("What is your name? ");
let gender = prompt("what is your gender? ");
let age = prompt("How old are you? ");
alert( first + ' '+ gender + ' ' + age);


let dayofbirth = prompt("what is day of your birthday?");
let yearofbirth = prompt("In what year were you born? ");
alert("dayofbirth : "+ dayofbirth + " yearofbirth : " + yearofbirth);
alert("dayofbirth : "+ yearofbirth + " yearofbirth : "+ dayofbirth );

// data-type
let firstName = prompt("what is your first name? ");
let lastName = prompt("what is your last name? ");
let sen = prompt("how old are you? ");
let sex = prompt("what is your gender? ");
alert(`first name: ${firstName} , last name: ${lastName} , your age is ${sen} and your gender is ${sex}`);
let biography = `first name: ${firstName} , last name: ${lastName} , age: ${sen} , gender: ${sex}`;

alert(biography);
document.getElementById("bio").innerHTML = biography;
 
// math
// I.
function rand(z, t) {
    return Math.floor(Math.random() * (2 * z + (t - 1)))
}
console.log(rand(31, 67));
// II.
let binary = "101100111101"
function bin2dec(str) {
    return parseInt(str, 2)
}
console.log(bin2dec(binary))

// comparisons

// I.
function Sumtwointeger(z,t){
 if (z===t){
     return((2*z)*3)
 }
}
console.log(Sumtwointeger(7,7))
// II.
 function cumputedifference(x){
     if (x > 19){
         return ((x-19)*3)
     }
 } 
 console.log(cumputedifference(25))
//  III.
function addstring(txt){
 if (txt.startsWith('Lo')){
     return(txt)
    }
 else{
     return ("Lo"+txt)
 }
}
console.log(addstring("Loagancy"));

// logical gates

// I.
function logicalGateBuffer(a){
    return a
  }
  
  function logicalGateNot(a){
    return !a
  }
  let a= true
  console.log(logicalGateBuffer(a))
// II.
function logicalGateAnd(x,y){
    if(x===true,y===true){
      return true
    }
    return false
  }
  let x= false
  let y= true
  console.log(logicalGateOr(x,y))
// III.
function logicalGateOr(z,t){
    if (z===false && t===false){
      return false
    }
    return true
  }
  let z= false
  let t= true
  console.log(logicalGateOr(z,t))
// IV.
function logicalGateNand(m,n){
    if(m===true && n===true){
      return false
    }
    return true
  }
  let n= false
  let m = true
  console.log(logicalGateNand(m,n))
// V.
function logicalGateNor(p,o){
    if (p===false && o===false){
      return true
    }
    return false
  }
  let p=false
  let o=true
  console.log(logicalGateNor(p,o))
// VI.
function logicalGateXor(c,d){
    if(c===d){
      return false
    }
    return true
  }
  let c=false
  let d=true
  console.log(logicalGateXor(c,d))
// VII.
function logicalGateXnor(w,v){
    if (w===v){
      return true
    }
    return false
  }
  let w=false
  let v=true
  
  console.log(logicalGateXnor(w,v))
  