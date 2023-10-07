/* Returns the sum of all the student ids. */

export default function getStudentIdsSum(studentsList) {
  const studentsIds = studentsList.map((student) => student.id);

  const sum = studentsIds.reduce((accumulator, currentValue) => accumulator + currentValue);

  return sum;
}
