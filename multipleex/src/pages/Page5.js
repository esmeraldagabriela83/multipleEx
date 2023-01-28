import React from "react";
import '../App.css';


function Page5(props){

  //destructurare props
  const {propColor , propNr , propText}=props;
  console.log("props are: " , propColor , propNr , propText);


return(<>

  <article style={{border:`1px solid ${propColor}` , padding:'0.5em' , margin:'1em', color:propColor}}>
  <h1 style={{border:`1px solid ${propColor}` , padding:'0.5em' , margin:'1em', color:propColor}}>function component is : {propText}</h1>
  </article>

<article className="container bg-success">
  <h1 style={{color:propColor}}>country 5 Page5</h1>

<h2 style={{color:propColor}}>Why do we use it?</h2>

<p style={{color:propColor}}>
5 All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.<br></br> 
It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. <br></br>
The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
</p>
</article>

  </>);

}

export default Page5;
