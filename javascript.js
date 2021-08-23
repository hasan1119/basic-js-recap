/* // TODO: 1. variable //
var x = 10;
let y = 10; */

/* var a; // variable initialization 
a = 100000000;
var a = 10000; // variable declaration */

/* // TODO: 2. constant //
const z = 10; */


/* // TODO: 3. variable vs constant
// var and let are changeable //
var x = "sejuty"; // you can use (let) also //
console.log(x);
x = "Rokibul"
console.log(x);

// const is not changeable //
const a = 10;
console.log(a);
a = 20;
console.log(a); */


/* 
// TODO: 4. var vs let
var a = 10; // i. global scope
// console.log(a);
function myFunction() {
    // console.log(a);
    // const z = 20; // ii. function scope 
    if (true) {
        let x = 10;
        // console.log(x, 'block');
    }
    console.log(x);
    if (true) {
        // console.log(x); // iii. block scope 
        // console.log(y);
    }
    // console.log(x, "function");
}
// console.log(x, "global"); // not accessible 
myFunction()
// console.log(z); 
*/


// TODO: 5. comment 

// single line comment  (ctrl+/)

/* 
multiline comment (alt+shift+a)

*/


// TODO: 6. operators
/* 
1. assignment operators (= , += , -= , *= , /= , %= )
2. arithmetic operators (+, -, *, /, %, ++, --)
3. comparison operators (==, ===, !=, !==, < , > , <=, >=)
4. logical operators ( &&, ||, !)
5. ternary operators (?)

*/

// 1. assignment operators (= , += , -= , *= , /= , %= )

// var a = 11;
// var b = 2;

// a += b;
// console.log(a);
// a -= b;
// console.log(a);
// a *= b;
// console.log(a);
// a /= b;
// console.log(a);
// a %= b;
// console.log(a);

// 2. arithmetic operators (+, -, *, /, %, ++, --)
// var a = 10;
// var b = 2;
// console.log(a + b);
// console.log(a - b);
// console.log(a * b);
// console.log(a / b);
// console.log(a % b);

// var a = 10;
// // console.log(++a);
// console.log(a++);
// console.log(a);


// var a = 10;
// // console.log(--a);
// console.log(a--);
// console.log(a);
// console.log(a + 1);

// 3. comparison operators (==, ===, !=, !==, < , > , <=, >=)
// var x = 20;
// var y = '20';

// console.log(y == x);
// console.log(y === x);
// console.log(y != x);
// console.log(y !== x);
// console.log(y !== x);

// TODO: 7. data type
/* 
1. Primitive data type
    i. number
    ii. string
    iii. boolean
    iv. undefined

2. Object data type
    i.function 
    ii. object
    iii. array
*/

// // i. number
// var a = 10;
// // console.log(typeof (a));

// // ii. string
// var name = "Md.Rokibul hasan"
// var x = 'hasan'
// var y = `hasan`
// // console.log(typeof (name));
// // console.log(typeof (x));
// console.log(typeof (y));


// TODO: 8. Math object

// console.log(Math.PI);
// console.log(Math.E);

/* var x = -10;
console.log(Math.abs(x)); */

/* var x = 10.34415;
console.log(Math.floor(x));
console.log(Math.ceil(x)); */

/* var x = 5.5
console.log(Math.round(x)); */

// console.log(Math.pow(5, 3));

// console.log(Math.sqrt(81));

// console.log((Math.random() * 10).toFixed(2));
// console.log(Math.floor(Math.random() * 10 + 1));


// TODO: 9.Number and it's methods
// var x = 10;
// var z = Number("10")
// console.log(z);

/* 
var x = 10;
var y = '5'
console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y); */


// var n = 103.347714145;
// n = n.toString();
// n = n.toFixed(2);
// n = n.toPrecision(4);
// console.log(n);

// console.log((5 + 4 * 2).valueOf());

// console.log(Number(n));
// console.log(parseInt(n));
// console.log(parseFloat(n));

// console.log(n.toString());

//  TODO: 10. string and its methods
// var name = "Hasan";
// var name2 = String(52455)
// console.log(name2);

/* var num = "123498525"
console.log(Number(num));
console.log(parseFloat(num)); // string to number conversion methods
console.log(parseInt(num));
console.log(parseInt(num)); */


// console.log((747 + 745275 + 7735285 - 1).valueOf());

// var z = 100 * 10;
// console.log(z.valueOf());

// var str0 = "Md. "
// var str1 = "Rokibul "
// var str2 = "Hasan"

// console.log(str0.concat(str1).concat(str2));
// console.log(str1.concat(str0));
// var str1 = "Rokibul Hasan Sejuty Srity sohel"
// var str1 = "Rokibul,Hasan,Sejuty,Srity,sohel"
// console.log(str1.length);
// str1[2] = "h" // immutable
// console.log(str1[2]);
// for (letter of str1) {
//     console.log(letter);
// }

// console.log(str1.split(''));
// console.log(str1.split(','));

// var str1 = "A"

// console.log(str1.charAt(2));
// console.log(str1.indexOf("z"));
// console.log(str1.includes("l"));
// console.log(str1.charCodeAt());
// var anthem = "                            AmAr sonar Bangla , I love you!                     "
// console.log(anthem.toLowerCase());
// console.log(anthem.toUpperCase());
// console.log(anthem.toLowerCase().includes("amar"));
// console.log(anthem.replace('Bangla', "English"));

// var str1 = "Rokibul"
// console.log(str1.startsWith('R'));
// console.log(str1.endsWith('l'));
// console.log(anthem.slice(11, 17));
// console.log(anthem);
// console.log(anthem.trim());
// console.log(anthem.trimLeft());
// console.log(anthem.trimRight());
// console.log(anthem.trimStart());
// console.log(anthem.trimEnd());
// var x = "Rokibul HasanRokibul HasanRokibul HasanRokibul HasanRokibul HasanRokibul HasanRokibul HasanRokibul HasanRokibul HasanRokibul HasanRokibul HasanRokibul HasanRokibul HasanRokibul HasanRokibul HasanRokibul HasanRokibul HasanRokibul HasanRokibul HasanRokibul HasanRokibul HasanRokibul HasanRokibul HasanRokibul HasanRokibul HasanRokibul HasanRokibul HasanRokibul HasanRokibul HasanRokibul HasanRokibul HasanRokibul HasanRokibul HasanRokibul HasanRokibul HasanRokibul HasanRokibul HasanRokibul HasanRokibul HasanRokibul HasanRokibul HasanRokibul HasanRokibul HasanRokibul HasanRokibul HasanRokibul HasanRokibul HasanRokibul HasanRokibul HasanRokibul HasanRokibul HasanRokibul HasanRokibul HasanRokibul HasanRokibul HasanRokibul HasanRokibul HasanRokibul HasanRokibul HasanRokibul HasanRokibul HasanRokibul HasanRokibul HasanRokibul nahid HasanRokibul HasanRokibul HasanRokibul HasanRokibul HasanRokibul HasanRokibul Hasan"
// console.log(x.substring(2, 7));
// console.log(x.substr(2, 3));

// console.log(x.indexOf("z"));
// console.log(x.includes("5"));
// console.log(x.lastIndexOf(''));
// console.log(x.search('nahid'));
// console.log(x.match(/Hasan/g));




//  TODO: 11. string concatenation 

// var firstName = "Md. Rokibul"
// var lastName = 'Hasan'

// console.log(firstName + ' ' + lastName);
// console.log(firstName, lastName);
// console.log(firstName.concat(lastName));
// var fullName = `${firstName} ${lastName}`
// console.log(fullName);




//  TODO: 12. truthy and falsy value
// **** falsy value///
// console.log(Boolean('')); // falsy value
// console.log(Boolean(0)); // falsy
// console.log(Boolean(undefined)); // falsy
// console.log(Boolean(null)); // falsy
// console.log(Boolean(false)); // falsy
// console.log(Boolean(NaN)); // falsy

//***** Truthy value
// console.log(Boolean('Hasan')); // truthy
// console.log(Boolean(50)); // truthy
// console.log(Boolean(-50)); // truthy


// TODO:  13. array and its methods and properties 
/* 
var myArray = ['Hasan', 21, true, undefined] // declaring an array
console.log(myArray);

var arr = new Array('Hasan', 21, true, undefined)
console.log(arr); */


// var arr = [12, 75, 42, 12, 45, 12, 44]
// console.log(arr[2]);
// console.log(arr);
// arr[2] = 567;
// console.log(arr);


// var arr = [12, 75, 42, 12, 45, 12, 44]
// // console.log(arr[0]);
// // console.log(arr[1]);
// // console.log(arr[2]);
// // console.log(arr[4]);
// arr.forEach(element => {
//     console.log(element);
// })

/* 
var arr = [12, 75, 42, 12, 45, 12, 44, 10]
// console.log(arr.length);
arr.push(100)
arr.unshift(500)
console.log(arr); */


/* var arr = [12, 75, 42, 12, 45, 12, 44, 10]
arr.pop()
arr.shift()
console.log(arr); */

// var arr = [1, 5, 10, 50, 12, 75, 42, 12, 45, 12, 44, 10]
// console.log(arr.toString());
// console.log(arr.toLocaleString());

// console.log(arr[arr.length - 1]);
// console.log(eval(arr.join("+")));
// console.log(arr.join("+"));

// console.log(arr.slice(2, 7));
// console.log(arr);

// const myGirls = ["Cecilie", "Lone"];
// const myBoys = ["Emil", "Tobias", "Linus"];
// var arr = [1, 5, 10, 50, 12, 75, 42, 12, 100, 45, 12, 44, 10, 34, 10]
// console.log(myGirls.concat(myBoys).concat(arr));

// console.log(arr.indexOf(100) != -1);
// console.log(arr.includes(100));
// console.log(arr.lastIndexOf(10));
// const fruits = ["Banana", "Orange", 'Zoom', "Apple", "Agple", "Mango"];
// console.log((fruits.sort()).reverse());

// var num = [744, 542, 5455, 364, 645, 564, 464]
// var num2 = num.sort(function (a, b) {
//     return b - a;
// });

// console.log(num2);



//  TODO: 14. Function

// function myFunction() {
//     return 'Function has been called';
// }

// var result = myFunction()
// console.log(result);


// function add(a, b = 4) {
//     console.log(a, "a");
//     console.log(b, "b");
//     var result = a + b;
//     console.log(result);
// }

// add(5, 30)


// function add() {
//     // console.log(arguments);
//     // console.log(arguments[3]);

//     // for (const value of arguments) {
//     //     console.log(value);
//     // }
//     var total = 0
//     for (const value of arguments) {
//         total = total + value;
//         console.log(total);
//     }
//     console.log(total);
// }

// add(5, 30, 5, 320, 5, 30, 5, 30, 5, 30, 5, 30, 5, 30, 5, 30, 5, 30, 5, 30, 5, 30, 5, 30, 5, 30)


// var x = 10;

// console.log(x);


// var myFunc = function () {
//     console.log(2 + 2);
// }
// myFunc()


// var myFunc = () => {
//     console.log(2 + 2)

// }
// // myFunc()


// var add = function (a, b) {
//     return a + b;
// }
// // console.log(add(2, 3));


// var addWithArrow = (a, b) => a + b
// // console.log(addWithArrow(2, 3));

// var addWithArrow = () => 'called';
// // console.log(addWithArrow());


// var square = a => a * a;
// console.log(square(10));

// var squareRoot = a => Math.sqrt(a);
// console.log(square(81));

// var num = 0
// var smartFunction = () => {
//     console.log("Hasan", num);
//     console.log("Rokibul");
//     num++

//     if (num == 5) {
//         return 0;
//     } else {
//         smartFunction()
//     }
// }

// smartFunction()

