var pens;
// pens=new Array("black","blue","green","orange");
pens=["red","blue","green","orange"];
console.log("Before",pens);

//Properties :

//Length:
// console.log("Array length:",pens.length);

// Methods :reverse the array
// pens.reverse();

// Shift:Removes the first value of the array
//pens.shift();

// Unshift:To add on the start of an array
// pens.unshift("purple","black");

// Push : To add the comma seperated list in the end of an array
// pens.push("Pink","yellow");

// splice : To remove at specific position (pos,n)
// pens.splice(2,1);

// slice : used to copy of and array 
// var newPens=pens.slice();
// console.log("New Pens:",newPens);

// IndexOf: search for the item in an array (search , index_from_where_you_want_to_search_from)

// join:
var arrayString=pens.join(" | ");
console.log("String from array",arrayString);




console.log("After",pens);

