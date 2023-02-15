console.log("hello from page3.js");

//REST SE APLICA la parametri formali
//( ...) - paranteze rotunde = REST
//[...],{...} - acolade sau paranteze patrate = SPREAD


//---------------------------------------------------------------------(rest)------------------------------------------------------------------------------------------------------------------
//19042022---(rest) aplicat in parametri formali
const aParagraph=document.getElementById("aParagraph");
aParagraph.style.color="red";
aParagraph.style.fontWeight="bold";

const bParagraph=document.getElementById("bParagraph");
bParagraph.style.color="blue";
bParagraph.style.fontWeight="bold";

const restParagraph=document.getElementById("restParagraph");
restParagraph.style.color="green";
restParagraph.style.fontWeight="bold";


//args e nume dat de programator
function restMe(a,b,...args) {
    console.log("a",a);
    aParagraph.innerText=a;
    console.log("b",b);
    bParagraph.innerText=b;
    console.log("args este arr",args);
    restParagraph.innerText=args.join(" , ");
}

restMe(1,2,3,4,5,6,7,8);
//!!!operatorul REST se aplica doar la "ultimul" parametru


//-------------------------------------------------------------------(rest)---------------------------------------------------------------------------------------------------------------------
//19042022---(rest) aplicat in parametri formali

//toti parametri formali sunt nedeterminati
//intotdeauna parametrul
//peste care se aplica REST
//!!!Va fi array
function getAverage(...params){
    console.log("from inside getAverage function params.length" , params.length);
    var sum = params.reduce((acc,el)=> acc + el,0);
    if(params.length > 0) {
      return sum/params.length;
    } else {
      return 0;
    }
  }
  

  //apel functie ce primeste ca parametru real arr:1,2,3,6

  var avg1 = getAverage(1,2,3,6);
  console.log("avg1",avg1);

const avg1Paragraph=document.getElementById("avg1Paragraph");
avg1Paragraph.innerText=avg1;
avg1Paragraph.style.color="gold";

//apel functie ce primeste ca parametru real arr:10,20,30,60

const avg2Paragraph=document.getElementById("avg2Paragraph");
avg2Paragraph.innerText=getAverage(10,20,30,60);
avg2Paragraph.style.color="magenta";

//-----------------------------------------------------------spread arr--------------------------------------------------------------------------------------------------------------------------
//19042022

let namesA = ["Zosia", "Marcin", "Kamil"];
console.log("namesA is : " , namesA);
let namesB = ["Ala", ...namesA, "Jan", "Karol" ];
console.log("namesB is : " , namesB);

const namesAparagraph=document.getElementById("namesAparagraph");
namesAparagraph.innerText=namesA.join(" , ");
namesAparagraph.style.color="red";

const namesBparagraph=document.getElementById("namesBparagraph");
namesBparagraph.innerText=namesB.join(" , ");
namesBparagraph.style.color="blue";

//-------------------------------------------------------------spread obj------------------------------------------------------------------------------------------------------------

const obj2={
    aKey:"proprietate a",
    bKey:"proprietate b",
    cKey:"proprietate c",
};

console.log("obj2 is : " , obj2);

const obj4={...obj2};
obj2.aKey="MODIFICARE proprietate a";

console.log("obj2 second console is : " , obj2);
console.log("obj4 second console is : " , obj4);
console.log("keys:" , Object.keys(obj2));
console.log("values:" , Object.values(obj2));

const obj2id=document.getElementById("obj2id");
obj2id.innerText=Object.keys(obj2).join(" , ") + " : " + Object.values(obj2).join(" , ");

const obj4id=document.getElementById("obj4id");
obj4id.innerText=Object.keys(obj4).join(" , ") + " : " + Object.values(obj4).join(" , ");

//ex 3 rest spread 19042022

let people = [{
  person: "Kim Yoo Suk",
  profession: "vaulter"
},
{
  person: "Sue Yoo",
  profession: "lawyer"
},
{
  person: "Dr. Alden Cockburn",
  profession: "urologist"
},
{
  person: "Rusty Kuntz",
  profession: "coach"
}
];

console.log("people array original is : " , people);

//adauga elemente in arr people

const newPeople = [...people];
console.log("new people array is : ", newPeople);

function setFunnyName(...args) {
  console.log("---my args : ", args);
  args.forEach(element => {
    newPeople.push(element);
  });
}

//apel functie
setFunnyName({
  person: "a",
  profession: "b"
}, {
  person: "c",
  profession: "d"
}, {
  person: "e",
  profession: "f"
});
console.log("---new people array after function call is : ", newPeople);


//apel functie
setFunnyName({
  person: "aa",
  profession: "bb"
}, {
  person: "cc",
  profession: "dd"
}, {
  person: "ee",
  profession: "ff"
});


//afiseaza elementele din people arr

const peopleDivs=newPeople.map((el , index) =>{

let divSinglePerson=document.createElement("div");

divSinglePerson.style.border="3px solid indigo";
divSinglePerson.style.padding="1em";
divSinglePerson.style.margin="1em";
divSinglePerson.innerText=el.person + " has the profession of " + el.profession;

//map are intotdeauna return
  return divSinglePerson;
});

const peopleArticle2=document.createElement("article");
peopleArticle2.style.border="3px solid yellowgreen";
peopleArticle2.style.padding="1em";
peopleArticle2.style.margin="1em";

peopleDivs.forEach((el , index) =>{
  //el reprezinta fiecare divSinglePerson
  peopleArticle2.appendChild(el);
});

const peopleSection=document.getElementById("peopleSection");
peopleSection.style.border="3px solid green";
peopleSection.style.padding="1em";
peopleSection.style.margin="1em";

peopleSection.appendChild(peopleArticle2);



