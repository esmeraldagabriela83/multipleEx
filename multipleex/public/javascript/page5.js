console.log("hello from page5.js");
//REST SE APLICA la parametri formali
//( ...) - paranteze rotunde = REST
//[...],{...} - acolade sau paranteze patrate = SPREAD


//spread
let namesA = ["Zosia", "Marcin", "Kamil"];
let namesB = ["Ala", ...namesA, "Jan", "Karol" ];
console.log(namesB);

const namesAparagraph=document.getElementById("namesAparagraph");
namesAparagraph.innerText=namesA.join(" , ");
namesAparagraph.style.color="red";

const namesBparagraph=document.getElementById("namesBparagraph");
namesBparagraph.innerText=namesB.join(" , ");
namesBparagraph.style.color="green";

//DESTRUCTURARE ARRAY

let [first,second,third] = [0,1,2,4,5];
console.log(`first: ${first},second: ${second},third: ${third} `);

const arrLiDestructuringAll=document.querySelectorAll(".arrLiDestructuring");
console.log("arrLiDestructuringAll is : " , arrLiDestructuringAll);

const arrLiDestructuring1=document.getElementById("arrLiDestructuring1");
arrLiDestructuring1.innerText=first;
arrLiDestructuring1.style.color="yellowgreen";

const arrLiDestructuring2=document.getElementById("arrLiDestructuring2");
arrLiDestructuring2.innerText=second;
arrLiDestructuring2.style.color="green";

const arrLiDestructuring3=document.getElementById("arrLiDestructuring3");
arrLiDestructuring3.innerText=third;
arrLiDestructuring3.style.color="forestgreen";

//--------------------

//DESTRUCTURARE ARRAY-uri (2)

let [first1,,,last1] = [ "snow", "rain","test", "sun"];

console.log(`---first1 is ${first1}  and last1 is ${last1}`);

const first1paragraph=document.getElementById("first1paragraph");
first1paragraph.innerText=first1;
first1paragraph.style.color="tomato";

const last1paragraph=document.getElementById("last1paragraph");
last1paragraph.innerText=last1;
last1paragraph.style.color="green";



//-----------------------------------------destructurare obiect-------------------------------------------------------------------------------------------19042022
const obj = {
    test: 1, 
    testKey: 70, 
    more: "x",
    extraKey:"super"
};

const {testKey , extraKey} = obj;

console.log(`testKey : ${testKey}, extraKey: ${extraKey}`);

const testKeyParagraph=document.getElementById("testKeyParagraph");
testKeyParagraph.innerText=testKey;
testKeyParagraph.style.color="gold";

const extraKeyParagraph=document.getElementById("extraKeyParagraph");
extraKeyParagraph.innerText=extraKey;
extraKeyParagraph.style.color="cyan";

//DESTRUCTURARE OBJECT (2)
const {testKey: testKeyAlias, more} = obj;

console.log(`testKeyAlias : ${testKeyAlias}, more: ${more}`);

//------------

const slider = {
    type: "infinite",
    numberOfItems: 10,
    center: true,
    autoStart: true
}

const {type,autoStart} = slider;
console.log(`type ${type}, autoStart: ${autoStart}`);

//https://www.w3schools.com/react/react_es6_destructuring.asp

//Destructing Arrays
//Before:
const vehiclesBefore = ['mustang', 'f-150', 'expedition'];

// old way
const carBefore = vehiclesBefore[0];

const carBeforeParagraph=document.getElementById("carBeforeParagraph");
carBeforeParagraph.innerText=carBefore;
carBeforeParagraph.style.color="green";

const truckBefore = vehiclesBefore[1];

const truckBeforeParagraph=document.getElementById("truckBeforeParagraph");

truckBeforeParagraph.innerText=truckBefore;
truckBeforeParagraph.style.color="blue";

const suvBefore = vehiclesBefore[2];

const suvBeforeParagraph=document.getElementById("suvBeforeParagraph");
suvBeforeParagraph.innerText=suvBefore;
suvBeforeParagraph.style.color="gold";

//With destructuring:

const vehiclesDestructuring = ['mustang', 'f-150', 'expedition'];

const [carDestructuring, truckDestructuring, suvDestructuring] = vehiclesDestructuring;

//---
const carDestructuringParagraph=document.getElementById("carDestructuringParagraph");

carDestructuringParagraph.innerText=carDestructuring;
carDestructuringParagraph.style.color="green";

//----
const truckDestructuringParagraph=document.getElementById("truckDestructuringParagraph");

truckDestructuringParagraph.innerText=truckDestructuring;
truckDestructuringParagraph.style.color="blue";

//------

const suvDestructuringParagraph=document.getElementById("suvDestructuringParagraph");

suvDestructuringParagraph.innerText=suvDestructuring;
suvDestructuringParagraph.style.color="gold";

//------------------------------------------------------------------------------------------------------------------------

//https://www.w3schools.com/react/tryit.asp?filename=tryreact_es6_destructuring_array

function calculate(a, b) {
    const add = a + b;
    const subtract = a - b;
    const multiply = a * b;
    const divide = a / b;
  
    return [add, subtract, multiply, divide];
  }

  const [add, subtract, multiply, divide] = calculate(4, 7);

document.write("<p>Sum: " + add + "</p>");
document.write("<p>Difference " + subtract + "</p>");
document.write("<p>Product: " + multiply + "</p>");
document.write("<p>Quotient " + divide + "</p>");

//-----

const [add2, subtract2, multiply2, divide2] = calculate(42, 72);

const add2paragraph=document.getElementById("add2paragraph");
add2paragraph.innerText="add2 is : " + add2;

const subtract2paragraph=document.getElementById("subtract2paragraph");
subtract2paragraph.innerText=subtract2;

const multiply2paragraph=document.getElementById("multiply2paragraph");
multiply2paragraph.innerText=multiply2;

const divide2paragraph=document.getElementById("divide2paragraph");
divide2paragraph.innerText=divide2;

//----cata destructurare obiect 19 04 2022

const person = {
    name: "Vlad",
    lastName: "Popescu",
    yearOfBirth: 1431,
    proffesion: "Lord of Wallachia"
  };

  function whoAreYou(personObj) {
    //destructurare obiect
    const {name , lastName , yearOfBirth , proffesion} = personObj;
  
    return `My name is ${name} ${lastName} .
  I am ${(new Date()).getFullYear() - yearOfBirth} years old.
  My proffesion is ${proffesion}.`
  }
  
  console.log(whoAreYou(person));
  
  const personCata=document.getElementById("personCata");
  personCata.style.color="chocolate";
  personCata.innerText=whoAreYou(person);
  personCata.style.fontWeight="bold";

//https://www.w3schools.com/react/react_es6_destructuring.asp
//Destructuring Objects old way

const vehicleOne = {
    brand: 'Ford',
    model: 'Mustang',
    type: 'car',
    year: 2021, 
    color: 'red'
  }
  
  // old way
  function myVehicle(vehicle) {
    const message = 'My ' + vehicle.type + ' is a ' + vehicle.color + ' ' + vehicle.brand + ' ' + vehicle.model + '.';
    return message;
  }


   //apel functie
   myVehicle(vehicleOne);

  const vehicleOneParagraph=document.getElementById("vehicleOneParagraph");
  vehicleOneParagraph.innerText=myVehicle(vehicleOne);
  vehicleOneParagraph.style.color="yellowgreen";
  vehicleOneParagraph.style.fontWeight="bold";


  ///With destructuring:

  const vehicleDestructuring = {
    brand: 'Ford',
    model: 'Mustang',
    type: 'car',
    year: 2021, 
    color: 'red'
  }
  

  function myVehicleDestructuring({type, color, brand, model}) {
    const message = 'My ' + type + ' is a ' + color + ' ' + brand + ' ' + model + '.';
    return message;
  }

  const vehicleDestructuringParagraph=document.getElementById("vehicleDestructuringParagraph");
  vehicleDestructuringParagraph.innerText=myVehicleDestructuring(vehicleDestructuring);
  vehicleDestructuringParagraph.style.color="lime";
  vehicleDestructuringParagraph.style.fontWeight="bold";


  //------------------

  const vehicleDestruct = {
    brand: 'Ford',
    model: 'Mustang',
    type: 'car',
    year: 2021, 
    color: 'red',
    registration: {
      city: 'Houston',
      state: 'Texas',
      country: 'USA'
    }
  }
  

  
  function myVehicleDestruct({ model, registration: { state } }) {
    const message = 'My ' + model + ' is registered in ' + state + '.';
    return message;
  }

  const vehicleDestructParagraph=document.getElementById("vehicleDestructParagraph");
  vehicleDestructParagraph.innerText=myVehicleDestruct(vehicleDestruct);