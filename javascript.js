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

// single line comment 

/* 
multiline comment
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


// TODO: 1.Number
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

//  TODO:  string
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
var x = "Rokibul HasanRokibul HasanRokibul HasanRokibul HasanRokibul HasanRokibul HasanRokibul HasanRokibul HasanRokibul HasanRokibul HasanRokibul HasanRokibul HasanRokibul HasanRokibul HasanRokibul HasanRokibul HasanRokibul HasanRokibul HasanRokibul HasanRokibul HasanRokibul HasanRokibul HasanRokibul HasanRokibul HasanRokibul HasanRokibul HasanRokibul HasanRokibul HasanRokibul HasanRokibul HasanRokibul HasanRokibul HasanRokibul HasanRokibul HasanRokibul HasanRokibul HasanRokibul HasanRokibul HasanRokibul HasanRokibul HasanRokibul HasanRokibul HasanRokibul HasanRokibul HasanRokibul HasanRokibul HasanRokibul HasanRokibul HasanRokibul HasanRokibul HasanRokibul HasanRokibul HasanRokibul HasanRokibul HasanRokibul HasanRokibul HasanRokibul HasanRokibul HasanRokibul HasanRokibul HasanRokibul HasanRokibul HasanRokibul HasanRokibul na HasanRokibul HasanRokibul HasanRokibul HasanRokibul HasanRokibul HasanRokibul Hasan"
// console.log(x.substring(2, 7));
// console.log(x.substr(2, 3));

// console.log(x.indexOf("z"));
// console.log(x.includes("5"));
// console.log(x.lastIndexOf(''));
console.log(x.search());