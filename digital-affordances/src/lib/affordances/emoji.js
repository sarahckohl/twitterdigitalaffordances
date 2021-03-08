// /\p{Extended_Pictographic}/u.test('flowers'), // false :)
// /\p{Extended_Pictographic}/u.test('flowers 🌼🌺🌸'), // true :)
// /\p{Extended_Pictographic}/u.test('flowers 123'), // false :)
export default (string, { threshold, density }) => {
  const hits = string.match(/\p{Extended_Pictographic}/gu) || [];
  if (threshold) {
    return hits.length >= threshold;
  }
  return;
};
