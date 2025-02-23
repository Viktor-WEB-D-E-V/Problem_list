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
