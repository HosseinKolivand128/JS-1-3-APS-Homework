/*
  The voyagers decide that they quite like this planet, and some of them want to settle there and colonise it.

  They call the planet "APS DNA" and they decide that the people whose carries the APS DNA tags after their names,
  which start with 'A' should stay,
  while the others go on in search of other planets to call home.

  Create a function that returns an array of colonisers that will stay, according to the above rules.

  NOTE: don't include any element that is not from "APS" family.

  HINT: Whenever you read the above the instructions, try to come up with the main input and output and logic
        Input: Is an array
        Output: Is an array
        Logic: Only strings that start with A, and finish with Aps
  
*/

function getSettlers(arr) {
  let ind = 0;
  const arr1 = arr.map((element) => {
    if (element.search("APS") !== -1) {
      return element;
    }
  });
  return arr1.filter((item) => {
    if (item !== undefined) {
      if (item.charAt(ind) === "A") {
        return item;
      }
    }
  });
}

console.log(
  getSettlers([
    "Fatemeh APS",
    "AmirAli APS",
    "Hasan",
    "Trump",
    "MohammadHossein APS",
    "Anahid APS",
    "Arad APS",
    "Manoochehr",
    "Asimov Issac",
    "Kiana APS",
    "Sina APS",
    "Shirin A. APS",
    "Atena APS",
  ])
);
/* ======= TESTS - DO NOT MODIFY ===== */

test("getSettlers function works", () => {
  const voyagers = [
    "Fatemeh APS",
    "AmirAli APS",
    "Hasan",
    "Trump",
    "MohammadHossein APS",
    "Anahid APS",
    "Arad APS",
    "Manoochehr",
    "Asimov Issac",
    "Kiana APS",
    "Sina APS",
    "Shirin A. APS",
    "Atena APS",
  ];

  expect(getSettlers(voyagers)).toEqual([
    "AmirAli APS",
    "Anahid APS",
    "Arad APS",
    "Atena APS",
  ]);
});
