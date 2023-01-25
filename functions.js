// Commun function:
function ourFuctionWithArgs(a, b){
    console.log(a-b);
}
// call the function 
ourFuctionWithArgs(4,5)

//Scopes are the visibility of the variables

// Global variables are the ones that are avariable in the hole code
 var myGlobal =10;
// Note: to se the type of variable just type:
typeof myGlobal;
// This is the same as python, variables inside functions does not appered in the main code
// But, if you declare a var inside a function, it becomes automactly in global 
function fun1() {
    oopsGlobal = 5;
}