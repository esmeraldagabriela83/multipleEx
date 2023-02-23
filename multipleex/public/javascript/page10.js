console.log("hello fro js 10");

//https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_onmouseover_dom
//
//https://www.w3schools.com/jsref/event_onmouseover.asp
//js 7

//https://www.w3schools.com/jsref/event_onmouseover.asp


const demoMouseOver=document.getElementById("demoMouseOver");
demoMouseOver.style.padding="1em";
demoMouseOver.style.margin="1em";
demoMouseOver.style.border="1px solid tomato";

demoMouseOver.addEventListener("mouseover" , function(event){
    demoMouseOver.style.color="tomato";
});

demoMouseOver.addEventListener("mouseout" , function(event){
    demoMouseOver.style.color="black";
});

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------

//https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_onmouseover_addeventlistener

const demoMouseOver2=document.getElementById("demoMouseOver2");
demoMouseOver2.style.padding="1em";
demoMouseOver2.style.margin="1em";
demoMouseOver2.style.border="1px solid yellowgreen";

demoMouseOver2.addEventListener("mouseover" , funcMouseover);

function funcMouseover(){
    demoMouseOver2.style.color="yellowgreen";
}

demoMouseOver2.addEventListener("mouseout" , funcMouseOut);

function funcMouseOut(){
    demoMouseOver2.style.color="black";
}

//-------------------------------------------------------------------------------------------------------

const demo3=document.getElementById("demo3");

demo3.style.padding="1em";
demo3.style.margin="1em";
demo3.style.border="1px solid cornflowerblue";
demo3.style.fontSize="1.5rem";

demo3.onmouseover=function(event){
event.preventDefault();
demo3.style.color="cornflowerblue";
demo3.style.fontWeight="bold";
}

demo3.onmouseout=function(event){
    event.preventDefault();
    demo3.style.color="black";
    demo3.style.fontWeight="normal";
}

//-----------------------------------------------------------------------------------------------------------

const demo4=document.getElementById("demo4");
demo4.style.padding="1em";
demo4.style.margin="1em";
demo4.style.border="1px solid cyan";
demo4.style.fontSize="1.5rem";

demo4.onmouseover=function(){myFuncOnMouseOver()};

function myFuncOnMouseOver(){
    
    demo4.style.backgroundColor="pink";
};

demo4.onmouseout=function(){myFuncOnMouseOut()};

function myFuncOnMouseOut(){
    
    demo4.style.backgroundColor="red";
}

//----------------------------------------------------------------------------------------------------

const demo5=document.getElementById("demo5");
demo5.style.padding="1em";
demo5.style.margin="1em";
demo5.style.border="1px solid darkmagenta";
demo5.style.fontSize="1.5rem";

demo5.addEventListener("click" , function(event){
    event.preventDefault();
    demo5.style.color="green";
});

demo5.addEventListener("mouseout" , function(event){
    event.preventDefault();
    demo5.style.color="black";
});

//--------------------------------------------------------------------------------------------------------

const demo6=document.getElementById("demo6");
demo6.style.color="darkcyan";

demo6.innerText="lorem ipsum 1 text default";

demo6.addEventListener("mouseover" , function(event){
    event.preventDefault();
    demo6.innerText="lorem ipsum 2 mouseover text";
    demo6.style.color="olive";
});

demo6.addEventListener("mouseout" , function(event){
    event.preventDefault();
    demo6.innerText="lorem ipsum 3 mouseout text";
    demo6.style.color="tomato";
});