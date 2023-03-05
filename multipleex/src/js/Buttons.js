import React , {useState} from "react";

function Buttons(props){

  //09.05.2022

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


  //------------------------------------------------

const firstButtonClick=(event)=>{
  event.preventDefault();

  console.log("you clicked the nr 1 btn");
}

//------------------------------------------------------

const secondButtonClick = (event) =>{
  const a = parseInt(prompt("A:"));
  const b = parseInt(prompt("B:"));

  console.log(`${a}^${b} = ${Math.pow(a,b)} `);
}

//-----------------------------------------------------------

const thirdButtonClick = (event) =>{
  console.log(window.innerHeight, window.innerWidth);


  console.log("window.innerHeight is : " , window.innerHeight);
  console.log("window.innerWidth is : " , window.innerWidth);
}

  //------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

  return(
    <>
  <article style={{border:`1px solid ${propColor}` , padding:'0.5em' , margin:'1em', color:propColor}}>
  <h1 style={{border:`1px solid ${propColor}` , padding:'0.5em' , margin:'1em', color:propColor}}>function component is : {propText}</h1>
  </article>

<article style={{border:`1px solid ${propColor}` , padding:'0.5em' , margin:'1em', color:propColor}}>
  <label htmlFor="userInputText123"></label><br></br>
  <input type="text" name="userText" id="userInputText123" onChange={handleInputChange}/><br></br>

  <button onClick={handleShowMyText}>show my string</button>

  <p>{valueUser}</p>

  <h3>{paragraphString}</h3>
</article>

<article style={{border:`1px solid ${propColor}` , padding:'0.5em' , margin:'1em', color:propColor}}>

<button onClick={firstButtonClick}>Button 1 Click!</button>

<button onClick={secondButtonClick}>Button 2 Click!</button>

<button onClick={thirdButtonClick}>Button 3 Click! innerWidth / innerHeight</button>

</article>

    </>
  );


}

export default Buttons;