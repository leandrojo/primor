export default function objectify(obj, [key, value], handleKeys = k => k) {
  return { ...obj, [handleKeys(key)]: value };
}
