//Section 5

/*var years = [1990, 1980, 1970, 1998, 2000];

function arrayCalculate(array, fn) {
  var result = [];
  for (var i = 0; i < array.length; i++) {
    result.push(fn(array[i]));
  }
  return result;
}

function calculateAge(year) {
  return 2016 - year;
}

function isAdult(year) {
  return year >= 18;
}

function maxHeartRate(age) {
  if (age > 18 && age < 81)
  return Math.round(206.9 - (0.67*age));
}

var ages = arrayCalculate(years, calculateAge);
var adultAges = arrayCalculate(years, isAdult);
var heartRates = arrayCalculate(ages, maxHeartRate);


function interviewQuestions(job) {
  if (job === 'designer') {
    return function(name) {
      console.log(name + ' , can you please explainwhat UX design is?');
    }
  } else if (job === 'teacher') {
    return function(name) {
      console.log('What subject do you teach, ' + name +'?');
    }
  } else {
    return function(name) {
      console.log('Hello ' + name + ', what do you do?');
    }
  }
}

var teacherQuestion = interviewQuestions('teacher');
teacherQuestion('John');

interviewQuestions('teacher')('Mark');


// Lecture IIFE

(function () {
  var score = Math.random() * 18;
  console.log(score >= 5);
})();

(function (goodluck) {
  var score = Math.random() * 18;
  console.log(score >= 5 - goodluck);
})(5);


//Closures

function retirement(retirementAge) {
  var statement = ' years until retirement.';
  return function(yearOfBirth) {
    var age = 2018 - yearOfBirth;
    console.log((retirementAge - age) + statement);
  }
}

var retirementUS = retirement(66);
retirementUS(1980);

retirement(66)(1980);
console.log(a);


function interviewQuestions(job) {
  return function(name) {
    if (job === 'designer') {
        console.log(name + ' , can you please explainwhat UX design is?');
    } else if (job === 'teacher') {
      console.log('What subject do you teach, ' + name +'?');
    } else {
      console.log('Hello ' + name + ', what do you do?');
    }
  }
}

interviewQuestions('teacher')('John');
*/

// Bind, call and apply

var john = {
  name: 'John',
  age: 26,
  job: 'teacher',
  presentation: function(style, timeOfDay) {
    if (style === 'formal') {
      console.log('Good ' + timeOfDay + ', ladies and gentleman! I am ' + this.name);
    } else if (style === 'friendly') {
      console.log('Hey ' + this.name);
    }
  }
}

var emily = {
  name: "Emily",
  age: 35,
  job: 'designer'
};

john.presentation('formal', 'morning');
john.presentation.call(emily, 'friendly', 'afternoon');
john.presentation.apply(emily, ['friendly', 'afternoon']);

var johnFriendly = john.presentation.bind(john,'formal');
johnFriendly('morning');
