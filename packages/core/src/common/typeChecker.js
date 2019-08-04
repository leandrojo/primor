export default function typeChecker(role) {
  return element => !!element.type && element.type.role === role;
}
