const generateFibonacciSequence =  (maxValue: number): number[] => {
    let [a, b] = [1, 2];
    const sequence: number[] = [a, b];

    while(true) {
        const next = a + b;
        if (next > maxValue) break;
        sequence.push(next);
        [a, b] = [b, next];
    }
    return sequence;
}

const filterEvenNumbers = (numbers: number[]): number[] => {
    return numbers.filter(num => num % 2 === 0);
}

const sumEvenNumbers = (numbers: number[]): number => {
    return numbers.reduce((sum, num) => sum + num, 0);
}

const answerSumEvenValued = (): number => {
    const maxValue = 4000000;
    const fibonacciSequence = generateFibonacciSequence(maxValue);
    console.log(`The fibonacci sequence is ${fibonacciSequence}.`)
    const evenFibonacciNumbers = filterEvenNumbers(fibonacciSequence);
    console.log(`The even fibonacci numbers are ${evenFibonacciNumbers}.`)
    console.log(`The sum of even fibonacci numbers is ${sumEvenNumbers(evenFibonacciNumbers)}.`)
    return sumEvenNumbers(evenFibonacciNumbers);
}

console.log(answerSumEvenValued());

console.log(`The sum of the terms in the Fibonacci sequence whose values do not exceed four million is ${answerSumEvenValued()}.`);
