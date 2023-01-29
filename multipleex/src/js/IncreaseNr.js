import React , {useState} from "react";
import '../App.css';




function IncreaseNr(props){

  //destructurare props
  const {propColor , propNr , propText}=props;
  console.log("props are: " , propColor , propNr , propText);

  //--------------------------------------

  const [nr , setNr]=useState(0);

  const handleIncreaseNr=(event) =>{
    event.preventDefault();
    console.log("you clicked to increase nr: " , nr);
    setNr(nr + 1);
  }

  //------------------------------------

return(<>

  <article style={{border:`1px solid ${propColor}` , padding:'0.5em' , margin:'1em', color:propColor}}>
    <h1 style={{border:`1px solid ${propColor}` , padding:'0.5em' , margin:'1em', color:propColor}}>function component is : {propText}</h1>
  </article>

<article style={{border:`1px solid ${propColor}` , padding:'0.5em' , margin:'1em', color:propColor}}>
    <p>nr is {nr}</p>
    <button onClick={handleIncreaseNr}>Increase NR by 1</button>
</article>


  </>);

}

export default IncreaseNr;
