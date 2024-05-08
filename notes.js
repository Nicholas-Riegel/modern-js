// MAP
const array1 = ['vanilla', 'chocolate', 'strawberry'];

const array2 = array1.map((currentElement) => {
  return currentElement + ' ice cream';
});

// console.log(array2); // ['vanilla ice cream', 'chocolate ice cream', 'strawberry ice cream']

// ARRAY DESTRUCTURING
const petsArray = ['Rover', 'Snuffles', 'Toto', 'Spot'];

const [firstPet, secondPet] = petsArray;

// console.log(firstPet); // 'Rover'
// console.log(secondPet); // 'Snuffles'

// Equivalent in traditional bracket notation:
// console.log(petsArray[0]); // 'Rover'
// console.log(petsArray[1]); // 'Snuffles'

// OBJECT DESTRUCTURING
const person = {
  name: 'Alex',
  role: 'Software Engineer',
};

const { name, role } = person;

// console.log(name); // 'Alex'
// console.log(role); // 'Software Engineer'

// Equivalent in traditional dot notation:
// console.log(person.name); // 'Alex'
// console.log(person.role); // 'Software Engineer'

// SPREAD OPERATOR
const originalArray = [1, 2, 3];
const duplicateArray = [...originalArray];

// console.log(duplicateArray); // [1, 2, 3]

// In the example above, duplicateArray is an entirely separate array produced by copying the contents of originalArray.

// This differs from simply assigning one array to another, which only creates a reference, not a copy:

const referenceArray = originalArray; // referenceArray is now a reference to originalArray

referenceArray.push(4); // Modifying referenceArray also modifies originalArray
// console.log(originalArray); // [1, 2, 3, 4]

// The spread operator can also merge multiple arrays into one:
const fruits = ['apple', 'orange', 'banana'];
const vegetables = ['broccoli', 'carrot', 'spinach'];

const fruitsAndVegetables = [...fruits, ...vegetables];

// console.log(fruitsAndVegetables); // ['apple', 'orange', 'banana', 'broccoli', 'carrot', 'spinach']

// The spread operator can also be applied to objects:

const originalObject = {
  foo: 'Hello',
  bar: 100,
};

const clonedObject = { ...originalObject };
// console.log('Clone: ', clonedObject); // { foo: 'Hello', bar: 100 }

// again, direct assignment only creates a reference

const clonedObject2 = originalObject;
clonedObject2.foo = 'Goodbye';

// console.log(originalObject); // { foo: 'Goodbye', bar: 100 }

// DYNAMIC KEYS
const fruitInventory = {
  apples: 2,
  oranges: 4,
};

const selectedFruit = 'apples'; // Variable as a dynamic key
const selectedFruitCount = fruitInventory[selectedFruit];

// console.log(selectedFruitCount); // 2

// This technique can be extended to the creation of objects, where property names are determined dynamically:

const fruitType = 'bananas'; // Variable as a dynamic key

const fruitInventory2 = {
  [fruitType]: 5,
};

// Using square brackets ([]) around fruitType in the object declaration tells JavaScript to use the variable’s value as the property name. Without the brackets, the string 'fruitType' would be used as the key, rather than its value ('bananas').

// console.log(fruitInventory2); // { bananas: 5 }

// IMPORT AND EXPORT

// In JavaScript, the import and export syntax allows us to share code between different files. This is a more modern approach compared to the require and module.exports syntax used in CommonJS.

// With export, you can make functions, objects, or primitives available for use in other files.

// There are two main types of exports:

// Named exports: For exporting multiple items from a file:
export const myNumber = 123;
export const myString = 'Hello';

// Default exports: For exporting a single item from a file:
export default function superCoolFunction() {
  /* ... */
}

// Using import, you can bring those exported items into another file.

// Importing named exports:
// import { myNumber, myString } from './myData.js';

// Importing a default export:
// import superCoolFunction from './superCoolFunction.js';

// You can also import all named exports as a single object, which is useful when dealing with modules that export several items:
// import * as MyData from './myData.js';
// console.log(MyData.myNumber);
// console.log(MyData.myString);

// DEFAULT PARAMETERS

// Default parameters are just that - default values for parameters. These defaults are applied when no value is passed for those parameters during a function call.

// Take this example:

// function addThreeNumbers(numA, numB, numC) {
//   return numA + numB + numC;
// }

// addThreeNumbers(2);

// This will return NaN, because the value of numB and numC are both undefined. Let’s apply some defaults to the numB and numC parameters:

function addThreeNumbers(numA, numB = 2, numC = 1) {
  console.log(numA + numB + numC);
}

// addThreeNumbers(2);

function addThreeNumbers2(numA = 1, numB = 2, numC = 1) {
  console.log(numA + numB + numC);
}

// addThreeNumbers2(2);

// This function is still going to return the number 5. The default value of 1 on numA will be overridden by the passed in value of 2.

// BOOLEAN GATES

// The && operator evaluates expressions from left to right and returns the first falsy value it encounters. If all values are truthy, it returns the last value.

// When the first expression (false) being evaluated is falsy, and result will be assigned that value (false).

const result = null && 'foo';
// console.log(result); // Output: null

// When the first value is truthy ('hello') and the second value is falsy (''), the result is assigned the empty string (''), as it is the first falsy value encountered.

const result2 = 'hello' && NaN;
// console.log(result2); // Output: NaN

// When both values are truthy, the result is the value of the last expression ('bar').
const result3 = 'foo' && 'bar';
// console.log(result3); // Output: 'bar'

// The || operator evaluates expressions from left to right and returns the first truthy value it encounters. If all values are falsy, it returns the last value.

// When the first expression ('') is falsy, result is assigned 'foo' as it’s the first truthy value.

const result4 = '' || 'foo';
// console.log(result4); // Output: 'foo'

// If the first value (2) is truthy, the evaluation stops, and result is assigned the first value (2).

const result5 = 2 || 0;
// console.log(result5); // Output: 2

// When all values being evaluated are falsy ('' and 0), result is assigned the last value (0), as no truthy value is found.

const result6 = '' || 0;
// console.log(result6); // Output: 0

// 💡 The || operator can be helpful for setting fallback or default values.
// Can you guess what the values of the variables will be:

const resultA = 'bar' && 'foo'; // 'foo'
const resultB = false || 243; //  243
const resultC = 42 && false; // false
const resultD = '' || 3000; // 3000

// console.log('resultA:', resultA);
// console.log('resultB:', resultB);
// console.log('resultC:', resultC);
// console.log('resultD:', resultD);

// OPTIONAL CHAINING

// Optional chaining is a way to safely access deeply nested properties in an object. This approach can help us avoid the errors that occur when attempting to access undefined or null properties.

// Consider a scenario where we attempt to access a property that doesn’t exist, which normally results in an error:

const adventurer = {
  name: 'Alice',
};

// console.log(adventurer.dog.name); // TypeError: Cannot read properties of undefined (reading 'name')

// In this application, it’s probable that the dog property might be added in later. This is where some optional chaining might prove useful.

// Using console.log(adventurer.dog?.name); will allow our code to run without an error:


let dog = adventurer.dog?.name;

// console.log(dog); // undefined

// Now, the non existent property causes an error. Instead our code logs a value of undefined.

