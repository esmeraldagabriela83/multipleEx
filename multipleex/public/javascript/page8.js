console.log("helloo from page 8 js");

//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------



//https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_element_addeventlistener2

const myBtn1=document.getElementById("myBtn1");

myBtn1.addEventListener("click" , myFunction1);

function myFunction1(){
    const demo1=document.getElementById("demo1");
    demo1.innerText="hello text 1 from callback function";
    demo1.style.color="indigo";

    this.style.backgroundColor="yellowgreen";
    this.style.color="indigo";
}

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//https://www.w3schools.com/jsref/met_element_addeventlistener.asp

//https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_element_addeventlistener

const myBtn2=document.getElementById("myBtn2");

myBtn2.addEventListener("click" , function(event){
    event.preventDefault();
    demo2.innerText="hello text 2 from callback function";
    demo2.style.color="FireBrick";

    this.style.backgroundColor="pink";
    this.style.color="FireBrick";
})

//---------------------------------------------------------------------------onclick aplicat in html----------------------------------------------------------------------

//https://www.w3schools.com/jsref/event_onclick.asp

//https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_onclick

function myFunction3(){
    document.getElementById("demo3").innerText="hellow world 3";
    document.getElementById("demo3").style.backgroundColor="LightSeaGreen";
    document.getElementById("demo3").style.color="Darkorange";
    document.getElementById("demo3").style.fontWeight="bold";
    document.getElementById("demo3").style.letterSpacing="0.5em";
}

//------------------------------------------------------------------------------------------------------------------onclick

//https://www.w3schools.com/jsref/event_onclick.asp
//https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_onclick_color

function myFunction4(){
    document.getElementById("demo4").style.color="deeppink";
}

//------------------------------------------------------------------------------------------------------------------onclick

//https://www.w3schools.com/jsref/event_onclick.asp
//https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_onclick_color2

function myFunction5(element , myColor){
   element.style.color=myColor;
}

//------------------------------------------------------------------------------------------------------------------onclick

//https://www.w3schools.com/jsref/event_onclick.asp
//https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_onclick_color2


function myFunction6(element , myColor , myBgColor){
    element.style.color=myColor;
    element.style.backgroundColor=myBgColor;
}