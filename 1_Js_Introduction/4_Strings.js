//Strings ->It is a sequence of characters
let str = 'pepcoders'
console.log(str)

//Methods -

//Length of string
console.log('The length of string is',str.length)

//extracting a part of a string

//1) slice
//slice(start, end+1)

// let slicedStr = str.slice(3,7)
// console.log(slicedStr)

// //2) substr
// //substr(start, length)
// let subString = str.substr(3,4)
// console.log(subString)

//Replacing String Content

let sayHello = 'Hello Palak'
console.log(sayHello)

//Replace Method
//replace(valueToBeReplaced , ValueToBeReplacedWith)
let sayBye = sayHello.replace('Hello','Bye')
console.log(sayBye)   //Bye Palak

//ToUpperCase and ToLowerCase

let text1 = 'Hello World'
let text2 = text1.toUpperCase()
console.log(text2)

// to LowerCase



// concatenation ( Concat Method)

// let firstString = 'Hello'
// let secondString= 'Ayush'

// //Hello Ayush
// let concatenation = firstString.concat(" ", secondString)
// console.log(concatenation)

//Trim Method is 

let text = '           Hello World           '
console.log(text)

let trimmedText = text.trim()
console.log(trimmedText)