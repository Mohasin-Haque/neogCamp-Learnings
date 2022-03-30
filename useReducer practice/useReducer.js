// Take an array and calculate the sum of even and odd numbers using reduce.

const array = [1, 5, 3, 7, 2];

const output = array.reduce((acc,curr) => {
    return curr % 2===0 ? {...acc, even: acc.even + curr} : {...acc, odd: acc.odd + curr}
}, {even: 0, odd: 0})

console.log(output);