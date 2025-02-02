console.log("Hello World");

// Conversion into number.
/*
const age = '25a';
console.log(age);
console.log(typeof(age))
const ageInNUM = Number(age)
console.log(ageInNUM);
console.log(typeof(ageInNUM))


//Conversion into boolean .
const num = undefined;
console.log(num);

const b = Boolean(num);
console.log(b);
*/
/*
1 => true
0 => false
0.1 => true
-1 => true
123 => true
"" => false
"abc" => true
0.0 => false
123.456 => true
null => false
undefined => false
*/


// Conversion into string.

// let num = 33
// console.log(num);
// console.log(typeof(num))

// let numToString = String(num);
// console.log(numToString);
// console.log(typeof(numToString))

/*
console.log(1+2);
console.log('1'+'2');
console.log('1'+2);
console.log(1+'2');
console.log('1'+2+3);
console.log(1+2+'3');


console.log(true)
console.log(false)

console.log(+true);
console.log(+false);
console.log(+'');


console.log(true+true);
console.log(true+false);
console.log(false+true);
console.log(false+false);

console.log(true+1);
console.log(false+1);
console.log(true+0);
console.log(false+0);
console.log(true-1);
console.log(false-1);
console.log(true-0);
console.log(false-0);
console.log(true-true);

// console.log(true+);          Both of them will give error.
// console.log(false+);             because they are not number.
*/


// console.log('1' > 2);
// console.log('1' < '2');
// console.log(1 < '2');
// console.log('01' < 2);
// console.log('01' > 2);

/*
console.log(null > 0);
console.log(null == 0)
console.log(null >= 0)


console.log(undefined > 0);
console.log(undefined == 0)
console.log(undefined >= 0)

console.log('' == 0);           //  True
console.log('' == false);           //  True
console.log(0 == false);            //  True
console.log(0 == '');           //  True
console.log(0 == null);         //  False
console.log(0 == undefined);            //  False
console.log(false == null);         //  False
console.log(false == undefined);            //  False
console.log(null == undefined);         //  True          
*/

// console.log('2' == 2);      // True
// console.log('2' === 2);     // False

//  There are 2 types of Datatypes in JS:-
/*
1. Primitive Datatypes
2. Reference Datatypes

Primitive Datatypes:-
1. String
2. Number
3. Boolean
4. Undefined
5. Null
6. BigInt
7. Symbol

Reference Datatypes(Non-primitive):-
1. Objects
2. Arrays
3. Functions
*/

/*
const id = Symbol('123')
const id2 = Symbol('123')
console.log(id === id2);
console.log(id == id2);

console.log(id);
console.log(id2);
console.log(typeof(id));


const bigNum = 1234567890123456789012345678901234567890n;
console.log(bigNum);
console.log(typeof(bigNum));
*/


//                  Starting with Strings.
/*
let name = "UB"
let age = 20
console.log("Hello my name is " + name + " and my age is " + age);      //Not recommended.
console.log(`Hello my name is ${name} and my age is ${age}`);           //Better to use
console.log(name[0])


const gameName = new String('PokemonFireRed');
console.log(gameName);
console.log(typeof(gameName));              //Use console log o browser for better understanding.
console.log(gameName[0]);

console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toLowerCase());
console.log(gameName.toUpperCase());

console.log(gameName.charAt(0));
console.log(gameName.charAt(1));
console.log(gameName.charAt(2));

console.log(gameName.indexOf('P'));
console.log(gameName.indexOf('o'));
console.log(gameName.indexOf('z'));

console.log(gameName.fontcolor('red'));

const newStr = gameName.substr(0, 6);
console.log(newStr);                //Here, we cannot use negative values.

const str2 = gameName.slice(0, 6);
console.log(str2);
const str3 = gameName.slice(-14,-1);                //Here, we can use negative values.
console.log(str3);

//  charAt, charCodeAt, concat, includes, indexOf, lastIndexOf, localeCompare, match, matchAll, padEnd, padStart, repeat, replace, replaceAll, search, slice, split, startsWith, substring, toLowerCase, toUpperCase, trim, trimStart, trimEnd, valueOf

*/


//                  Starting with Arrays.
/*
const num1 = 200;
console.log(num1);
console.log(typeof(num1));

const num2 = new Number(200);
console.log(num2);
console.log(typeof(num2));

console.log(num1.toString().length);
console.log(typeof(num1.toString()));

console.log(num2.toFixed(2));   //200.00


const newnum = new Number(123.839999);
console.log(newnum.toPrecision(5));     //123.84
console.log(newnum.toPrecision(4));     //123.8
console.log(newnum.toPrecision(3));     //124
console.log(newnum.toPrecision(2));     //1.2e+2

const newnum2 = new Number(10000000000);
console.log(newnum2.toLocaleString());      //By default, it will print in en-INDIAN format.
console.log(newnum2.toLocaleString('en-IN'));       //IN -> Indian format
console.log(newnum2.toLocaleString('en-US'));       //US -> US format
console.log(newnum2.toLocaleString('en-GB'));       //GB -> UK format

*/

//                  Starting with Maths Modile

//      Math.abs, Math.acos, Math.acosh, Math.asin, Math.asinh, Math.atan, Math.atan2, Math.atanh, Math.cbrt, Math.ceil, Math.clz32, Math.cos, Math.cosh, Math.exp, Math.expm1, Math.floor, Math.fround, Math.hypot, Math.imul, Math.log, Math.log10, Math.log1p, Math.log2, Math.max, Math.min, Math.pow, Math.random, Math.round, Math.sign, Math.sin, Math.sinh, Math.sqrt, Math.tan, Math.tanh, Math.trunc

