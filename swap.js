const prompt = require("prompt-sync") ({sigint:true});
let a = prompt('Enter the first string: ');
let b = prompt('Enter the second string: ');

let temp;

temp = a;
a = b;
b = temp;

console.log(`The value of a after swapping: ${a}`);
console.log(`The value of b after swapping: ${b}`);
