Declare Array

const myArray = ["Hello","World"]
const firstElement = myArray[0]; // First element
const lastElement = myArray[myArray.length - 1]; // Last element
const middleElement = myArray[Math.floor(myArray.length


console.log("First Element:", firstElement);
console.log("Last Element:", lastElement);
console.log("Middle Element:", middleElement);

Array StylePropertyMap
const arrayLength = myArray.length; 
console.log("Array Length:", arrayLength)

myArray.push("New Element"); 
console.log("After push:", myArray);

myArray.pop();
console.log

myArray.unshift()); 
console.log

myArray.shift();
console.log

myArray[1] =  
console.log

console.log
for (let i = 0; i < myArray.length; i++) {
    console.log(myArray[i]);
}

console.log("Using forEach:")
myArray.forEach((element) => {
    console.log(element);
});

Destructuring
const [first, second, ...rest] = myArray;
console.log("First:", first);
console.log("Second:", second);
console.log("Rest of the array:", rest);


