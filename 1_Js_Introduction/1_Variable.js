//variable declaration
//var, let, const
//in var,redeclaration and reassigning is allowed
//in let,reassigning is only allowed

//JS is indisciplined disciplined language 
//JS doesnot cares about the types of variable


// var a;    //variable will be initialized with undefined
// console.log(a);


//JS is a dynamically typed language  --> we dont have to define the type,kesi v variable p 
//kesi v value dal sakte hai'


//DataTypes in Js -> number, string, boolean,  undefined, null  

// var b = 2.3              //number
// var c = 'd'              //string
// var d = 'I am a String'  //string


//Var has some problems

//1st -> Redeclaration

// var b = 'hello'
// var b = 'bye'
// console.log(b)

//overcoming redeclaration

//use let keyword

// let b = 'hello'
// console.log(b)
// let b = 'bye'    //redeclaration is not allowed with let keyword
// console.log(b)

// let b = 'hello'
// console.log(b)
// b = 'bye'          //reassigning is allowed 
// console.log(b)


//loops
//for loop
//Prime Number

// var flag = true

// var num = 10 

// for(var i=2; i*i <= num; i++){
//     if(num%i == 0){
//         flag = false;
//         break;
//     }
// }

// if(flag == true){
//     console.log("Number is Prime")
// }
//  else {
//     console.log("Number is not Prime")
// }

//2nd problem with var -> scoping

// if(10%2 == 0){
//     var a = 2        //var keyword is function scoped and let is blocked scoped
//     console.log('I am from the if block',a) 
// }
// console.log('I am from outside if block',a)


//Const --> Redeclaration as well as reassignment is not allowed

const a = 2
console.log(a)

