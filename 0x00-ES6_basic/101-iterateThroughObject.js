export default function iterateThroughObject(reportWithIterator) {
  let output = [];
  for (const emp of reportWithIterator) {
    output.push(emp);
  }

  return (output.join(" | "));
}
