//Array provides you an ordered collection of elements

// let arr = [];   //array declaration
// let cars = ["ferrari", 2 , true, null]    //array initialized
// //in Js array you can store different values of different dataTypes

// console.log(cars)
// console.log('This is cars array', cars)

let cars2 = ['Ferrari', 'Jaguar','Tesla', 'BMW']

//Accessing the elements of an array
console.log(cars2[2])   //Tesla



//Replace an elements of an array
cars2[2] = 'Bentley'    //2nd index will be replaced with this values
console.log(cars2)

//Add a new element to an array
cars2[4] = 'Mercedes'
console.log(cars2)

//Array Methods

//1) pop method() ->this method removes the last element from the array
//console.log(cars2.pop())
cars2.pop()
console.log(cars2)

//2) push -> this adds an element at the end of the array
cars2.push('Rolls Royce')
console.log(cars2)

//3) shift -> removes the element from the  starting of an array
cars2.shift()
console.log(cars2)

//4) unshift -> adds an element at the starting of an array
cars2.unshift('Tata')
console.log(cars2)

//length of an array
//console.log(cars2.length)

//MultiDimensional Arrays

let Matrix =  [
         [1,2,3],
         [4,5,6],
         [7,8,9]
]

console.log(Matrix[0,0])
console.log(Matrix[0][1])

//join and split


