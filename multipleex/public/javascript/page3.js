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
obj2.aKey="modificare proprietate a";

console.log("obj2 second console is : " , obj2);
console.log("obj4 second console is : " , obj4);

