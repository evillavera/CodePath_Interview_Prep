class User{
    constructor(email, name){
        this.email = email;
        this.name = name;
    }
}

var userOne = new User('hello@gmail.com','Hello');
var userTwo = new User('world@gmail.com','World');

console.log(userOne)
console.log(userTwo)


/**
 * Multiple Choice Question
 * Question: Which of the following Student classes is accurate?
 */

//1 Correct
//Awesome! This is the correct way to create a Student Class with the constructor method. 
class Student{
    constructor(name, grade){
        this.name = name;
        this.grade = grade;
    }
}

//2 Wrong
//Almost! We need to include the this keyword somewhere in the Class.
class Student{
    constructor(name, grade){
        myName = name;
        myGrade = grade;
    }   
}

//3 Wrong
//Not quite! We should review where the name, grade parameters go. Also we are forgetting about the this keyword. 
class Student(name, grade){
    constructor(){
        myName = name;
        myGrade = grade;
    }
}

//4 Wrong
//Very close! We should review where the name, grade parameters belong. 
class Student(name, grade){
    constructor(){
        this.name = name;
        this.grade = grade;
    }
}


/**
 * Fill In The Code Question
 * 
 * Create the following Store Class
 * The constructor requires a StoreID parameter
 */

class 1**{
    constructor(2**){
        3** = 4**
    }
}

/**
 * Word Bank:
 * store
 * Store
 * storeID
 * storeID
 * storeID
 * this.storeID
 * this.storeID
 * this.storeID
 * 
 * Clues:
 * 
 * 1. Typically classes are formatted in Capital Camel Case and are named after the object 
 * 2. Parameters are stored here!
 * 3. Don't forget about *this* keyword
 * 4. What should the attribute equal?
 */

/**
 * Code Challenge
 * Create a House Class complete with streetName, buildingNumber and zipcode as parameters in the constructor.
 */

/**
 * Solution Code:
 * 
 * class House{
 *      constructor(streetName, buildingNumber, zipcode){
 *          this.streetName = streetName;
 *          this.buildingNumber = buildingNumber;
 *          this.zipcode = zipcode;
 *  }
 * }
 */

/**
 * Starting Code:
 *  Write code here
 * 
 * 
 * 
 *  houseOne = new House('Maple Street', '1234', '11111');
 *  houseTwo = new House('Apple Street', '9999', '10000');
 *
 */

 class House{
      constructor(streetName, buildingNumber, zipcode){
          this.streetName = streetName;
          this.buildingNumber = buildingNumber;
          this.zipcode = zipcode;
  }
 }