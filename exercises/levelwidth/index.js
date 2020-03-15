// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
  const counters = [0];
  const arr = [root, "s"];

  while (arr.length > 1) {
    const node = arr.shift();

    if (node === "s") {
      counters.push(0);
      arr.push("s");
    } else {
      counters[counters.length - 1]++;
      arr.push(...node.children);
    }
  }

  return counters;
}

module.exports = levelWidth;

// function levelWidth(root) {
//   const counters = [0];
//   const arr = [root, "s"];

//   while (arr.length && arr.length > 1) {
//     const data = arr.shift();
//     if (data === "s") {
//       counters.push(0);
//       arr.push("s");
//     } else {
//       counters[counters.length - 1]++;
//       arr.push(...data.children);
//     }
//   }

//   return counters;
// }
