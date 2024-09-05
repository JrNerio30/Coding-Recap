/*
  The "Let" keyword is a type of variable that can be used to assign a thing to another
*/

// For Example:

let userCar = 'Lamborghini';

/* 
  "let" can also be to declare a variable like this:
*/

let admin, name;

name = 'John';

admin = name;

console.log(name);

/* 
  Some people use multiline style
*/

let user = 'John'
    age = '20'
    message = 'LMAO';



/* 
  Now, for the "const" (Constant) keyword, it also has the same purpose as "let" but, 
  ones you declare a variable using const to assign a value, that value cannot be change. 
  Therefore, it is called a "constant" variable.
*/

// DECLARING TWO VARIABLES USING CORRENT VARIABLE NAMES
// 1. Create a variable with the name of our planet. How would you name such a variable?

// GOOD
const ourPlanetName = 'Earth';

// BAD
const ourPlanet = 'Earth';

// 2. Create a variable to store the name of a current visitor to a website. How would you name that variable?

// GOOD
const currentUserName = 'John Doe';

// BAD
const currentVisitor = 'John Doe';

/* 
  There is also "var" variable type that is similar to "let" but not const.
  But var is or was used from old websites, before "let" and "const" was a thing.
  Meaning there's a lot of flawes when using the "var" to declare a variable.
*/

// For Expample:
// The "var" is at the top of the console.log
var car = 'Ferrari';
console.log(car);

/*
  "var" can also be declared even after putting it to the console log, but the output will be undefined,
  so it's hard to tell where you use the variable on your code. It doesn't tell you exaclty which line it is located.
  Where'as "let" and "const" cannot output it's value in the console log without declaring it first.
*/ 
console.log(greetings);
var greetings = 'Hello World';







