//arithmetic operators
let x = 10;
let y = 5;
console.log(x + y); // 15
console.log(x - y); // 5
console.log(x * y); // 50
console.log(x / y); // 2
console.log(x % y); // 0
//assignment operators

let a = 10;
a += 5; // a = a + 5
console.log(a); // 15
a -= 3; // a = a - 3
console.log(a); // 12
a *= 2; // a = a * 2
console.log(a); // 24
a /= 4; // a = a / 4
console.log(a); // 6
a %= 5; // a = a % 5
console.log(a); // 1    
//comparison operators
let p = 10;
let q = 5;
console.log(p == q);    // false
console.log(p != q);    // true     
console.log(p > q);     // true
console.log(p < q);     // false
console.log(p >= q);    // true
console.log(p <= q);    // false    
//logical operators
let isTrue = true;
let isFalse = false;
console.log(isTrue && isFalse); // false
console.log(isTrue || isFalse); // true
console.log(!isTrue); // false  
console.log(!isFalse); // true
//ternary operator
let age = 18;
let canVote = (age >= 18) ? "Yes" : "No";
console.log(canVote); // Yes    
//typeof operator
let str = "Hello";
let num = 42;
let bool = true;
console.log(typeof str); // string
console.log(typeof num); // number
console.log(typeof bool); // boolean    
//instanceof operator
class Person {}         
let person = new Person();
console.log(person instanceof Person); // true
console.log(person instanceof Object); // true
//delete operator
let obj = { name: "John", age: 30 };
console.log(obj);   // { name: "John", age: 30 }    
delete obj.age;
console.log(obj);   // { name: "John" } 
//void operator
function myFunction() {
    console.log("This function does not return anything.");
}
myFunction(); // This function does not return anything.
console.log(void myFunction()); // undefined    
//spread operator
let arr1 = [1, 2, 3];
let arr2 = [...arr1, 4, 5];
console.log(arr2); // [1, 2, 3, 4, 5]   
let obj1 = { a: 1, b: 2 };
let obj2 = { ...obj1, c: 3 };
console.log(obj2); // { a: 1, b: 2, c: 3 }
//rest operator
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}   
console.log(sum(1, 2, 3)); // 6
console.log(sum(4, 5));    // 9
//nullish coalescing operator
let value = null;
let defaultValue = "Default";
let result = value ?? defaultValue;
console.log(result); // Default 
value = "Actual Value";
result = value ?? defaultValue;
console.log(result); // Actual Value
//optional chaining operator
let user = {
    name: "Alice",  
    address: {
        city: "New York"
    }
};
console.log(user?.address?.city); // New York
console.log(user?.contact?.email); // undefined 

