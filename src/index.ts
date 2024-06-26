// If we list all the natural numbers below 10 that are multiples of 3 or 5 we get 3, 5, 6 and 9. The sum of these multiples is 23. Find the sum of all the multiples of 3 or 5 below 1000.

function sumOfMultiples(limit: number): number {
    let sum = 0;
    
    for (let i = 0; i < limit; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            sum += i;
        }
    } 
    return sum;
    
}

const limit = 1000;
const result = sumOfMultiples(limit);
console.log(`The sum of all multiples of 3 or 5 below ${limit} is ${result}.`);
