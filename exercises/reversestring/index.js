// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  const strArr = str.split("");
  let newArr = [];
  strArr.forEach(element => {
    newArr.unshift(element);
  });
  return newArr.join("");
}

module.exports = reverse;
