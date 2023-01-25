var firstNameLenght = 0;
var firstName = "Marco";

/* You can know the lenght of astring just typing 
.lenght*/
console.log(firstName.length)
// The index is the same as python, starts at 0
// And also use [] notation 
var firstLetter;
var lastName = "ponce";

firstLetter = lastName[0]
/* In js, the strings are inmutable, 
so, you just can declare again the variable to change it 

You can find the last string using -1, but not like python */
var lastLetterOfLastName = lastName[lastName.length - 1];

/* Arrays are the same as python, you can add different types of variables in []*/
 var myArray = ["John", 23]  
 // Also you can declarate nested arrays
  var nestedArray = [0, ["marco", "ponce"]];

  // Number arrays can be changed item by item 
  var myArray = [1,2,3,4];
  myArray[1] = 3;
  // Even for nested arrays 

  /* Access Multi-Dimensional Arrays with indexes, the same as matlab and python */

  // MAnipulate arrays with push:
var ourArray = ["Sonso", "J", "cat"]
ourArray.push(["happy", "together"])
console.log(ourArray)

// You can remove a caracter using .pop(), by default its the last one

// The function .shift(), removes the first item in an array

// The .unshift function, works similar as .push, but concat the item at the first

ourArray.unshift([4])






