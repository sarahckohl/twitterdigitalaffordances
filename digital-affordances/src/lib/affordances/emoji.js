// /\p{Extended_Pictographic}/u.test('flowers'), // false :)
// /\p{Extended_Pictographic}/u.test('flowers 🌼🌺🌸'), // true :)
// /\p{Extended_Pictographic}/u.test('flowers 123'), // false :)
export default (string) => /\p{Extended_Pictographic}/.test(string)