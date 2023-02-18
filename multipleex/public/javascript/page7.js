console.log("hello from js.7");

//https://www.w3schools.com/jsref/jsref_obj_date.asp

const demoDate=document.getElementById("demoDate");

demoDate.style.border="1px solid indigo";
demoDate.innerHTML=new Date(2018, 11, 24, 10, 33, 30, 0);


/////callback function curs 26 ES6 programare functionala:map , filter, forEach , reduce

// addEventListener("click" , callbackfunction(event){
//     event.preventDefault();
// console.log(this);
// })

//setTimeout
//setInterval

//fat arrow function 15 04 2022

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

const demoCallbackw3=document.getElementById("demoCallbackw3");

function myDisplayer(textParam) {
    console.log("textParam is : " , textParam);
    demoCallbackw3.innerHTML = textParam;
  }

  //myDisplayer("my text today");

  const helloBtn=document.getElementById("helloBtn");
  helloBtn.style.backgroundColor="Aquamarine";

  helloBtn.addEventListener("click" , function(event){
    event.preventDefault();
    this.style.backgroundColor="Khaki";
    //apel functie
    myDisplayer("Hello");
  })

 
//-----

const goodbyeBtn=document.getElementById("goodbyeBtn");
goodbyeBtn.style.backgroundColor="LightSteelBlue";


goodbyeBtn.addEventListener("click" , function(event){
    event.preventDefault();
    this.style.backgroundColor="MistyRose";
    //apel functie
    myDisplayer("Goodbye");
})


//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//callback function // o functie sau o metoda care apeleaza in interiorul ei o alta functie

//https://www.w3schools.com/jsref/event_onmouseover.asp

const titleCallback=document.getElementById("titleCallback");
titleCallback.style.border="1px solid indigo";
titleCallback.style.padding="1em";
titleCallback.style.margin="1em";
//---

const btnText1=document.getElementById("btnText1");
btnText1.addEventListener("click" , function(event){
    event.preventDefault();
    this.style.backgroundColor="NavajoWhite";
    titleCallback.innerText="my text 1";
})

//-----

const btnText2=document.getElementById("btnText2");
btnText2.addEventListener("click" , function(event){
    event.preventDefault();
    this.style.backgroundColor="plum";
    titleCallback.innerText="my text 2";
})

//-----------------------------------------------------------------------------------------------------

//https://www.w3schools.com/jsref/met_element_addeventlistener.asp

const pW3School=document.getElementById("pW3School");

const showBtn=document.getElementById("showBtn");

showBtn.addEventListener("click" , callbackFunc);

function callbackFunc(){
    pW3School.innerText="w 3 school after";
}

//----------------------------------------------------------------------------------------------------------

function displayText(paramText){
    console.log("paramText is : " , paramText);
    document.getElementById("changeableText").innerText=paramText;
}

displayText("initial text string");

document.getElementById("change1btn").addEventListener("click" , callback1Func);

function callback1Func(){
    //apel functie
    displayText("my change 1");
}

//---

document.getElementById("change2btn").addEventListener("click" , callback2Func);

function callback2Func(){
    //apel functie
    displayText("my change 2");
}


//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

const nr1=document.getElementById("nr1");
const nr2=document.getElementById("nr2");



//Sequence Control
const changeable2text = document.getElementById("changeable2text");
changeable2text.innerText="initial text";

//-----------------------

function myCalc(){
    console.log("sum is : " , parseInt(nr1.value) + parseInt(nr2.value));
    let sum=parseInt(nr1.value) + parseInt(nr2.value);
    return sum;
}


const showSum=document.getElementById("showSum");
showSum.addEventListener("click" , showCalc);

function showCalc(){
    //apel functie
    console.log(myCalc());
return changeable2text.innerText=myCalc();
}

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------

const userNr1=document.getElementById("userNr1");

const userNr2=document.getElementById("userNr2");

const showSumNrs=document.getElementById("showSumNrs");

const nrsSum=document.getElementById("nrsSum");

//---

showSumNrs.addEventListener("click" , function(event){
    event.preventDefault();

    console.log( parseInt(userNr1.value) + parseInt(userNr2.value) );

    return nrsSum.innerText=parseInt(userNr1.value) + parseInt(userNr2.value);
});

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------

//declarare variabile

const wnr1=document.getElementById("wnr1");

const wnr2=document.getElementById("wnr2");

const wBtnSum=document.getElementById("wBtnSum");

const wParagraphSum=document.getElementById("wParagraphSum");

//////////////////////////////////////get back here

//---------

function wmyDisplayer(some) {
    document.getElementById("wdemo").innerHTML = some;
  }
  
  function wmyCalculator(num1, num2) {
    let sum = num1 + num2;
    wmyDisplayer(sum);
  }
  
  wmyCalculator(5, 5);






  //https://www.w3schools.com/jsref/met_element_addeventlistener.asp

  //https://www.w3schools.com/jsref/event_onmouseover.asp

  //https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_onmouseover_addeventlistener