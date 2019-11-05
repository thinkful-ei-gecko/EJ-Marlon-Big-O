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