const { add, multiply } = require('../src/index.js');

console.log("Running tests...");
console.log("add(2, 3) =", add(2, 3), "(Expected: 5)");
console.log("multiply(4, 5) =", multiply(4, 5), "(Expected: 20)");

if (add(2, 3) === 5 && multiply(4, 5) === 20) {
  console.log("All tests passed!");
} else {
  console.log("Tests failed!");
  process.exit(1);
}
