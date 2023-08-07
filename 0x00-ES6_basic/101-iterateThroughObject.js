export default function iterateThroughObject(reportWithIterator) {
  let output = '';
  for (const emp of reportWithIterator) {
    output += `${emp} | `;
  }

  return (output.slice(0, -3));
}
