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
/*

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

*/

// Coding Challenge 2
/*

var JGame1, JGame2, JGame3, MGame1, MGame2, MGame3, JGameAverage, MGameAverage, winner;

JGame1 = 89;
JGame2 = 120;
JGame3 = 103;

MGame1 = 116;
MGame2 = 94;
MGame3 = 123;

JGameAverage = (JGame3 + JGame2 + JGame1) / 3
MGameAverage = (MGame3 + MGame2 + MGame1) / 3

switch (true) {
    case JGameAverage > MGameAverage:
        console.log('John\'s team wins with an average score of ' + JGameAverage );
        break;
    default:
        console.log( 'Mike\'s team wins with an average score of ' + MGameAverage);
}
*/

// Coding Challenge 3
/*
var billTotal, tip;
var tips = [];
var billTotals = [];

function tipCalclulator (bill) {
    switch (true) {
        case bill < 50:
            tip = bill * .2;
            billTotal = bill * 1.2;
            break;
        case bill >= 50 && bill < 200:
            tip = bill * .15;
            billTotal = bill * 1.15;
            break;
        default:
             tip = bill * .1;
             billTotal = bill * 1.1;

    }
    tips.push(tip);
    billTotals.push(billTotal);
    return tips, billTotals;

}
*/

// Objects and properties
/*
var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false
};

console.log(john.firstName);
console.log(john['firstName']);
var x = 'birthYear';
console.log(john[x]);

john.job = 'designer';
john['isMarried'] = true;
console.log(john);

var jane = {};
jane.name = 'Jane';
jane.birthYear = 1969;
jane['lastName'] = 'Smith';
console.log(jane);
*/

// Objects and methods
/*
var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1992,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false,
    calcAge: function() {
        this.age = 2018 - this.birthYear;
    }

};

john.calcAge();
console.log(john);
*/

// Coding challenge 4
/*
markHeight = 1.60;
markMass = 70;
johnHeight = 1.62;
johnMass = 75;


var personMark = {
    name: 'Mark',
    mass: 75,
    height: 1.62,
    calcBMI: function() {
    this.bmi = this.mass / (this.height * this.height)
    }
}

var personJohn = {
    name: 'John',
    mass: 75,
    height: 1.62,
    calcBMI: function() {
    this.bmi = this.mass / (this.height * this.height)
    }
}

function highestBMI(personA, personB) {
    personA.calcBMI();
    personB.calcBMI();

    if (personA.bmi > personB.bmi) {
        console.log(personA.name + ' has the highest BMI of ' + personA.bmi)
    }
    else if (personA.bmi == personB.bmi) {
        console.log(personA.name + ' and ' + personB.name + ' have the same BMI of ' + personA.bmi)
    }
    else {
        console.log(personB.name + ' has the highest BMI of ' + personB.bmi)
    }
}

highestBMI(personMark, personJohn);
*/

// Loops and iteration
/*
for (var i = 0; i < 10; i+=2) {
    console.log(i);
}

var john = ['john', 'smith', 1990, 'designer', 'purple'];

for (var i = john.length - 1; i >= 0; i--) {
    if (typeof john[i] !== 'string') continue;
    console.log(john[i]);
}

var i = 0;
while(i < john.length) {
    console.log(john[i]);
    i++;
}*/

// Coding challenge 5

bills = [124, 48, 268, 180, 42];
tips = [];
billTotals = []
function calculateTip(bill) {
    for (var i = 0; i < bill.length; i++) {
        if (bill[i] < 50) {
            tips.push(bill[i] * .2)
        }
        else if (bill[i] > 50 && bill[i] < 200) {
            tips.push(bill[i] * .15)
        }
        else {
            tips.push(bill[i] * .1)
        }

        billTotals[i] = bill[i] + tips[i];
    }

    return billTotals;
};



var johnRestaurants = {
    name: "Mark",
    bills: [124, 48, 268, 180, 42],
    calcAverageTip: function() {
        this.averageTip = 0;
        var count = 0;
        for (var i = 0; i < this.tips.length; i++) {
            this.averageTip += this.tips[i];
            count += 1;
        }
        this.averageTip = this.averageTip/count;
    },
    calcTip: function() {
        this.tips = [];
        this.billTotals = [];
        for (var i = 0; i < this.bills.length; i++) {
            var percentage;
            var bill = this.bills[i];
            if (bill < 50) {
                percentage = .2
            }
            else if (bill > 50 && bill < 200) {
                percentage = .15;
             }
            else {
                percentage = .1;
            }
        this.tips.push(bill * percentage);
        this.billTotals[i] = bill + this.tips[i];
        }

        return this.billTotals;
       }
    };

 var markRestaurants = {
    name: "Mark",
    bills: [77, 375, 110, 45],
    calcAverageTip: function() {
        this.averageTip = 0;
        var count = 0;
        for (var i = 0; i < this.tips.length; i++) {
            this.averageTip += this.tips[i];
            count += 1;
        }
        this.averageTip = this.averageTip/count;
    },
    calcTip: function() {
        this.tips = [];
        this.billTotals = [];
        for (var i = 0; i < this.bills.length; i++) {
            var percentage;
            var bill = this.bills[i];
            if (bill < 100) {
                percentage = .2
            }
            else if (bill > 100 && bill < 300) {
                percentage = .1;
             }
            else {
                percentage = .25;
            }
        this.tips.push(bill * percentage);
        this.billTotals[i] = bill + this.tips[i];
        }

        return this.billTotals;
       }
    };

function highestAverageTip(billObject1, billObject2) {
    billObject1.calcTip();
    billObject1.calcAverageTip();
    billObject2.calcTip();
    billObject2.calcAverageTip();

    if (billObject1.averageTip > billObject2.averageTip) {
        console.log(billObject1.name + ' tips more with a tip average of ' + billObject1.averageTip + ' .');
    }
    else {
        console.log(billObject2.name + ' tips more with a tip average of ' + billObject2.averageTip + ' .');
    }
}

highestAverageTip(markRestaurants, johnRestaurants);

