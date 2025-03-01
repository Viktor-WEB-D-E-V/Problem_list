"use strict";

function printFrom5To10() {
  for (let i = 5; i <= 10; i++) {
    console.log(i);
  }
}
printFrom5To10();

function printDownForm20() {
  for (let i = 20; i > 10; i--) {
    if (i == 13) break;
    console.log(i);
  }
}
printDownForm20();

function logEvenNum() {
  for (let i = 2; i <= 10; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }

  //   for (let i = 2; i <= 10; i += 2) {
  //     console.log(i);
  //   }
}
logEvenNum();

function whileLoop() {
  let i = 2;
  while (i <= 16) {
    if (i % 2 === 0) {
      i++;
      continue;
    } else {
      console.log(i);
    }
    i++;
  }

  //   for (let i = 2; i <= 16; i++) {
  //     if (i % 2 === 0) {
  //       continue;
  //     } else {
  //       console.log(i);
  //     }
  //   }
}

whileLoop();

function fillUpArr() {
  const arrayOfNumbers = [];
  //   for (let i = 5; i <= 10; i++) {
  //     arrayOfNumbers.push(i);
  //   }

  for (let i = 5, arrIndex = 0; i <= 10; i++, arrIndex++) {
    arrayOfNumbers[arrIndex] = i;
  }
  return arrayOfNumbers;
}

console.log(fillUpArr());

function copyArr() {
  const arr = [3, 5, 8, 16, 20, 23, 50];
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    result[i] = arr[i];
  }

  return result;
}

console.log(copyArr());

function changeArr() {
  const data = [5, 10, "Shopping", 20, "Homework"];

  for (let i = 0; i < data.length; i++) {
    if (typeof data[i] === "string") {
      data[i] += "-Done";
    } else if (typeof data[i] === "number") {
      data[i] *= 2;
    }
  }

  return data;
}

console.log(changeArr());

function reverseArr() {
  const data = [5, 10, "Shopping", 20, "Homework"];
  const result = [];
  for (let i = 1; i <= data.length; i++) {
    console.log(data[data.length - i]);
    result[i - 1] = data[data.length - i];
  }

  return result;
}

console.log(changeArr());

function buildTriangle(rows) {
  let result = "";
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < rows - i - 1; j++) {
      result += " ";
    }

    for (let k = 0; k < 2 * i + 1; k++) {
      result += "*";
    }

    result += "\n";
  }

  return result;
}

console.log(buildTriangle(5));

function merge(nums1, m, nums2, n) {
  let i = m - 1;
  let j = n - 1;
  let k = m + n - 1;

  while (j >= 0) {
    if (i >= 0 && nums1[i] > nums2[j]) {
      nums1[k] = nums1[i];
      i--;
    } else {
      nums1[k] = nums2[j];
      j--;
    }
    k--;
  }
}

// let nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3;
// merge(nums1, m, nums2, n);
// console.log(nums1);

// nums1 = [1], m = 1, nums2 = [], n = 0;
// merge(nums1, m, nums2, n);
// console.log(nums1);

// nums1 = [0], m = 0, nums2 = [1], n = 1;
// merge(nums1, m, nums2, n);
// console.log(nums1);

function removeElement(nums, val) {
  let k = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[k] = nums[i];
      k++;
    }
  }

  return k;
}

let nums1 = [3, 2, 2, 3],
  val1 = 3;
let k1 = removeElement(nums1, val1);
console.log(k1, nums1.slice(0, k1));

let nums2 = [0, 1, 2, 2, 3, 0, 4, 2],
  val2 = 2;
let k2 = removeElement(nums2, val2);
console.log(k2, nums2.slice(0, k2));
