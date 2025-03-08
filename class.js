"use strict";
// Define a Person class with properties: name, age, and city.
// Add a method introduce() that returns a string introducing the person.
// Create at least two instances and call the introduce() method.
// Bonus: Add a static method compareAges(person1, person2) that compares ages.
//Solution:
{
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
}

// Inheritance: Animal & Dog Classes
// Create an Animal class with species and sound properties.
// Add a method makeSound() that prints the animal’s sound.
// Create a Dog subclass that extends Animal and adds a breed property.
// Override the makeSound() method to add "Woof!" to the output.
// Create an instance of Dog and test its properties and methods.
//Solution:
{
  class Animal {
    constructor(species, sound) {
      this.species = species;
      this.sound = sound;
    }
    makeSound() {
      return `${this.sound}`;
    }
  }

  class Dog extends Animal {
    constructor(breed, species, sound) {
      super(species, sound);
      this.breed = breed;
    }
  }

  const Bulldog = new Dog("Bulldog", "Dog", "Woof!");

  console.log(Bulldog.makeSound());
}
// 3. Implement a BankAccount Class
// The class should have a private _balance property.
// Add methods: deposit(amount), withdraw(amount), and getBalance().
// Prevent over-withdrawals (e.g., you can't withdraw more than the balance).
// Create an account instance and test the transactions.
// Bonus: Add a static method transfer(fromAccount, toAccount, amount)
//Solution:
{
  class BankAccount {
    constructor(balance) {
      this._balance = balance;
    }
    static transfer(fromAccount, toAccount, amount) {
      if (
        fromAccount.withdraw(amount) !== "Insufficient funds in the account."
      ) {
        toAccount.deposit(amount);
      }
    }

    deposit(amount) {
      this._balance += amount;

      return this._balance;
    }

    withdraw(amount) {
      if (amount < 0) {
        return `Incorrect amount`;
      } else if (amount > this._balance) {
        return `Insufficient funds in the account.`;
      } else {
        this._balance -= amount;
      }
      return this._balance;
    }
    getBalance() {
      return this._balance;
    }
  }

  const viktorAccount = new BankAccount(10000);
  const oksansAccount = new BankAccount(2000);

  BankAccount.transfer(viktorAccount, oksansAccount, 1000);
  console.log(viktorAccount.getBalance());
  console.log(oksansAccount.getBalance());
}

// 4.Shopping Cart System
// Create a Product class with name, price, and quantity.
// Create a ShoppingCart class that can add, remove, and list products.
// Implement a getTotalPrice() method to calculate the total price.
// Create a cart instance, add/remove products, and test the functionality.
//Solution:
{
  class Product {
    constructor(id, name, price, quantity) {
      this.id = id;
      this.name = name;
      this.price = price;
      this.quantity = quantity;
    }
  }

  class ShoppingCart {
    constructor() {
      this.productsList = [];
    }

    addProduct(product) {
      this.productsList.push(product);
    }

    removeProduct(id) {
      return (this.productsList = this.productsList.filter(
        (el) => el.id !== id
      ));
    }
    viewCart() {
      console.log(this.productsList);
    }
    getTotalPrice() {
      return this.productsList.reduce((total, el) => total + el.price, 0);
    }
    clearCart() {
      this.productsList = [];
    }
  }
  const cart = new ShoppingCart();

  const product1 = new Product(1, "phone", 250, 1);
  const product2 = new Product(2, "Laptop", 1200, 1);
  cart.addProduct(product1);
  cart.addProduct(product2);
}

// 5. Singleton Logger Class
// Create a Logger class to track logs.
// It should only allow one instance (Singleton pattern).
// Implement a log(message) method to store logs in an array.
// Add a getLogs() method to return all logs.
// Create multiple instances and verify that all share the same logs.

class Logger {
  constructor() {
    if (!Logger.instance) {
      this.logs = [];
      Logger.instance = this; 
    }
    return Logger.instance;
  }


  log(message) {
    const timestamp = new Date().toISOString();
    this.logs.push(`[${timestamp}] ${message}`);
  }


  getLogs() {
    return this.logs;
  }
}


const logger1 = new Logger();
const logger2 = new Logger();

logger1.log("User logged in");
logger2.log("User updated profile");

console.log(logger1.getLogs()); 
console.log(logger2.getLogs());

