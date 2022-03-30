//Que:- Take an array and calculate the sum of even and odd numbers using reduce.

const array = [1, 5, 3, 7, 2];

const output = array.reduce((acc,curr) => {
    return curr % 2===0 ? {...acc, even: acc.even + curr} : {...acc, odd: acc.odd + curr}
}, {even: 0, odd: 0})

console.log(output);

//Que:- Take an array and calculate the sum of even and odd numbers using reduce.

const numList = [1, 3, 55, 22, 44]

function oddAndEvenSumReducer(accumulator, value) {
  // write your code here
if(value%2){
    return {...accumulator, odd: accumulator.odd + value}
}
else{
   return { ...accumulator, even: accumulator.even + value}
} 
}

const oddAndEvenSum = numList.reduce(oddAndEvenSumReducer, { even: 0, odd: 0 })

console.log(oddAndEvenSum)