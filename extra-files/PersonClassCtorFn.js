// This example shows how to use classes and inherited classes using JS6; specifically 
// using the constructor function. NOTE: This is not necessary. You will see the example
// that does not use the constructor function in the file entitled PersonClassNoCtorFn.
class Human{
  constructor(){
    this.gender = "Male";
  }
  
  printGender(){
    console.log(this.gender);
  }
}

// Here we are inheriting the Human
// class using the extends keyword
class Person extends Human {
  constructor(){
    super(); // must call the super constructor. 
    // when you use the constructor() method in the
    // derived class.
    
    // react uses classes 
    // to create components
    this.name = "Chris";
    this.gender = "Female";
  }
  
  printMyInformation(){
    console.log(this.name);
    this.printGender();
  }
}

const person = new Person();
person.printMyInformation();

