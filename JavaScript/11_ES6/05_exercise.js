// Task:Exercise:Refractor the code to use the ES6 String utility methods 

// const country="Bulgaris";
// const city="Sofia";
// if(country.indexOf("Bulg") >-1)
// {
//     console.log("The country starts with Bulg");
// }
// if(city.indexOf("So")===0)
// {
//     console.log("The name starts with So");
// }
// if(city.lastIndexOf("a")===city.length-1)
// {
//     console.log("The name ends with a");
// }
// console.log(
//     "The capital of "+country+
//     "is the city of "+city
// );

//This complex code can be done with the very easy String utility methods 

//console.log("Just to break the line ")

const country="Bulgaris";
const city="Sofia";
if(country.startsWith("Bulg"))
{
    console.log("The country starts with Bulg");
}
if(city.startsWith("So"))
{
    console.log("The name starts with So");
}
if(city.endsWith("a"))
{
    console.log("The name ends with a");
}
console.log(
    `The capital of ${country}`+
    `is the city of ${city}`
);
