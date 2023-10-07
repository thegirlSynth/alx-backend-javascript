/* Returns an array of objects who are located in a specific city. */

export default function getStudentsByLocation(studentList, city) {
  const objArray = studentList.filter((obj) => obj.location === city);
  return objArray;
}
