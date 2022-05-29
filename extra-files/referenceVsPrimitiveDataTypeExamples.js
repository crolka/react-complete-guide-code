// Reference and Primitive types
// primitive - copied actual value
let number = 1
let num2 = number

const person = {
  name: 'Christine'
};
console.log('Original person');
console.log(person);

// copying the pointer to the person object
const secondPerson = person;

//person.name = 'Ana';
 
console.log('second person object pointing to the first');
console.log(secondPerson);


// If I change the name before the person is 
// copied using the spread operator, then the
// copied name will reflect the new name.
// secondPerson.name = 'Ana'


// if you want to make a COPY of an object, 
// then use the Spread operator to make this 
// happen. This will copy only the properties
// and not the pointer to the entire object.
const copyPerson = {
  ...person
};

// I change the name after the person is 
// copied using the spread operator.
secondPerson.name = 'Ana'

console.log('Original person');
console.log(person);

console.log('<<<Copied>>> person');
console.log(copyPerson);

// Array functions
// map is a built-in array method. takes
// a function as an input and is inputted
// on each element in the array.
const numbers = [1, 2, 3, 4];

const doubleNumArray = numbers.map((num) => {
  return num * 2;
});

console.log(numbers);
console.log(doubleNumArray);