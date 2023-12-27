const fs = require("fs");

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf-8');
    const students = data.split('\n').filter(Boolean);
    const fields = {};

    let totalStudents = 0;

    students.slice(1).forEach((student) => {
      const [firstName, lastName, age, field] = student.split(',');

      if (!fields[field]) {
        fields[field] = [];
      }
      fields[field].push(firstName);
      totalStudents++;
    });

    console.log(`Number of students: ${totalStudents}`);

    for (const field in fields) {
      if (fields.hasOwnProperty(field)) {
        console.log(`Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`);
      }
    }
  } catch (err) {
    throw new Error("Cannot load the database");
  }
}


module.exports = countStudents;
