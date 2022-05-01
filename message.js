let firstName = prompt("what is your first name? ");
let lastName = prompt("what is your last name? ");
let age = prompt("how old are you? ");
let gender = prompt("what is your gender? ");
alert(`first name: ${firstName} , last name: ${lastName} , your age is ${age} and your gender is ${gender}`);
let biography = `first name: ${firstName} , last name: ${lastName} , age: ${age} , gender: ${gender}`;

alert(biography);
document.getElementById("bio").innerHTML = biography;