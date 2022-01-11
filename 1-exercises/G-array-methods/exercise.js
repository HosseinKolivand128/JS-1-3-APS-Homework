/*
  Array methods - sort
  --------------------
*/

let numbers = [3, 2, 1];
let sortedNumbers = sort(numbers);
function sort(arr) {
  let temp = arr[arr.length - 1];
  arr[arr.length - 1] = arr[0];
  arr[0] = temp;
  return arr;
}

/* 
  DO NOT EDIT BELOW THIS LINE
  --------------------------- */

console.log(sortedNumbers);

/* 
  EXPECTED RESULT
  ---------------
  [1, 2, 3]
*/
