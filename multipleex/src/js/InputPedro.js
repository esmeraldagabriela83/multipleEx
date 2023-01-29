import React , {useState} from "react";
import '../App.css';


function InputPedro(props){

  //destructurare props
  const {propColor , propNr , propText}=props;
  console.log("props are: " , propColor , propNr , propText);

//----------------------------------

//----------------------------------
return(<>

  <article style={{border:`1px solid ${propColor}` , padding:'0.5em' , margin:'1em', color:propColor}}>
  <h1 style={{border:`1px solid ${propColor}` , padding:'0.5em' , margin:'1em', color:propColor}}>function component is : {propText}</h1>
  </article>


<article style={{border:`1px solid ${propColor}` , padding:'0.5em' , margin:'1em', color:propColor}}>

<label htmlFor="abc">Write a string</label><br></br>
<input type="text" id="abc" name="string"/>

</article>


  </>);

}

export default InputPedro;
