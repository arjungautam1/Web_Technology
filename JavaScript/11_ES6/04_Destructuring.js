// Extracting data using destructuring 
const recipe=
{
    name:"Momo",
    timeInMinutes:60,
    ingredients:
    [
        'Maida',
        'Checken',
        'Tomato'
    ]
}
// const name=recipe.name;
// const ingredients=recipe.ingredients;
const{name,ingredients}=recipe;
//console.log(recipe,name,ingredients)

// To change the name of extracted variable or properties 
const{name:myName, ingredients:myIngredients}=recipe;

console.log(recipe,myName,myIngredients)


// We can destructure even on array 

const programming_language=['Java','Javascript','Python']
const[first,second]=programming_language;
console.log(first,second)


// We can destructure the function as well

function cook(recipe)
{
    console.log(recipe.name);
    console.log(recipe.ingredients);
}
cook(recipe)

console.log("This one is just to break the line")
//or we can write the same thing as 
function cook({name,ingredients,timeInMinutes})
{
    console.log(name);
    console.log(ingredients);
    console.log(timeInMinutes);
}
cook(recipe)
