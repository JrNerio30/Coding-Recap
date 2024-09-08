// Type Conversions
/*
 Most of the time, operators and functions automatically
 convert the values given to them to the right type.

 An example would be an "alert". It automaticall converts
 any value to a string to show it. Mathematical operations
 convert values to numbers.
*/

// String Conversion
/*
  String conversions happens 
  when we need the string form of a value.
*/
// Here, the value is a bolean
let value = true;
console.log(typeof value);

// But here, the value converts to a string
value = String(value);
console.log(typeof value);

// Numeric Conversion
let string = "200";
console.log(typeof string);

let number = Number(string);
console.log(typeof number
);

// Boolean Conversion
// The Conversion Rule
/*
  - Values that are intuitively "empty", like 0, an
    empty string, null, undefined, and NaN, become false
  - Other values become true
*/
// Boolean conversion with numbers
console.log(Boolean(1)); // true
console.log(Boolean(0)); // False

// Boolean conversion with string
console.log(Boolean("hello")); // true
console.log(Boolean("")); // false

/*
  Please Note: the string with "0" is true, whether
  it's a 0 or undefined, or null or even NaN.
*/
console.log(Boolean("0")); // True
console.log(Boolean("undefined")); // True
console.log(Boolean("null")); // True
console.log(Boolean("NaN")); // True


