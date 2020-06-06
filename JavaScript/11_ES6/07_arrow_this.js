//Arrow function and this 
/*
function Dog(){
    this.age=0;
    setInterval(function(){
        this.age+=1;
        console.log(this.age);

    },1000);
}
const puppy=new Dog();
*/

// This can be solved by using arrow function 

function Dog(){
    this.age=0;
    setInterval(()=>{
        this.age+=1;
        console.log(this.age);
    },1000);
}
const puppy=new Dog();




// const isOdd=()=>arguments[0]%2===1
// console.log(isOdd(1))

// const isOdd1=(...args)=>{
//     console.log(args)
//     return args[0]%2 ==== 1

// };
// console.log(isOdd1(1,2,3,4))


