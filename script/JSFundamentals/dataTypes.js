// DATA TYPE #1: NUMBERS
/*
  · A variable can at one moment be a string and then store a number
*/
let message = 'Hi There!';
message = '12345';

/*
  There is also "special numeric values" which belongs to this data types:
  "Infinity, -Infinity and NaN"
*/

/*
  Infinity: A mathematical infinity ♾️. 
  It is a special value that's greater than any number. 
*/
console.log(1 / 0);
// OR
console.log(Infinity);

/*
  NaN(Not a Number): A computational error. It is a result of an incorrect or an undefined
  mathematical operation. NaN is sticky, meaning any operation revolving NaN results in NaN.
*/
console.log("not a number" / 2);

// DATA TYPE #2: Big Integer
/*
  In JavaScript, the "number" type cannot safely represent integer values larger than (2 to the power of 53 -1)
  because not all not all digits fit into the fixed 64-bit storage.
*/
console.log(9007199254749991 + 1);

// Data Type #3: String
/* 
  A string in JavaScript are the ones that are surrounded by quotes.
  There is also 3 types of quotes in JavaScript.
*/
let str = "Hello"; // Double Quotes
let str2 = 'Single quotes are easier to type'; // Single Quotes
let phrase = `this can embed another string ${str}` // Backtics

/*
  Backticks are "extended functionality" quotes.
  They allow us to add anither variables and expressions into a string
  by wrapping them in "${...}".
*/
let man = 'John';
let age = 20;
console.log(`Hello, my name is ${man}!`);
console.log(`I'm ${age} years old`);
// This "${}" can only be done inside a backticks, otherwise, it won't embed it together.

// Data Type #4: Boolean(Logical Type)
/*
  A Bolean only has two types of values, true and false.
  It is commonly use to store yes or no values. If it's truem, then it means yes or correct.
  If it's false, then it means no or incorrect
*/

// For Instance
let nameFieldChecked = true; // yes, name field is checked
let ageFieldChecked = false; // no, age field is not chececk

// It can also result into a comparison
let isLessThan = 1 < 4;
console.log(isLessThan);

// Data Type #4: The "null" Value
/*
  "null" is like putting something inside and empty box, purposely, not accidently.
*/
// Here, we put all of the values that what we do in school.
let school = "work, assignments, projects, grades, meeting new people, presenting yourslef... etc.";  
/*
  But sometimes our motivation in school are empt. 
  We do not know what our true motives are, but overtime, as we grow, that value will change. 
*/
let motivation = null;

// Data Type #5: The "undefined" value
/*
  The meaning of undefined is "value is not assigned"
*/
let celebrity;
console.log(celebrity);
// It is also possible to change the assigned value to undefined
// For instance:
let superCars = "Maclaren";
superCars = undefined;
console.log(superCars);
// But this isn't normally recommended.

// Data Type #6: Object and Symbols
/*
  This data type is special. It is used to store collections of data and more complex entities.
  The symbol type is used to create a uniqe identifiers for objects.
*/

// Data Type #7: The typeof operator
/*
  The typeof operators returns of the operand. 
  This operator can be useful when we want to process values of different types differently or just want to do a quick check.
  So basily, it recalls what's the type of the value we put in x "typeof (x)".
*/
// For example:
typeof undefined; // "Undifined"
typeof 0; // "Number"
typeof alert; // "Function"
typeof true; // "Bolean"
typeof 10n; // "Big integer"
typeof "foo"; // "String"
typeof Symbol("id"); // symbol
typeof Math; // "object"
typeof null; // "object"

console.log(`hello ${1}`);