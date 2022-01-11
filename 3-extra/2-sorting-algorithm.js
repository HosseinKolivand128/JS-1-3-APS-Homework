/*
At the start of the course, you worked in teams to sort your team members, labelled by
numbers, in ascending or descending order.

Today, you will be applying the sorting algorithm you used in that exercise in code! 

Create a function called sortAges which:
- takes an array of mixed data types as input
- removes any non-number data types without using the built-in javascript filter method
- returns an array of sorted ages in ascending order 
  - HARD MODE - without using the built-in javascript sort method 😎

You don't have to worry about making this algorithm work fast! The idea is to get you to
"think" like a computer and practice your knowledge of basic JavaScript.
*/
// console.log(typeof 5);
function sortAges(arr) {
  let numbers = arr
    .map((element) => {
      let el;
      if (typeof element === "number") {
        el = element;
      } else if (parseInt(element)) {
        el = parseInt(element);
      }
      return el;
    })
    .filter((item) => item);
  for (let i = 0; i < numbers.length - 1; i++) {
    let swapped = false;
    for (let j = 0; j < numbers.length - i - 1; j++) {
      if (numbers[j] > numbers[j + 1]) {
        let temp = numbers[j];
        numbers[j] = numbers[j + 1];
        numbers[j + 1] = temp;

        swapped = true;
      }
    }
    if (!swapped) break;
  }
  return numbers;
}

/* ======= TESTS - DO NOT MODIFY ===== */

const agesCase1 = [
  "🎹",
  100,
  "💩",
  55,
  "🥵",
  "🙈",
  45,
  "🍕",
  "Mahjan",
  66,
  "Bahar",
  23,
  "🎖",
  "Maryam",
];
const agesCase2 = ["28", 100, 60, 55, "75", "🍕", "Alireza"];

console.log(sortAges(agesCase1));
console.log(sortAges(agesCase2));

test("sortAges function works - case 1", () => {
  expect(sortAges(agesCase1)).toEqual([23, 45, 55, 66, 100]);
});

test("sortAges function works - case 2", () => {
  expect(sortAges(agesCase2)).toEqual([55, 60, 100]);
});
