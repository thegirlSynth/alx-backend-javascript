const fs = require('fs').promises;

export default async function readDatabase(path) {
  try {
    const data = await fs.readFile(path, 'utf-8');
    const students = data.split('\n').filter(Boolean);
    const fields = {};

    students.slice(1).forEach((student) => {
      // eslint-disable-next-line no-unused-vars
      const [firstName, lastname, age, field] = student.split(',');

      if (!fields[field]) {
        fields[field] = [];
      }
      fields[field].push(firstName);
    });

    return fields;
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

