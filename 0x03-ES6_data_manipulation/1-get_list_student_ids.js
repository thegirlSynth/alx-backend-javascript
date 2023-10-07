export default function getListStudentIds(objArray) {
  if (!Array.isArray(objArray)) {
    return [];
  }

  const arrayId = objArray.map((obj) => objArray.indexOf(obj));

  return arrayId;
}
