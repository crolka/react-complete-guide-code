
// This is the definition of a class without the 
// use of the constructor method. Note the omission
// of the this keyword on properties.
// ALSO, the interrpreter must be set to execute using ES6 
// when viewing in jsbin.com
class Human{
  gender = "Male";
  
  printGender = () => {
    console.log(this.gender);
  }
}

// Here we are inheriting the Human
// class using the extends keyword
class Person extends Human {
  
    // react uses classes 
    // to create components
    name = "Chris";
    gender = "Female";
  
  
  printMyInformation = () => {
    console.log(this.name);
    // must have the this keyword
    // in order to call this method
    // without error
    this.printGender();
  }
}

const person = new Person();
person.printMyInformation();

