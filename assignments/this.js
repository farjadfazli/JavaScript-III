/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window binding: In the global scope, 'this' will be the browser's Window object.
* 2. Implicit binding: When a function is called by a preceding dot, the object before the dot is 'this'.
* 3. New binding: When a constructor function is used, 'this' refers to the specific instance of the object that is created and returned by the constructor function.
* 4. Explicit binding: When `.call` or `.apply` are used, 'this' is explicitly defined. The first argument passed to these methods is what 'this' will refer to.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

function sayHello(name) {
    console.log('Hello ' + name);
    console.log(this);
}

sayHello('John');

// Principle 2

// code example for Implicit Binding

sayHello.implicitThis = function() {
    console.log('Implicit this: ' + this);
}

sayHello.implicitThis();

// Principle 3

// code example for New Binding

function Constructor(favoriteNumber) {
    this.favoriteNumber = favoriteNumber;
    console.log(this);
}

let newBindingThis = new Constructor(42);


// Principle 4

// code example for Explicit Binding

function greet() {
    console.log(`${this.name} says hello!`)
}

let person = {
    name: 'Bob'
}

greet.call(person);