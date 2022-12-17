const arr = ['chaithra', 'moni', 'venu'];

const newArr = arr.map(element => {
  if (element === 'venu') {
    return 'nayana';
  }
  return element;
});

console.log(arr);

console.log(newArr); 