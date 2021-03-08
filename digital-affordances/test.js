import testEmojis from "../digital-affordances/src/lib/affordances/emoji.js";

console.log(testEmojis("flowers", { threshold: 1 })); //false
console.log(testEmojis("🌼🌺🌸flo 🌺 er 🌸 wers 🌼🌺🌸", { threshold: 8 })); //true
console.log(testEmojis("🌼🌺🌸flo 🌺 er 🌸 wers 🌼🌺🌸", { threshold: 9 })); //false
console.log(
  testEmojis("flowers 123", { threshold: 1 }) //false
);
