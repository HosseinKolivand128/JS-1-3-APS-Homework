/*
   This program should check if the array `group` contains only students
*/

const students = ["Hossein", "Jamal", "Mehdi", "Shaden", "Zaynab", "Niloofar"];
const group = ["Haniye", "Alireza", "Benyamin", "Fatemeh"];

let groupIsOnlyStudents = false;
group.forEach((elementG) => {
  for (let i = 0; i < students.length; i++) {
    if (students[i] === elementG) {
      groupIsOnlyStudents = true;
    }
  }
});
//  complete this statement

console.log(groupIsOnlyStudents);
if (groupIsOnlyStudents) {
  console.log("The group contains only students");
} else {
  console.log("The group does not contain only students");
}

/* EXPECTED RESULT */

// The group does not contain only students
