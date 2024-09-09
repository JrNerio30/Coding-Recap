// IMPORTANT NOTE: As I mention a term called "precedence", it means priority

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

console.log(apples + berries); // '2' + '20' = 220
console.log(+apples + +berries); // Here, apples and berries are converted into numbers cuz of the unary plus, therefore = 22

/*
  There are many operators in JavaScript. Every operator has a corresponding precendence number. 
  The one with the larger number executes first. If the precedence is the same, the execution order 
  is form from left to right.

  NOTE: Unary operators are higher than corresponding binary ones:
  Precedence:     Name:               Sign:
  14              unary plus          +
  14              unary negation      -
  13              exponentiation      **
  12              multiplication      *
  12              division            /
  11              addition            +
  11              subtraction         -
  2               assignment          =

  Let’s note that an assignment = is also an operator. 
  It is listed in the precedence table with the very low priority of 2.
  That’s why, when we assign a variable, like x = 2 * 2 + 1, 
  the calculations are done first and then the = is evaluated, storing the result in x.

*/
// A more complex expression with the assignment operator:
let a = 2;
let b = 4;

let c = 5 - (a = b + 3);
console.log(a); // 7
console.log(c); // -2
/*  
  Instead of a = 2, the value of a in the c variable is changed to 7. 
  As a result, when you log a, the output is 7. For c, since a is now 7,
  it subtracts 5, which gives a final result of -2 when you log c.
*/

// MODIFY-IN-PLACE
// We often need to apply an operator to a variable and store the new resulf in that same variable
// For Example:
let n = 2; // 2
n = n + 5; // 7
n = n * 2; // 14

let m = 2;
m *= 3 + 5;

console.log(m); // 2 * 8 = 16
/*
  First, it goes right to left, so 3 + 5 = 8. 
  Then m = 8. But, there's a multiplication right next to the assignment(=).
  so, since the m is originally 2, that 2 is then multiplied after 3 + 5 is calculated. 
  Then 2 is multiplied by 8 which becomes the new value for m which is 16. 
*/

// INCREMENT AND DECREMENT

// Increment "++"
let clockWise = 2;
clockWise++;

console.log(clockWise); // 3, the clockWise increased to 3

// Decerement
let counterClockWise = 2;
counterClockWise--;

console.log(counterClockWise); // 1, the counterClockWise decreased to 1

/*
  IMPORTANT NOTE: Increment/Decrement can only be applied to variables. 
  Trying to use it on a value like 5++ or 5-- will give an error.
  
  These operators can we use before or after, ++counter or counter--.
  When the operator goes after the variable, it means it's in "postfix form".
  But when the operator goes before the variable, it mean "prefix form".
  They both work the same.

  To clarify, all operators return a value. Increment/Decrement is no exception.
  The prefix form returns the new value while postfix form returns the old value(prior to increment/decrement).
*/

// PREFIX FORM
let preFixFrom = 1;
let v = ++preFixFrom;

console.log(v); // 2

// POSTFIX FORM
let postFixForm = 1;
let o = postFixForm++;

console.log(o);

/*
  If we’d like to increase a value and immediately use the result of the operator, we need the prefix form.
  If we’d like to increment a value but use its previous value, we need the postfix form.
*/

/*
  The operators ++/-- can be used inside expressions as well.
  Their precedence is higher thatn most other arithmetical operations.
*/

// For Instance:
let counter1 = 1;
console.log(2 + ++counter1); // 4

// Compare With:
let counter2 = 1;
console.log(2 + counter2++); // 3 postfix form, the counter 2 returns the old value

// BITWISE OPERATORS
/*
  Bitwise operators treat arguments as 32-bit integer numbers and work on the level of their binary representation.
  These operators are not JavaScript-specific. They are suopported in most programming langauges.

  List of operators:
  - AND (&)
  - OR (|)
  - XOR/Exclusive OR (^)
  - NOT (~)
  - LEFT SHIFT (<<)
  - RIGHT SHIFT (>>)
  - ZERO-FILL RIGHT SHIFT (>>>)

  These operators are use very rarely, when we need to fuddle with numbers in the very lowest
  (bitwise) level. These operators won't be needed any time soon, as web developmemnt has little use
  of them, but in some special areas, such as cryptography, they are useful.
*/

// THE COMMA OPERATOR
/*
  This operator is one of the rarest and most unusal operators. Sometime, it's used to 
  write shorter code, so we need to know it on order to understand what's going on.

  The comma operator allows us to evaualte several expression, dividing them with a comma, ",".
*/

// For Example
let q  = (1 + 2, 3 + 5);
console.log(q); // 8, the result of 3 + 5
/*
  Here, the first expression "1 + 2" is evaluate and its result is thrown away. 
  Then "3 + 5" is evaluated and returned as the result

  NOTE: 
  Comma has a very low precedence, lower than =, so parentheses are important in the exampple above.
  Without them: a = 1 + 2, 3 + 5 evaluates "+" first, summing the nuber into a "=" 3, 7, then the assignment operator
  "=" assigns a = 3, and the rest is ignoresd. It's like (a = 1 + 2), 3 + 4.
*/

console.log("" + 2 + 0); // 20
console.log("" - 1 + 0); // -1
console.log(true + false); // 1
console.log(6 / "3"); // 2
console.log("2" * "3"); // 6
console.log(4 + 5 + "px"); // 9px
console.log("$" + 4 + 5); // $45
console.log("4" - 2); // 2
console.log("4px" - 2); // NaN
console.log("-9" + 5); // -95
console.log("-9" - 5); // -14
console.log(null + 1); // null
console.log(undefined - 1); // NaN
console.log("\t \n" - 2); // -2


let f = prompt("First number?", 1);
let g = prompt("Second number?", 2);

alert(+f + +g); 