let arr = [5, 10, 16, 20, 28, 27];
let n = arr.length;

let highest = -Infinity;
let secondHighest = -Infinity;

for (let i = 0; i < n; i++) {
    if (arr[i] > highest) {
        secondHighest = highest;
        highest = arr[i];
    }
}

console.log(secondHighest);