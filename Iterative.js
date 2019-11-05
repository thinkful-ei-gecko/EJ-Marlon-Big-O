'use strict';

function countSheep(sheep){
  for (let i = 0; i <= sheep; i++){
    if (i < sheep){
      console.log(`${i} sheep`);
    }
    if (i === sheep){
      console.log('All sheep');
    }
  }
}

function powerCalculator(num, exponent){
  let total = num;

  if (exponent === 0){
    total = 1;
    for (let i = 1; i < exponent; i++){  
      if (exponent === 1){
        return num;
      }
      total *= num;
    }
  }
  return total;
}

function reverse(str){
  let array = []
  
  for (let i = str.length - 1; i >= 0; i--){
    array.push(str[i])
  }

  return array.join('')
}

function nthTriangle(number){

  let total = 1

  for (let i = 0; i < number; i++){

    if (i === 1){
      total = 1
    }

    total += i + 1

  }

  return total;

}

function stringsplit(str, separator){
  let currentString = '';
  let array = [];

  for (let i = 0; i <= str.length - 1; i++){
    if (str[i] !== separator){
      currentString += str[i];
    }
    else if (str[i] === separator){
      array.push(currentString);
      currentString = '';
    }
    if (i === str.length - 1){
      array.push(currentString);
    }
  }
  
  return array;
}

function fibonacci(num) {
  let fibArray = [0, 1];

  for (let i = 2; i < num + 1; i++){
    fibArray.push(fibArray[i-2] + fibArray[i-1]);
    console.log('line 82', fibArray[i - 2]);
    console.log(fibArray[i - 1]);
  }

  return fibArray[fibArray.length-1];
}

function factorial(num){
  let total = num;
  for (let i = 1; i < num; i++){
    if(num === 0 || num === 1){
      total = 1;
    }
    total *= i;
  }

  return total;
}



