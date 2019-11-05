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
