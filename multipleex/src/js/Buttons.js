import React , {useState} from "react";

function Buttons(props){


  //destructurare props
  const {propColor , propNr , propText}=props;
  console.log("props are: " , propColor , propNr , propText);

  //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

  const [valueUser , setValueUser]=useState("initial string code");

const [paragraphString , setParagraphString]=useState("default string");

//----------------------------------------------------------------------------------------------------------------

const handleInputChange=(event)=>{
    event.preventDefault();
    console.log(event.target.value);

    setValueUser(event.target.value);
}

//-------------------------------------------------

  const handleShowMyText=(event) =>{
    event.preventDefault();
    console.log("you clicked btn to show string");

    setParagraphString(valueUser);
  }

  //------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

  return(
    <>
  <article style={{border:`1px solid ${propColor}` , padding:'0.5em' , margin:'1em', color:propColor}}>
  <h1 style={{border:`1px solid ${propColor}` , padding:'0.5em' , margin:'1em', color:propColor}}>function component is : {propText}</h1>
  </article>

  <label htmlFor="userInputText123"></label><br></br>
  <input type="text" name="userText" id="userInputText123" onChange={handleInputChange}/><br></br>

  <button onClick={handleShowMyText}>show my string</button>

  <p>{valueUser}</p>

  <h3>{paragraphString}</h3>

    </>
  );


}

export default Buttons;