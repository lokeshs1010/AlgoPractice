// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function charMap(str) {
  const charMap = {};

  for (const char of str.replace(/[^\w]/g, "").toLowerCase()) {
    charMap[char] = charMap[char] + 1 || 1;
  }
  return charMap;
}

function anagrams(stringA, stringB) {
  charMapA = charMap(stringA);
  charMapB = charMap(stringB);

  if (Object.keys(charMapA).length !== Object.keys(charMapB).length) {
    return false;
  }

  for (const x in charMapA) {
    if (charMapA[x] !== charMapB[x]) {
      return false;
    }
  }
  return true;
}

module.exports = anagrams;
