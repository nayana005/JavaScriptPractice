const fib = () => {
    const prompt = require("prompt-sync") ({sigint:true});
    const n = prompt('Enter the term')
    const fibarray = [0,1];

    for(var i=2; i<n; i++){
        fibarray.push(fibarray[i-2] + fibarray[i-1]);
    }
    return fibarray;
}

console.log(fib());