import testEmojis from "../digital-affordances/src/lib/affordances/emoji.js";

console.log(
  testEmojis("flowers").length // false :)
);
console.log(
  testEmojis("🌼🌺🌸flo 🌺 er 🌸 wers 🌼🌺🌸").length // true :)
);
console.log(
  testEmojis("flowers 123").length // false :)
);
console.log("end of line");
