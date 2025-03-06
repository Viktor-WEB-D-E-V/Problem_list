"use strict";

// Define a Person class with properties: name, age, and city.
// Add a method introduce() that returns a string introducing the person.
// Create at least two instances and call the introduce() method.
// Bonus: Add a static method compareAges(person1, person2) that compares ages.

class Person {
  constructor(name, age, city) {
    this.name = name;
    this.age = age;
    this.city = city;
  }

  static compareAges(person1, person2) {
    if (person1.age === person2.age) {
      console.log(`${person1.name} and ${person2.name} have the same age.`);
    } else {
      person1.age > person2.age
        ? console.log(`${person1.name} is older than ${person2.name}.`)
        : console.log(`${person2.name} is older than ${person1.name}.`);
    }
  }

  introduce() {
    return `Hello, my name is ${this.name}, I am ${this.age}. I live in ${this.city}.`;
  }
}


const viktor = new Person("Viktor", 26, "Lviv");
const oksana = new Person("Oksana", 26, "Ternopil");

// console.log(viktor.name);
// console.log(oksana.introduce());

Person.compareAges(viktor, oksana);
