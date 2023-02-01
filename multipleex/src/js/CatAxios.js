import React , {useState , useEffect} from "react";
import Axios from "axios";
import '../App.css';


function CatAxios(props){

  //destructurare props
  const {propColor , propNr , propText}=props;
  console.log("props are: " , propColor , propNr , propText);

//-----------------


const [mycat , setMycat]=useState("");

    //--------------------------------------------------

const handleCatFact =(event) =>{
    // event.preventDefault();
     console.log("you clicked to show cat info");

     Axios.get("https://catfact.ninja/fact").then((response) =>{
        console.log("//// cat response.data" , response.data);
        console.log(typeof(response));
        console.log(typeof(response.data));
        console.log(response.data.fact)

        setMycat(response.data.fact);
    })
    

}

useEffect(() =>{
    handleCatFact();
} , [])


    //---------------------------------------------------------
return(<>

  <article style={{border:`1px solid ${propColor}` , padding:'0.5em' , margin:'1em', color:propColor}}>
  <h1 style={{border:`1px solid ${propColor}` , padding:'0.5em' , margin:'1em', color:propColor}}>function component is : {propText}</h1>
  </article>


<p>{mycat}</p>

<button onClick={handleCatFact}>show cat fact</button>


  </>);

}

export default CatAxios;
