const personalPlanPeter = {
  name: "Viktor",
  age: "25",
  skills: {
    languages: ["ukr", "eng", "pl", "rus"],
    programmingLangs: {
      js: "20%",
      php: "10%",
    },
    exp: "1 month",
  },
  showAgeAndLangs(plan) {
    const {
      age,
      skills: { languages },
    } = plan;

    return `I am ${age} and i know langugages:${languages
      .join(" ")
      .toUpperCase()} `;
  },
};
console.log(personalPlanPeter.showAgeAndLangs(personalPlanPeter));
function showExperience(plan) {
  const { skills } = plan;
  const { exp } = skills;
  return exp;
}

//console.log(showExperience(personalPlanPeter));

function showProgrammingLangs(plan) {
  let result = "";
  const {
    skills: { programmingLangs },
  } = plan;

  if (Object.keys(programmingLangs).length === 0) return "Empty";

  for (let language in programmingLangs) {
    result += `${language} language is mastered by ${programmingLangs[language]} \n`;
  }

  return result;
}
console.log(showProgrammingLangs(personalPlanPeter));

const shoppingMallData = {
  shops: [
    {
      width: 10,
      length: 5,
    },
    {
      width: 15,
      length: 7,
    },
    {
      width: 20,
      length: 5,
    },
    {
      width: 8,
      length: 10,
    },
  ],
  height: 5,
  moneyPer1m3: 30,
  budget: 50000,
};

function volumeOfAllShops(data) {
  const volume = areaOfAllStore(data);
  return volume * data.height;
}

function areaOfAllStore(data) {
  let square = 0;
  const { shops } = data;
  for (const shop of shops) {
    const { width, length } = shop;
    square += width * length;

  }

  return square;
}

function isBudgetEnough(data) {
  if (volumeOfAllShops(data) * data.moneyPer1m3 <= data.budget) {
    return `We have enough buget`;
  } else {
    return `Not enough buget`;
  }
}

//isBudgetEnough(shoppingMallData);
console.log(isBudgetEnough(shoppingMallData));
console.log(areaOfAllStore(shoppingMallData));
