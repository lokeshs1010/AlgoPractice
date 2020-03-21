const containsCommonItems = (arr1, arr2) => {
  const obj = {};
  let isIncluded = false;

  arr1.forEach(elm => {
    obj[elm] = true;
  });
  arr2.forEach(elm => {
    if (obj[elm]) {
      isIncluded = true;
    }
  });
  return isIncluded;
};

const result = containsCommonItems(["a", "b", "c", "x"], ["z", "y", "x"]);
console.log(result);

// const containsCommonItems = (arr1, arr2) => {
//   let isIncluded = false;
//   arr1.forEach(element => {
//     if (arr2.includes(element)) {
//       isIncluded = true;
//     }
//   });
//   return isIncluded;
// };
