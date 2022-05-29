// Array Destructuring
greeting = ['Hello','Christine', 25];
[a, b] = greeting;
console.log(a);
console.log(b);

console.log('=====================');

// in this example, the order of the variables
// in the new array, will target the elements by
// their position in the array. By leaving the 
// empty space between the a, , c will omit the 
// second element. Therefore we will pull out 
// the first and third elements from the array.
[a, , c] = greeting;
console.log(a);
console.log(c);


// Object Destructuring is supported by React
// BUT it is NOT supported by jsBin. 
{name} = {name: 'Christine', age: 25};
console.log(name);
console.log(age);