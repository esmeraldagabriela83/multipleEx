import React, {useState, useEffect} from "react";
//import '../App.css';


//https://www.youtube.com/watch?v=4sosXZsdy-s
//https://github.com/bradtraversy/bootstrap-bootcamp-website/blob/main/index.html

function Newsletter(props){

  //destructurare props
   const {propColor , propNr , propText}=props;

return(
  <>
  <article style={{border:`1px solid ${propColor}` , padding:'0.5em' , margin:'1em', color:propColor}}>
  <h1 style={{border:`1px solid ${propColor}` , padding:'0.5em' , margin:'1em', color:propColor}}>function component is : {propText}</h1>
  </article>

<section></section>
  </>
);

}

export default Newsletter;
