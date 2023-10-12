export default function iterateThroughObject(reportWithIterator) {
  const output = [];
  for (const emp of reportWithIterator) {
    output.push(emp);
  }

  return (output.join(' | '));
}
