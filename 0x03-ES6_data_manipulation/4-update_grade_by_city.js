export default function updateStudentGradeByCity(students, city, newGrades) {
  if (!Array.isArray(newGrades) || !Array.isArray(students)) {
    return [];
  }
  // Changes grade for students in NewGrades
  // Filters student by location
  const eachstudent = students.filter((student) => student.location === city).map((student) => {
    const grade = newGrades.find((grade) => grade.studentId === student.id);
    if (grade) {
      student.grade = grade.grade;
    } else {
      student.grade = 'N/A';
    }
    return student;
  });
  return eachstudent;
}
