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
