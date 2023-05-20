//1. ways to print in js.
// console.log("Hello World");
// alert("me");
// document.write("this is document write")

//2. Js console API
//console.log("Hello World", 4 + 6, "Another log");//console.warn("this is warning");
//console.error("This is an error");

// 3. Javascript Variables
// What are Varaibles? - Containers to store data values
/* multi 
line 
comment */
var number1 = 34;
var number2 = 56;
//console.log(number1 + number2);

// 4. Data types in Js
//Numbers
var num1 = 455;
var num2 = 56.76;

//String
var str1 = "This is a string";
var str2 = 'This is also a string';

//Objects
var marks = {
    ravi: 34,
    shubham: 78,
    harry: 99.977
}

//console.log(marks);

// Booleans
var a = true;
var b = false;
//console.log(a,b);

// var und = undefined;
var und;
//console.log(und);

var n = null;
//console.log(n);

/*
At a very high leavel, there are twotypes of data types in Javascript
1. Primitive data types: underfied, null, number, string, boolean, symbol
2. Refrence data types: Arrays and objects

*/

var arr = [1,2,"string",3,4,5]
//console.log(arr)

// Operators in Js
// Arithemetic Operators
var a = 100;
var b = 10;
/*console.log("The Value of a + b is ", a+b);
console.log("The Value of a - b is ", a-b);
console.log("The Value of a * b is ", a*b);
console.log("The Value of a / b is ", a/b);*/

// Assignment Operators
var c = b;
// c += 2;
// c -= 2; //c = c - 2;
// c *= 2; 
// c /= 2;
// console.log(c);

//Comaprision Operators
var x = 34;
var y = 56;
/*console.log(x == y);
console.log(x >= y);
console.log(x <= y);
console.log(x > y);
console.log(x < y);*/

//Logical Opreators
// Logical AND
/*console.log(true && true) //true
console.log(true && false) //false
console.log(false && false) //false
console.log(false && false) //false

// Logical OR
console.log(true || true) //true
console.log(true || true) //true
console.log(true || true) //true
console.log(true || true) //true

// Logical NOT
console.log(!true);  //false
console.log(!false); //true */
function bvg(a, b){
    return (a + b)/2;
}

c1 = bvg(4,6);
c2 = bvg(14, 16);
console.log(c1, c2); 
























































































































































