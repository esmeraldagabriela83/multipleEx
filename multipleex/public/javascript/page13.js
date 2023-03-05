console.log("hello from page 13 js");


//https://www.w3schools.com/jsref/jsref_push.asp
//https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_push

const fruits = ["Banana", "Orange", "Apple", "Mango"];

fruits.push("myFruit1");
fruits.push("myFruit2");

console.log("fruits after push" , fruits);

const demoFuits1=document.getElementById("demoFuits1");

demoFuits1.innerText=fruits.join();

