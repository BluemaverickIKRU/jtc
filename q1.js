const readline = require('readline-sync');

const arr = readline
  .question('Provide the array: ')
  .replace('[', '')
  .replace(']', '')
  .split(',')
  .sort((a, b) => a - b);

let firstIndex = 0;
let lastIndex = arr.length - 1;
let resArr = [];

for (let i = 0; i < arr.length; i++) {
  if (firstIndex === lastIndex) {
    resArr.push(arr[firstIndex]);
    console.log(resArr);
  } else if (i % 2 === 0) {
    // Max Value
    resArr.push(arr[lastIndex]);
    lastIndex--;
  } else {
    // Min Value
    resArr.push(arr[firstIndex]);
    firstIndex++;
  }
}
