export default function getRandIntBetween(a, b) {
  if (a > b) {
    throw new Error("first boundary should be not higher than second");
  }
  if (a === b) return a;
  return Math.floor(Math.random() * (b - a + 1) + a);
}
