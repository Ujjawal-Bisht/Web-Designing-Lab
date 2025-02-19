//  Arrays

const array1 = [1, 2, 3, 4, 5]
// Arrays are resizable, so we can add or remove elements
// They are hetrogeneous, so we can add any type of data

const array2 = new Array(6, 7, 8, 9, 10)
//  console.log(array1[2]);


// Array Methods

// 1. push() - Adds an element to the end of the array
array1.push(6)
//  console.log(array1);

// 2. pop() - Removes an element from the end of the array
array1.pop()
//  console.log(array1);

// 3. unshift() - Adds an element to the beginning of the array
array1.unshift(0)
//  console.log(array1);

// 4. shift() - Removes an element from the beginning of the array
array1.shift()
//  console.log(array1);

/*
console.log(array1.includes(3));
console.log(array1.indexOf(30));
console.log(array1.indexOf(3));
*/

const array3 = array1.join()
//  console.log(array3);
//  console.log(typeof(array3));

// 5. slice() - Returns a copy of the array
//  console.log(array1.slice(1, 3));
//  console.log(array1);

// 6. splice() - Removes elements from the array
//    console.log(array1.splice(1, 3));
//  console.log(array1);

// 7. concat() - Concatenates two arrays
//console.log(array1);
//console.log(array2);
//  array1.push(array2)
//  console.log(array1);            // [ 1, 2, 3, 4, 5, [ 6, 7, 8, 9, 10 ] ]

const array4 = array1.concat(array2);
//console.log(array4);                // [ 1, 2, 3, 4,  5, 6, 7, 8, 9, 10 ]

// 8. Spread Operator - Another way to concatenate arrays
const array5 = [...array1, ...array2]
//console.log(array5);                // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

// 9. Flat() - Flattens an array
let array6 = [1, [1, 2] , 2, [3, 4, [5, 6]]]
//  console.log(array6.flat(2));        // [ 1, 1, 2, 2, 3, 4, 5, 6]
//  console.log(array6.flat(1));        // [ 1, 1, 2, 2, 3, 4, [ 5, 6 ]]
//  console.log(array6.flat(Infinity));        // [ 1, 1, 2, 2, 3, 4, 5, 6]

console.log(Array.isArray("HelloWorld!"));  // false
console.log(Array.isArray(array6));         // true

console.log(Array.from("HelloWorld!"));     // It will convert the string into an array

let M1 = 99 ;
let M2 = 98 ;
let M3 = 97 ;
let M4 = 96 ;
let M5 = 95 ;

console.log(Array.of(M1, M2, M3, M4, M5));  // [ 99, 98, 97, 96, 95 ]
