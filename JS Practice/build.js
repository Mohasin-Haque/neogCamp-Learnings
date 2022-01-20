// Easy

// 1.
const power = (a,b) => Math.pow(a,b)
// power(2,3)

// 2.
const hexagon = a => ((Math.sqrt(3) * 3/2) * (a * a )).toFixed(2)
// hexagon(10)

// 3.
const noOfWords = words => words.split(' ').length;
// noOfWords('We are neoGrammers');

// 4.
// const findMin = (...numbers) => Math.min(...numbers)
const findMin = (first,...numbers) => {
  let min = first;
  for(const num of numbers){
    if(num < min){
      min = num;
    }
  }
  return min;
}
// findMin(3,5)
// findMin(3,5,9,1)

// 5.
// const findMax = (...numbers) => Math.max(...numbers);
// const findMax = (first,...numbers) => {
//   let max = first;
//   for(const num of numbers){
//     if(num > max){
//       max = num;
//     }
//   }
//   return max;
// }
// findMax(3,5)
// findMax(3,5,9,1)

// 6.
const typeOfTriangle = (a,b,c) => {
  if(a + b + c === 180){
    if(a === b && b === c) return 'equilateral Triangle';
    if(a === b || b === c || c === a) return 'isosceles Triangle';
    if(a !== b && b !== c) return 'scalene Triangle';
  }
  return 'not a triangle'
}
// typeOfTriangle(30, 60, 90)
// typeOfTriangle(30, 60, 30)
// typeOfTriangle(10, 10, 10)
// typeOfTriangle(45,45,45);


// Medium

// 1.
const arrayLength = inputs => inputs.length;
// arrayLength([1,5,3,7,8])

// 2.
// const findIndexOf = (arr,num) => arr.findIndex(item => item === num); 
// or
const indexOf = (arr,num) => arr.indexOf(num);
// or
// const indexFind = (arr,num) => {
//   for(const [index,item] of arr.entries()){
//     if(item === num) return index
//   }
//   return -1;
// }
indexOf([1,6,3,5,8,9], 8)

// 3.
const replace = (arr,oldNum,newNum) => arr.map(item => item === oldNum ? newNum : item);
// replace([1,5,3,5,6,8], 5, 10)

// 4.
const mergeArray = (arr1,arr2) => [...arr1,...arr2];
// const mergeArray = (arr1,arr2) => arr1.concat(arr2);
// mergeArray([1,3,5], [2,4,6])

// 5.
const charAt = (string,index) => string.charAt(index);
// const charAt = (string,index) => {
//   for(let i = 0; i < string.length; i++){
//     if(i === index){
//       return string[i];
//     }
//   }
//   return -1;
// }
// charAt("neoGcamp", 4)

// 6.
const minDate = (date1,date2) => new Date(date1) > new Date(date2) ? date1 : date2
// minDate('02/05/2021', '24/01/2021')


// Advanced

// 1.
const encodeString = (string,place) => (
        string.split('').map((item,index) => String.fromCharCode(string.charCodeAt(index) + place)).join('')
)
// encodeString("neogcamp", 2)


// 2.
const toSentenceCase = (sentence) => sentence.split(' ').map(item => `${item[0].toUpperCase()}${item.slice(1)}`).join(' ');
// toSentenceCase('we are neoGrammers');

// 3.
const sortArray = arr => arr.sort((a,b) => a - b);
// const sortArray = arr => {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//       if (arr[i] < arr[j]) {
//         [arr[j], arr[i]] = [arr[i],arr[j]];
//       }
//     }
//   }
//   return arr;
// }
// sortArray([99,23,45,55,5,76])

// 4.
const reverseCharactersOfWord = (string) => string.split(' ').map(item => item.split('').reverse().join('')).join(' ');
// reverseCharactersOfWord('Doing Build Question');