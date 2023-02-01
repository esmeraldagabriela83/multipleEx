import React, { useState , useEffect } from "react";
import Axios from "axios";
import '../App.css';


function Agify(props){

  //destructurare props
  const {propColor , propNr , propText}=props;
  console.log("props are: " , propColor , propNr , propText);

  //----------------------------------

  const [username , setUserame]=useState("");

  const [predictedObj , setPredictedObj]=useState({
    age:0,
    count:0,
    name:""
  });

  const handlePredictedAge=(event) =>{
    event.preventDefault();
    setUserame(event.target.value);
  }

  ///////////////////////////

  //------------------------------------------
const handleGetObj=(event) =>{
    //event.preventDefault();
    console.log("you clicked to show age for the written name in input");


    //--------------------



    //----------------------

    Axios.get(`https://api.agify.io/?name=${username}`).then((response) => {
        console.log("----response.data is : " , response.data);
        console.log(typeof(response.data));
        console.log(response.data.age);
        console.log(response.data.count);
        console.log(response.data.name);
        

        setPredictedObj(response.data);
    
    });

    //----------------------  
}

  //-------------------------------------

  useEffect(() =>{
    handleGetObj();
  },[]);

  //-------------------------------------------

return(<>

  <article style={{border:`1px solid ${propColor}` , padding:'0.5em' , margin:'1em', color:propColor}}>
  <h1 style={{border:`1px solid ${propColor}` , padding:'0.5em' , margin:'1em', color:propColor}}>function component is : {propText}</h1>
  </article>

<label htmlFor="name123">your name:</label><br></br>
<input type="text" name="name" id="name123" onChange={handlePredictedAge}/><br></br>

<button onClick={handleGetObj}>predict obj person</button>

<p>input value from user: {username}</p>

<p>Age average: {predictedObj.age}</p>
<p>Count average: {predictedObj.count}</p>
<p>Name average: {predictedObj.name}</p>

  </>);

}

export default Agify;
