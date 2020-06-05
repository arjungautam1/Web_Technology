//Task 6 :Exercise : Filter out only the even numbers from the array

// const primeNumbers=[1,2,3,4,5,6].filter(/*add the function to filer out the even numbers  */)
// console.log(primeNumbers)

const isEven=number=>number%2===0; //Used arrow function here 
const evenNumbers=[1,2,3,4,5,6].filter(isEven)

console.log(evenNumbers)


