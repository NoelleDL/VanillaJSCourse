//Section 5

var years = [1990, 1980, 1970, 1998, 2000];

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
