/*
  An operand – is what operators are applied to. 
  For instance, in the multiplication of 5 * 2 there are two operands: 
  the left operand is 5 and the right operand is 2. 
  Sometimes, people call these “arguments” instead of “operands”.
*/
/*
  An operator is unary if it has a single operand. 
  For example, the unary negation - reverses the sign of a number:
*/
let x = 1;
x = -x;
console.log(x); // 1 becomes negative number

/*
  An operator is binary if it has two operands. 
  The same minus exists in binary form as well:
*/
let z = 1, y = 5;
console.log(z + y); // 6, binary adds the values together

/*
  The following math operations are supported:
  Addition +
  Subtraction -
  Multiplication *
  Division /
  Remainder %
  Exponentiation **
*/

// The Remainder Operator
console.log(5 % 2); // 1, the remainder of 5 divided by 2
console.log(10 % 2); // 0, the remainder of 10 divided by 2

// The Exponentiation Operator
// The exponentiation operator a ** b raises a to the power of b.
console.log(2 ** 4); // 2 to the power of 4 = 16
console.log(2 ** 10); // 2 to the power of 10 = 1024

// A square root is an exponentiation by 1/2:
console.log(4 ** (1/2)); // Square root of 4 = 2
console.log(8 ** (1/3)); // Cube root of 8 = 2

// String Concatenation with binary +
let stringBinary = "my" + "string";
console.log(stringBinary);

/*
  Weird part about JavaScript is adding a number that is inside a string
  to a number:
*/
console.log('2' + 3); // = 23
console.log('6' / '2'); // = 3, converts both operands to numbers

// Numeric conversion, unary +
let i = 1;
console.log(+i); // 1, no effect on numbers

let k = -1;
console.log(+k); // Stays a negative 1

// Converts non-numbers
console.log(+true); // 1
console.log(+""); // 0
console.log(+null); // 0

/*
  If you assign a variable to a numbered string value,
  the binary plus would add them as a string:
*/
let apples = '2';
let berries = '20';

console.log(apples + berries);




