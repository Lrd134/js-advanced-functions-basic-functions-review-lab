// Your code here
function saturdayFun(string = "roller-skate") {
  return `This Saturday, I want to ${string}!`;
}

const mondayWork = function(string = "go to the office") {
  return `This Monday, I will ${string}.`
}

function wrapAdjective(symbol = '*') {
  return function(string = "special") {
    return `You are ${symbol}${string}${symbol}!`
  }
}

const Calculator = {
  subtract: function(num1 = 1, num2 = 3) {
     return num1 - num2;
  },
  add: function (num1 = 1, num2 = 3) {
    return num1 + num2;
  },
  multiply: function (num1 = 1, num2 = 3) {
    return num1 * num2;
  },
  divide: function (num1 = 10, num2 = 5) { 
    return num1 / num2;
  }
}

function actionApplyer(int, functions) {
  let a = int;
  for(let i = 0; i < functions.length; i++){
    a = functions[i](a);
  }
    return a;

}