import React , {useState} from "react";
import '../App.css';


function CounterPedro2(props){

  //destructurare props
  const {propColor , propNr , propText}=props;
  console.log("props are: " , propColor , propNr , propText);

  //---------------------------------
const [count2 , setCount2]=useState(0);
  //----------------------------------

  const handleIncreaseCount2=(event) =>{
    event.preventDefault();
    setCount2(count2 + 1);
  }

  //----------------------------------------

  const handleDecreaseCount2=(event) =>{
    event.preventDefault();
    setCount2(count2 - 1);
  }

  //----------------------------------------


  const handleResetCount2=(event) =>{
    event.preventDefault();
    setCount2(0);
  }


//---------------------------------------

return(<>

  <article style={{border:`1px solid ${propColor}` , padding:'0.5em' , margin:'1em', color:propColor}}>
  <h1 style={{border:`1px solid ${propColor}` , padding:'0.5em' , margin:'1em', color:propColor}}>function component is : {propText}</h1>
  </article>



    <article style={{border:`1px solid ${propColor}` ,
                     padding:'0.5em' ,
                     margin:'1em',
                     color:propColor,
                     backgroundColor:(count2 === 0 ? "pink" : "yellowgreen")}}>

       <h3>count2 is : {count2}</h3>

       <button onClick={handleIncreaseCount2}>Increase</button>
       <button onClick={handleDecreaseCount2}>Decrease</button>
       <button onClick={handleResetCount2}>Set to initial state</button>
        
    </article>

  </>);

}

export default CounterPedro2;
