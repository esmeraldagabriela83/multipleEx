
import React, { useState , useEffect } from "react";
import  Axios  from "axios";
import '../App.css';


//https://www.youtube.com/watch?v=rpg1jOvGCtQ&t=2s
//https://www.youtube.com/watch?v=f55qeKGgB_M&t=616s


function Joke(props){

  //destructurare props
  const {propColor , propNr , propText}=props;
  console.log("props are: " , propColor , propNr , propText);

  //----------------------------

const [joke , setJoke]=useState({
    id:"",
    type:"",
    setup:"",
    punchline:""
});

  //----------------------------

const hanleClickJoke=(event) =>{
    //event.preventDefault();
    console.log("you clicked to get a random joke");

    Axios.get("https://official-joke-api.appspot.com/random_joke").then((response) =>{
        console.log("joke response data is : " , response.data);
        console.log(typeof(response.data));
        
        setJoke(response.data);
    })
}

//---------------------------------

  useEffect(() =>{
    //apel functie
    hanleClickJoke();
  } , [])


//--------------------------------
return(<>

  <article style={{border:`1px solid ${propColor}` , padding:'0.5em' , margin:'1em', color:propColor}}>
  <h1 style={{border:`1px solid ${propColor}` , padding:'0.5em' , margin:'1em', color:propColor}}>function component is : {propText}</h1>
  </article>

<button onClick={hanleClickJoke}>click to get another joke</button>

<p>ID: {joke.id}</p>
<p>Type : {joke.type}</p>
<p>Setup : {joke.setup}</p>
<p>Punchline : {joke.punchline}</p>

  </>);

}

export default Joke;
