console.log("Hello world");
console.log('This will print in new line.');

//  Variables

a = 10      // nuumeric
name = 'Ujjawal'        // text
fullname = 'Ujjawal Bisht'
console.log(fullname);
console.log("fullname");

x = null ;
y = undefined ;

//  both null and undefined are 2 different things
// null means this variable is empty
// undefined means this variable contain some value but we don't know

b = true ;       // boolean


//      Java Script is dynamically typed Programming Language like Python
z = 12;
console.log(z);
z = 'hello'
console.log(z);

//  Variable names are case sensitive
// '$' dollar signs are allowed in variable names

/*
  Allowed Variables:-  'abc', '_abc',  '$abc',  'ab_$c'
  Not Allowed Variables:- '123abc',  'ab c'
*/

//  Let    const    var   keywords

var i = 23 ;
var i = 3 ;
var i = 2 ;
var i = 26 ;
console.log(i)
//  In 'var' variable can be re-declared and updated
//    Not recommended as declaring multiple variables with same name can be confusing.

let j = 23 ;
j = 3 ;
j = 2 ;
j = 26 ;
console.log(j)
//  In 'let' variable cannot be re-declared but can be updated
//    Mostly used in JS
//    These variables are globally accepted.

const k = 23 ;
// In 'const' variable can neither be re-declared nor updated
// k = 23 It will generate an error
//    These variables are locally accepted only in {} braces



let z ;
console.log(z)
//  This will return 'undefined' as by default output.

//    const y ;
// This will return error as const variables must initillazed.
//    These variables are locally accepted only in {} braces


