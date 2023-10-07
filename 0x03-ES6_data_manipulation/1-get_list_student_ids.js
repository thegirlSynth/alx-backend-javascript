/* returns an array of ids from a list of object. */

export default function getListStudentIds(objArray) {
  if (!Array.isArray(objArray)) {
    return [];
  }

  const arrayId = objArray.map((obj) => obj.id);

  return arrayId;
}
