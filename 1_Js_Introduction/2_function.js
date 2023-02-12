//body in which we give input and we get desired output. In body logic is written. 

//Normal function
// function sayHi(){
//      console.log('function said Hi')
// }  //function declaration
// c
// sayHi();  // function invokation

// //Parameters in functions
// function add(a,b){        //parameters
//     console.log('The addition is ',a+b)
// } 
// add(2,3)    //2 and 3 are arguments for aboveparameter

//multiply

function multiply (c,d){
    return c*d;
}
console.log(multiply(3,4))


//function as first class citizen
//Js variable and functions mai koi antar nhi rkhti

let sayHi = function(){      //anonymous functions-->jska koi nam nhi hota
    console.log('Hi')
}              //function expression
sayHi() //we are calling this later whenever we want to

//IIFE (Immediately invoked function Expression)  -- used during API calling

let add = (function(a,b){
   return a+b
})(10,20)

console.log(add)


