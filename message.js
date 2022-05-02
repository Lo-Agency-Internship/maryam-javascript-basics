// I.
function rand(z,t)
{
   return Math.floor(Math.random()*(2*z+(t-1)))
} 
console.log(rand(31,67));
// II.
let binary= "101100111101"
function bin2dec(str){
 return parseInt (str,2)
}
console.log(bin2dec(binary))