setTimeout(()=>console.log("Just checking..."), 5000);

//Que:- write a function that takes a message and a delay and print that message after delay

const printAfterDelay = (msg, delay) => setTimeout(()=>console.log(msg), delay);
printAfterDelay("AA rha hu Bhai", 2000)

// Que:- Write a function that takes a number. Then print a countdown from that number to 0. At zero print "BANG-BANG!"

const bangBang = (number) => setTimeOut(()=> {
    return number===0 ? console.log("Bang-Bang!") : console.log(number = number-1) }, 1000);
bangBang(10)