function isPrime() {
    const prompt = require("prompt-sync") ({sigint:true});
    const n = prompt(parseInt("Enter a Number"));
    if (n<2)
    return `${n} is not a prime number` 

    for (let i=2; i<n; i++) {
        if(n % i === 0){
            return `${n} is not a prime number`
        }
    }
    return`${n} is a prime number`
}

console.log(isPrime());