import readDatabase from '../utils';

export default class StudentsController {
  static async getAllStudents(req, res) {
    try {
      const data = await readDatabase(process.argv[2]);
      const output = ['This is the list of our students'];

      Object.keys(data).sort((a, b) => a.localeCompare(b, 'en', { sensitivity: 'base' })).forEach((field) => {
        output.push(`Number of students in ${field}: ${data[field].length}. List: ${data[field].join(', ')}`);
      });

      return res.status(200).send(output.join('\n'));
    } catch (error) {
      return res.status(500).send(error.message);
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const { major } = req.params;

    if (major !== 'CS' && major !== 'SWE') {
      return res.status(500).send('Major parameter must be CS or SWE');
    }

    try {
      const data = await readDatabase(process.argv[2]);
      const students = data[major] || [];

      return res.status(200).send(`List: ${students.join(', ')}`);
    } catch (error) {
      return res.status(500).send(error.message);
    }
  }
}
