export default function omit(obj, ...keys) {
  const clone = Object.assign({}, obj);
  keys.forEach(key => delete clone[key]);
  return clone;
}
