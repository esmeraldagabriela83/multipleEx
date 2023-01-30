import React , {useState} from "react";
import '../App.css';


function InputPedro(props){

  //destructurare props
  const {propColor , propNr , propText}=props;
  console.log("props are: " , propColor , propNr , propText);

//-------------------------------------------

const [userString , setUserString]=useState();

//----------------------------------

const handleInfoFromInput=(event) =>{
  event.preventDefault();

console.log(event.target.value);
setUserString(event.target.value);
}

const handleBtnShowText=(event) =>{
  event.preventDefault();

  console.log("you clicked the button to show the input string");

  const paragraphInputString=document.getElementById("paragraphInputString");
  paragraphInputString.innerText=userString;
  paragraphInputString.style.color="tomato";
  paragraphInputString.style.fontWeight="bold";
  
}




//----------------------------------
return(<>

  <article style={{border:`1px solid ${propColor}` , padding:'0.5em' , margin:'1em', color:propColor}}>
    <h1 style={{border:`1px solid ${propColor}` , padding:'0.5em' , margin:'1em', color:propColor}}>function component is : {propText}</h1>
  </article>


  <article style={{border:`1px solid ${propColor}` , padding:'0.5em' , margin:'1em', color:propColor}}>

    <label htmlFor="abc">Write a string</label><br></br>
    <input type="text" id="abc" name="string" onChange={handleInfoFromInput}/>
    <h3>{userString}</h3>

    <button onClick={handleBtnShowText}>show your string</button>

    <p id="paragraphInputString"></p>

  </article>




  </>);

}

export default InputPedro;
