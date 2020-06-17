// Const
const MYCONSTANT=5;
console.log(MYCONSTANT);
// MYCONSTANT=6; //Can't do this since it's a constant 


// Block scope variable (let)

function logScope()
{
    let localVar=2;

    if(localVar){
        let localVar="I am different ";
        console.log("nested localVar:",localVar);
    }


    console.log("logScope localVar:",localVar);
}
logScope();