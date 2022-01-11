/*
  Array methods - .join()
  -------------------------
  Complete the capitalise function 
  It should return a string with the first letter in uppercase
  For example, capitailise("hello") should return "Hello"
  Tip: use the string method .split() and the array method .join()
*/

function capitalise(str) {
  const word = str.split("");
  word[0] = word[0].toUpperCase();
  console.log(word.join(""));
}

/* 
  DO NOT EDIT BELOW THIS LINE
  --------------------------- */
let sampleName = "benyamin";
capitalise(sampleName);
capitalise("hello");
/* 
  EXPECTED RESULT
  ---------------
  Benyamin
  Hello
*/
