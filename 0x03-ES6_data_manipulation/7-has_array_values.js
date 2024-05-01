export default function hasValuesFromArray(set, array) {
  for (let val of array) {
    if (!set.has(val)) {
      return false;
    }
  }
  return true;
}
