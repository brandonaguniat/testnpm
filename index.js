module.exports = function toLowercase(string) {
  if (typeof string !== "string") throw new TypeError("I want a string!");
  return string.toLowerCase();
};
