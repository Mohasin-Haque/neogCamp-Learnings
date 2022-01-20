//Try converting these codes into ES6 syntax
//Question
// var aloo = 1;
// if (aloo == 1) {
//    var a = 2;
//    console.log(a);
// }
// console.log(aloo);


//Answer
var aloo = 1;
if(aloo == true){
  
    let aloo = 2;
    console.log(aloo);
    
}
console.log(aloo);

//Question

var multiply = function(x, y) {
    return x * y;
  };


  //Answer

  const multiply1 = (x, y) => x*y;

  //Question 

  var customer = {
    name: "Bhaalo"
  };
  var card = {
    amount: 20,
    product: "Aaalo",
    unitprice: 50
  };
  var message = "Hello " + customer.name + " wants to buy " + card.amount + " " + card.product + " for price of " + card.unitprice + " per piece";
  console.log(message);

  //Answer

  var customer = {
    name: "Bhaalo"
  };
  var card = {
    amount: 20,
    product: "Aaalo",
    unitprice: 50
  };
  const message0 = {name} = customer;
  const message1 = {amount, product, unitprice} = card;
  console.log("Hello " + name+ " wants to buy " + amount + " " + product + " for price of " + unitprice + " per piece");

//   const customer= {name: "bhaaloo"};
// const {name}  = customer;
// const card= {amount: 20, product: "aloo", unitprice: 50};
// const {amount, product, unitprice}= card;
// console.log("Hello " + name + " wants to buy " + amount + " " + product + " for price of " + unitprice + " per piece");

  //Question
  var Neog = ["Tanvi", "Swap", "Tanay", "MA", "CA", "PA", "TA"],
CEO = Neog[0],
Mentor = Neog[2];
console.log(CEO, Mentor);

//Answer

const Neog2 = ["Tanvi", "Swap", "Tanay", "MA", "CA", "PA", "TA"];
[CEO2, , Mentor2] = Neog2;
console.log(CEO2, Mentor2);
if(true){
  CEO2 = "Mohasin";
  Mentor2 = "Mohasin and Ajit";
}
console.log(CEO2); //// if it's let then definitely it will return an error due to scoping but it won't return any error
console.log(Mentor2); //// if it's let then definitely it will return an error due to scoping but it won't return any error 


var age = 3;
console.log(age)
let birthday = true;
console.log(age)
if(birthday){
    console.log(age)
    var age = 5;
}
console.log(age);


var multiply4 = function(x, y) {
    return x * y;
  };
  multiply4(3,3);
//Question
  var arr = ["MA", "TA", "PA", "CA"];
var firstName = arr[0];
var surname = arr[1];
console.log(firstName);
console.log(surname);

//Answer
const arr1 = ["MA", "TA", "PA", "CA"];
const [first, second, ...rest] = arr1;
console.log(first,second)



//Question
var Aaloo = "Tasty";
var Bhaloo = "Cute";
var Obj = {
  Aaloo: Aaloo,
  Bhaloo: Bhaloo
};
console.log(Obj)

// answer
const allo = "tasty";
const bhaol = "cute";
const obj ={
  allo, // allo: "jasdfja"
  bhaol// bhaol : "sdfs"
}
console.log(obj)



