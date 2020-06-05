// Task4 : Exercise: EXtract data with destructuring
const ingredients={
    tea:'black',
    milk:'DDC',
    sweetner:'honey',
    spices:['ginger','cardamom','cinnamon','numeg']
    
}
//Destructure the parameters 
function prepareChai(ingredients)
{
    const tea=ingredients.tea;
    const spices=ingredients.spices;
    const milk=ingredients.milk;
    const sweetner=ingredients.sweetner;

    console.log("Mix the "+tea+" tea "+
    "with the "+spices+"in a small pot."+
    "Add the cup of water and bring to boil .Boil for 2-3min"+
    "Add "+milk +" milk and "+sweetner+"."+
    "Simmer for 3 min .Serve masala chai hot or warm !");

}
prepareChai(ingredients)

