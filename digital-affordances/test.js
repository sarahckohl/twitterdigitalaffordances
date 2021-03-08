import testEmojis from "./src/lib/definitions/affordances/emojis/index.js";
import testPolarizing from "./src/lib/definitions/polarizing/index.js";

console.log("emojis");
console.log(testEmojis("flowers", { threshold: 1 })); //false
console.log(testEmojis("🌼🌺🌸flo 🌺 er 🌸 wers 🌼🌺🌸", { threshold: 8 })); //true
console.log(testEmojis("🌼🌺🌸flo 🌺 er 🌸 wers 🌼🌺🌸", { threshold: 9 })); //false
console.log(
  testEmojis("flowers 123", { threshold: 1 }) //false
);

console.log("polarizing");
console.log(testPolarizing("we are going to bring trump down")); //true
console.log(testPolarizing("imaging thinking skinny jeans are hip in 2021")); //true
console.log(testPolarizing("this tweet is innocent")); //false
