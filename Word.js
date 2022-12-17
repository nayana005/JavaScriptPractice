const prompt = require("prompt-sync") ({sigint:true});
const str = prompt('Enter a string:');
const checkString = prompt('Enter a word that you want to check:');

if(str.includes(checkString)) {
    console.log(`The string contains ${checkString}`);
} else {
    console.log(`The string does not contain ${checkString}`);
}