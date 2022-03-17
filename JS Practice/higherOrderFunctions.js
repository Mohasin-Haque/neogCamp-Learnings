
const users = [
    {
        firstName: "Mohasin",
        lastName: "Haque",
        age: 20
    },
    {
        firstName: "Vinod",
        lastName: "Pal",
        age: 22
    },
    {
        firstName: "Shivam",
        lastName: "Seth",
        age: 20
    },
    {
        firstName: "Anurag",
        lastName: "Verma",
        age: 25
    },
];

// Find the list of full names from the following

const outputOne = users.map((x) => x.firstName +" "+ x.lastName);
console.log(outputOne);

//Que :- Find the no. of people having the same age

const outputTwo = users.reduce(function(acc, curr){
    if(acc[curr.age]){
        acc[curr.age] = ++acc[curr.age]
    }else{
        acc[curr.age] = 1
    }
    return acc;
},{});

console.log(outputTwo)

// Que :- Get the first name of the users whose age is greater then 22

const outputThree = users.filter((x) => x.age > 22).map(x => x.firstName);
console.log(outputThree);

//Que :- Do the above question using reduce

const outputFour = users.reduce(function(acc, curr){
    if(curr.age > 22){
        acc.push(curr.firstName)
    }
    return acc;
}, []);
console.log(outputFour)