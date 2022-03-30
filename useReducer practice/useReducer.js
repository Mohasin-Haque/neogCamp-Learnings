//Que:- Take an array and calculate the sum of even and odd numbers using reduce.

const array = [1, 5, 3, 7, 2];

const output = array.reduce(
  (acc, curr) => {
    return curr % 2 === 0
      ? { ...acc, even: acc.even + curr }
      : { ...acc, odd: acc.odd + curr };
  },
  { even: 0, odd: 0 }
);
console.log(output);

//Que:- Take an array and calculate the sum of even and odd numbers using reduce.

const numList1 = [1, 3, 55, 22, 44];

function oddAndEvenSumReducer(accumulator, value) {
  // write your code here
  if (value % 2) {
    return { ...accumulator, odd: accumulator.odd + value };
  } else {
    return { ...accumulator, even: accumulator.even + value };
  }
}
const oddAndEvenSum = numList1.reduce(oddAndEvenSumReducer, { even: 0, odd: 0 });
console.log(oddAndEvenSum);

// Change the program to accommodate an array of objects. The object will have two keys: type and payload. The type will tell you whether the number is even or odd and the payload will have the number.
// Note: This means you don't need the odd/even logic in the reducer function anymore.

const numList = [
    { type: 'odd', payload: 1 },
    { type: 'odd', payload: 3 },
    { type: 'odd', payload: 55 },
    { type: 'even', payload: 22 },
    { type: 'even', payload: 44 },
  ]
  
  // Q: modify your reducer function to accommodate this.
  function oddAndEvenSumReducerObject(accumulator, value) {
    // write your code here
    if (numList.type === "odd") {
      return { ...accumulator, odd: accumulator.odd + value.payload };
    } else {
      return { ...accumulator, even: accumulator.even + value.payload };
    }
  }
  const oddAndEvenSumObject = numList.reduce(oddAndEvenSumReducerObject, { even: 0, odd: 0 });
  console.log(oddAndEvenSum);


//   Now, remove if/else and use a switch statement instead. Let's see how we write switch in JavaScript: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch

// CONGRATULATIONS! You have just written your first reducer. Now, let's just learn how to put it in React and later we'll learn how to put it in Redux. But the basics is this and this only.

function oddAndEvenSumReducerSwitch(accumulator, value) {
    // write your code here
    // if (numList.type === "odd") {
    //   return { ...accumulator, odd: accumulator.odd + value.payload };
    // } else {
    //   return { ...accumulator, even: accumulator.even + value.payload };
    // }

    switch(value.type){
        case "even" :
            return { ...accumulator, odd: accumulator.odd + value.payload };
        case "odd":
            return {...accumulator, even: accumulator.even + value.payload};
    }
  }
  const oddAndEvenSumSwitch = numList.reduce(oddAndEvenSumReducerSwitch, { even: 0, odd: 0 });
  console.log(oddAndEvenSum);