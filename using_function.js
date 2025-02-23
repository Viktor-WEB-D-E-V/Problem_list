function sayHello(name) {
  return `Hello, ${name}`;
}

function returnNeighboringNumbers(num) {
  return [num - 1, num, num + 1];
}

function getMathResult(num, multiplier) {
  if (typeof multiplier !== "number" || multiplier <= 0) {
    return num;
  } else {
    let result = "";
    for (let i = 1; i <= multiplier; i++) {
      if (i == multiplier) {
        result += `${num * i}`;
      } else {
        result += `${num * i}---`;
      }
    }

    return result;
  }
}

console.log(getMathResult(5, 5));

function calculateVolumeAndArea(edge) {
  if (edge <= 0 || typeof edge === "string" || !Number.isInteger(edge)) {
    return "An error occurred while calculating";
  }
  return `Cube volume is ${edge * edge * edge},surface area is ${
    6 * (edge * edge)
  } `;
}
console.log(calculateVolumeAndArea(10));
console.log(calculateVolumeAndArea("0"));

function getCoupeNumber(num) {
  if (num < 0 || typeof num !== "number" || !Number.isInteger(num)) {
    return "Error. Check that the seat number entered is correct";
  }
  if (num === 0 || num > 36) {
    return "Such a seat number doesn't esixt";
  }
  return Math.ceil(num / 4);

  // let seatNumber = 0;
  // for (let i = 0; i < 9; i++) {
  //   for (let j = 1; j <= 4; j++) {
  //     if (j + seatNumber == num) {
  //       return i + 1;
  //     }
  //   }
  //   seatNumber += 4;
  // }
}

console.log(getCoupeNumber(33));
console.log(getCoupeNumber(7));
console.log(getCoupeNumber(300));
console.log(getCoupeNumber(0));
console.log(getCoupeNumber(7.7));
console.log(getCoupeNumber(-10));
console.log(getCoupeNumber("Hello"));

function getTimeFromMinutes(minutes) {
  if (
    typeof minutes !== "number" ||
    !Number.isInteger(minutes) ||
    minutes < 0 ||
    minutes > 600
  ) {
    return "Error, please check the input";
  }

  let hours = Math.floor(minutes / 60);
  let mins = minutes % 60;

  let hoursWord = "hours";
  if (hours === 1) {
    hoursWord = "hour";
  }

  return `It is ${hours} ${hoursWord} and ${mins} minutes`;
}

function findMaxNumber(...arr) {
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== "number") return 0;
  }
  return Math.max(...arr);
}

console.log(findMaxNumber(1, 5, 6.6, 11.1));


function fib(number) {
  if (typeof number !== "number" || number <= 0 || !Number.isInteger(number)) {
    return "";
  } else if (number === 1) {
    return 0;
  }
  let arr = [0, 1];

  for (let i = 2; i < number; i++) {
    arr.push(arr[i - 1] + arr[i - 2]);
  }
  return arr.join(" ");
}

console.log(fib(11));
