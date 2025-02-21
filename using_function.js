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
