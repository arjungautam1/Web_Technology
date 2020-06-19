// break :Terminate the current loop 
//continue : Terminates the current iteration of the loop 
const MIN=0;
const MAX=360;
var testNumber=15;
var i=1;

while(MAX){
    let randomValue=Math.floor(Math.random()*(MAX-MIN))+MIN;
    if(randomValue==testNumber){
        break;
    }
    console.log("Round"+i+":"+randomValue);
    i++;
}
console.log("The script went"+i+"rounds before finding"+testNumber+".");
