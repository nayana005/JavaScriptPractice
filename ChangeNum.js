const arr = ['12', '34', '56'];

for (let index = 0; index < arr.length; index++) {
  if (arr[index] === '12') {
    arr[index] = '78';
    break;
  }
}

console.log(arr)