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

<<<<<<< HEAD
/*var john = {
=======
var john = {
>>>>>>> 9ef12ebbfaaa0ae5a2adabd6fd9d6318e8155daf
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
<<<<<<< HEAD
*\
/////////////////////////////
// CODING CHALLENGE


/*
--- Let's build a fun quiz game in the console! ---

1. Build a function constructor called Question to describe a question. A question should include:
a) question itself
b) the answers from which the player can choose the correct one (choose an adequate data structure here, array, object, etc.)
c) correct answer (I would use a number for this)

2. Create a couple of questions using the constructor

3. Store them all inside an array

4. Select one random question and log it on the console, together with the possible answers (each question should have a number) (Hint: write a method for the Question objects for this task).

5. Use the 'prompt' function to ask the user for the correct answer. The user should input the number of the correct answer such as you displayed it on Task 4.

6. Check if the answer is correct and print to the console whether the answer is correct ot nor (Hint: write another method for this).

7. Suppose this code would be a plugin for other programmers to use in their code. So make sure that all your code is private and doesn't interfere with the other programmers code (Hint: we learned a special technique to do exactly that).
*/

(function() {
  function Question(question, answers, bestAnswer) {
    this.question = question;
    this.answers = answers;
    this.bestAnswer = bestAnswer;
  }


var question1 = new Question('Favorite animal?', ['cat', 'dog', 'moose'], 'MOOSE!');
var question2 = new Question('Favorite food?', ['Mexican', 'Thai', 'British'], "MEXICAN!");
var question3 = new Question('Favorite time of day?', ['Morning', 'Afternoon', 'Evening'], "MORNING!");
var questions = [question1, question2, question3];
var index = Math.floor(Math.random() * questions.length);
console.log(index);
var randomQuestion = questions[index];
console.log(randomQuestion.question);


})();
=======
>>>>>>> 9ef12ebbfaaa0ae5a2adabd6fd9d6318e8155daf
