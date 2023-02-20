console.log("helloo js 9");

//-------------------------------------------------------------------------------------------------------------onclick

function myFunction11(element , myColor){
    element.style.color = myColor;
    element.style.fontWeight="bold";

    document.getElementById("field2").style.color="skyblue";
    document.getElementById("field1").style.color="yellowgreen";

    document.getElementById("field2").value=document.getElementById("field1").value;
}

//------------------------------------------------------------------------------------------------------------------onclick

//https://www.w3schools.com/jsref/event_onclick.asp

//https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_onclick_win


const userColor=document.getElementById("userColor");

window.onclick = myFunctionChangeBackgroundColor;

function myFunctionChangeBackgroundColor() {
  document.getElementsByTagName("BODY")[0].style.backgroundColor = userColor.value;
}

//---------------------------------------------------------------------------------------------------------onclick

// Get the button, and when the user clicks on it, execute myFunction
document.getElementById("myBtn").onclick = function() {myFunctionDropdown()};

/* myFunctionDropdown toggles between adding and removing the show class, which is used to hide and show the dropdown content */
function myFunctionDropdown() {
  document.getElementById("myDropdown").classList.toggle("show");
}