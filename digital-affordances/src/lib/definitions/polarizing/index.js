import { createRequire } from "module"; // Bring in the ability to create the 'require' method
const require = createRequire(import.meta.url);
const cultural = require("./cultural.json");
const political = require("./political.json");

export default (string, { threshold, density } = {}) => {
  if ([...cultural, ...political].some((v) => string.includes(v))) {
    return true;
  }
  return false;
};
