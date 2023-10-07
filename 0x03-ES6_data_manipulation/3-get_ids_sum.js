/* Returns the sum of all the student ids. */

export default function getStudentIdsSum(studentsList) {
  const sum = studentsList.reduce((accumulator, student) => accumulator + student.id, 0);

  return sum;
}
