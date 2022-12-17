const prompt = require("prompt-sync") ({sigint:true});
const str = prompt('Enter a string:');

string_to_array = function () {
    return str.trim().split(" ");
};
console.log(string_to_array());