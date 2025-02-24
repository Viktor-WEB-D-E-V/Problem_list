const students = [
  "Peter",
  "Andrew",
  "Ann",
  "Mark",
  "Josh",
  "Sandra",
  "Cris",
  "Bernard",
  "Takesi",
  "Sam",
  "Viktor",
  "Serhii",
];

function sortStudentsByGroups(arr) {
  const teams = [];
  let restOfStudents = `Rest of students:`;
  arr.sort();

  for (let i = 0; i < arr.length; i++) {
    if (i >= 9) {
      restOfStudents += ` ${arr[i]}`;
    } else {
      if (i % 3 === 0) {
        teams.push(arr.slice(i, i + 3));
      }
    }
  }
  teams[teams.length] =
    arr.length == 9 ? (restOfStudents = `Rest of students:-`) : restOfStudents;
  console.log(teams);
}
console.log(sortStudentsByGroups(students));
