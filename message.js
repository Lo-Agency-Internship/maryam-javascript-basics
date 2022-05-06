// // hello-world
// let message= prompt("what is your name??");
// alert(message);
// // variables
// alert("Hello! welcome \n fill out the form please");

// let first = prompt("What is your name? ");
// let gender = prompt("what is your gender? ");
// let age = prompt("How old are you? ");
// alert( first + ' '+ gender + ' ' + age);


// let dayofbirth = prompt("what is day of your birthday?");
// let yearofbirth = prompt("In what year were you born? ");
// alert("dayofbirth : "+ dayofbirth + " yearofbirth : " + yearofbirth);
// alert("dayofbirth : "+ yearofbirth + " yearofbirth : "+ dayofbirth );

// // data-type
// let firstName = prompt("what is your first name? ");
// let lastName = prompt("what is your last name? ");
// let sen = prompt("how old are you? ");
// let sex = prompt("what is your gender? ");
// alert(`first name: ${firstName} , last name: ${lastName} , your age is ${sen} and your gender is ${sex}`);
// let biography = `first name: ${firstName} , last name: ${lastName} , age: ${sen} , gender: ${sex}`;

// alert(biography);
// document.getElementById("bio").innerHTML = biography;
 
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
  
  // factorial
  // I.
  function factorialiterative(fn1){
    if (fn1 > 0){
      let y= 1;
      for(let i=1;i <= fn1;i++){
        y = y * i
      }
      return y
    }
    else if (fn1===0){
      return 1
    }
    else {
      return "your number is incalculable"
    }
  }
 
  console.log(factorialiterative(fn1=5))

  // II.
  function factorialrecursive(fn2){
     if(fn2 >0){
       let y=1
       for(let i=1;i <= fn2;i++){
        y = i * factorialrecursive(i-1)
      }
      return y
     }
     else if(fn2===0){
       return 1
     }
     else{
       return "your number is incalculable"
     }
  }
  console.log(factorialrecursive(fn2=3))

  // functions
  // I. Create an array of random numbers
 
  const arrayrn=[]  
  arrayrn.push(Math.floor(Math.random()*(50-15)+15));
  arrayrn.push(Math.floor(Math.random()*(50-15)+15));
  arrayrn.push(Math.floor(Math.random()*(50-15)+15));
  arrayrn.push(Math.floor(Math.random()*(50-15)+15));
  arrayrn.push(Math.floor(Math.random()*(50-15)+15));
  arrayrn.push(Math.floor(Math.random()*(50-15)+15));
  arrayrn.push(Math.floor(Math.random()*(50-15)+15));
  console.log(arrayrn)

  // II. MAP function

function costumMap(ar=[], callback){
  const out=[]
  for(let i=0;i<ar.length;i++){
  out.push(callback(ar[i]))
  }
  return out
}
const check1= costumMap(arrayrn,(m)=>{
 return m +1500
}
)
console.log(check1)

// III. Filter function

function costumFilter(ar=[],callback){
 const out=[]
  for(let i=0;i<ar.length;i++){
      if(callback(ar[i])){
  out.push(ar[i])
      }
  }
return out
}
const check2= costumFilter(arrayrn,(n)=>{
  return n = 0
}
)
console.log(check2)

// IV. Reduce

function customReduce(arr, callback)
{
let initial = arr[0];

for (let i = 1; i < arr.length; i++)
{
initial = callback(initial, arr[i], i);
}
return initial;
}
console.log(customReduce(arrayrn, (acc, cv) => acc + cv));









