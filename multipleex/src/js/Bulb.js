import React , {useState} from "react";
import '../App.css';


function Bulb(props){

  //destructurare props
  const {propColor , propNr , propText}=props;
  console.log("props are: " , propColor , propNr , propText);

  //---------------------------------
//discord 16.05 2022 grup general

const style = {
  width:"100px",
  height:"100px",
  border:"solid #333 3px",
  borderRadius:"50%",
  display:"flex",
  justifyContent: "center",
  alignItems:"center"
}

//---------------------------------

const [bulbState,setBulbState] = useState(false);

const handleClick=(event , statusParam) =>{
  event.preventDefault();
  console.log("event",event.target);
  console.log("status",statusParam);
  setBulbState(statusParam);
}

  //----------------------------------

return(<>

  <article style={{border:`1px solid ${propColor}` , padding:'0.5em' , margin:'1em', color:propColor}}>
  <h1 style={{border:`1px solid ${propColor}` , padding:'0.5em' , margin:'1em', color:propColor}}>function component is : {propText}</h1>
  </article>


<div className="container" style={{...style, backgroundColor:(bulbState ? "yellow" : "white")}}>

<button onClick={(event) => handleClick(event , !bulbState)}>{bulbState ? "Off" : "On"}</button>
</div>


  </>);

}

export default Bulb;
