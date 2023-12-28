const http = require('http');
const fs = require('fs').promises;

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

    return output;
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

const app = http.createServer(async (req, res) => {
  const { url } = req;

  if (url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!');
  }

  if (url === '/students') {
    try {
      let studentList = await countStudents(process.argv[2]);
      studentList = studentList.slice(0, -1);

      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end(`This is the list of our students\n${studentList}`);
    } catch (error) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('This is the list of our students\nCannot load the database');
    }
  }
});

app.listen(1245, () => {
  console.log('Server is running and listening on port 1245');
});

module.exports = app;
