const fs = require('fs').promises;
const express = require('express');

const app = express();

async function countStudents(path) {
  try {
    const data = await fs.readFile(path, 'utf-8');
    const students = data.split('\n').filter(Boolean);
    const fields = {};

    let totalStudents = 0;

    students.slice(1).forEach((student) => {
      // eslint-disable-next-line no-unused-vars
      const [firstName, lastname, age, field] = student.split(',');

      if (!fields[field]) {
        fields[field] = [];
      }
      fields[field].push(firstName);
      totalStudents += 1;
    });

    let output = (`Number of students: ${totalStudents}\n`);

    for (const field in fields) {
      if (Object.prototype.hasOwnProperty.call(fields, field)) {
        output += `Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}\n`;
      }
    }

    output = output.slice(0, -1);
    return output;
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  try {
    const studentList = await countStudents(process.argv[2]);

    const output = `This is the list of our students\n${studentList}`;

    res.set('Content-Type', 'text/plain');
    res.send(output);
  } catch (error) {
    res.status(404).send('This is the list of our students\nCannot load the database');
  }
});

const PORT = 1245;
app.listen(PORT, () => {
  console.log(`Server is running and listening on ${PORT}`);
});

module.exports = app;
