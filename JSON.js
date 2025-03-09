"use strict";
// Task 1: Convert an Object to JSON and Back
// Goal: Convert a JavaScript object to JSON format and parse it back into an object.

// Instructions:
// 1. Create a JavaScript object with name, age, and city.
// 2️. Convert the object to a JSON string.
// 3️. Parse the JSON string back to a JavaScript object.
// 4. Compare the original and parsed objects.
{
  const persone = {
    name: "Viktor",
    tel: "+1 (123)-456-7890",
    age: "25",
    city: "Winnipeg",
  };

  const JSONString = JSON.stringify(persone);
  const JSONParse = JSON.parse(JSONString);
  // console.log(`JSON string: ${JSONString}`);
  // console.log(`JSON parse: ${JSONParse}`);
  // console.log(`Comparison: persone === JSONParse is ${persone === JSONParse}`);
}

// Task 2: Fetch JSON Data from an API
// Goal: Use fetch() to retrieve JSON data and display it.

// Instructions:
// 1️. Use the fetch() function to get data from https://jsonplaceholder.typicode.com/users.
// 2️. Convert the response to JSON.
// 3️. Display the user in the console.
{
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((data) => {
      console.log("user list:");
      data.forEach((user) => {
        console.log(JSON.stringify(user.name));
      });
    })
    .catch((error) => console.error("Error fetching data:", error));
}
