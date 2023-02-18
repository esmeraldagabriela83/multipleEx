console.log("hello from page 6.js");

//https://www.w3schools.com/react/react_es6_ternary.asp

//React ES6 Ternary Operator
//The ternary operator is a simplified conditional operator like if / else.

//Syntax: condition ? <expression if true> : <expression if false></expression>

//https://www.w3schools.com/react/tryit.asp?filename=tryreact_es6_ternary1

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------

//syntax

// if (condition1) {
//     //  block of code to be executed if condition1 is true
//   } else if (condition2) {
//     //  block of code to be executed if the condition1 is false and condition2 is true
//   } else {
//     //  block of code to be executed if the condition1 is false and condition2 is false
//   }

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------


function renderApp() {
    const demoTernaryOperator=document.getElementById("demoTernaryOperator");
demoTernaryOperator.style.color="green";
demoTernaryOperator.innerHTML="Welcome!";
  }
  
  function renderLogin() {
    const demoTernaryOperator=document.getElementById("demoTernaryOperator");
    demoTernaryOperator.style.color="red";
    demoTernaryOperator.innerHTML="Please log in!";
  }

  let authenticated = false;

  if (authenticated) {
    renderApp();
  } else {
    renderLogin();
  }

  //--------------------AddEventListener cu callBackFunction

  const userString=document.getElementById("userString");
  userString.style.border="3px solid green";
  userString.style.padding="0.5em";
  userString.style.margin="0.5em";
  userString.style.width="50%";

  const displayUserString=document.getElementById("displayUserString");

  const clickToDisplay=document.getElementById("clickToDisplay");
  clickToDisplay.style.border="3px solid indigo";
  clickToDisplay.style.width="25%";
  clickToDisplay.addEventListener("click" , function(event){
     event.preventDefault();

     this.style.color="forestgreen";

     console.log(userString.value);
     displayUserString.innerText=userString.value;
     displayUserString.style.color="green";
     displayUserString.style.fontWeight="bold";
  });

  //------------------------------------------------------------------------------------------------------------------------------------------------------------

const userNr=document.getElementById("userNr");

const clickToDisplayNr=document.getElementById("clickToDisplayNr");

const displayUserStringNr=document.getElementById("displayUserStringNr");

clickToDisplayNr.addEventListener("click" , function(event){
    event.preventDefault();

    console.log("userNr.value is : " , userNr.value);

    if(userNr.value > 100){
       console.log("your value nr is more than 100");
       displayUserStringNr.innerText=userNr.value;
       displayUserStringNr.style.color="yellowgreen";
       displayUserStringNr.style.fontWeight="bold";
    }else if(userNr.value == 100){
        console.log("your value nr is equal to 100");
        displayUserStringNr.innerText=userNr.value;
        displayUserStringNr.style.color="lime";
        displayUserStringNr.style.fontWeight="bold";
    }else{
        console.log("your value nr is less than 100");
        displayUserStringNr.innerText=userNr.value;
        displayUserStringNr.style.color="green";
        displayUserStringNr.style.fontWeight="bold";
    }
});

//----------------------------------------------------------------------------------------------------------------------------------------------------------------
//get input
const ageNrVote=document.getElementById("ageNrVote");
ageNrVote.style.border="1px solid gold";

//get btn
const btnClickVote=document.getElementById("btnClickVote");
btnClickVote.style.border="1px solid deeppink";

//get paragraph
const paragraphVote=document.getElementById("paragraphVote");
paragraphVote.style.border="1px solid yellowgreen";

//-----------

function more18(paramUserVal){
    console.log("more= 18");
    console.log(`you can vote , your age is ${paramUserVal}`);
};

function less18(paramUserVal){
    console.log("less 18");
    console.log(`you can not vote , your age is ${paramUserVal}`);
};


btnClickVote.addEventListener("click" , function(event){
    event.preventDefault();
    console.log("when clicking on btn , ageNrVote.value is : " , ageNrVote.value);

    if(ageNrVote.value >= 18){
        more18(ageNrVote.value);
        paragraphVote.innerText="you can vote. your age is : " + ageNrVote.value;
        paragraphVote.style.color="green";
    }else{
        less18(ageNrVote.value);
        paragraphVote.innerText="you can not vote. your age is : " + ageNrVote.value;
        paragraphVote.style.color="red";
    }

});

//-------------------------https://www.w3schools.com/js/js_if_else.asp
//-------------------------https://www.w3schools.com/js/tryit.asp?filename=tryjs_elseif

const demotime=document.getElementById("demotime");
demotime.style.border="1px solid magenta";
demotime.style.fontWeight="bold";

const time = new Date().getHours();
let greeting;

if (time < 10) {
    greeting = "Good morning";
  } else if (time < 20) {
    greeting = "Good day";
  } else {
    greeting = "Good evening";
  }

  demotime.innerText=greeting;

//https://www.w3schools.com/react/tryit.asp?filename=tryreact_es6_ternary2

//-------------------------------------------------------------------------
//------------------------------------------------------With Ternary ///is working get to 15 04 2022 call back func

//get input
const carInput=document.getElementById("carInput");

//get btn
const carBtn=document.getElementById("carBtn");

//get paragraph
const carParagraph=document.getElementById("carParagraph");

//get func paragraph
const carParagraphFunc=document.getElementById("carParagraphFunc");


  function noMoney(paramUser){
    console.log("paramUser is : " , paramUser);
    console.log(`you can not buy a car . money is : ${paramUser}`);

    carParagraphFunc.innerText="no buy car";
  }

  function yesMoney(paramUser){
    console.log("paramUser is : " , paramUser);
    console.log(`you can buy a car . money is : ${paramUser}`);

    carParagraphFunc.innerText="yes buy car";
  }



  carBtn.addEventListener("click" , function(event){
    event.preventDefault();

      //---
  let userMoney;

  if(carInput.value >= 500){
    userMoney=true;
  }else{
    userMoney=false;
  }
  //---

    console.log("carInput is : " , carInput.value);

    userMoney ? carParagraph.innerText="yes, you may buy a car" : carParagraph.innerText="no, you can not buy a car";

    userMoney ? yesMoney(carInput.value) : noMoney(carInput.value);

  })

  //---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

  //13 04 2022

  //exemplu didactic

function testX(a,b){
  if( a > b) {
    return function(x){
      return a + x;
    }
  } else {
    return function(x){
      return b + x;
    }
  }
};
var z = testX(2,4);


console.log("ZZZ = ",z,z(5));

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

function myTest(a , b , x){
  if(a > b){
    return a + x ;
  }else{
    return b + x ;
  }
};

var myz=myTest(100 , 200 , 300);
console.log("myz is : " , myz);

var myzz=myTest(700 , 50 , 100);
console.log("myzz is : " , myzz);