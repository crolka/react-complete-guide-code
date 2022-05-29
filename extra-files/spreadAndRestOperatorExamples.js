// Spread operator Example
const numbers = [1, 2, 3, 4];
const newNumbers = [...numbers, 11, 12, 13, 14];
const newNumbersNestedNumbers = [numbers, 331, 332, 333, 334];
console.log("original numbers array: ");
console.log(numbers);

console.log("new numbers array (not nested): ");
console.log(newNumbers);

console.log("new numbers array with old array nested: ");
console.log(newNumbersNestedNumbers);


const person = {
  name: 'Chris'
};

const newPerson = {
  ...person,
  age: 34
};
console.log("Original Person object:");
console.log(person);
console.log("New Person object with age added:");
console.log(newPerson);

// Rest operator
const filter = (...argumentArray) => {
  // el => el === 1 || el === 4 is a function that filters the 
  // data we are looking for.
  return argumentArray.filter(el => el === 1 || el === 4 || el === 5);
}

console.log("Output from the filter function");
console.log(filter(1, 5, 2, 3, 4));