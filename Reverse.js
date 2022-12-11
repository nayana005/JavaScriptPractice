const prompt = require("prompt-sync") ({sigint:true});

const num = prompt(parseInt("Enter a number:"));

function reverse_num(num){
     
    var reversed = 0
    while(num > 0){
        let lastNumber = num % 10;
        reversed = reversed * 10 + lastNumber;
        num = Math.floor(num/10)
    }
    return reversed
}
console.log(`Reversed integer is: ${reverse_num(num)}`)
    