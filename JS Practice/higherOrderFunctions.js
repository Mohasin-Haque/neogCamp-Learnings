
// const users = [
//     {
//         firstName: "Mohasin",
//         lastName: "Haque",
//         age: 20
//     },
//     {
//         firstName: "Vinod",
//         lastName: "Pal",
//         age: 22
//     },
//     {
//         firstName: "Shivam",
//         lastName: "Seth",
//         age: 20
//     },
//     {
//         firstName: "Anurag",
//         lastName: "Verma",
//         age: 25
//     },
// ];

// // Find the list of full names from the following

// const outputOne = users.map((x) => x.firstName +" "+ x.lastName);
// console.log(outputOne);

// //Que :- Find the no. of people having the same age

// const outputTwo = users.reduce(function(acc, curr){
//     if(acc[curr.age]){
//         acc[curr.age] = ++acc[curr.age]
//     }else{
//         acc[curr.age] = 1
//     }
//     return acc;
// },{});

// console.log(outputTwo)

// // Que :- Get the first name of the users whose age is greater then 22

// const outputThree = users.filter((x) => x.age > 22).map(x => x.firstName);
// console.log(outputThree);

// //Que :- Do the above question using reduce

// const outputFour = users.reduce(function(acc, curr){
//     if(curr.age > 22){
//         acc.push(curr.firstName)
//     }
//     return acc;
// }, []);
// console.log(outputFour)

// *******************IMMUTABILITY***********************
//Que :- Take an object with your mothers name and your age. Now create an object for your sibling by age difference. 

// const mohasin = {
//     mother: "Tahirun",
//     age: 20
// }

// const arsh_ul = {
//     ...mohasin,
//     age: mohasin.age - 10
// }

// console.log(arsh_ul)
// console.log(mohasin)

// Wrong Approach (MUTABLE)

// let arsh = mohasin;
// arsh.age = mohasin.age - 10;
// console.log(arsh.age)
// console.log(mohasin.age)
// Here you will get the same output but the data of mohasin object also got change. So it is not a good practice.

// Que :- Take an array with 5 colors. Create another array by adding two more colors to it.

// const arr = ["green", "blue", "red", "white", "yellow"];
// const newArr = [...arr, "black", "magenta"]

// console.log(newArr)

// *******  PURE FUNCTION  ********

// Que :- Write a function birthday() to take a person's name, and age in an object and increase age.

// const bday = (person) => (
//     {
//         ...person,
//          age: person.age + 1
//     }
//     )
//     const mohasinAfterBday = bday(mohasin)
//     console.log(mohasinAfterBday)
// console.log(mohasin === mohasinAfterBday)

// Wrong
// const birthday = (name, age) => {
//         age++;
//         console.log(name, age);
// }

// birthday( "mohasin", 20)



//******* HIGHER ORDER FUNCTION ********/

// Que:- Write a function which can tell whether a number is less than 10 or not. Supply this function to Array.filter() to get an array with no 10s in it.

// const arr = [1, 5, 11, 6, 44];
// const lessThanTen = num => num > 10;
// console.log(arr.filter(lessThanTen))

// OR

// console.log(arr.filter((x) => x>10))

// Que:- Given an array of numbers, return an array with all the numbers incremented by 2

// console.log(arr.map((x) => x+2));

// Que 1 :- Find the sum of odd numbers in the array.


// const arr = [1, 3, 5, 2, 22, 11, 9];

// const output = arr.reduce(function(acc, curr){
//   if(curr%2){
//       acc = acc + curr;
//       return acc;
//   }else{
//       return acc;
//   }
// })

// console.log(output)

// Que 2 :- Return an object with the sum of odd numbers and sum of even numbers.

// const reduceObj = (oddEvenObj, num) => num%2===0 ? {...oddEvenObj, even: oddEvenObj.even + num} : {...oddEvenObj, odd: oddEvenObj.odd + num}

// const oddEvenObj = { 
//     even: 0, 
//     odd: 0
// }
// console.log(arr.reduce(reduceObj, oddEvenObj))


//  Que :- Given an array of integers

// (a). Find the sum of all odd numbers
// const arr = [1, 3, 5, 2, 22, 11, 9];
// const output = arr.reduce(function(acc,curr){
//     if(curr%2){
//         acc+=curr;
//         return acc;
//     }else{
//         return acc;
//     }
// })

// console.log(output)

// (b). Find the sum of all numbers at odd indices

const arr = [1, 3, 5, 2, 22, 11, 9, 10];
// ****By Reduce****
// const output1 = arr.reduce((acc, curr, index) => {
//     if(index%2){
//         acc += curr;
//         return acc;
//     }else{
//         return acc;
//     }
// }, 0)

// console.log(output1)

// *********By map******** 
// let sum = 0;

// arr.map((item,index)=>{
//    if(index%2!==0){
//        sum = sum + item
//    } 
//    return sum
// })

// console.log(sum)

// const findSum = (arr) => {
//     let sum = 0;
//     for(let i = 0; i<arr.length; i++){
//         if(i%2){
//             sum = sum + arr[i];
//         }
//     }
//     sum;
// }
// findSum(arr)

// (c). Find the biggest number in the array

// let max = 0;
// const output = arr.filter((x) => {
//     x>max ? max = x : x;
// })
// console.log(max);

//  (d). Find the numbers divisible by 10

// let divisibleByTen = 0;
// arr.map((item)=>{
//    if(item%10===0){
//        divisibleByTen = item
//    } 
//    return divisibleByTen
// })
// console.log(divisibleByTen)

// To get in array
// const divisibleByTen = num => num % 10 === 0
// console.log(arr.filter(divisibleByTen))
// // To get only numbers
// arr.filter(x => {
//     x%10===0 ? console.log(x) : 0
// })

// (e). Return an array of numbers where odd numbers are incremented by one and even numbers are decremented by one

// const output = arr.map((curr) => {
//     if(curr% 2 === 0){
//         return curr +1
//     }
//     else{
//         return curr - 1;
//     }
// })
// console.log(output)


// const output = arr.map((x)=>{
//     return x%2===0 ? x+1 : x-1;
// })
// console.log(output)

// (f). Return an object with sum of all odd numbers and even numbers seperataly.

// const reduceObj = (oddEvenObj, num) => num%2===0 ? {...oddEvenObj, even: oddEvenObj.even + num} : {...oddEvenObj, odd: oddEvenObj.odd + num}

// const oddEvenObj = { 
//     even: 0, 
//     odd: 0
// }
// console.log(arr.reduce(reduceObj, oddEvenObj))

// QUE :- (a). Given any array of strings with similar number of characters.

const input = ["apple", "orange", "mango", "papaya"]

// const output = input.reduce((acc, curr) => {
//     if(acc[curr.length]){
//         acc[curr.length] = ++acc[curr.length]
//     }else{
//         acc[curr.length] = 1;
//     }
//     return acc
// }, {})
// console.log(output)

// (b). return an array with the strings which have vowels

// for b. use .map on array and .includes on every entry

// for c. reduce use hoga, dyanamic key use hoga

// const checker = (x) => {
//     let arrr = []

//     if(x.includes( "a" || "e" || "i" || "o" || "u")){
//         arrr.push(input)
//     }
// }

// const output = input.map(checker)

// console.log(input)
