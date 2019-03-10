var firstName = 'John';
console.log(firstName);

/*Type Coercion
var age = 28;
console.log(firstName + ' ' + age)

var job, isMarried;
job = 'teacher';
//isMarried = false;

console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

// Variable mutation
age = 'twenty eight';
job = 'driver';

alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

lastName = prompt('What is his last name?');
console.log(firstName + ' ' + lastName);
*/

/*
Basic Operators
*/
// Math Operators
var now, ageJohn, ageMark, yearJohn, yearMark, x;

now = 2018;
ageJohn = 28;
ageMark = 33;
yearJohn = now - ageJohn;
yearMark = now - ageMark;
console.log(yearJohn);
console.log(yearMark);
console.log(now + 2);
console.log(now * 2);
console.log(now / 10);

// Logical Operators

var johnOlder = ageJohn < ageMark;
console.log(johnOlder);

// Type of Operator
console.log(typeof johnOlder);
console.log(typeof now);
console.log(typeof 'Mark is older than John');
console.log(typeof x);

