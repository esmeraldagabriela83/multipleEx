import React , {useState} from "react";
import '../App.css';


function CounterPedro(props){

  //destructurare props
  const {propColor , propNr , propText}=props;
  console.log("props are: " , propColor , propNr , propText);

  //-----------------------------------
const [count , setCount]=useState(0);
  //-------------------------------------

return(<>

  <article style={{border:`1px solid ${propColor}` , padding:'0.5em' , margin:'1em', color:propColor}}>
  <h1 style={{border:`1px solid ${propColor}` , padding:'0.5em' , margin:'1em', color:propColor}}>function component is : {propText}</h1>
  </article>

  
<article style={{border:`1px solid ${propColor}` , padding:'0.5em' , margin:'1em', color:propColor}}>

<h3>{count}</h3>

<button onClick={(event) => setCount(count + 1)}>Increase</button>
<button onClick={(event) => setCount(count - 1)}>Decrease</button>
<button onClick={(event) => setCount(0)}>Set to initial value</button>

</article>


  </>);

}

export default CounterPedro;
