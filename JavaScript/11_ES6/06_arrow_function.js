/*
const numbers=[1,2,3,4,5,6]
let doubledNumbers=numbers.map(
    function(number)
    {
        return number*2;
    }
)
console.log(doubledNumbers)
*/

// To simplify the above code we use the arrow function  ' => '

//Using arrow function =>

const numbers=[1,2,3,4,5,6]

const calculateDouble=number => number*2;

let doubledNumbers=numbers.map(calculateDouble);
console.log(doubledNumbers)
