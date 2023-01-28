import React from "react";
import '../App.css';


function Page1(props){

  //destructurare props
  const {propColor , propNr , propText}=props;
  console.log("props are: " , propColor , propNr , propText);


return(<>

  <article style={{border:`1px solid ${propColor}` , padding:'0.5em' , margin:'1em', color:propColor}}>
  <h1 style={{border:`1px solid ${propColor}` , padding:'0.5em' , margin:'1em', color:propColor}}>function component is : {propText}</h1>
  </article>

<article className="container bg-primary">
  <h1>country 1 Page1</h1>

<h2>Where can I get some?</h2>

<p style={{color:propColor}}>
1 Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text,<br></br> 
and a search for 'lorem ipsum' will uncover many web sites still in their infancy.<br></br>
Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
</p>
</article>

  </>);

}

export default Page1;
