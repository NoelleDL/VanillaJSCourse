///////////////////////////////////////
// Lecture: Hoisting


// functions /*
calculateAge(1960);

function calculateAge(year) {
    console.log(2018 - year);
}


/*

var retirement = function(year) {
    console.log(65 - (2018 - year));
}

retirement(1960);

// variables

console.log(age);
var age = 23;


function foo() {
    var age = 65;
    console.log(age);
}

foo();
console.log(age);
*/




///////////////////////////////////////
// Lecture: Scoping


// First scoping example

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}

/*


// Example to show the differece between execution stack and scope chain

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    console.log(a + b + c + d);
}
*/



///////////////////////////////////////
// Lecture: The this keyword

calculateAge(1980);

function calculateAge(year) {
    console.log(2018 - year);
    console.log(this);
}

var john = {
    name: 'john',
    yearOfBirth: 1990,
    calculateAge: function() {
        console.log(this);
        console.log(this.yearOfBirth);

        function innerFunction() {
        console.log(this);
        }

        innerFunction();
    }
}

john.calculateAge();












