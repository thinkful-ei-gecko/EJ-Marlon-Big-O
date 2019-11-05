// 1) Determine the Big O for the following algorithm: You are sitting in a 
// room with 15 people. You want to find a playmate for your dog, preferably of 
// the same breed. So you want to know if anyone out of the 15 people have the 
// same breed as your dog. You stand up and yell out, who here has a golden retriever 
// and would like to be a playdate for my golden. Someone yells - "I do, be happy to bring him over"

//Answer: O(1)

//Explanation: Because the user is asking everyone at once rather than going to each individual
//             add asking them personally.


// 2) Determine the Big O for the following algorithm: You are sitting in a room with 
// 15 people. You want to find a playmate for your dog who is of the same breed. So 
// you want to know if anyone out of the 15 people have the same breed as your dog. 
// You start with the first person and ask him if he has a golden retriever. He says no, 
// then you ask the next person, and the next, and the next until you find someone who has 
// a golden or there is no one else to ask.

//Answer: O(n)

//Explanation: Directly proportional to how many people the person is asking

// 2) What is the Big O of the following algorithm? Explain your answer

function isEven(value) {
  if (value % 2 == 0) {
      return true;
  }
  else
      return false;
  }
}

// Answer: O(1)
// Explanation: The function only takes one input and performs the same operation thus takes constant time.

// 3. Are you here?
// What is the Big O of the following algorithm? Explain your answer

function areYouHere(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
      const el1 = arr1[i];
      for (let j = 0; j < arr2.length; j++) {
          const el2 = arr2[j];
          if (el1 === el2) return true;
      }
  }
  return false;
}

// Answer: O(n^2)
// Explanation: For this function the loop has iterate through the entirety of the nested loop giving it n squared time.



// 4. Doubler
// What is the Big O of the following algorithm? Explain your answer

function doubleArrayValues(array) {
    for (let i = 0; i < array.length; i++) {
        array[i] *= 2;
    }
    return array;
}

//Answer: O(n)
//Explanation: Iterates through the array and hits every item once


// 5. Naive search
// What is the Big O of the following algorithm? Explain your answer

function naiveSearch(array, item) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === item) {
            return i;
        }
    }
}

//Answer: O(n)
//Explanation: Runs to see if all or any item will be equal to the item stated

// 6. Creating pairs:
// What is the Big O of the following algorithm? Explain your answer

function createPairs(arr) {
  for (let i = 0; i < arr.length; i++) {
      for(let j = i + 1; j < arr.length; j++) {
          console.log(arr[i] + ", " +  arr[j] );
      }
  }
}

// Answer: O(n^2)
// Explanation: There is a nested loop thus for each item in the first array, it must iterate through the second loop to pair each item in arr[j].

// 7. Compute the sequence
// What does the following algorithm do? What is its runtime complexity? Explain your answer

function compute(num) {
  let result = [];
  for (let i = 1; i <= num; i++) {

      if (i === 1) {
          result.push(0);
      }
      else if (i == 2) {
          result.push(1);
      }
      else {
          result.push(result[i - 2] + result[i - 3]);
      }
  }
  return result;
}

// Answer: O(n)
// Function: Will iterate through (num) of times of sequence and then pushing number into result array
// Explanation: Function takes (num) as param then since there is a for loop it has to iterate through each number making it a (n)



// 8. An efficient search
// In this example, we return to the problem of searching using a more sophisticated approach 
// than in naive search, above. Assume that the input array is always sorted. What is the Big O 
// of the following algorithm? Explain your answer

function efficientSearch(array, item) {
    let minIndex = 0;
    let maxIndex = array.length - 1;
    let currentIndex;
    let currentElement;

    while (minIndex <= maxIndex) {
        currentIndex = Math.floor((minIndex + maxIndex) / 2);
        currentElement = array[currentIndex];

        if (currentElement < item) {
            minIndex = currentIndex + 1;
        }
        else if (currentElement > item) {
            maxIndex = currentIndex - 1;
        }
        else {
            return currentIndex;
        }
    }
    return -1;
}

//Answer: O(log(n))
//Explanation: Since the function starts the search from the middle going outwards (left or right), it makes it a log(n)
//             based on the condition.


// 9. Random element
// What is the Big O of the following algorithm? Explain your answer


function findRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}


//Answer: O(1)
//Explanation: Although multiple items in array, it only selects one RANDOM number so it will have the same operational time. Will have the same time
//             result everytime.

// 10. What Am I?
// What does the following algorithm do? What is the Big O of the following algorithm? Explain your answer

function isWhat(n) {
  if (n < 2 || n % 1 != 0) {
      return false;
  }
  for (let i = 2; i < n; ++i) {
      if (n % i == 0) return false;
  }
  return true;
}

// Answer: O(n)
// Explanation:  Although there is a conditional there is still an iteration as the input dictates the number of iterations.

// 11. Tower of Hanoi
// The Tower of Hanoi is a very famous mathematical puzzle (some call it game!). This is how it goes:

// There are three rods and a number of disks of different sizes which can slide onto any rod. The puzzle starts with the disks neatly stacked in ascending order of size on one rod, the smallest disk at the top (making a conical shape). The other two rods are empty to begin with.
// The goal of the puzzle is to move the entire stack of rods to another rod (can't be the original rod where it was stacked before) where it will be stacked in the ascending order as well. This should be done obeying the following rules: i) Only one disk may be moved at a time ii) Each move consists of taking the upper disk from one of the rods and sliding it onto another rod, on top of the other disks that may already be present on that rod. iii) A larger disk may not placed on top of a smaller disk
// Input: