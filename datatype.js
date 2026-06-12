// numbers
let num1 = 10;
let num2 = 20;
console.log(num1 + num2); // 30 
console.log(num1 - num2); // -10
console.log(num1 * num2); // 200
console.log(num1 / num2); // 0.5
console.log(num1 % num2); // 10 
// strings
let str1 = "Hello";
let str2 = "World";
console.log(str1 + " " + str2); // Hello World
console.log(str1.length); // 5
console.log(str1.toUpperCase()); // HELLO
console.log(str1.toLowerCase()); // hello
console.log(str1.charAt(0)); // H
// booleans
let isTrue = true;      
let isFalse = false;
console.log(isTrue); // true
console.log(isFalse);   // false
console.log(isTrue && isFalse); // false
console.log(isTrue || isFalse); // true 
console.log(!isTrue); // false
console.log(!isFalse);  // true 
// arrays
let arr = [1, 2, 3, 4, 5];
console.log(arr);   // [1, 2, 3, 4, 5]
console.log(arr.length);    // 5
console.log(arr[0]);    // 1
console.log(arr[4]);    // 5        
arr.push(6);
console.log(arr);   // [1, 2, 3, 4, 5, 6]
arr.pop();
console.log(arr);   // [1, 2, 3, 4, 5]  
arr.unshift(0);
console.log(arr);   // [0, 1, 2, 3, 4, 5]
arr.shift();
console.log(arr);   // [1, 2, 3, 4, 5]  
// objects
let obj = { name: "John", age: 30 };
console.log(obj);   // { name: "John", age: 30 }
console.log(obj.name);  // John
console.log(obj.age);   // 30   
obj.name = "Jane";
console.log(obj);   // { name: "Jane", age: 30 }
obj.city = "New York";
console.log(obj);   // { name: "Jane", age: 30, city: "New York" }  
delete obj.age;
console.log(obj);   // { name: "Jane", city: "New York" }   
// null and undefined
let nullValue = null;
let undefinedValue;
console.log(nullValue); // null
console.log(undefinedValue); // undefined   
// symbols
let sym1 = Symbol("sym");
let sym2 = Symbol("sym");
console.log(sym1); // Symbol(sym)
console.log(sym2); // Symbol(sym)
console.log(sym1 === sym2); // false    
// bigints
let bigInt1 = BigInt(12345678901234567890);
let bigInt2 = 12345678901234567890n;
console.log(bigInt1); // 12345678901234567890n
console.log(bigInt2); // 12345678901234567890n
console.log(bigInt1 === bigInt2); // true   
// undefined and null
let undefinedVar;
let nullVar = null;
console.log(undefinedVar); // undefined
console.log(nullVar); // null 
// NaN
let notANumber = NaN;
console.log(notANumber); // NaN
console.log(typeof notANumber); // number
console.log(isNaN(notANumber)); // true 
// Infinity
let positiveInfinity = Infinity;
let negativeInfinity = -Infinity;
console.log(positiveInfinity); // Infinity
console.log(negativeInfinity); // -Infinity
console.log(typeof positiveInfinity); // number
console.log(typeof negativeInfinity); // numb