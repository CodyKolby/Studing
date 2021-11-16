// Today i will talk about functions their basics. 
// We create functions by first calling it's name from lowwer letter, then adding () and if you need arguments between them
// and the body of function, where everything goes on, let's create basic function

function calculatorAverage /* function name *\ (score1, score2, score3) /* arguments *\ {
  const average = (score1 + score2 + score3) / 3;
  return average;
};

calculatorAverage(2, 4, 6);

// okey so what we did here, is called function, then set up arguments which we will use, then in function body we creating some math in this example we count average of 3 scores
// we adding there 3 arguments and when we call function (10 line) we adding numbers in ().
// We have 2 more type of function : function expression, arrow function

const calculatorAverage = birthYeah => 2037 - birthYeah; // arrow function

// we can add more arguments than 1 in arrow function simple just adding () before => and after => we adding {} which works like body function in normal function

const calculatorAverage = (birthYeah, firstName) => {
  const age = 2037 - birthYeah
  return age;
}

const calculatorAverage = function (birthYeah) { // function expression
  return 2037 - birthYeah
}

// what's important is that we need always return what we want to take out from function, or if we doing only one thing we can just do like in 26 line
// if we want use if in function, it will looks like this

function yearsBeforeRetirement = function(birthYeah) {
  const age = 2037 - birthYeah
  const retirement = 65 - age;
  if (retirement >= 0) {
    return (`You will go on retirement in ${retirement}`);
  } else {
    return (`You can retirement`);
  }
}

// We can add function in fuction it's really handy too, see how it's work
// First. Create a side function

const ageCalculator = function(year) {
  return 2021 - year;
}

const yearsUntilRetirement = function(birthYeah, firstName) {
  const age = ageCalculator(birthYeah);
  const retirement = 65 - age;
  if (retirement >= 0) {
    return(`You will go on retirement in ${retirement}`);
  } else {
    return (`You can retirement`);
  }
}

// I think it's everything about functions for today :), if you have any questions comment this file cy@
