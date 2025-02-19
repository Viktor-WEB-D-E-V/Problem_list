"use strict";
function twoSum(numsArr, target) {
  let storeNumber = new Map();

  for (let i = 0; i < numsArr.length; i++) {
    let complement = target - numsArr[i];

    if (storeNumber.has(complement)) {
      return [storeNumber.get(complement), i];
    }
    storeNumber.set(numsArr[i], i);
  }
}

console.log(twoSum([2, 7, 2, 15], 9));

console.log(twoSum([4, -2, 5, 0, 6, 3, 2, 7], 1));
