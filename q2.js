// Create Multiple Objects with Constructor Function
// In JavaScript, you can create multiple objects from a constructor function. For example,

// constructor function
// function Person () {
//     this.name = 'John',
//     this.age = 23,

//      this.greet = function () {
//         console.log('hello');
//     }
// }

// // create objects
// const person1 = new Person();
// const person2 = new Person();

// // access properties
// console.log(person1.name);  // John
// console.log(person2.name);  // John



// JavaScript this Keyword

// // constructor function
// function Person () {
//     this.name = 'John',
// }
// // create object
// const person1 = new Person();

// // access properties
// console.log(person1.name);  // John



// JavaScript Constructor Function Parameters

// constructor function
// function Person (person_name, person_age, person_gender) {

//     // assigning  parameter values to the calling object
//      this.name = person_name,
//      this.age = person_age,
//      this.gender = person_gender,
 
//      this.greet = function () {
//          return ('Hi' + ' ' + this.name);
//      }
//  }
 
 
 // creating objects
//  const person1 = new Person('John', 23, 'male');
//  const person2 = new Person('Sam', 25, 'female');
 
//  // accessing properties
//  console.log(person1.name); // "John"
//  console.log(person2.name); // "Sam"




// JavaScript Object Prototype

// constructor function
// function Person () {
//     this.name = 'John',
//     this.age = 23
// }

// creating objects
// let person1 = new Person();
// let person2 = new Person();

// adding new property to constructor function
// Person.prototype.gender = 'Male';

// console.log(person1.gender); // Male
// console.log(person2.gender); // Male





 