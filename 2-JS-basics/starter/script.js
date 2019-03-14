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
/*
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
*/
// Operator precedence

/*
var now, yearJohn, fullAge, isFullAge, ageJohn, ageMark, x, y;

now = 2018;
yearJohn = 1989;
fullAge = 18;

isFullAge = now - yearJohn >= fullAge;

console.log(isFullAge);

ageJohn = now - yearJohn;
ageMark = 35;
average = (ageJohn + ageMark ) / 2;
console.log(average);

y = x = (3 + 5) * 4 - 6;
console.log(x, y);

x *= 2;
x++;
console.log(x);
*/

// Coding Challenge

/*var markHeight, markMass, johnHeight, johnMass, markBMI, johnBMI;

// bmi = mass / (height * height);

markHeight = 1.60;
markMass = 70;
johnHeight = 1.62;
johnMass = 75;

markBMI = markMass / (markHeight * markHeight);
console.log(markBMI);

johnBMI = johnMass / (johnHeight * johnHeight);
console.log(johnBMI);

markHigherBMI = markBMI > johnBMI;
console.log("Is Mark's BMI higher than John's BMI? " + markHigherBMI);
*/

// Switch statement

var job = 'driver';
switch (job) {
    case 'teacher':
        console.log('Teaches kids how to code.');
        break;
    case 'driver':
        console.log('Drives an uber');
        break;
    default:
        console.log('Doesn\'t do a thing.');

}
var age = 20;
switch (true) {
    case age < 13:
        console.log('not a teenager');
    case age >= 13 && age < 20:
        console.log('is a teenager');
        break;
    default:
        console.log('must be an adult');
}

age >= 18 ? console.log('can drink') : console.log('can\'t drink');

var drink = age >= 18 ? 'beer' : 'juice';
console.log(drink);