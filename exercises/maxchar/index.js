// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const arr = str.split("");
  const obj = arr.reduce((acc, val) => {
    if (acc[val]) {
      acc[val] = acc[val] + 1;
    } else {
      acc[val] = 1;
    }

    return acc;
  }, {});

  let maxCharLength = 0;
  let maxChar = "";
  for (const [key, value] of Object.entries(obj)) {
    if (maxCharLength < value) {
      maxCharLength = value;
      maxChar = key;
    }
  }

  return maxChar;
}

module.exports = maxChar;
