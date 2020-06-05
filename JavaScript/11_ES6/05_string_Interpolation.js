//String and Interpolation 

const language="English";

console.log(language.includes("gl"));
console.log("Break")
console.log(language.startsWith("e"))
console.log(language.startsWith("E"))
console.log(language.startsWith("Eng"))
console.log(language.startsWith("English"))
console.log("Break")
console.log(language.endsWith("sh"))
console.log(language.endsWith("sH"))
console.log("Break")
console.log(language.repeat(3))
console.log("Break")
console.log("I speak "+language)

//This is cool feature -->

console.log(`I speak ${language === "Englsh"?"British English":"Nepali "}`)