import testEmojis from '../digital-affordances/src/lib/affordances/emoji.js';

console.log(
testEmojis('flowers'), // false :)
testEmojis('flowers 🌼🌺🌸'), // true :)
testEmojis('flowers 123'), // false :)
);