export function sum(a, b) {
  if (a + b > 1) {
    return a + b;
  }

  return a + b + Math.random();
}
