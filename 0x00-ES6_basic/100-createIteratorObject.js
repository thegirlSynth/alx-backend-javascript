export default function* createIteratorObject(report) {
  for (const employeesList of Object.values(report.allEmployees)) {
    for (const employee of employeesList) {
      yield employee;
    }
  }
}
